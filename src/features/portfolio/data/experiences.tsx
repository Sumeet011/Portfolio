import {
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "creativtio",
    companyName: "Creativtio",
    companyLogo:
      "https://res.cloudinary.com/phonewraps/image/upload/v1777364869/541972599_17860755069472148_5458317387739951645_n_qnl35t.jpg",
    companyWebsite: "https://creativio.tech",
    positions: [
      {
        id: "1",
        title: "Founder",
        employmentPeriod: {
          start: "7.2025",
        },
        employmentType: "Part-time",
        icon: <LightbulbIcon />,
        description:
          "- Founded Creativtio, a product-focused development company.\n- Built and shipped scalable web platforms and SaaS products.\n- Led end-to-end development including architecture, frontend, backend, and deployment.\n- Focused on performance optimization, UI/UX quality, and production-grade systems.",
        skills: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "System Design",
          "Startup",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "phonewraps",
    companyName: "PhoneWraps",
    companyLogo: "",
    companyWebsite: "https://phonewraps.com",
    positions: [
      {
        id: "1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "11.2025",
          end: "03.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Built a custom phone cover e-commerce platform with dynamic design workflows.\n- Implemented image uploads, template rendering, and high-resolution previews.\n- Developed product discovery for 350+ device models with filtering and search.\n- Integrated Stripe payments, order management, and inventory tracking.\n- Optimized APIs and PostgreSQL queries, reducing load time by 60%.",
        skills: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Stripe",
          "REST APIs",
          "E-commerce",
        ],
      },
    ],
  },
  {
    id: "chatflow",
    companyName: "ChatFlow AI",
    companyLogo: "",
    companyWebsite: "https://chatflowai.com",
    positions: [
      {
        id: "1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "10.2024",
          end: "02.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Built Instagram automation platform for chat workflows and lead capture.\n- Developed backend using Node.js for webhook processing and message routing.\n- Implemented AI-driven conversational flows with intent-based responses.\n- Built no-code workflow builder with triggers, delays, and automation actions.\n- Designed scalable system handling 10k+ concurrent messages.",
        skills: ["Node.js", "Webhooks", "Automation", "LLMs", "PostgreSQL"],
      },
    ],
  },
  {
    id: "devflow",
    companyName: "DevFlow AI",
    companyLogo: "https://www.sumeet-dev.me/logo.svg",
    companyWebsite: "https://devflows.tech",
    positions: [
      {
        id: "1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "05.2024",
          end: "09.2024",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Built a real-time AI-powered cloud IDE for collaborative coding.\n- Designed event-driven backend with async job orchestration.\n- Implemented debounced inference and autosave optimizations.\n- Engineered scalable GitHub repo ingestion for large codebases.\n- Built multi-tenant architecture with strong access control.",
        skills: [
          "Next.js",
          "Node.js",
          "WebSockets",
          "System Design",
          "Distributed Systems",
        ],
      },
    ],
  },
  {
    id: "vicewee",
    companyName: "Vicewee",
    positions: [
      {
        id: "1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "04.2025",
          end: "07.2025",
        },
        employmentType: "Full-time",
        icon: <LightbulbIcon />,
        description:
          "- Founded Vicewee, a clothing brand focused on modern streetwear.\n- Managed brand identity, product design, and online presence.\n- Handled marketing, product launches, and customer engagement.\n- Built and scaled initial sales channels.",
        skills: [
          "Next.js",
          "Node.js",
          "WebSockets",
          "System Design",
          "Distributed Systems",
        ],
      },
    ],
  },
]
