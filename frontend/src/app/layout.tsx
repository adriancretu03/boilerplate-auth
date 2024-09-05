import type { Metadata } from "next";
import CustomProvider from "@/redux/provider";
//styles
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Setup } from "./components/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BP Auth",
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
          <div>{children}</div>
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
