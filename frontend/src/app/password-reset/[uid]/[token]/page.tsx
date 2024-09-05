import Link from "next/link";
import React from "react";
import { PasswordResetConfirmForm } from "@/app/components/forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BP AUTH | Password Reset Confirm",
  description: "BP Auth password reset confirm page",
};

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

export default function Page({ params: { uid, token } }: Props) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="BP Auth"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <PasswordResetConfirmForm uid={uid} token={token} />
      </div>
    </div>
  );
}
