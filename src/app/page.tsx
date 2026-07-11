import Hero from "@/Components/Home/Hero";
import PopularSubjects from "@/Components/Sections/PopularSubjects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <PopularSubjects/>
    </div>
  );
}
