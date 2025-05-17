import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-l from-primary-bg  from-35% via-secondary-bg to-teritary-blue">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
