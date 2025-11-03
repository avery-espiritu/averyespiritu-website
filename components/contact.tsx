import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, FileText } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Let&apos;s Connect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I&apos;m always interested in discussing new opportunities, collaborations, or just chatting about technology
              and social impact. Feel free to reach out!
            </p>
          </div>

          <Card className="p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="outline" size="lg" asChild className="justify-start bg-transparent">
                <a href="mailto:your.email@brown.edu">
                  <Mail className="h-5 w-5 mr-3" />
                  your.email@brown.edu
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="justify-start bg-transparent">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-3" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="justify-start bg-transparent">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-3" />
                  GitHub Profile
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="justify-start bg-transparent">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-5 w-5 mr-3" />
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Brown University Computer Science Student. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </section>
  )
}
