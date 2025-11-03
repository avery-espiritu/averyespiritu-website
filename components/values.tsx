import { Card } from "@/components/ui/card"
import { Heart, Shield, Users2, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Human-Centered Design",
    description: "Building technology that prioritizes user needs, accessibility, and inclusive design principles.",
  },
  {
    icon: Shield,
    title: "Ethical Computing",
    description: "Considering the social impact of technology and advocating for responsible AI and data practices.",
  },
  {
    icon: Users2,
    title: "Community Impact",
    description: "Creating solutions that address real-world problems and benefit underserved communities.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Staying curious about new technologies while sharing knowledge through teaching and mentorship.",
  },
]

export function Values() {
  return (
    <section id="values" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Values & Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe technology should be a force for good. My approach to software engineering is guided by
              principles of social responsibility, ethical computing, and a commitment to creating inclusive, accessible
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
