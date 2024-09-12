"use client";

import { useResetPasswordConfirm } from "@/hooks";
import { CustomForm } from "@/components/forms";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  uid: string;
  token: string;
};

const PasswordResetConfirmForm = ({ uid, token }: Props) => {
  const { isLoading, onSubmit } = useResetPasswordConfirm(uid, token);

  const formSchema = z
    .object({
      new_password: z
        .string()
        .min(8, { message: "Password must have at least 8 characters" }),
      re_new_password: z
        .string()
        .min(8, { message: "Password must have at least 8 characters" }),
    })
    .superRefine((data, ctx) => {
      if (data.new_password !== data.re_new_password) {
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
      new_password: "",
      re_new_password: "",
    },
  });

  const config = [
    {
      labelText: "New Password",
      labelId: "new_password",
      type: "password",
      placeholder: "••••••••",
    },
    {
      labelText: "Confirm Password",
      labelId: "re_new_password",
      type: "password",
      placeholder: "••••••••",
    },
  ];

  const canSubmit: boolean =
    !!form.watch("new_password") && !!form.watch("re_new_password");

  return (
    <CustomForm
      form={form}
      canSubmit={canSubmit}
      config={config}
      isLoading={isLoading}
      onSubmit={onSubmit}
      btnText="Reset password"
    />
  );
};

export default PasswordResetConfirmForm;
