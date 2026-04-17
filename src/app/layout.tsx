import type { Metadata } from "next";
import { ReactQueryProvider } from "@/lib/ReactQueryProvider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

export const metadata = {
  title: "TaskForge - Next.js",
  description: "Next.js implementation of TaskForge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-gray-900 text-gray-100 font-sans")}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
