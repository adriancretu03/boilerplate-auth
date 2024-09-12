"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { List, Spinner } from "@/components/common";

export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();

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

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  return (
    <section className="size-full">
      <header className="bg-white shadow">
        <div className="mx-auto flex justify-between max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl flex-1 text-center font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl py-4 px-4 my-8 sm:px-6 lg:px-8">
        <List config={config} />
      </div>
    </section>
  );
}
