"use client";

import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import React from "react";
import { Spinner } from "../common";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

const RequireAuth = ({ children }: Props) => {
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect("/auth/login");
  }
  return <>{children}</>;
};

export default RequireAuth;
