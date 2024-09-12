"use client";

import { CustomForm } from "@/components/forms";
import { useResetPassword } from "@/hooks";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const PasswordResetForm = () => {
  const { isLoading, onSubmit } = useResetPassword();

  const formSchema = z.object({
    email: z.string().email("This is not a valid email"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const config = [
    {
      labelText: "Email address",
      labelId: "email",
      type: "email",
      placeholder: "fred@gibscoding.com",
    },
  ];

  const canSubmit: boolean = !!form.watch("email");

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

export default PasswordResetForm;
