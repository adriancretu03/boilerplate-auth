"useClient";

import { toast } from "react-toastify";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";

type RegisterDataType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
};

type ErrorType = {
  status?: number | string;
  data?: any;
};

export default function useRegister() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data: RegisterDataType) => {
    const { first_name, last_name, email, password, re_password } = data;
    try {
      await register({
        first_name,
        last_name,
        email,
        password,
        re_password,
      }).unwrap();

      toast.success("Please check email to verify account");
      router.push("/auth/login/");
    } catch (err) {
      let errMessage;

      if (err && typeof err === "object" && "status" in err) {
        const error = err as ErrorType;
        console.log(err);
        if (error.status === "FETCH_ERROR") {
          errMessage = "Server Error. Please contact the admin.";
        } else if (error.status === 400) {
          errMessage = Object.values(error.data).flat().join("\n");
        } else {
          errMessage = "Failed to register.";
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
