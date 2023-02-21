import React from "react";
import { signIn } from "next-auth/react";

export default function PartnerCta() {
  const authorizeOnTwitter = () => {
    const aa = signIn("twitter");
    console.log("🚀 ~ file: index.page.tsx:7 ~ authorizeOnTwitter ~ aa:", aa)
  };

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
