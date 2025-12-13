"use client";

import { SignOutButton } from "@clerk/nextjs";

export const SignOutForm = () => {
  return (
    <SignOutButton redirectUrl="/sign-in">
      <button
        className="w-full px-1 py-0.5 text-left text-red-500"
        type="button"
      >
        Sign out
      </button>
    </SignOutButton>
  );
};
