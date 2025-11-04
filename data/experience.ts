export interface Experience {
  id: number;
  type: 'work' | 'teaching' | 'leadership';
  title: string;
  organization: string;
  dates: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  // Work Experience
  {
    id: 1,
    type: 'work',
    title: "Software Engineer Intern",
    organization: "TrueMark AI",
    dates: "June 2024 - Present",
    description: "Building AI-powered verification systems to combat misinformation and ensure content authenticity across digital platforms.",
    responsibilities: [
      "Developed ML pipelines for real-time content verification with 95% accuracy",
      "Improved model inference speed by 40% through optimization and caching strategies",
      "Collaborated with product team to design user-facing verification features",
      "Contributed to open-source AI ethics documentation and best practices"
    ],
    skills: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS", "PostgreSQL"]
  },
  
  // Teaching Experience
  {
    id: 2,
    type: 'teaching',
    title: "Teaching Assistant - CS410: Software Engineering",
    organization: "Brown University",
    dates: "September 2024 - Present",
    description: "Supporting students in learning software development best practices, agile methodologies, and collaborative coding.",
    responsibilities: [
      "Lead weekly lab sections for 30+ students on topics like Git, CI/CD, and testing",
      "Provide one-on-one mentorship and code reviews for group projects",
      "Grade assignments and provide detailed feedback on code quality and design",
      "Host office hours to help students debug and understand complex concepts"
    ],
    skills: ["Teaching", "Code Review", "Software Architecture", "Mentoring"]
  },
  {
    id: 3,
    type: 'teaching',
    title: "Teaching Assistant - CS200: Data Structures & Algorithms",
    organization: "Brown University",
    dates: "January 2024 - May 2024",
    description: "Assisted students in mastering fundamental computer science concepts including data structures, algorithms, and complexity analysis.",
    responsibilities: [
      "Held office hours 6 hours/week to support 200+ students with coursework",
      "Graded exams and programming assignments with detailed explanations",
      "Developed supplementary learning materials and practice problems",
      "Mentored students on problem-solving strategies and interview preparation"
    ],
    skills: ["Algorithms", "Data Structures", "Java", "Python", "Teaching"]
  },
  
  // Leadership Experience
  {
    id: 4,
    type: 'leadership',
    title: "Bruno Fellow (Peer Advisor)",
    organization: "Brown University",
    dates: "September 2023 - Present",
    description: "Serving as a peer mentor and advisor to incoming first-year students, helping them navigate academic and social life at Brown.",
    responsibilities: [
      "Mentored 12 first-year students through their transition to college",
      "Organized academic workshops on time management and course selection",
      "Facilitated discussions on campus resources and student well-being",
      "Built a supportive community through social events and study groups"
    ],
    skills: ["Mentorship", "Leadership", "Community Building", "Communication"]
  },
  {
    id: 5,
    type: 'leadership',
    title: "Orientation Leader",
    organization: "Brown University",
    dates: "August 2023 & August 2024",
    description: "Welcomed and guided new students during orientation week, creating an inclusive and supportive environment for all incoming students.",
    responsibilities: [
      "Led orientation activities for 50+ incoming students",
      "Facilitated conversations on diversity, inclusion, and belonging",
      "Collaborated with staff to coordinate logistics for 1000+ attendees",
      "Served as a resource for questions about academics, campus life, and student organizations"
    ],
    skills: ["Public Speaking", "Event Planning", "Empathy", "Team Collaboration"]
  }
];

