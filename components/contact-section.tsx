import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "xavierfmx2017@gmail.com",
    href: "mailto:xavierfmx2017@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 61 98262-0588",
    href: "tel:+5561982620588",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Allan Xavier",
    href: "https://linkedin.com/in/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Allan Xavier",
    href: "https://github.com/",
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">Entre em contato</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Estou disponivel para oportunidades como Desenvolvedor Backend. Vamos conversar!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card/50 p-5 rounded-lg border border-border hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
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

        <div className="mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="mailto:xavierfmx2017@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Enviar email
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Allan Farias de Moura Xavier - Desenvolvedor Backend
          </p>
        </div>
      </div>
    </section>
  )
}
