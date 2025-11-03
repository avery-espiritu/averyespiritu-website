import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Company",
    period: "Summer 2024",
    description:
      "Developed full-stack features for a web application serving thousands of users. Collaborated with cross-functional teams to deliver high-quality code.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Teaching Assistant",
    company: "Brown University",
    period: "2023 - Present",
    description:
      "Supporting students in introductory computer science courses. Conducting office hours, grading assignments, and helping students debug code.",
    technologies: ["Python", "Java", "Algorithms", "Data Structures"],
  },
  {
    title: "Research Assistant",
    company: "Brown CS Department",
    period: "Fall 2023",
    description:
      "Contributed to research on ethical AI and algorithmic fairness. Analyzed datasets and implemented machine learning models with fairness constraints.",
    technologies: ["Python", "TensorFlow", "Pandas", "Jupyter"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Experience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software engineering, teaching, and research.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
