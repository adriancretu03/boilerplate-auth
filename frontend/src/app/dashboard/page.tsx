"use client";

import React from "react";
import { List, Spinner } from "@/app/components/common";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Page() {
  const { data: user, isLoading, isError } = useRetrieveUserQuery();
  const router = useRouter();
  const config = [
    {
      label: "First Name",
      value: user?.first_name,
    },
    {
      label: "Last Name",
      value: user?.last_name,
    },
    {
      label: "Email",
      value: user?.email,
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-centre my-8">
        <Spinner></Spinner>
      </div>
    );
  }

  if (isError) {
    router.push("/auth/login");
    toast.error("Please login");
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <List config={config}></List>
      </main>
    </>
  );
}
