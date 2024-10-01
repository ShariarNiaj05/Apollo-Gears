import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Gears Dashboard",
  description: "Welcome to Apollo Gears: The Ultimate Ride Sharing Platform",
};

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      User Dashboard Sidebar
      {children}
    </div>
  );
}
