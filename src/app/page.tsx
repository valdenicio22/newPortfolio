
import { Experience } from "@/components/pages/home/Experience";

import { HighlightedProject } from "@/components/pages/home/HighlightedProject";
import { HeroSection } from "../components/pages/home/HeroSection";

export default function Home() {
  return <>
    <HeroSection />
    <Experience />
    <HighlightedProject />
  </>
}
