import Link from "next/link"

import { CTASection } from "@/components/common/CTASection"
import { FAQSection } from "@/components/common/FAQSection"
import { TrustNote } from "@/components/common/TrustNote"
import { DirectAnswer } from "@/components/content/DirectAnswer"
import { InternalLinkBlock } from "@/components/content/InternalLinkBlock"
import { KeyPointsList } from "@/components/content/KeyPointsList"
import { PageIntro } from "@/components/content/PageIntro"
import { Section } from "@/components/layout/Section"
import { MortgageCalculator } from "@/components/calculator/MortgageCalculator"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { JsonLd } from "@/components/seo/JsonLd"
import { getFaqs } from "@/lib/faq"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, softwareApplicationSchema, webPageSchema } from "@/lib/schema"
import { PAGE_COPY } from "@/content/pageCopy"

export const metadata = buildMetadata({
  title: "UK Mortgage Overpayment Calculator | Mortgage Overpay",
  description:
    "Use this UK mortgage overpayment calculator to estimate interest saved, time saved, and your new mortgage-free date for a repayment mortgage in seconds.",
  path: ROUTES.calculator,
})

const breadcrumbs = makeBreadcrumbs([{ name: "UK Mortgage Overpayment Calculator", href: ROUTES.calculator }])
const faqs = getFaqs("calculator")

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "UK Mortgage Overpayment Calculator | Mortgage Overpay",
          description:
            "Use this UK mortgage overpayment calculator to estimate interest saved, time saved, and your new mortgage-free date for a repayment mortgage in seconds.",
          path: ROUTES.calculator,
        })}
      />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6">
        <PageIntro title={PAGE_COPY.calculator.title} intro={PAGE_COPY.calculator.intro} />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer={PAGE_COPY.calculator.directAnswer} />
          <KeyPointsList title="What you can learn quickly" items={PAGE_COPY.calculator.keyPoints} />
        </div>
      </Section>

      <Section className="pt-0">
        <MortgageCalculator />
      </Section>

      <Section
        title="How mortgage overpayments work"
        description="A short summary of what changes when you pay extra towards a UK repayment mortgage."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">How does an overpayment reduce the balance faster?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Each extra payment goes towards the balance sooner, so less of the mortgage is left outstanding in later months.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Why can this reduce total interest?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Interest is charged on the remaining balance. If the balance falls faster, future interest is usually charged on a smaller amount.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">How do monthly overpayments and lump sums differ?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A monthly overpayment changes the path steadily over time, while a lump sum makes a one-off reduction to the balance straight away.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="What to check before overpaying"
        description="Keep the result practical by checking a few real-world details before you act."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Whether your mortgage allows regular or one-off overpayments",
            "What the typical UK overpayment limit is in your mortgage terms",
            "Whether an early repayment charge could apply",
            "Whether emergency savings should come first for flexibility",
          ].map((item) => (
            <article key={item} className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-700">
              {item}
            </article>
          ))}
        </div>
      </Section>

      <Section title="Useful next steps" description="Use the guides below to sense-check the result and plan the next step.">
        <InternalLinkBlock title="Related guides" links={PAGE_COPY.calculator.relatedLinks} />
      </Section>

      <Section title="Important note" description="Keep the result practical and grounded.">
        <TrustNote children="This calculator gives estimates for a UK repayment mortgage using the figures you enter. Your lender terms, overpayment limits, charges, and individual circumstances may differ." />
      </Section>

      <FAQSection items={faqs} />

      <CTASection
        title="Test another overpayment scenario"
        description="Try a lower or higher monthly overpayment, add a lump sum, and compare the result without losing your place."
      />
    </>
  )
}
