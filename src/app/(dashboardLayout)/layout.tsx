import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Welcome to Apollo Gears: The Ultimate Ride Sharing Platform",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
