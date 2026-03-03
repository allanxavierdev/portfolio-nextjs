"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "xavierfmx2017@gmail.com",
    href: "mailto:xavierfmx2017@gmail.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "allanxavierdev",
    href: "https://www.linkedin.com/in/allanxavierdev",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "allanxavierdev",
    href: "https://github.com/allanxavierdev",
    external: true,
  },
]

export function ContactSection() {
  const root = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!root.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-title",
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

      gsap.fromTo(
        ".contact-item",
        { opacity: 0, y: 20, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
        }
      )

      gsap.fromTo(
        ".contact-cta",
        { opacity: 0, y: 14, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            once: true,
          },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      id="contato"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="contact-title text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">
          Entre em contato
        </h2>

        <p className="contact-title text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Estou disponível para oportunidades como Desenvolvedor Backend. Vamos conversar!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contacts.map((contact) => {
            const Icon = contact.icon
            const isGithub = contact.label === "GitHub"

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className={[
                  "contact-item w-full flex items-center justify-start gap-4",
                  "bg-card/50 p-5 rounded-lg border border-border",
                  "hover:border-primary/40 transition-colors group",
                  // faz o GitHub ficar centralizado quando estiver em 2 colunas (desktop)
                  isGithub ? "sm:col-span-2 sm:justify-self-center sm:max-w-xl" : "",
                ].join(" ")}
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{contact.label}</p>
                  <p className="text-sm font-medium text-foreground">{contact.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="contact-cta mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="mailto:xavierfmx2017@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Enviar email
            </a>
          </Button>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Allan Xavier • Desenvolvedor Backend
          </p>
        </div>
      </div>
    </section>
  )
}