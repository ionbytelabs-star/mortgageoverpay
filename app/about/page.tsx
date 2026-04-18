import { CTASection } from "@/components/common/CTASection"
import { TrustNote } from "@/components/common/TrustNote"
import { PageIntro } from "@/components/content/PageIntro"
import { Section } from "@/components/layout/Section"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "About | Mortgage Overpay",
  description:
    "Learn what Mortgage Overpay is designed to do and how the tool helps UK homeowners estimate the impact of mortgage overpayments.",
  path: ROUTES.about,
})

const breadcrumbs = makeBreadcrumbs([{ name: "About", href: ROUTES.about }])

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "About | Mortgage Overpay",
          description:
            "Learn what Mortgage Overpay is designed to do and how the tool helps UK homeowners estimate the impact of mortgage overpayments.",
          path: ROUTES.about,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6">
        <PageIntro
          title="About Mortgage Overpay"
          intro="Mortgage Overpay is designed to give UK homeowners a faster, clearer view of how mortgage overpayments could change payoff date, interest paid, and total term."
        />
      </Section>

      <Section title="What the site is for" description="Simple scope is part of the value.">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-600">
            The site focuses on quick decision support rather than account setup, dashboards, or linked data. Version 1 is deliberately web-first, fast, and low friction.
          </article>
          <article className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-600">
            The calculator uses a repayment mortgage model with monthly compounding and reducing balance assumptions to estimate time saved and interest saved from overpayments.
          </article>
        </div>
      </Section>

      <Section title="Assumptions and limitations" description="Clear limitations build trust.">
        <TrustNote children="The tool gives illustrative results, not regulated advice. It does not know your exact mortgage contract, charges, or lender treatment of overpayments, so you should always check your own terms before acting." />
      </Section>

      <CTASection
        title="Use the calculator with your own figures"
        description="If you want to see how the model behaves in practice, the calculator is the fastest place to start."
      />
    </>
  )
}
