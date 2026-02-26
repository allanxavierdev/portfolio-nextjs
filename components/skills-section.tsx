const skills = [
  { name: "Python", level: 80 },
  { name: "FastAPI", level: 70 },
  { name: "Django", level: 70 },
  { name: "REST APIs", level: 80 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker", level: 65 },
  { name: "Git & GitHub", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "Node.js", level: 65 },
  { name: "CI/CD", level: 70 },
  { name: "HTML/CSS", level: 70 },
  { name: "AWS", level: 60 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center font-serif">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
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
