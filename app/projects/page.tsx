import { Projects } from "@/components/projects"
import { Navigation } from "@/components/navigation"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Projects />
    </main>
  )
}
