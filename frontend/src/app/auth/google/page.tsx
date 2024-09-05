"use client";

import { useSocialAuthenticateMutation } from "@/redux/features/authApiSlice";
import React from "react";
import { useSocialAuth } from "../hooks";
import { Spinner } from "@/app/components/common";

export default function Page() {
  const [googleAuthenticate] = useSocialAuthenticateMutation();
  useSocialAuth(googleAuthenticate, "google-oauth2");
  return (
    <div className="my-8">
      <Spinner lg />
    </div>
  );
}
