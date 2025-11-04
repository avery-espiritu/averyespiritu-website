export interface AboutData {
  name: string;
  tagline: string;
  bio: string[];
  education: {
    degree: string;
    school: string;
    year: string;
    focus: string[];
  };
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  interests: string[];
}

export const aboutData: AboutData = {
  name: "Avery Espiritu",
  tagline: "Computer Science Student & Software Engineer",
  bio: [
    "Hi! I'm Avery, a Computer Science student at Brown University passionate about building technology that makes a positive impact on society.",
    "My journey in tech is driven by a belief that computing can and should serve the greater good. Whether I'm developing AI systems at TrueMark AI, teaching students in CS courses, or mentoring first-years as a Bruno Fellow, I strive to bring both technical excellence and human-centered values to everything I do.",
    "I'm particularly interested in the intersection of artificial intelligence and ethics—exploring how we can build intelligent systems that are not only powerful but also fair, transparent, and accountable. Outside of coding, you'll find me organizing community events, reading about tech policy, or exploring Providence's coffee shops."
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Brown University",
    year: "Expected May 2026",
    focus: [
      "Software Engineering",
      "Artificial Intelligence & Machine Learning",
      "Ethics in Computing",
      "Human-Computer Interaction"
    ]
  },
  values: [
    {
      title: "AI for Good",
      description: "Building intelligent systems that prioritize social impact, accessibility, and ethical considerations.",
      icon: "🤖"
    },
    {
      title: "Inclusive Technology",
      description: "Creating software that is accessible to everyone, regardless of ability, background, or circumstance.",
      icon: "🌍"
    },
    {
      title: "Lifelong Learning",
      description: "Constantly growing through teaching, mentoring, and exploring new technologies and ideas.",
      icon: "📚"
    },
    {
      title: "Community Building",
      description: "Fostering supportive environments where people can learn, collaborate, and thrive together.",
      icon: "🤝"
    }
  ],
  interests: [
    "Machine Learning & AI Ethics",
    "Open Source Contribution",
    "Tech Policy & Digital Rights",
    "Teaching & Mentorship",
    "Community Organizing",
    "Coffee & Conversation"
  ]
};

