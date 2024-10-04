import nexiosInstance from "@/config/nexios.config";
import { profile } from "console";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ profile, account }: any) {
      if (!profile || !account) {
        return false;
      }
      if (account?.provider === "google") {
        const response = await nexiosInstance.post("/auth/login", {
          name: profile?.name,
          img: profile?.image,
          email: profile?.email,
        });
        return response;
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
});

export { handler as GET, handler as POST };
