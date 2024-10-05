/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "./helpers/jwtHelpers";

const authRoutes = ["/login", "/register"];
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // role based authorization
  let decodedToken = null;

  decodedToken = jwtVerify(accessToken) as any;

  console.log("decodedToken", decodedToken);
  const { role } = decodedToken;
  console.log(role, "role");
  console.log(pathname, "pathname");
  if (role === "admin" && pathname === "/admin-dashboard") {
    return NextResponse.next();
  }

  if (role === "driver" && pathname === "/driver-dashboard") {
    return NextResponse.next();
  }
  if (role === "user" && pathname === "/dashboard") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
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
