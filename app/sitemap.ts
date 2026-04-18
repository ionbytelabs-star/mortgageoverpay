import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/constants"
import { ROUTES } from "@/lib/routes"

export const dynamic = "force-static"

const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}${ROUTES.home}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}${ROUTES.calculator}`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}${ROUTES.shouldIOverpay}`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${SITE_URL}${ROUTES.overpaymentLimit}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}${ROUTES.payOffEarly}`, lastModified: now, changeFrequency: "monthly", priority: 0.81 },
    { url: `${SITE_URL}${ROUTES.about}`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}${ROUTES.privacy}`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}${ROUTES.terms}`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]
}
