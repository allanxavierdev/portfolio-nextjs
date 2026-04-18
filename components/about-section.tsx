import { Server, Database, Container, GitBranch, Shield, Cpu } from "lucide-react"
import AnimateOnScroll from '@/components/AnimateOnScroll'

export function AboutSection() {
  return (
    <AnimateOnScroll>
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center font-serif">Sobre mim</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-lg text-pretty">
          Desenvolvedor Full-Stack com mais de 3 anos de experiência em APIs REST, microsserviços e aplicações de alta complexidade.
          Formado em Ciência da Computação pelo UniCEUB, atuo com Python (FastAPI/Django) no backend, Angular e Next.js no frontend,
          PostgreSQL, Docker e integração com Inteligência Artificial (LLMs e RAG).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 bg-card/50 p-6 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
              <Server className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif">Backend & APIs</h3>
            <p className="text-muted-foreground">
              APIs REST e microsserviços com FastAPI e Django, autenticação JWT, Swagger/OpenAPI e arquitetura escalável.
            </p>
          </div>

          <div className="space-y-4 bg-card/50 p-6 rounded-lg border border-border hover:border-accent/40 transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center">
              <Cpu className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif">Frontend & IA</h3>
            <p className="text-muted-foreground">
              Interfaces com Angular, Next.js e React. Integração com LLMs e arquitetura RAG para soluções inteligentes.
            </p>
          </div>

          <div className="space-y-4 bg-card/50 p-6 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
              <Container className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif">DevOps & Dados</h3>
            <p className="text-muted-foreground">
              Conteinerização com Docker, PostgreSQL, modelagem relacional e boas práticas de CI/CD e versionamento.
            </p>
          </div>
        </div>
      </div>
    </section>
    </AnimateOnScroll>
  )
}
