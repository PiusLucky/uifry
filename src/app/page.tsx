import NavBar from "@/components/common/NavBar";
import FaqSection from "@/components/sections/FaqSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FooterSection from "@/components/sections/FooterSection";
import GetStartedSection from "@/components/sections/GetStartedSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-[7rem] md:mt-0 px-4 md:px-[4rem] flex flex-col gap-16 md:gap-[155px]">
        <HeroSection />
        <FeatureSection />
        <WhyChooseUsSection />
        <TestimonialSection />
        <FaqSection />
        <GetStartedSection />
        <FooterSection />
      </div>
    </main>
  );
}
