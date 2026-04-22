import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/constants"
import { ROUTES } from "@/lib/routes"

export const dynamic = "force-static"

const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}${ROUTES.home}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}${ROUTES.guides}`, lastModified: now, changeFrequency: "weekly", priority: 0.84 },
    { url: `${SITE_URL}${ROUTES.calculator}`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}${ROUTES.shouldIOverpay}`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${SITE_URL}${ROUTES.overpaymentLimit}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}${ROUTES.payOffEarly}`, lastModified: now, changeFrequency: "monthly", priority: 0.81 },
    { url: `${SITE_URL}${ROUTES.overpayVsSave}`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${SITE_URL}${ROUTES.overpayVsInvest}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}${ROUTES.overpayVsPension}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}${ROUTES.worthIt}`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${SITE_URL}${ROUTES.lumpSumOverpayment}`, lastModified: now, changeFrequency: "monthly", priority: 0.79 },
    { url: `${SITE_URL}${ROUTES.tenPercentRule}`, lastModified: now, changeFrequency: "monthly", priority: 0.79 },
    { url: `${SITE_URL}${ROUTES.overpay100Or200}`, lastModified: now, changeFrequency: "monthly", priority: 0.77 },
    { url: `${SITE_URL}${ROUTES.higherRatePayments}`, lastModified: now, changeFrequency: "monthly", priority: 0.77 },
    { url: `${SITE_URL}${ROUTES.afterFixedRate}`, lastModified: now, changeFrequency: "monthly", priority: 0.79 },
    { url: `${SITE_URL}${ROUTES.about}`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}${ROUTES.privacy}`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}${ROUTES.cookies}`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}${ROUTES.terms}`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]
}
