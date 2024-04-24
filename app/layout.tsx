import type { Metadata } from "next";
import type { Children } from "@/libraries/types";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/libraries/contexts/use-theme";
import Radials from "./_components/radials";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Portfolio | Jazztine Cruz",
  description: "Portfolio generated by NextJS and ReactJS",
};

type Props = {
  children: Children;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <main className="primary relative">
            <div className="bg-opacity backdrop-blur-xl h-full">
              <div className="max-w-6xl mx-auto w-full grid gap-8 p-6">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
