"use client";
import { Navbar } from "@/components/common";
import { RequireAuth } from "@/components/utils";
import { useVerify } from "@/hooks";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  useVerify();
  return <RequireAuth>{children}</RequireAuth>;
};

export default layout;
