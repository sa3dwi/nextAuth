import React from "react";
import { signIn, useSession } from "next-auth/react";

export default function PartnerCta() {
  const { session, loading } = useSession() as any
  console.log("🚀 ~ file: index.tsx:6 ~ PartnerCta ~ session:", session)

  const authorizeOnTwitter = () => {
    const aa = signIn("twitter");
    console.log("🚀 ~ file: index.page.tsx:7 ~ authorizeOnTwitter ~ aa:", aa)
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <button onClick={() => signIn()}>Sign in with Twitter</button>;
  }

  return (
    <>
      <button
        className="flex items-center justify-between py-2 my-4 btn btn-primary"
        type="button"
        onClick={authorizeOnTwitter}
      >
        {"Sign in with Twitter"}
      </button>
    </>
  );
}
