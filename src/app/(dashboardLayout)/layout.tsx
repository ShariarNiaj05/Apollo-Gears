import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Gears Dashboard",
  description: "Welcome to Apollo Gears: The Ultimate Ride Sharing Platform",
};

export default function CommonDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
