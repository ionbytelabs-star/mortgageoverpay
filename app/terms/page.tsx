import { PageIntro } from "@/components/content/PageIntro"
import { Section } from "@/components/layout/Section"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "Terms | Mortgage Overpay",
  description: "Read the terms placeholder page for Mortgage Overpay.",
  path: ROUTES.terms,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Terms", href: ROUTES.terms }])

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Terms | Mortgage Overpay",
          description: "Read the terms placeholder page for Mortgage Overpay.",
          path: ROUTES.terms,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6">
        <PageIntro
          title="Terms placeholder"
          intro="This placeholder page sets a simple structure for future site terms and should be expanded before launch."
        />
      </Section>

      <Section title="Important points" description="The practical essentials for version 1.">
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <div className="card rounded-[2rem] px-5 py-5">
            The calculator provides illustrative information only. It does not provide personalised advice and does not confirm the exact terms of any individual mortgage.
          </div>
          <div className="card rounded-[2rem] px-5 py-5">
            Anyone using the site should check their own mortgage paperwork, charges, and overpayment conditions before making financial decisions.
          </div>
        </div>
      </Section>
    </>
  )
}
