"use client";

import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type ResetPasswordConfirmDataType = {
  new_password: string;
  re_new_password: string;
};

type ErrorType = {
  status?: number | string;
  data?: any;
};

export default function useResetPasswordConfirm(uid: string, token: string) {
  const [resetPasswordConfirm, { isLoading }] =
    useResetPasswordConfirmMutation();
  const router = useRouter();

  const onSubmit = (data: ResetPasswordConfirmDataType) => {
    const { new_password, re_new_password } = data;

    try {
      resetPasswordConfirm({
        uid,
        token,
        new_password,
        re_new_password,
      }).unwrap();

      toast.success("Password reset successfully");
      router.push("/auth/login/");
    } catch (err) {
      console.log(err);
      let errMessage;

      if (err && typeof err === "object" && "status" in err) {
        const error = err as ErrorType;

        if (error.status === "FETCH_ERROR") {
          errMessage = "Server Error. Please contact the admin.";
        } else if (error.status === 400) {
          errMessage = Object.values(error.data).flat().join("\n");
        } else {
          errMessage = "Failed to reset the password";
        }
        toast.error(errMessage);
      }
    }
  };

  return { isLoading, onSubmit };
}
