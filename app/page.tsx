import { Navigation } from "@/components/navigation"
import { FloatingShapes } from "@/components/floating-shapes"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating geometric shapes */}
      <FloatingShapes />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}
