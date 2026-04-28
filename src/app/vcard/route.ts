import sharp from "sharp"

import { USER } from "@/features/portfolio/data/user"
import { decodeEmail, decodePhoneNumber } from "@/utils/string"

export const revalidate = false
export const dynamic = "force-dynamic"

// Normalize Unicode characters to ASCII equivalents
function normalizeToASCII(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x00-\x7F]/g, "")
}

function escapeVCardValue(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
}

function foldVCardLine(line: string, maxLength = 75): string[] {
  if (line.length <= maxLength) {
    return [line]
  }

  const folded: string[] = []
  let remaining = line
  while (remaining.length > maxLength) {
    folded.push(remaining.slice(0, maxLength))
    remaining = ` ${remaining.slice(maxLength)}`
  }

  folded.push(remaining)
  return folded
}

export async function GET() {
  const firstName = normalizeToASCII(USER.firstName)
  const lastName = normalizeToASCII(USER.lastName)
  const phone = normalizeToASCII(decodePhoneNumber(USER.phoneNumber))
  const address = normalizeToASCII(USER.address)
  const email = normalizeToASCII(decodeEmail(USER.email))
  const website = normalizeToASCII(USER.website)

  const photo = await getVCardPhoto(USER.avatar)

  let company = ""
  let title = ""
  if (USER.jobs.length > 0) {
    company = normalizeToASCII(USER.jobs[0].company)
    title = normalizeToASCII(USER.jobs[0].title)
  }

  const vCardLines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCardValue(lastName)};${escapeVCardValue(firstName)};;;`,
    `FN:${escapeVCardValue(`${firstName} ${lastName}`.trim())}`,
    `TEL;TYPE=CELL:${escapeVCardValue(phone)}`,
    `EMAIL;TYPE=INTERNET:${escapeVCardValue(email)}`,
    `ADR;TYPE=HOME:;;${escapeVCardValue(address)};;;;`,
    `URL:${escapeVCardValue(website)}`,
  ]

  if (company) {
    vCardLines.push(`ORG:${escapeVCardValue(company)}`)
  }

  if (title) {
    vCardLines.push(`TITLE:${escapeVCardValue(title)}`)
  }

  if (photo) {
    const photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${photo.image}`
    vCardLines.push(...foldVCardLine(photoLine))
  }

  vCardLines.push("END:VCARD")

  const vCardContent = vCardLines.join("\r\n")
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
