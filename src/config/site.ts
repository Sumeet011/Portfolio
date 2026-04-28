import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://sumeet-dev.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blocks",
    href: "/blocks",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@Sumeetsharma02"
export const GITHUB_USERNAME = "Sumeet011"
export const SOURCE_CODE_GITHUB_REPO = "Sumeet011/Portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Sumeet011/Portfolio"

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source: "sumeet-dev.me",
}
