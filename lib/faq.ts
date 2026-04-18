import { FAQS_BY_PAGE } from "@/content/faqs"

export type FAQItem = {
  question: string
  answer: string
}

export function getFaqs(page: keyof typeof FAQS_BY_PAGE) {
  return FAQS_BY_PAGE[page]
}
