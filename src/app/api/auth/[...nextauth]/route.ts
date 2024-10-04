/* eslint-disable @typescript-eslint/no-explicit-any */

import NextAuth from "next-auth";

const handler = NextAuth();

export { handler as GET, handler as POST };
