import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

const options: any = {
  providers: [
    // TODO: add the proper keys into env file
    TwitterProvider({
      clientId: "DAnLodnPJCEBaBGJf6gi5qomN",
      clientSecret: "YvdyQbeLio1vdBzCauXVe86RKVyCjcvbxVxPL89xRZ62zBPPQc",
    }),
  ],
  secret: "abcdef",
  callbacks: {
    session: async ({ session, token, account }: any) => {
      if (session?.user) {
        session.user.token = token;
        session.user.account = account;
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    jwt: true,
  },
  debug: true,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
