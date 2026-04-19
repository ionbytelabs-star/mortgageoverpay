import Link from "next/link"

import { CTASection } from "@/components/common/CTASection"
import { FAQSection } from "@/components/common/FAQSection"
import { TrustNote } from "@/components/common/TrustNote"
import { DirectAnswer } from "@/components/content/DirectAnswer"
import { InternalLinkBlock } from "@/components/content/InternalLinkBlock"
import { KeyPointsList } from "@/components/content/KeyPointsList"
import { PageIntro } from "@/components/content/PageIntro"
import { Section } from "@/components/layout/Section"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { JsonLd } from "@/components/seo/JsonLd"
import { getFaqs } from "@/lib/faq"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"
import { PAGE_COPY } from "@/content/pageCopy"

export const metadata = buildMetadata({
  title: "How to Pay Off Your Mortgage Early | UK Guide",
  description:
    "Explore practical ways to pay off your mortgage early in the UK, reduce interest, and shorten your term with a clearer plan.",
  path: ROUTES.payOffEarly,
})

const breadcrumbs = makeBreadcrumbs([{ name: "How to pay off your mortgage early", href: ROUTES.payOffEarly }])
const faqs = getFaqs("payOffEarly")

export default function PayOffEarlyPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "How to Pay Off Your Mortgage Early | UK Guide",
          description:
            "Explore practical ways to pay off your mortgage early, reduce interest, and shorten your term with a clearer plan.",
          path: ROUTES.payOffEarly,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro title={PAGE_COPY.payOffEarly.title} intro={PAGE_COPY.payOffEarly.intro} />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer={PAGE_COPY.payOffEarly.directAnswer} />
          <KeyPointsList items={PAGE_COPY.payOffEarly.keyPoints} />
        </div>
      </Section>

      <Section title="Practical ways to reduce the term" description="Most early payoff plans come down to a few simple levers." compact>
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Regular monthly overpayments",
              copy: "A steady extra amount each month can shorten the term gradually and often makes the plan easier to sustain.",
            },
            {
              title: "One-off lump sums",
              copy: "A lump sum can cut the balance in one move and may work well after a bonus, sale, or other one-time event.",
            },
            {
              title: "Reviewing your affordability",
              copy: "Even a modest overpayment can matter over time, so the most effective plan is usually the one you can keep up comfortably.",
            },
          ].map((item) => (
            <article key={item.title} className="card rounded-[2rem] px-5 py-5">
              <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="What makes a plan workable?"
        description="The goal is not just to pay early. It is to pay early without creating unnecessary pressure."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Keep enough flexibility</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A shorter term is helpful, but so is having room for day-to-day life, emergency costs, and unexpected changes.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Check your mortgage terms</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Overpayment limits and charges matter just as much as the savings projection, especially if you are planning a larger extra payment. It can help to read about <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.overpaymentLimit}>mortgage overpayment limits in the UK</Link> before acting.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Related pages" description="Build the plan, then test it with your own numbers." compact>
        <InternalLinkBlock
          links={[
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
            { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
            { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
          ]}
        />
      </Section>

      <Section title="Limitation" description="A projection is useful, but your exact mortgage terms still come first." compact>
        <TrustNote children="Paying off a mortgage early can be a strong long-term goal, but the right pace depends on affordability, flexibility, and any limits or charges in your own mortgage terms. Use estimates as a guide, then check the exact details." />
      </Section>

      <FAQSection items={faqs} compact />

      <CTASection
        title="See how quickly your own mortgage could move"
        description="Test a regular overpayment or a one-off lump sum and compare the change in payoff date and interest paid."
        compact
      />
    </>
  )
}
