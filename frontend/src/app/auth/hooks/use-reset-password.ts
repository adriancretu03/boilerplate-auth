import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

export default function useResetPassword() {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const router = useRouter();
  const [email, setEmail] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetPassword({ email })
      .unwrap()
      .then(() => {
        toast.success("Check your email for reset link");
        router.push("/auth/login/");
      })
      .catch(() => {
        toast.error("Failed to sent request");
      });
  };

  return { email, isLoading, onChange, onSubmit };
}
