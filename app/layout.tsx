import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Vidstash",
  description: "Securely store, preview & share your videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <main className="bg-gradient-to-l from-primary-bg from-35% via-secondary-bg to-teritary-bg min-w-full min-h-screen">
            {children}
          </main>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
