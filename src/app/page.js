export const dynamic = "force-static"

import Community from "@/components/Community";
import Details from "@/components/Details";
import Experience from "@/components/Experiance";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Offerings from "@/components/Offerings";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navigation />
      <Hero />
      <Experience />
      <Offerings />
      <Community />
      <Details />
      <Footer />
    </div>
  );
}
