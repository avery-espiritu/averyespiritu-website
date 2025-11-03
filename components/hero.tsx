import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TypingText } from "@/components/typing-text"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Hi!
                I'm Avery!
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
                <TypingText 
                  texts={[
                    "I love solving a good puzzle.",
                    "I want to make a positive impact in the world.",
                    "I'm passionate about technology and social impact."
                  ]}
                  typingSpeed={50}
                  deletingSpeed={30}
                  pauseTime={2000}
                />
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
                I'm a Junior at Brown University studying Computer Science.
              </p>
              <p className="text-md sm:text-sm text-muted-foreground text-pretty leading-relaxed">
                "If I can go into any role I am put in and positively impact even one person through that role, that experience will be worth more than anything else."
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/avery-espiritu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/averyespiritu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:avery_espiritu@brown.edu" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://drive.google.com/file/d/1qMCYzGeCv2umGK9MDc0JOYivgaMD41-w/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                  <FileText className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-100 h-100 sm:w-100 sm:h-100 lg:w-140 lg:h-140">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl rotate-6"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <Image src="/avery-espiritu-photo.jpg" alt="Photo of me!" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
