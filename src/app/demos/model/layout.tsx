import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIYA — Portfolio",
  description: "Editorial portfolio of hip‑hop street model KIYA. Fashion, music, and culture campaigns.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
