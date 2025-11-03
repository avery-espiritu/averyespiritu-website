import { Card } from "@/components/ui/card"
import { GraduationCap, Code, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Hello! I&apos;m a current junior studying Computer Science from New Jersey. Outside of classes, I&apos;m heavily involved in student theater, and am the co-chair of Musical Forum. I also currently work as a Bruno Fellow and a Tour Guide! In my free time, I love to sing, play games, get food with friends, and watch Survivor!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Student</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pursuing Computer Science at Brown University, exploring algorithms, systems, and human-computer
                interaction.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building full-stack applications with modern technologies, focusing on clean code and user experience.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Teaching Assistant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Helping students learn programming fundamentals and develop problem-solving skills in computer science
                courses.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
