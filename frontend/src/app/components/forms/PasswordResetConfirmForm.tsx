"use client";

import { useResetPasswordConfirm } from "@/app/auth/hooks/";
import { Form } from "@/app/components/forms";

type Props = {
  uid: string;
  token: string;
};

const PasswordResetConfirmForm = ({ uid, token }: Props) => {
  const { new_password, re_new_password, isLoading, onChange, onSubmit } =
    useResetPasswordConfirm(uid, token);
  const config = [
    {
      labelText: "New Password",
      labelId: "new_password",
      type: "password",
      value: new_password,
      require: true,
    },
    {
      labelText: "Confirm Password",
      labelId: "re_new_password",
      type: "password",
      value: re_new_password,
      require: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Request password reset"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default PasswordResetConfirmForm;
