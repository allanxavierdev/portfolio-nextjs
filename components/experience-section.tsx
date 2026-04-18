"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, GraduationCap, Heart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: "AI Knowledge Assistant (RAG)",
    subtitle: "Projeto Autoral",
    period: "Mar 2026 - Presente",
    icon: Briefcase,
    color: "primary" as const,
    items: [
      "Sistema inteligente de perguntas e respostas baseado em documentos",
      "Pipeline RAG para recuperação e geração de respostas contextuais com LLMs",
      "API backend modular com FastAPI e padrões de microsserviços",
      "Interface web com Angular e banco de dados PostgreSQL via Docker",
      "Stack: Python, FastAPI, LLM APIs, RAG, Docker, PostgreSQL, Angular",
    ],
  },
  {
    title: "CRM Glevo",
    subtitle: "Projeto Autoral",
    period: "2025 - Presente",
    icon: Briefcase,
    color: "accent" as const,
    items: [
      "Sistema web completo de CRM com dashboard interativo e gestão de leads",
      "Arquitetura full-stack com componentes reutilizáveis em React 19 e TypeScript",
      "Integração com Supabase (PostgreSQL) para persistência de dados e autenticação",
      "Quadro Kanban com drag-and-drop, estado global com Zustand e TanStack Query v5",
      "Stack: TypeScript, Next.js, React, Tailwind CSS, Supabase, PostgreSQL, Zustand",
    ],
  },
  {
    title: "App de Gestão Escolar (Natação)",
    subtitle: "TCC — Sistema Web",
    period: "Fev 2023 - Presente",
    icon: GraduationCap,
    color: "primary" as const,
    items: [
      "Sistema em produção para empresas de natação, gerenciando alunos, aulas e rotinas",
      "APIs REST com autenticação JWT, controle de acesso e documentação Swagger/OpenAPI",
      "Modelagem e integração com banco de dados relacional PostgreSQL",
      "Interface com Angular para consumo das APIs construídas",
      "Stack: Python, FastAPI, Django, PostgreSQL, JWT, Swagger, Angular",
    ],
  },
  {
    title: "Designer Digital",
    subtitle: "Automobilismo e Assessoria Jurídica — Social Media & Landing Pages",
    period: "Jan 2025 - Presente",
    icon: Briefcase,
    color: "accent" as const,
    items: [
      "Criação de landing pages com foco em conversão, performance e experiência do usuário",
      "Aplicação de princípios de UX/UI com Figma, Photoshop e Illustrator",
      "Desenvolvimento de identidade visual e presença digital para clientes",
    ],
  },
  {
    title: "Estagiário — Infraestrutura de TI / Suporte Técnico",
    subtitle: "CAPES",
    period: "Fev 2023 - Nov 2023",
    icon: Briefcase,
    color: "primary" as const,
    items: [
      "Suporte técnico a usuários em ambiente corporativo (software e hardware)",
      "Configuração e manutenção de estações de trabalho Windows/Linux",
      "Apoio na gestão de sistemas internos e infraestrutura de TI",
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