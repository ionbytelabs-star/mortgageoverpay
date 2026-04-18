import { PageIntro } from "@/components/content/PageIntro"
import { Container } from "@/components/layout/Container"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "Privacy Policy | Mortgage Overpay",
  description: "Read the Privacy Policy for Mortgage Overpay.",
  path: ROUTES.privacy,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Privacy", href: ROUTES.privacy }])

type PolicySectionProps = {
  title: string
  description?: string
  children: React.ReactNode
}

function PolicySection({ title, description, children }: PolicySectionProps) {
  return (
    <section className="py-4 sm:py-5">
      <Container>
        <div className="mb-4 max-w-3xl">
          <h2 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
          {description ? <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Privacy Policy | Mortgage Overpay",
          description: "Read the Privacy Policy for Mortgage Overpay.",
          path: ROUTES.privacy,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <section className="pt-6 pb-4 sm:pb-5">
        <Container>
        <PageIntro
          title="Privacy Policy"
          intro="This Privacy Policy explains how Mortgage Overpay collects, uses, and protects any information you provide when using this website."
        />
        </Container>
      </section>

      <PolicySection title="Information we collect" description="Plain English and straightforward scope.">
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <div className="card rounded-[2rem] px-5 py-5">
            We do not require users to create an account or provide personal details to use the calculator. However,
            we may collect anonymised usage data through analytics tools.
          </div>
        </div>
      </PolicySection>

      <PolicySection title="How we use information" description="This helps us keep the site useful and reliable.">
        <div className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-600">
          <ul className="space-y-3">
            <li>understand how visitors use the site</li>
            <li>improve functionality and user experience</li>
            <li>monitor site performance</li>
          </ul>
        </div>
      </PolicySection>

      <PolicySection
        title="Cookies and tracking"
        description="Traffic and performance may be measured using standard website tools."
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <div className="card rounded-[2rem] px-5 py-5">
            This site uses cookies and similar technologies to analyse traffic and improve the website. These may
            include third-party services such as analytics and advertising providers.
          </div>
          <div className="card rounded-[2rem] px-5 py-5">
            We may use third-party services, including analytics and advertising platforms, which may collect
            information in accordance with their own privacy policies.
          </div>
        </div>
      </PolicySection>

      <PolicySection title="Data security" description="Calculator use is designed to stay simple and low friction.">
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <div className="card rounded-[2rem] px-5 py-5">
            We are committed to ensuring that your information is secure. No personal financial data entered into the
            calculator is stored or transmitted.
          </div>
          <div className="card rounded-[2rem] px-5 py-5">
            You can choose to disable cookies through your browser settings. You also have rights under UK data
            protection law regarding your personal data.
          </div>
        </div>
      </PolicySection>

      <PolicySection title="Changes to this policy" description="This page may be updated from time to time.">
        <div className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-600">
          We may update this policy from time to time. Any changes will be posted on this page.
        </div>
      </PolicySection>
    </>
  )
}
