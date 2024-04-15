import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TitleBar from "./ui/titlebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEBookkeeping",
  description:
    "SEBookkeeping (Self-Employed Bookkeeping) is an application that allows a bookkeeper to manage the accounting of self-employed people",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es">
      <body className={inter.className}>
        <TitleBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
