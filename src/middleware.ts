export async function middleware() {}

export const config = {
  matcher: [
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "driver-dashboard/:page*",
  ],
};
