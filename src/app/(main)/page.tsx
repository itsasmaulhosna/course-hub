import Hero from "@/Components/Home/Hero";
import CTASection from "@/Components/Sections/CTASection";
import FAQSection from "@/Components/Sections/FAQSection";
import FeaturedCourses from "@/Components/Sections/FeaturedCourses";
import HowItWorks from "@/Components/Sections/HowItWorks";
import LatestTuitionPosts from "@/Components/Sections/LatestTuitionPosts.";
import PopularSubjects from "@/Components/Sections/PopularSubjects";
import StudentTestimonials from "@/Components/Sections/StudentTestimonials";
import WhyChooseUs from "@/Components/Sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <PopularSubjects/>
      <LatestTuitionPosts/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <HowItWorks/>
      <StudentTestimonials/>
      <FAQSection/>
      <CTASection/>
    </div>
  );
}
