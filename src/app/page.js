import Image from "next/image";
import HeroSection from "./components/HeroSection";
  
export default function Home() {
  return (
    <div className=" h-screen ml-14 mr-14 mt-5 bg-white shadow-lg">
      <HeroSection />
    </div>
  );
}
