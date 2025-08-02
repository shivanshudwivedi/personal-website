import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { Achievements } from "@/components/home/achievements";
import { Specials } from "@/components/home/specials";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProjects />
      <SkillsShowcase />
      <Achievements />
      <Specials />
    </div>
  );
}