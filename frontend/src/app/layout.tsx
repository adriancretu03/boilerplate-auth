import type { Metadata } from "next";
import CustomProvider from "@/redux/provider";
//styles
import "@/styles/globals.css";

// components
import { Footer } from "@/components/common";
import { Setup } from "@/components/utils";

export const metadata: Metadata = {
  title: "BP Auth | ",
  description: "Auth application that provides jwt authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <CustomProvider>
          <Setup />
          <main className="flex-1 flex justify-center items-center ">
            {children}
          </main>
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
