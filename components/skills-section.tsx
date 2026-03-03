"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: "Python", level: 75 },
  { name: "FastAPI", level: 65 },
  { name: "Django", level: 60 },
  { name: "REST APIs", level: 65 },
  { name: "PostgreSQL", level: 70 },
  { name: "Docker", level: 65 },
  { name: "Git & GitHub", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "Node.js", level: 65 },
  { name: "CI/CD", level: 70 },
  { name: "HTML/CSS", level: 70 },
  { name: "AWS", level: 60 },
]

export function SkillsSection() {
  const root = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!root.current) return

    const ctx = gsap.context(() => {
      // Título animando
      gsap.fromTo(
        ".skills-title",
        { opacity: 0, y: 20, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            once: true,
          },
        }
      )

      // Barras crescendo
      gsap.fromTo(
        ".skill-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.1,
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
        }
      )

      // Contador animado correto
      gsap.utils.toArray<HTMLElement>(".skill-percent").forEach((el) => {
        const finalValue = Number(el.dataset.value || "0")
        const obj = { val: 0 }

        gsap.to(obj, {
          val: finalValue,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString()
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="skills-title text-3xl sm:text-4xl font-bold text-center mb-12 font-serif">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2 text-sm font-medium">
                <span>{skill.name}</span>

                <span className="text-muted-foreground tabular-nums">
                  <span
                    className="skill-percent tabular-nums"
                    data-value={skill.level}
                  >
                    0
                  </span>
                  %
                </span>
              </div>

              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}