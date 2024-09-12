"use client";

import { toast } from "react-toastify";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { setAuth } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";

type LoginDataType = {
  email: string;
  password: string;
};

type ErrorType = {
  status?: number | string;
  data?: any;
};

export default function useLogin() {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginDataType) => {
    const { email, password } = data;

    try {
      await login({ email, password }).unwrap();

      dispatch(setAuth());
      toast.success("Login successfully.");
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      let errMessage;

      if (err && typeof err === "object" && "status" in err) {
        const error = err as ErrorType;

        if (error.status === "FETCH_ERROR") {
          errMessage = "Server Error. Please contact the admin.";
        } else if (error.status === 401) {
          errMessage = Object.values(error.data).flat().join("\n");
        } else {
          errMessage = "Failed to login. Please try again.";
        }
        toast.error(errMessage);
      }
    }
  };

  return {
    isLoading,
    onSubmit,
  };
}
