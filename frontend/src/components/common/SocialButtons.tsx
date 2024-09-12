"use client";

import { ImFacebook, ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  continueWithFacebook,
  continueWithGithub,
  continueWithGoogle,
} from "@/utils";

const SocialButtons = () => {
  return (
    <>
      <Button variant="outline" onClick={continueWithGoogle}>
        <FcGoogle className="mr-3" /> Sign in with Google
      </Button>
      <Button variant="outline" onClick={continueWithFacebook}>
        <ImFacebook className="mr-3 text-[#1877F2]" /> Sign in with Facebook
      </Button>
      <Button variant="outline" onClick={continueWithGithub}>
        <ImGithub className="mr-3" /> Sign in with Github
      </Button>
    </>
  );
};

export default SocialButtons;
