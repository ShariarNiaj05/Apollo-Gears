import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apollo Gears Sidebar",
  description: "Welcome to Apollo Gears: The Ultimate Ride Sharing Platform",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      sidebar
      {children}
    </div>
  );
}
