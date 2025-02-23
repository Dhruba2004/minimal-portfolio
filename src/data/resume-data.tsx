import {
  ClevertechLogo,
  ConsultlyLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dhruba Dutta Banik",
  initials: "DDB",
  location: "Kolkata,West Bengal,India",
  locationLink: "https://maps.app.goo.gl/7JuRd3bPHjnYxhjX9",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      A passionate Software Engineering Undergrad from Kolkata, 🇮🇳 currently in
      the pre final year of my B.Tech in Computer Science & Engineering from
      University of Engineering & Management, Kolkata. I am good at full-stack
      web development. My favorite part of programming is the problem-solving
      aspect. I love the feeling of finally figuring out a solution to a
      problem. My core stack is MongoDB, Express.js, React.js, and Node.js. I am
      also familiar with programming languages like C, Python, Java, C++,
      Javascript. I am always looking to learn new technologies. I am also
      Interested in Cloud Computing , DevOps, and a lot other fields When I'm
      not coding, I enjoy playing video games, watching movies, and playing with
      my friends.
    </>
  ),
  avatarUrl:
    "https://dhruba2004-portfolio.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpeg&w=384&q=95",
  personalWebsiteUrl: "https://dhruba2004-portfolio.vercel.app/",
  contact: {
    email: "dhrubaduttabanik@gmail.com",
    tel: "+919433433882",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Dhruba2004",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruba-dutta-banik-963524231/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University Of Engineering & Management , Kolkata",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Zidio Development",
      link: "https://zidio.in/",
      badges: [
        "Remote",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Tailwind",
      ],
      title: "Full Stack Development Intern",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed and maintained the frontend of Zidio Development website
              with NEXT , Tailwind , clerk and Shadcn UI.
            </li>
            <li>
              Attended development programs to gain competencies and boost
              skills set.
            </li>
            <li>
              Utilized version control tools like Git and GitHub to manage code,
              track changes, and collaborate with fellow developers.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "CodeClause",
      link: "https://internship.codeclause.com/",
      badges: ["Remote", "Html", "Tailwind", "JavaScript"],
      title: "Web Development Intern",
      logo: ClevertechLogo,
      start: "2024",
      end: "2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>Developed an face detection system using Tensorflow js .</li>
            <li>
              Also developed image background remover web application using NEXT
              , Tailwind and removebg API.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Oasis Infobyte",
      link: "https://oasisinfobyte.com/",
      badges: ["Remote", "MongoDB", "React", "Node", "Express"],
      title: "Full Stack Web Development Intern",
      logo: NSNLogo,
      start: "2023",
      end: "2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>Developed an full stack workout tracker using MERN stack.</li>
            <li>
              Developed an todo application using React , Tailwind and Redux
              toolkit.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Tailwind",
    "Express",
    "SQL",
    "Git & Github",
    "Node",
    "MongoDB",
    "Java",
    "Python",
  ],
  projects: [
    {
      title: "Learnify",
      techStack: ["Next js" , "Tailwind CSS" ,"Stripe" ,"Inngest","Drizzle ORM","Neon PostgreSQL","Clerk","Gemini"],
      description:
        "Learnify is a modern Learning Management System (LMS) SaaS application designed to provide seamless educational experiences. It integrates cutting-edge technologies for an intuitive and scalable platform, making it easy to deliver, manage, and monetize learning content.",
      link: {
        label: "AI Study Material Generator",
        href: "https://learnify-latest.vercel.app/",
      },
    },
    {
      title: "Scribe",
      techStack: ["Next js" , "Tailwind CSS","Clerk","Convex","Langchain","Gemini"],
      description:
        "Scribe is a full-stack AI-powered note-taking SaaS application that enables users to interact with PDF documents through chat. Leveraging Retrieval-Augmented Generation (RAG) techniques, it provides advanced AI capabilities for efficient information retrieval and management.",
      link: {
        label: "AI Note taker",
        href: "https://rag-pdf-chat.vercel.app/",
      },
    },
    {
      title: "Genius",
      techStack: ["Next js" ,"Typescript", "Tailwind CSS","Clerk","Gemini","Drizzle ORM","Neon PostgreSQL"],
      description:
        "Genius is an AI-powered content generation application designed to streamline the creation of high-quality content. Built with modern web technologies, it offers a seamless user experience for generating content efficiently.",
      link: {
        label: "AI Content Generator",
        href: "https://genius-ashy.vercel.app/",
      },
    },

    // {
    //   title: "Monito",
    //   techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
    //   description:
    //     "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //     "Tailwind CSS",
    //     "PostgreSQL",
    //     "Redis",
    //   ],
    //   description:
    //     "Platform for online consultations with real-time video meetings and scheduling",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    // {
    //   title: "Minimalist CV",
    //   techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    //   description:
    //     "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "Minimalist CV",
    //     href: "https://github.com/BartoszJarocki/cv",
    //   },
    // },
  ],
} as const;
