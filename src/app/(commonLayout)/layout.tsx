import type { Metadata } from "next";
import NavBar from "./components/pages/shared/Navnar";

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
      <NavBar />
      {children}
    </div>
  );
}
