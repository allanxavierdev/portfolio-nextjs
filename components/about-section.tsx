import { Server, Database, Container, GitBranch, Shield, Cpu } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center font-serif">Sobre mim</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-lg text-pretty">
          Desenvolvedor Backend com foco na construção de APIs REST escaláveis e arquiteturas modernas. 
          Experiência prática com Python (FastAPI e Django), modelagem de banco de dados relacional com PostgreSQL e conteinerização com Docker.
          Busco atuar no desenvolvimento de sistemas robustos, aplicando boas práticas de arquitetura, versionamento e integração contínua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 bg-card/50 p-6 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
              <Server className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif">APIs REST</h3>
            <p className="text-muted-foreground">
              Construção de APIs REST escaláveis com FastAPI e Django, autenticação JWT e documentação com Swagger/OpenAPI.
            </p>
          </div>

          <div className="space-y-4 bg-card/50 p-6 rounded-lg border border-border hover:border-accent/40 transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center">
              <Database className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif">Banco de Dados</h3>
            <p className="text-muted-foreground">
              Modelagem e persistência de dados com PostgreSQL, MySQL e MongoDB, com foco em integridade e performance.
            </p>
          </div>

          <div className="space-y-4 bg-card/50 p-6 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
              <Container className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif">DevOps</h3>
            <p className="text-muted-foreground">
              Conteinerização com Docker, deploy em ambientes AWS e integração contínua com pipelines CI/CD.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
