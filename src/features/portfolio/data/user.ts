import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Śumèeť",
  lastName: "Śhàrmà",
  displayName: "Śumèeť Śhàrmà",
  username: "Śumèeť",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Design Engineer",
    "Open Source Contributor",
  ],
  address: "Sector 41b, chandigarh, India",
  phoneNumber: "+91 8264988895", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "Workwithsumeet.dev@gmail.com", // base64 encoded
  website: "https://sumeet-dev.me",
  jobTitle: "Fullstack/Design Engineer",
  jobs: [
    {
      title: "Design Engineer",
      company: "shadcncraft",
      website: "https://shadcncraft.com",
      experienceId: "shadcncraft",
    },
    {
      title: "Founder",
      company: "Quaric",
      website: "https://quaric.com",
      experienceId: "quaric",
    },
  ],
  about: `
- Design Engineer with 5+ years of experience, known for pixel-perfect execution and strong attention to small details.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Creator of [chanhdai.com](https://github.com/ncdai/chanhdai.com) (1.6k stars), [React Wheel Picker](https://react-wheel-picker.chanhdai.com) (16k+ weekly downloads, ▲Vercel OSS Program), and [ZaDark](https://zadark.com) (80k+ downloads, 30k+ users) — peak metrics.
`,
  avatar:
    "https://res.cloudinary.com/phonewraps/image/upload/v1777354907/avatar_1776182693_zdsnpp.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?v=8",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
