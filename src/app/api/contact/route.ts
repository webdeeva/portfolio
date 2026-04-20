import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST /api/contact
 *
 * Sends a contact form submission via Resend.
 *
 * Required environment variables:
 *   RESEND_API_KEY      – from https://resend.com/api-keys
 *   CONTACT_TO_EMAIL    – address that receives inbound messages (defaults to aquariusmaximusiam@gmail.com)
 *   CONTACT_FROM_EMAIL  – verified "from" address in Resend
 *                         (defaults to Resend's shared onboarding@resend.dev which only delivers to your own account email)
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { message: "Message is too long (5000 character max)." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { message: "Email service is not configured. Please try again later." },
      { status: 500 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "aquariusmaximusiam@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Portfolio Contact <onboarding@resend.dev>";

  const safeSubject = subject || `New message from ${name}`;
  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111;">
      <h2 style="margin: 0 0 16px;">New portfolio contact</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${subject ? `<p style="margin: 0 0 8px;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
      <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
      <div style="white-space: pre-wrap; padding: 12px; background: #f5f5f5; border-radius: 8px;">
        ${escapeHtml(message)}
      </div>
    </div>
  `;

  const textBody = [
    `New portfolio contact`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    subject ? `Subject: ${subject}` : null,
    ``,
    `Message:`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${safeSubject}`,
      html: htmlBody,
      text: textBody,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json(
        { message: error.message || "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ id: data?.id ?? null }, { status: 200 });
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return NextResponse.json(
      { message: "Unexpected error sending message." },
      { status: 500 }
    );
  }
}
