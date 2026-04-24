import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunday Mira — Creator",
  description: "Content creator, host, and editor. Work, gear, and how to book Sunday Mira.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
