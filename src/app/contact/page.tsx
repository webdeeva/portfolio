import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – Aquarius Maximus",
  description:
    "Get in touch with Aquarius Maximus for collaborations, advisory, and hands-on engineering work.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.16),_transparent_55%)]" />

      <header className="sticky top-0 z-20 border-b border-zinc-800/60 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-purple-500 shadow-[0_0_26px_rgba(244,114,182,0.9)]" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-zinc-200">
                Aquarius Maximus
              </p>
              <p className="text-[11px] text-zinc-500">
                Full‑Stack Engineer · Web, Mobile &amp; AI
              </p>
            </div>
          </Link>

          <nav className="hidden gap-6 text-xs font-medium text-zinc-400 sm:flex">
            <Link href="/#projects" className="hover:text-pink-300">
              Web
            </Link>
            <Link href="/#mobile" className="hover:text-pink-300">
              Mobile
            </Link>
            <Link href="/#stack" className="hover:text-pink-300">
              Stack
            </Link>
            <Link href="/#about" className="hover:text-pink-300">
              About
            </Link>
            <Link href="/contact" className="text-pink-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
            CONTACT
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-zinc-50">
            Let&rsquo;s build something.
          </h1>
          <p className="mt-3 text-sm md:text-base text-zinc-400">
            Tell me about your product, where it is today, and what you&rsquo;d
            like help with. I read every message and reply personally.
          </p>
        </div>

        <ContactForm />

        <p className="mt-8 text-xs text-zinc-500">
          Prefer email?{" "}
          <a
            href="mailto:aquariusmaximusiam@gmail.com"
            className="text-pink-300 hover:text-pink-200"
          >
            aquariusmaximusiam@gmail.com
          </a>
        </p>
      </main>
    </div>
  );
}
