import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
// import ExperienceSection from "@/components/sections/Experience";
// import TestimonialsSection from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="relative w-full bg-[#030303] text-[#e4ded7]">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      {/* <TestimonialsSection /> */}
    </div>
  );
}



