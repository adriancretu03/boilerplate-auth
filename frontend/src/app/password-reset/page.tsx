import React from "react";
import { PasswordResetForm } from "@/components/forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BP AUTH | Password Reset",
  description: "BP Auth password reset page",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Reset your password</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to receive the link
          </p>
        </div>
        <div className="grid gap-4">
          <PasswordResetForm />
        </div>
      </div>
    </div>
  );
}
