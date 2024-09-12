"use client";

import { useLogin } from "@/hooks";
import { CustomForm } from "@/components/forms";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const { isLoading, onSubmit } = useLogin();

  const formSchema = z.object({
    email: z.string().email("This is not a valid email"),
    password: z.string().min(8, {
      message: "Password must have at least 8 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const config = [
    {
      labelText: "Email",
      labelId: "email",
      type: "email",
      placeholder: "fred@gibscoding.com",
    },
    {
      labelText: "Password",
      labelId: "password",
      type: "password",
      placeholder: "••••••••",
      link: {
        linkText: "Forgot password?",
        linkURL: "/password-reset",
      },
    },
  ];

  const canSubmit: boolean = !!form.watch("email") && !!form.watch("password");

  return (
    <CustomForm
      form={form}
      canSubmit={canSubmit}
      config={config}
      isLoading={isLoading}
      onSubmit={onSubmit}
      btnText="Sign in"
    />
  );
};

export default LoginForm;
