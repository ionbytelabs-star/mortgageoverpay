import Link from "next/link"

import { CTASection } from "@/components/common/CTASection"
import { TrustNote } from "@/components/common/TrustNote"
import { DirectAnswer } from "@/components/content/DirectAnswer"
import { InternalLinkBlock } from "@/components/content/InternalLinkBlock"
import { KeyPointsList } from "@/components/content/KeyPointsList"
import { PageIntro } from "@/components/content/PageIntro"
import { Section } from "@/components/layout/Section"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "Just Remortgaged at a Higher Rate? | Mortgage Overpay",
  description:
    "See practical ways to reduce payment pressure after remortgaging at a higher rate in the UK.",
  path: ROUTES.higherRatePayments,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Just remortgaged at a higher rate?", href: ROUTES.higherRatePayments }])

export default function HigherRatePaymentsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Just Remortgaged at a Higher Rate? | Mortgage Overpay",
          description:
            "See practical ways to reduce payment pressure after remortgaging at a higher rate in the UK.",
          path: ROUTES.higherRatePayments,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Just Remortgaged at a Higher Rate? How to Reduce Your Mortgage Payments Fast"
          intro="A higher rate can put immediate pressure on the monthly budget, so the first step is usually to focus on affordability and breathing room."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer="If your mortgage payment has jumped after remortgaging, the quickest priority is usually stabilising monthly cash flow. That may mean reviewing your budget, checking whether the term or payment structure gives any flexibility, and using overpayments later once the new payment level feels manageable." />
          <KeyPointsList
            items={[
              "Affordability usually comes before overpaying",
              "A steady plan is better than a rushed one",
              "Overpayments may still help later once the new payment settles",
            ]}
          />
        </div>
      </Section>

      <Section title="What can help first?" description="The aim is to reduce pressure without making the situation harder." compact>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Review the budget</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Start by understanding how much room is left each month after the new mortgage payment has landed.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Check the mortgage structure</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Depending on your terms, the lender may offer options around payment level or term that affect affordability.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Delay aggressive overpayments</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If the new rate is already stretching the budget, it may be more realistic to build stability before trying to overpay again.
            </p>
          </article>
        </div>
      </Section>

      <Section title="When can overpayments come back into the plan?" description="Overpayments can still be useful, but timing matters." compact>
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Once the higher payment feels manageable, even a small extra amount may help reduce interest over time. You can test that later with the{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator
            </Link>{" "}
            and compare whether a modest overpayment still feels comfortable.
          </p>
        </div>
      </Section>

      <Section title="Related guides" description="Use these pages when you want to move from pressure control to planning." compact>
        <InternalLinkBlock
          links={[
            { href: ROUTES.overpay100Or200, label: "Read what happens if you overpay 100 or 200 a month" },
            { href: ROUTES.overpayVsSave, label: "Compare overpaying with saving" },
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
          ]}
        />
      </Section>

      <Section title="Important note" description="Keep the plan workable before trying to optimise it." compact>
        <TrustNote children="If your payment has just increased, the first priority is usually keeping the mortgage affordable and your finances stable. Any overpayment plan should come after that, not before it." />
      </Section>

      <CTASection
        title="Check what a smaller overpayment might look like later"
        description="Use the calculator to test a cautious extra amount once the new payment level feels more settled."
        compact
      />
    </>
  )
}
