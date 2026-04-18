import Link from "next/link"

import { CTASection } from "@/components/common/CTASection"
import { FAQSection } from "@/components/common/FAQSection"
import { TrustNote } from "@/components/common/TrustNote"
import { DirectAnswer } from "@/components/content/DirectAnswer"
import { InternalLinkBlock } from "@/components/content/InternalLinkBlock"
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
    "Use this UK mortgage overpayment calculator to estimate interest saved, time saved, and your new mortgage-free date in seconds.",
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
            "Use this UK mortgage overpayment calculator to estimate interest saved, time saved, and your new mortgage-free date in seconds.",
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
        <DirectAnswer answer={PAGE_COPY.calculator.directAnswer} />
      </Section>

      <Section className="pt-0">
        <MortgageCalculator />
      </Section>

      <Section
        title="How mortgage overpayments work"
        description="A repayment mortgage balance falls a little each month. An overpayment pushes that balance down faster."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Why overpaying can reduce total interest</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Interest is charged on the remaining balance. If the balance drops faster, future interest is charged on a smaller amount.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">What to check before overpaying</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Check your mortgage terms for overpayment limits, charges, and whether your lender shortens the term or changes the monthly payment.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Typical UK overpayment limits</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Many mortgages allow some extra repayment each year, but the exact limit can vary. Larger lump sums may count towards that allowance.
            </p>
            <Link href={ROUTES.overpaymentLimit} className="focus-ring mt-4 inline-flex rounded-full text-sm font-semibold text-teal-800">
              Read the overpayment limits guide
            </Link>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Overpay vs save</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Overpaying can reduce interest, while saving can preserve flexibility. The better fit depends on what matters most to your household.
            </p>
            <Link href={ROUTES.shouldIOverpay} className="focus-ring mt-4 inline-flex rounded-full text-sm font-semibold text-teal-800">
              Explore the decision guide
            </Link>
          </article>
        </div>
      </Section>

      <Section title="Related pages" description="Use the guides below to sense-check the result and plan the next step.">
        <InternalLinkBlock title="Go deeper" links={PAGE_COPY.calculator.relatedLinks} />
      </Section>

      <Section title="Important note" description="Keep the result practical and grounded.">
        <TrustNote />
      </Section>

      <FAQSection items={faqs} />

      <CTASection
        title="Test another overpayment scenario"
        description="Try a lower or higher monthly overpayment, add a lump sum, and compare the result without losing your place."
      />
    </>
  )
}
