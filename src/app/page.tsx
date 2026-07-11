import Hero from "@/Components/Home/Hero";
import HowItWorks from "@/Components/Sections/HowItWorks";
import LatestTuitionPosts from "@/Components/Sections/LatestTuitionPosts.";
import PopularSubjects from "@/Components/Sections/PopularSubjects";
import WhyChooseUs from "@/Components/Sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <PopularSubjects/>
      <LatestTuitionPosts/>
      <WhyChooseUs/>
      <HowItWorks/>
    </div>
  );
}
