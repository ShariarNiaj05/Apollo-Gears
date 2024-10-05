"use client";

import { SidebarWrapper } from "@/app/(dashboardLayout)/components/sidebar/userSidebar";

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper />
      {children}
    </section>
  );
};
