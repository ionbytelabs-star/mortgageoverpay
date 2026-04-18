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
          intro="Mortgage Overpay was created to give UK homeowners a simple way to understand how overpayments can affect their mortgage."
        />
      </Section>

      <Section title="What the site is for" description="Simple scope is part of the value.">
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <div className="card rounded-[2rem] px-5 py-5">
            Many mortgage tools are overly complex, require sign-ups, or focus on selling products. This site takes a
            different approach by providing a fast, straightforward calculator that helps you see how overpaying could
            change your mortgage-free date and the total interest you pay.
          </div>
          <div className="card rounded-[2rem] px-5 py-5">
            The goal is simple: to offer a free, easy-to-use tool that helps you make more informed decisions about
            your mortgage.
          </div>
        </div>
      </Section>

      <Section title="Assumptions and limitations" description="Clear limitations build trust.">
        <div className="space-y-4">
          <div className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-600">
            This calculator is based on standard UK repayment mortgage assumptions, including monthly interest
            calculations and reducing balances over time. It is designed to give clear estimates that can help with
            planning, but it does not replace personalised financial advice.
          </div>
          <TrustNote children="If you are considering making changes to your mortgage, it is always worth reviewing your lender’s terms and, where appropriate, speaking to a qualified adviser." />
        </div>
      </Section>

      <CTASection
        title="Use the calculator with your own figures"
        description="If you want to see how the model behaves in practice, the calculator is the fastest place to start."
      />
    </>
  )
}
