import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "driver-dashboard/:page*",
  ],
};
