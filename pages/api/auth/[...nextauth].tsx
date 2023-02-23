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
    session: async ({ session, token }: any) => {
      if (session?.user) {
        session.account = token.account;
        session.screenName = token.screenName;
        session.displayName = token.displayName;
        session.user.id = token.uid;
        session.token = token;
        session.oauth_token = token.oauth_token
      }
      return session;
    },
    jwt: async ({ user, account, profile, token }: any) => {
      if (user) {
        token.uid = user.id;
        token.account = account;
        token.screenName = profile.screen_name;
        token.displayName = profile.name;
        token.account = account;
        token.profile = profile;
      }
      if (account?.oauth_token) {
        token.oauth_token = account.oauth_token
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
