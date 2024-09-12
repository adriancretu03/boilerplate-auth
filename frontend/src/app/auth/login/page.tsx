import React from "react";
import { LoginForm } from "@/components/forms";
import { Metadata } from "next";
import { SocialButtons } from "@/components/common";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BP AUTH | LOGIN",
  description: "Bp Auth login page",
};

export default function Page() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <LoginForm />
            <div className="flex items-center">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <SocialButtons />
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className={buttonVariants({ variant: "link" })}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-white lg:block">
        <Image
          src="/join.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full m-auto dark:brightness-[0.2] dark:grayscale"
          priority
        />
      </div>
    </div>
  );
}
