import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function PartnerCta() {
  const session = useSession();
  console.log("🚀 ~ file: index.tsx:6 ~ PartnerCta ~ session:", session);
      console.log("🚀 ~ token:", session?.data.oauth_token);

      if (session?.data.oauth_token) {
            localStorage.setItem('oauth_token', session?.data?.oauth_token)
    }
  
  const handleSignIn = async () => {
    const result = await signIn('twitter')
      console.log("🚀 ~ file: index.tsxaaaa6 ~ PartnerCta ~ result:", result);
  }
  

  return (
    <>
      <button onClick={handleSignIn}>Sign in with Twitter</button>;
      <button
        className="flex items-center justify-between py-2 my-4 btn btn-primary"
        type="button"
        onClick={() => signOut()}
      >
        {"signOut with Twitter"}
      </button>
    </>
  );
}
