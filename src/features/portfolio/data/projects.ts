import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "ai-voice-platform",
    title: "AI Voice Generation Platform",
    period: {
      start: "01.2026",
    },
    link: "https://your-live-demo-link.com",
    skills: [
      "Next.js 14",
      "TypeScript",
      "Convex",
      "AI",
      "Text-to-Speech",
      "Real-time Systems",
    ],
    description: `- Built a full-stack AI voice generation platform to convert text into natural speech.
- Implemented real-time streaming audio generation with low-latency playback.
- Designed scalable backend pipelines for audio processing and storage.
- Developed dashboards for managing projects, playback history, and exports.
- Integrated secure authentication and persistent sessions.`,
    isExpanded: true,
  },
  {
    id: "eraser-clone",
    title: "Eraser.io (Collaborative Docs & Whiteboard)",
    period: {
      start: "12.2025",
    },
    link: "https://your-live-demo-link.com",
    skills: [
      "Next.js 14",
      "TypeScript",
      "Convex",
      "EditorJS",
      "Excalidraw",
      "Realtime Collaboration",
    ],
    description: `- Built a collaborative platform for technical documents and system design diagrams.
- Integrated EditorJS with custom plugins and Excalidraw whiteboard.
- Implemented real-time collaboration with instant sync across users.
- Added team-based authentication and access control.
- Designed responsive UI with modern component systems.`,
  },
]
