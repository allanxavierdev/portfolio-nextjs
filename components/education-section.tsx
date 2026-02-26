import { GraduationCap, BookOpen } from "lucide-react"

export function EducationSection() {
  return (
    <section id="formacao" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center font-serif">Formacao</h2>

        <div className="space-y-8">
          {/* Main degree */}
          <div className="bg-card/50 p-6 rounded-lg border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Bacharelado em Ciencia da Computacao</h3>
                <p className="text-sm text-accent font-mono">Fev 2022 - Dez 2025</p>
              </div>
            </div>
          </div>

          {/* Complementary courses */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" />
              Cursos Complementares
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Programacao Avancada em Python e JavaScript", source: "Udemy", period: "Nov 2022 - Jan 2023" },
                { name: "Desenvolvimento com React.js", source: "Udemy", period: "Fev 2024 - Mai 2024" },
                { name: "Backend com Node.js", source: "Udemy", period: "Jan 2025 - Jul 2025" },
                { name: "Ingles Intermediario", source: "", period: "Jan 2017 - Mai 2020" },
              ].map((course) => (
                <div key={course.name} className="bg-card/50 p-4 rounded-lg border border-border">
                  <h4 className="text-sm font-medium text-foreground">{course.name}</h4>
                  {course.source && <p className="text-xs text-accent">{course.source}</p>}
                  <p className="text-xs text-muted-foreground font-mono mt-1">{course.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
