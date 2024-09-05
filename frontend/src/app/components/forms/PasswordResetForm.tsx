"use client";

import { Form } from "@/app/components/forms";
import { useResetPassword } from "@/app/auth/hooks";

const PasswordResetForm = () => {
  const { email, isLoading, onChange, onSubmit } = useResetPassword();
  const config = [
    {
      labelText: "Email address",
      labelId: "email",
      type: "email",
      value: email,
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

export default PasswordResetForm;
