import { PageIntro } from "@/components/content/PageIntro"
import { Section } from "@/components/layout/Section"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "Privacy Policy | Mortgage Overpay",
  description: "Read the privacy placeholder page for Mortgage Overpay.",
  path: ROUTES.privacy,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Privacy", href: ROUTES.privacy }])

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Privacy Policy | Mortgage Overpay",
          description: "Read the privacy placeholder page for Mortgage Overpay.",
          path: ROUTES.privacy,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6">
        <PageIntro
          title="Privacy placeholder"
          intro="This placeholder page sets the structure for a fuller privacy policy once analytics, cookies, and any future contact features are finalised."
        />
      </Section>

      <Section title="Current position" description="Plain English and minimal assumptions.">
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <div className="card rounded-[2rem] px-5 py-5">
            Version 1 is designed to work without login, signup, or account linking. Mortgage calculations run in the browser using the figures you enter.
          </div>
          <div className="card rounded-[2rem] px-5 py-5">
            If analytics, cookies, advertising, or user contact features are added later, this page should be updated with clear details about what is collected, why, and how it is handled.
          </div>
        </div>
      </Section>
    </>
  )
}
