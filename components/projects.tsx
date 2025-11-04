import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Community Resource Platform",
    description:
      "A web application connecting underserved communities with local resources. Built with accessibility and inclusivity as core principles.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/community-platform-interface.png",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive tool for visualizing sorting and graph algorithms. Created as a teaching resource for CS students.",
    technologies: ["React", "TypeScript", "D3.js", "Vite"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/algorithm-visualization-dashboard.jpg",
  },
  {
    title: "Bias Detection Tool",
    description:
      "Machine learning model to detect potential bias in text datasets. Research project focused on ethical AI development.",
    technologies: ["Python", "scikit-learn", "Flask", "React"],
    github: "https://github.com",
    image: "/data-analysis-dashboard.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Projects</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A selection of projects that showcase my technical skills and commitment to meaningful software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
