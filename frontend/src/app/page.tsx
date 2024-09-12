import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BP AUTH | Home",
  description: "BP Auth home page",
};
export default function Page() {
  return (
    <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-36">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Boilerplate authentication system for future and more complex projects
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This application is built with JWT authentication, utilizing Next.js
          for the frontend and Django for the backend. <br></br>
          Credentials are securely stored in HttpOnly cookies to enhance
          security.
          <br />
          Styling is implemented by using shadcn/ui components.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/auth/login"
            className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          >
            Login to your account
          </Link>
          <Link
            href="/auth/register"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Or create a new one <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
