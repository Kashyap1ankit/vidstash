import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Securely store, preview & share your videos",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-l from-primary-bg  from-35% via-secondary-bg to-teritary-blue max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 ">
        {children}
      </body>
    </html>
  );
}
