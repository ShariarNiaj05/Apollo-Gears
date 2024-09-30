import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Welcome to Apollo Gears: The Ultimate Ride Sharing Platform",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Comon Navbar
      {children}
    </div>
  );
}
