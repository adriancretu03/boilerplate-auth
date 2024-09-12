"use client";

import { useEffect } from "react";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/common";

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

type ErrorType = {
  status?: number | string;
  data?: any;
};

export default function Page({ params }: Props) {
  const [activation] = useActivationMutation();
  const router = useRouter();

  useEffect(() => {
    const { uid, token } = params;

    activation({ uid, token })
      .unwrap()
      .then(() => {
        toast.success("Account activated");
      })
      .catch((err) => {
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
      })
      .finally(() => {
        router.push("/auth/login");
      });
  }, []);

  return (
    <div className="grid place-items-center">
      <Spinner xl />
    </div>
  );
}
