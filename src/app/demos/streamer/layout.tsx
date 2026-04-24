import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VYPR — Live Streamer",
  description: "Streamer VYPR — live schedule, highlights, battlestation specs, and member perks.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
