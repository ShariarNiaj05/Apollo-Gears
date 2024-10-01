import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Gears Dashboard",
  description: "Welcome to Apollo Gears: The Ultimate Ride Sharing Platform",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Dashboard Common Navbar
      {children}
    </div>
  );
}
