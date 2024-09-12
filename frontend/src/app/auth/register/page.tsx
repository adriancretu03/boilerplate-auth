import Link from "next/link";
import React from "react";
import { RegisterForm } from "@/components/forms";
import { Metadata } from "next";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BP AUTH | REGISTER",
  description: "Bp Auth register page",
};

export default function Page() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden bg-white lg:block">
        <Image
          src="/sign.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full m-auto dark:brightness-[0.2] dark:grayscale"
          priority
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <div className="grid gap-4">
            <RegisterForm />
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className={buttonVariants({ variant: "link" })}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
