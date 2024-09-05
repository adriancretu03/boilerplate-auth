import type { Metadata } from "next";
import CustomProvider from "@/redux/provider";
//styles
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// components
import { Navbar } from "@/app/components/common";
import { Footer } from "@/app/components/common";
import { Setup } from "@/app/components/utils";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          <Setup />
          <Navbar />
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
            {children}
          </div>
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
