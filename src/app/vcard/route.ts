import { NextResponse } from "next/server"
import sharp from "sharp"
import VCard from "vcard-creator"

import { USER } from "@/features/portfolio/data/user"
import { decodeEmail, decodePhoneNumber } from "@/utils/string"

export const revalidate = false
export const dynamic = "force-dynamic"

export async function GET() {
  const card = new VCard()

  card
    .addName(USER.lastName, USER.firstName)
    .addPhoneNumber(decodePhoneNumber(USER.phoneNumber))
    .addAddress(USER.address)
    .addEmail(decodeEmail(USER.email))
    .addURL(USER.website)

  const photo = await getVCardPhoto(USER.avatar)
  if (photo) {
    card.addPhoto(photo.image, photo.mime || "image/jpeg")
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0]
    card.addCompany(company.company).addJobtitle(company.title)
  }

  const vCardContent = card.toString()
  // Use ASCII-safe filename to avoid ByteString conversion issues
  const filename = "contact-vcard.vcf"

  return new Response(vCardContent, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  })
}

async function getVCardPhoto(url: string) {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      return null
    }

    const buffer = Buffer.from(await res.arrayBuffer())
    if (buffer.length === 0) {
      return null
    }

    const contentType = res.headers.get("Content-Type") || ""
    if (!contentType.startsWith("image/")) {
      return null
    }

    const jpegBuffer = await convertImageToJpeg(buffer)
    const image = jpegBuffer.toString("base64")

    return {
      image,
      mime: "image/jpeg",
    }
  } catch {
    return null
  }
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
  try {
    const jpegBuffer = await sharp(imageBuffer)
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
      })
      .toBuffer()

    return jpegBuffer
  } catch (error) {
    console.error("Error converting image to JPEG:", error)
    throw error
  }
}
