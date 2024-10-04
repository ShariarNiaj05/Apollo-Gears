import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathName } = request.nextUrl;
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "driver-dashboard/:page*",
  ],
};
