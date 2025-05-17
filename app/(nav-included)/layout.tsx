import Navbar from "@/components/navbar";

export default function NavIncludedRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-l from-primary-bg from-35% via-secondary-bg to-teritary-blue min-w-full">
      <Navbar />
      {children}
    </div>
  );
}
