"use client";

import { ImGoogle, ImFacebook, ImGithub } from "react-icons/im";
import React from "react";
import { SocialButton } from "@/app/components/common";
import {
  continueWithFacebook,
  continueWithGithub,
  continueWithGoogle,
} from "@/utils";

const SocialButtons = () => {
  return (
    <div className="flex justify-between items-center gap-2 mt-5">
      <SocialButton provider="google" onClick={continueWithGoogle}>
        <ImGoogle className="mr-3" /> Google
      </SocialButton>
      <SocialButton provider="facebook" onClick={continueWithFacebook}>
        <ImFacebook className="mr-3" /> Facebook
      </SocialButton>
      <SocialButton provider="github" onClick={continueWithGithub}>
        <ImGithub className="mr-3" /> Github
      </SocialButton>
    </div>
  );
};

export default SocialButtons;
