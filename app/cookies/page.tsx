import { PageIntro } from "@/components/content/PageIntro"
import { Container } from "@/components/layout/Container"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "Cookie Policy | Mortgage Overpay",
  description: "Read the Cookie Policy for Mortgage Overpay.",
  path: ROUTES.cookies,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Cookies", href: ROUTES.cookies }])

type PolicySectionProps = {
  title: string
  description: string
  children: React.ReactNode
}

function PolicySection({ title, description, children }: PolicySectionProps) {
  return (
    <section className="py-4 sm:py-5">
      <Container>
        <div className="mb-4 max-w-3xl space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        </div>
        {children}
      </Container>
    </section>
  )
}

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Cookie Policy | Mortgage Overpay",
          description: "Read the Cookie Policy for Mortgage Overpay.",
          path: ROUTES.cookies,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <section className="pt-6">
        <Container>
          <PageIntro
            title="Cookie Policy"
            intro="This website uses cookies to improve your experience and understand how the site is used."
          />
        </Container>
      </section>

      <PolicySection title="What are cookies?" description="A simple explanation.">
        <div className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-600">
          Cookies are small text files stored on your device when you visit a website. They help websites function
          properly and provide information to site owners.
        </div>
      </PolicySection>

      <PolicySection title="How we use cookies" description="Cookies help us understand and improve the site.">
        <div className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-600">
          <ul className="space-y-3">
            <li>analyse website traffic</li>
            <li>understand user behaviour</li>
            <li>improve performance and usability</li>
          </ul>
        </div>
      </PolicySection>

      <PolicySection title="Third-party cookies" description="Some cookies may come from trusted external services.">
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <div className="card rounded-[2rem] px-5 py-5">
            Some cookies may be set by third-party services, such as analytics or advertising providers. These
            services may use cookies to collect information about your interactions with this site.
          </div>
          <div className="card rounded-[2rem] px-5 py-5">
            You can control and delete cookies through your browser settings. Most browsers allow you to refuse or
            accept cookies and delete existing ones.
          </div>
        </div>
      </PolicySection>

      <PolicySection title="Consent" description="Using the site means accepting this cookie policy.">
        <div className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-600">
          By continuing to use this website, you consent to the use of cookies as described in this policy.
        </div>
      </PolicySection>
    </>
  )
}
