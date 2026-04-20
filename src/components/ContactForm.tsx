"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot – if a bot fills it, silently pretend success.
    const honeypot = formData.get("company");
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMessage("Name, email, and message are required.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as {
          message?: string;
        };
        throw new Error(body.message ?? `Request failed (${res.status})`);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            disabled={isSending}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-pink-400/60 focus:outline-none focus:ring-2 focus:ring-pink-400/30 disabled:opacity-60"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            disabled={isSending}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-pink-400/60 focus:outline-none focus:ring-2 focus:ring-pink-400/30 disabled:opacity-60"
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Subject">
        <input
          type="text"
          name="subject"
          disabled={isSending}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-pink-400/60 focus:outline-none focus:ring-2 focus:ring-pink-400/30 disabled:opacity-60"
          placeholder="What's this about?"
        />
      </Field>

      <Field label="Message" required>
        <textarea
          name="message"
          required
          rows={5}
          disabled={isSending}
          className="w-full resize-y rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-pink-400/60 focus:outline-none focus:ring-2 focus:ring-pink-400/30 disabled:opacity-60"
          placeholder="Tell me a bit about your product, where it is today, and what you'd like help with."
        />
      </Field>

      {/* Honeypot field – hidden from humans, bots tend to fill it */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_32px_rgba(244,114,182,0.9)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "Sending…" : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-xs text-emerald-300">
            Message sent. I&rsquo;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-rose-300">
            {errorMessage || "Something went wrong. Please try again."}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-xs font-medium text-zinc-300">
      <span className="mb-1 inline-flex items-center gap-1">
        {label}
        {required && <span className="text-pink-400">*</span>}
      </span>
      {children}
    </label>
  );
}
