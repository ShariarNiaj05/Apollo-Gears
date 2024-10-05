"use client";

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return <section className="flex">{children}</section>;
};
