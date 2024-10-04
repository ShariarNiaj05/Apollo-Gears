import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathName } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value();
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
