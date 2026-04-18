import { AdPlaceholder } from "@/components/common/AdPlaceholder"
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
  title: "Mortgage Overpayment Limits in the UK | Simple Guide",
  description:
    "Understand typical mortgage overpayment limits in the UK, why they matter, and what to check before making extra payments.",
  path: ROUTES.overpaymentLimit,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Mortgage overpayment limits in the UK", href: ROUTES.overpaymentLimit }])
const faqs = getFaqs("overpaymentLimit")

export default function OverpaymentLimitPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Mortgage Overpayment Limits in the UK | Simple Guide",
          description:
            "Understand typical mortgage overpayment limits in the UK, why they matter, and what to check before making extra payments.",
          path: ROUTES.overpaymentLimit,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6">
        <PageIntro title={PAGE_COPY.overpaymentLimit.title} intro={PAGE_COPY.overpaymentLimit.intro} />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer={PAGE_COPY.overpaymentLimit.directAnswer} />
          <KeyPointsList items={PAGE_COPY.overpaymentLimit.keyPoints} />
        </div>
      </Section>

      <Section title="Why limits matter" description="A good overpayment plan is not just about savings. It also has to fit the mortgage terms.">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">What an overpayment limit does</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              It sets a boundary for how much extra you can repay within a period before a charge may apply. This can affect both monthly overpayments and one-off lump sums.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Why the exact wording matters</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The period, charge trigger, and treatment of lump sums can differ, so it is worth checking your own mortgage paperwork rather than relying on a general rule of thumb.
            </p>
          </article>
        </div>
      </Section>

      <Section className="pt-0">
        <AdPlaceholder label="Reserved banner placement after the first major supporting section" />
      </Section>

      <Section title="What to check before you pay extra" description="A quick checklist can prevent the wrong kind of overpayment.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "How much extra can be paid within the current allowance",
            "Whether a one-off lump sum is treated differently from a monthly overpayment",
            "Whether the lender reduces the term, the monthly payment, or offers a choice",
          ].map((item) => (
            <article key={item} className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-700">
              {item}
            </article>
          ))}
        </div>
      </Section>

      <Section title="Related pages" description="Use the calculator, then sense-check the result against your mortgage terms.">
        <InternalLinkBlock
          links={[
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
            { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
            { href: ROUTES.payOffEarly, label: "Read how to pay off your mortgage early" },
          ]}
        />
      </Section>

      <Section className="pt-0">
        <AdPlaceholder
          label="Optional lower-page advert placement on a longer supporting guide"
          variant="rectangle"
        />
      </Section>

      <Section title="Calm trust note" description="General guidance still needs your own paperwork.">
        <TrustNote children="This guide explains how overpayment limits usually work in principle. It cannot confirm the exact allowance or any charges on your own mortgage." />
      </Section>

      <FAQSection items={faqs} />

      <CTASection
        title="Check the impact before you make an extra payment"
        description="Run the calculator with your intended monthly overpayment or lump sum, then compare it against your own mortgage limit."
      />
    </>
  )
}
