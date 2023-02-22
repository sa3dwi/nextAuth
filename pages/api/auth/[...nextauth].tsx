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
    session: async ({ session, account, profile, token }: any) => {
      if (session?.user) {
        session.token = token;
        session.account = account;
        session.screenName = profile.screen_name;
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, account, profile, token }: any) => {
      if (user) {
        token.uid = user.id;
        // token.account = account;
        // token.screenName = profile.screen_name;
        // token.displayName = profile.name;
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
