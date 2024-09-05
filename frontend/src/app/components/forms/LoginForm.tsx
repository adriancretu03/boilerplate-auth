"use client";

import React from "react";
import { Form } from "@/app/components/forms";
import { useLogin } from "@/app/auth/hooks";

const LoginForm = () => {
  const { email, password, isLoading, onSubmit, onChange } = useLogin();

  const config = [
    {
      labelText: "Email",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "Password",
      labelId: "password",
      type: "password",
      value: password,
      required: true,
      link: {
        linkText: "Forgot password?",
        linkURL: "/auth/reset-password",
      },
    },
  ];
  return (
    <Form
      config={config}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onChange={onChange}
      btnText="Log In"
    ></Form>
  );
};

export default LoginForm;
