import type { FAQItem } from "@/lib/faq"

import { Section } from "@/components/layout/Section"

type FAQSectionProps = {
  items: ReadonlyArray<FAQItem>
  title?: string
  description?: string
}

export function FAQSection({
  items,
  title = "Frequently asked questions",
  description = "Straight answers to the questions people usually ask before making an overpayment.",
}: FAQSectionProps) {
  return (
    <Section title={title} description={description}>
      <div className="space-y-4">
        {items.map((item) => (
          <details key={item.question} className="card rounded-3xl px-5 py-4">
            <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
