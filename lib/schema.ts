import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants"
import type { BreadcrumbItem } from "@/lib/seo"

type SchemaQuestion = {
  question: string
  answer: string
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  }
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: new URL("/", SITE_URL).toString(),
  }
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: new URL(path, SITE_URL).toString(),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function faqSchema(questions: ReadonlyArray<SchemaQuestion>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, SITE_URL).toString(),
    })),
  }
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "UK Mortgage Overpayment Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    description:
      "A browser-based calculator that estimates mortgage-free date changes, interest saved, and time saved from overpayments.",
  }
}

export function homepageStructuredData({
  title,
  description,
  faqs,
}: {
  title: string
  description: string
  faqs: ReadonlyArray<SchemaQuestion>
}) {
  const homepageUrl = new URL("/", SITE_URL).toString()
  const websiteId = `${homepageUrl}#website`
  const organizationId = `${homepageUrl}#organization`
  const articleId = `${homepageUrl}#article`
  const toolId = `${homepageUrl}#tool`
  const faqId = `${homepageUrl}#faq`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: SITE_NAME,
        url: homepageUrl,
        description: SITE_DESCRIPTION,
        inLanguage: "en-GB",
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: homepageUrl,
      },
      {
        "@type": "Article",
        "@id": articleId,
        headline: title,
        description,
        url: homepageUrl,
        inLanguage: "en-GB",
        mainEntityOfPage: homepageUrl,
        author: {
          "@id": organizationId,
        },
        publisher: {
          "@id": organizationId,
        },
        about: [
          { "@type": "Thing", name: "Mortgage overpayments" },
          { "@type": "Thing", name: "UK repayment mortgages" },
          { "@type": "Thing", name: "Mortgage overpayment calculator" },
        ],
        keywords: [
          "mortgage overpayment calculator UK",
          "overpay mortgage UK",
          "should I overpay my mortgage UK",
          "mortgage overpayment limit UK",
          "pay off mortgage early UK",
        ],
      },
      {
        "@type": "WebApplication",
        "@id": toolId,
        name: "Mortgage Overpayment Calculator UK",
        description,
        url: homepageUrl,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        inLanguage: "en-GB",
        browserRequirements: "Requires a modern web browser with JavaScript enabled.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "GBP",
        },
        featureList: [
          "Estimate mortgage-free date",
          "Estimate interest saved",
          "Compare monthly overpayment scenarios",
          "Model one-off lump sum overpayments",
          "Show results for UK repayment mortgages without signup",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: homepageUrl,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }
}
