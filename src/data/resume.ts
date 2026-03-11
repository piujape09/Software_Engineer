import { GoogleGenAI } from "@google/genai";

export interface ResumeData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    links: { label: string; url: string }[];
  };
  experience: {
    company: string;
    role: string;
    dates: string;
    location: string;
    bullets: string[];
    metrics?: string[];
  }[];
  projects: {
    title: string;
    stack: string[];
    bullets: string[];
  }[];
  achievements: {
    title: string;
    context: string;
    type: 'Award' | 'Metric' | 'Leadership' | 'Win';
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    school: string;
    degree: string;
    dates: string;
    grade: string;
  }[];
  certifications: string[];
  extra: {
    leadership: string;
    hobbies: string[];
  };
}

export const resumeData: ResumeData = {
  basics: {
    name: "PRATIBHA JAPE",
    title: "SOFTWARE Engineer",
    summary: "Software Engineer with expertise in Java, Spring Boot, and ReactJS, experienced in building scalable backend services and modern web applications. Skilled in REST APIs, microservices architecture, and DevOps practices.",
    location: "Pune, India",
    email: "pratibhavjape@gmail.com",
    phone: "+91 9834452715",
    links: [
      { label: "GitHub", url: "https://github.com/piujape09" },
      { label: "LinkedIn", url: "#" }
    ]
  },
  experience: [
    {
      company: "PTC",
      role: "DevOps Engineer Intern",
      dates: "2025 — PRESENT",
      location: "Pune",
      bullets: [
        "Built and optimized pipeline to handle the flaws of elastic axis using Jenkins and Groovy",
        "Automation and enhancement of code reviews process",
        "Implemented pipeline monitoring and debugging improvements to ensure faster build execution and reliable deployments"
      ],
      metrics: ["Pipeline Optimization", "CI/CD Automation"]
    },
    {
      company: "YUGAZEPHYR",
      role: "Web Developer Intern",
      dates: "2023 — 2024",
      location: "Remote",
      bullets: [
        "Developed full-stack features using React and Spring Boot",
        "Built REST APIs and collaborated in Agile teams",
        "Technologies: ReactJS, Spring Boot, MySQL, Git, Postman, Docker"
      ],
      metrics: ["Full-Stack Dev", "Agile"]
    }
  ],
  projects: [
    {
      title: "NOVA – The Shared Brain for AI Assistance",
      stack: ["Python", "FastAPI", "MongoDB", "Docker", "MCP"],
      bullets: [
        "Built a multi-agent AI system with shared memory and secure APIs",
        "Enabled persistent memory using MCP architecture"
      ]
    },
    {
      title: "Student Management System",
      stack: ["Spring Boot", "Spring Security", "Hibernate", "MySQL", "ReactJS"],
      bullets: [
        "Developed secure REST APIs with authentication and role-based access",
        "Integrated frontend with Spring Boot backend"
      ]
    },
    {
      title: "International Conference Website",
      stack: ["ReactJS", "Node.js", "Express.js", "MongoDB"],
      bullets: [
        "Built full-stack event platform with registration and admin dashboard",
        "Deployed frontend on GitHub Pages"
      ]
    }
  ],
  achievements: [
    {
      title: "TOP PERFORMER – SBI CYI HACKATHON",
      context: "Ranked in the Top 1000 performers globally.",
      type: "Win"
    },
    {
      title: "SIH SHORTLISTED (2×)",
      context: "Shortlisted twice for the prestigious Smart India Hackathon.",
      type: "Metric"
    },
    {
      title: "CO-CURRICULAR COORDINATOR",
      context: "Avinya Hackathon • Vortexa Hackathon leadership.",
      type: "Leadership"
    }
  ],
  skills: [
    { category: "LANGUAGES", items: ["Java", "Python", "JavaScript"] },
    { category: "FRONTEND", items: ["ReactJS", "TailwindCSS", "Vite", "VanillaCSS"] },
    { category: "BACKEND", items: ["Spring Boot", "REST APIs", "FastAPI"] },
    { category: "DATABASES", items: ["MySQL", "MongoDB", "Oracle"] },
    { category: "DEVOPS & TOOLS", items: ["Docker", "Jenkins", "GitHub Actions", "Ansible", "Linux", "Postman", "Jira"] }
  ],
  education: [
    {
      school: "JSPM's RSCOE Tathawade",
      degree: "B.Tech – Computer Engineering",
      dates: "2023 — 2026",
      grade: "87.4%"
    },
    {
      school: "Govt. Polytechnic A.Nagar",
      degree: "Diploma – Computer Engineering",
      dates: "2020 — 2023",
      grade: "90.80%"
    },
    {
      school: "Carmel Convent High School",
      degree: "Schooling",
      dates: "2010 — 2020",
      grade: "93.58%"
    }
  ],
  certifications: [
    "Oracle Cloud Infrastructure 2025 – DevOps Professional",
    "Scaler – Spring Boot (2025)",
    "IIT Bombay – Java (2024)",
    "NPTEL – Cloud Computing (2024)",
    "TCS – Young Professional (2024)",
    "IIT Bombay – Python (2024)",
    "IIT Bombay – RDBMS (2024)"
  ],
  extra: {
    leadership: "CTO & Treasurer – Coding Club (2024 – 2025): Lead technical projects and organized workshops",
    hobbies: ["Basketball", "Cooking", "Music", "Skating"]
  }
};
