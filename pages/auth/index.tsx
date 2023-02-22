import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function PartnerCta() {
  const session = useSession();
  console.log("🚀 ~ file: index.tsx:6 ~ PartnerCta ~ session:", session);

  return (
    <>
      <button onClick={() => signIn("twitter")}>Sign in with Twitter</button>;
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
