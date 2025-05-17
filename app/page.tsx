"use client";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return (
    <div>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div>Hello world</div>
      </main>
    </div>
  );
}
