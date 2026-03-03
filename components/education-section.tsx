"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, BookOpen } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function EducationSection() {
  const root = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!root.current) return

    const ctx = gsap.context(() => {
      // Título
      gsap.fromTo(
        ".edu-title",
        { opacity: 0, y: 18, filter: "blur(6px)" },
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

      // Cards
      gsap.fromTo(
        ".edu-card",
        { opacity: 0, y: 22, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="formacao" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="edu-title text-3xl sm:text-4xl font-bold text-center mb-12 font-serif">
          Formação
        </h2>

        <div className="space-y-10">
          {/* Graduação */}
          <div className="edu-card bg-card/50 border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary border border-primary/30">
                <GraduationCap className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Bacharelado em Ciência da Computação
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Fev 2022 – Dez 2025
                </p>
              </div>
            </div>
          </div>

          {/* Cursos */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold">Cursos Complementares</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Programação Avançada em Python e JavaScript",
                  period: "Nov 2022 – Jan 2023",
                },
                {
                  title: "Desenvolvimento com React.js",
                  period: "Fev 2024 – Mai 2024",
                },
                {
                  title: "Backend com Node.js",
                  period: "Jan 2025 – Jul 2025",
                },
                {
                  title: "Inglês Intermediário",
                  period: "Jan 2017 – Mai 2020",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="edu-card bg-card/50 border border-border rounded-lg p-5 hover:border-accent/40 transition-colors"
                >
                  <h4 className="font-medium">{course.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {course.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}