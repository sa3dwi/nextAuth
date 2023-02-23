import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function PartnerCta() {
  const session = useSession();
  console.log("🚀 ~ file: index.tsx:6 ~ PartnerCta ~ session:", session);

  const handleSignIn = async () => {
    const result = await signIn('twitter')
    
    if (result?.accessToken) {
      // Save the access token to localStorage
      localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('oauth_token', result.oauth_token)
    }
  }
  
  if (result?.accessToken) {
      // Save the access token to localStorage
      localStorage.setItem('accessToken', result.accessToken)
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
