import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathName } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  matcher: [
    // "/login",
    // "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "/driver-dashboard/:page*",
  ],
};
