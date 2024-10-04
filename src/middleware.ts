import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login", "/register"];
export async function middleware(request: NextRequest) {
  const { pathName } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    if (authRoutes.includes(pathName)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // role based authorization
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "/driver-dashboard/:page*",
  ],
};
