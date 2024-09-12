"use client";

import { useRegister } from "@/hooks";
import { CustomForm } from "@/components/forms";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
  const { isLoading, onSubmit } = useRegister();

  const formSchema = z
    .object({
      first_name: z.string().min(3, {
        message: "Name must have at least 3 characters",
      }),
      last_name: z.string().min(3, {
        message: "Name must have at least 3 characters",
      }),
      email: z.string().email("This is not a valid email"),
      password: z
        .string()
        .min(8, { message: "Password must have at least 8 characters" }),
      re_password: z
        .string()
        .min(8, { message: "Password must have at least 8 characters" }),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.re_password) {
        ctx.addIssue({
          code: "custom",
          message: "Passwords do not match",
          path: ["re_password"],
        });
      }
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
    },
  });

  const config = [
    {
      labelText: "First Name",
      labelId: "first_name",
      type: "text",
      placeholder: "Fred",
    },
    {
      labelText: "Last Name",
      labelId: "last_name",
      type: "text",
      placeholder: "Gibson",
    },
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
    },
    {
      labelText: "Confirm Password",
      labelId: "re_password",
      type: "password",
      placeholder: "••••••••",
    },
  ];

  const canSubmit: boolean =
    !!form.watch("first_name") &&
    !!form.watch("last_name") &&
    !!form.watch("email") &&
    !!form.watch("password") &&
    !!form.watch("re_password");

  return (
    <CustomForm
      form={form}
      canSubmit={canSubmit}
      config={config}
      isLoading={isLoading}
      onSubmit={onSubmit}
      btnText="Sign up"
    />
  );
};

export default RegisterForm;
