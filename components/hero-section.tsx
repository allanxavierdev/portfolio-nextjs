"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <p className="text-accent text-lg font-medium">Olá, o meu nome é</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance font-serif">
              <span className="text-foreground">Allan</span> <span className="text-primary">Xavier</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium font-serif">
              Desenvolvedor Backend 
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              Python • FastAPI • Django • PostgreSQL • Docker
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Desenvolvedor Backend formado em Ciencia da Computacao, com foco na construcao de APIs REST
            escalaveis e aplicacoes web modernas. Experiencia com Python, FastAPI, Django, PostgreSQL e Docker.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow" asChild>
              <a href="#projetos">
                Conheça meus projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              asChild
            >
              <a href="#contato">Entre em contato</a>
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Profile image container - subtle hover animation only */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float-subtle">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/allan.jpg"
                  alt="Allan Xavier - Desenvolvedor Backend"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Code symbols floating around */}
            <div className="absolute -top-6 -left-6 text-primary animate-float">
              <Code className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-4 -right-4 text-accent animate-float-slow">
              <div className="text-2xl font-mono">{`</>`}</div>
            </div>
            <div className="absolute top-4 -right-8 text-primary/70 animate-float">
              <div className="text-xl font-mono">{`{}`}</div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -right-2 w-6 h-6 bg-accent/40 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
