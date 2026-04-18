import type { FAQItem } from "@/lib/faq"
import { faqSchema } from "@/lib/schema"

import { JsonLd } from "@/components/seo/JsonLd"

type FAQSchemaProps = {
  items: ReadonlyArray<FAQItem>
}

export function FAQSchema({ items }: FAQSchemaProps) {
  return <JsonLd data={faqSchema(items)} />
}
