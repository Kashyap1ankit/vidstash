import Hero from "@/components/landing/herp-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-28 ">
        <Hero />
      </div>
    </div>
  );
}
