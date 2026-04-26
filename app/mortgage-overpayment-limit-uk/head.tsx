import { getFaqs } from "@/lib/faq"
import { ROUTES } from "@/lib/routes"
import { SITE_URL } from "@/lib/constants"

const authorName = "Mortgage Overpay Editorial Team"
const dateModified = "2026-04-26"
const pageTitle = "Mortgage Overpayment Limit UK (10% Rule Explained + Real Examples)"
const description =
  "Understand the mortgage overpayment limit UK lenders usually set, how the 10% rule works, when ERCs apply, and how to check your allowance."
const pageUrl = `${SITE_URL}${ROUTES.overpaymentLimit}`

const faqs = getFaqs("overpaymentLimit")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description,
  author: {
    "@type": "Person",
    name: authorName,
  },
  dateModified,
  mainEntityOfPage: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "Mortgage Overpay",
    url: SITE_URL,
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}${ROUTES.home}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mortgage overpayment limit UK",
      item: pageUrl,
    },
  ],
}

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
