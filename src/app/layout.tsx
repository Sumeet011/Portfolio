import "@/styles/globals.css"

import { GoogleTagManager } from "@next/third-parties/google"
import type { Metadata, Viewport } from "next"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import type { WebSite, WithContext } from "schema-dts"

import { Providers } from "@/components/providers"
import { META_THEME_COLORS, SITE_INFO, X_HANDLE } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { fontVariables } from "@/lib/fonts"

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: "Sumeet Sharma",
      url: SITE_INFO.url,
    },
  ],
  creator: "Sumeet Sharma",
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    locale: "en_US",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/phonewraps/image/upload/v1777395465/Gemini_Generated_Image_x33xrkx33xrkx33x-removebg-preview_pemthz.png",
        sizes: "32x32",
      },
      {
        url: "https://res.cloudinary.com/phonewraps/image/upload/v1777395465/Gemini_Generated_Image_x33xrkx33xrkx33x-removebg-preview_pemthz.png",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://res.cloudinary.com/phonewraps/image/upload/v1777395465/Gemini_Generated_Image_x33xrkx33xrkx33x-removebg-preview_pemthz.png",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "https://res.cloudinary.com/phonewraps/image/upload/v1777395465/Gemini_Generated_Image_x33xrkx33xrkx33x-removebg-preview_pemthz.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head />

      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}

      <body>
        <Providers>
          <NuqsAdapter>{children}</NuqsAdapter>
        </Providers>
      </body>
    </html>
  )
}
