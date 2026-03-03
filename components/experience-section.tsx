"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, GraduationCap, Heart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: "Desenvolvedor Backend",
    subtitle: "Projetos Academicos e Autorais",
    period: "Fev 2023 - Presente",
    icon: Briefcase,
    color: "primary" as const,
    items: [
      "Desenvolvimento de APIs REST com FastAPI e Django",
      "Implementacao de autenticacao JWT e controle de acesso",
      "Modelagem de banco de dados PostgreSQL com foco em integridade e performance",
      "Containerizacao com Docker para padronizacao de ambiente",
      "Documentacao de APIs com Swagger/OpenAPI",
    ],
  },
  {
    title: "App de Gestao Escolar (Natacao)",
    subtitle: "Projeto Academico",
    period: "Jul 2025 - Dez 2025",
    icon: GraduationCap,
    color: "accent" as const,
    items: [
      "Sistema completo de gestao escolar",
      "APIs REST para agendamento de aulas, gestao de usuarios e controle financeiro",
      "Integracao com banco de dados relacional e autenticacao JWT",
      "Stack: Python, FastAPI/Django, PostgreSQL, JWT, Swagger",
    ],
  },
  {
    title: "Desenvolvedor Backend - Projeto SaaS",
    subtitle: "Projeto Autoral",
    period: "Jul 2025 - Dez 2025",
    icon: Briefcase,
    color: "primary" as const,
    items: [
      "Desenvolvimento de API REST com FastAPI",
      "Deploy na AWS com Dockerização",
      "Integração com PostgreSQL e arquitetura modular",
    ],
  },
  {
    title: "Estagiário - CAPES",
    subtitle: "Estágio",
    period: "Jun 2023 - Nov 2023",
    icon: Briefcase,
    color: "accent" as const,
    items: [
      "Apoio em rotinas administrativas e acompanhamento de processos internos",
      "Funcionalidade em Infraestrutura",
      "Desenvolvimento de habilidades organizacionais e trabalho em equipe",
    ],
  },
  {
    title: "Instrutor Voluntário - Inclusão Digital para Idosos",
    subtitle: "Voluntariado",
    period: "Fev 2022 - Mai 2022",
    icon: Heart,
    color: "primary" as const,
    items: [
      "Ensino de fundamentos de informática básica",
      "Apoio individual para resolução de dúvidas técnicas",
      "Contribuição para inclusão digital e autonomia dos participantes",
    ],
  },
]

export function ExperienceSection() {
  const root = useRef<HTMLElement | null>(null)
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!root.current) return

    const ctx = gsap.context(() => {
      // Título
      gsap.fromTo(
        ".exp-title",
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

      // Cards (stagger)
      gsap.fromTo(
        ".exp-item",
        { opacity: 0, y: 22, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            once: true,
          },
        }
      )

      // Linha da timeline desenhando
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 80%",
              end: "bottom 25%",
              scrub: 0.6,
            },
          }
        )
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="exp-title text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center font-serif">
          Experiência
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block origin-top scale-y-0 will-change-transform"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const colorClasses =
                exp.color === "primary"
                  ? "bg-primary/20 text-primary border-primary/30"
                  : "bg-accent/20 text-accent border-accent/30"

              return (
                <div key={index} className="exp-item relative flex gap-6">
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:flex flex-shrink-0 w-12 h-12 rounded-lg items-center justify-center border ${colorClasses}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card/50 p-6 rounded-lg border border-border hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                      </div>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}