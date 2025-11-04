export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  impact: string;
  link?: string;
  github?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Content Verification System",
    description: "Developed a machine learning pipeline that verifies digital content authenticity and detects misinformation using natural language processing and computer vision techniques.",
    role: "Full-Stack ML Engineer",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    impact: "Improved content verification accuracy by 25% and reduced processing time by 40%",
    link: "https://example.com",
    github: "https://github.com/avery-espiritu",
    image: "/images/projects/project1.jpg"
  },
  {
    id: 2,
    title: "Accessible Learning Platform",
    description: "Built an inclusive educational platform with features like screen reader optimization, text-to-speech, and customizable visual settings to support students with disabilities.",
    role: "Lead Developer",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Web Speech API"],
    impact: "Reached 500+ users and achieved 95% accessibility compliance (WCAG 2.1 AAA)",
    link: "https://example.com",
    github: "https://github.com/avery-espiritu",
    image: "/images/projects/project2.jpg"
  },
  {
    id: 3,
    title: "Climate Data Visualization Tool",
    description: "Created an interactive dashboard for analyzing and visualizing climate change data, helping researchers identify patterns and communicate findings to policymakers.",
    role: "Frontend Engineer & Data Analyst",
    technologies: ["React", "D3.js", "Python", "Pandas", "AWS S3"],
    impact: "Processed 10M+ data points and presented insights to 50+ environmental organizations",
    link: "https://example.com",
    github: "https://github.com/avery-espiritu",
    image: "/images/projects/project3.jpg"
  },
  {
    id: 4,
    title: "Student Collaboration Hub",
    description: "Designed and developed a real-time collaboration platform for CS students to work on group projects, share code, and get peer feedback.",
    role: "Full-Stack Developer",
    technologies: ["React", "WebSockets", "Express.js", "Redis", "Docker"],
    impact: "Adopted by 200+ Brown CS students across 15 courses",
    link: "https://example.com",
    github: "https://github.com/avery-espiritu",
    image: "/images/projects/project4.jpg"
  },
  {
    id: 5,
    title: "Ethical AI Research Framework",
    description: "Contributed to an open-source framework for evaluating AI systems on ethical dimensions including fairness, transparency, and accountability.",
    role: "Research Assistant & Developer",
    technologies: ["Python", "scikit-learn", "Jupyter", "PyTorch"],
    impact: "Published research paper and framework used by 10+ research institutions",
    link: "https://example.com",
    github: "https://github.com/avery-espiritu",
    image: "/images/projects/project5.jpg"
  }
];

