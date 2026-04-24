import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NXRTH — Official Site",
  description: "New album BLUE SMOKE. Tour dates, music, and merch from rapper NXRTH.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
