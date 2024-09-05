import { useVerifyMutation } from "@/redux/features/authApiSlice";
import { setAuth, finishInitialLoad } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

export default function UseVerify() {
  const dispatch = useAppDispatch();

  const [verify] = useVerifyMutation();

  useEffect(() => {
    verify(undefined)
      .unwrap()
      .then(() => {
        dispatch(setAuth());
      })
      .finally(() => {
        dispatch(finishInitialLoad());
      });
  }, []);
}
