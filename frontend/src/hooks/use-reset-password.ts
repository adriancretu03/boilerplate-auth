"use client";

import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

type PasswordResetType = {
  email: string;
};

type ErrorType = {
  status?: number | string;
  data?: any;
};

export default function useResetPassword() {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit = (data: PasswordResetType) => {
    const { email } = data;
    try {
      resetPassword({ email }).unwrap();

      toast.success("Check your email for reset link");
    } catch (err) {
      let errMessage;

      if (err && typeof err === "object" && "status" in err) {
        const error = err as ErrorType;
        console.log(err);
        if (error.status === "FETCH_ERROR") {
          errMessage = "Server Error. Please contact the admin.";
        } else {
          errMessage = "Failed to register.";
        }
        toast.error(errMessage);
      }
    }
  };

  return { isLoading, onSubmit };
}
