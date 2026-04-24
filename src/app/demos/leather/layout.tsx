import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAISON ORO — Leather Atelier",
  description: "Small-batch leather outerwear, handcrafted in Florence. F/W26 collection now available.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
