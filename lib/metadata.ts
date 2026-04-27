import type { Metadata } from "next"

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants"

type MetadataInput = {
  title: string
  description: string
  path: string
}

export const metadataBase = new URL(SITE_URL)

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}

export function buildMetadata({ title, description, path }: MetadataInput): Metadata {
  const url = absoluteUrl(path)
  const titleSuffix = ` | ${SITE_NAME}`
  const pageTitle = title.endsWith(titleSuffix) ? title.slice(0, -titleSuffix.length) : title

  return {
    title: pageTitle,
    description,
    metadataBase,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export const defaultMetadata: Metadata = {
  metadataBase,
  title: {
    default: `${SITE_NAME} | UK Mortgage Overpayment Tool`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
}
