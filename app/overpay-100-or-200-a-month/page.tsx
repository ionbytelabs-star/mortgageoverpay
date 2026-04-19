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
  title: "What Happens If You Overpay 100 or 200 a Month? | Mortgage Overpay",
  description:
    "See how an extra 100 or 200 a month could affect your mortgage term and interest in the UK.",
  path: ROUTES.overpay100Or200,
})

const breadcrumbs = makeBreadcrumbs([{ name: "What happens if you overpay 100 or 200 a month?", href: ROUTES.overpay100Or200 }])

export default function Overpay100Or200Page() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "What Happens If You Overpay 100 or 200 a Month? | Mortgage Overpay",
          description:
            "See how an extra 100 or 200 a month could affect your mortgage term and interest in the UK.",
          path: ROUTES.overpay100Or200,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="What Happens If You Overpay GBP100 or GBP200 a Month on Your Mortgage?"
          intro="Even a modest monthly overpayment can make a difference over time because it reduces the balance faster than planned."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer="Overpaying by GBP100 or GBP200 a month can shorten the mortgage term and reduce the total interest paid, even if the monthly amount feels relatively small. The exact result depends on your balance, rate, and remaining term, which is why an estimate based on your own figures is more useful than a generic example." />
          <KeyPointsList
            items={[
              "Small regular overpayments can build up surprisingly well",
              "The benefit is usually larger when more term remains",
              "The best test is to compare a few realistic monthly amounts",
            ]}
          />
        </div>
      </Section>

      <Section title="Why can a small amount still matter?" description="The effect comes from consistency rather than a dramatic one-off change." compact>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Balance falls faster</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Each extra payment chips away at the balance ahead of schedule, so the mortgage has less capital left in later months.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Interest usually falls too</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Because interest is charged on the remaining balance, lowering that balance sooner usually reduces future interest.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Consistency matters</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A regular amount you can keep up comfortably often works better than a higher figure that is hard to sustain.
            </p>
          </article>
        </div>
      </Section>

      <Section title="What next?" description="The quickest way to judge it is to compare the numbers with your own mortgage." compact>
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Test GBP100 and GBP200 in the <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>mortgage overpayment calculator</Link> and compare the change in mortgage-free date and interest saved. Then sense-check that result against your budget and any overpayment limits.
          </p>
        </div>
      </Section>

      <Section title="Related guides" description="Use these pages to compare the practical trade-offs." compact>
        <InternalLinkBlock
          links={[
            { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
            { href: ROUTES.worthIt, label: "Read is overpaying your mortgage worth it?" },
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
          ]}
        />
      </Section>

      <Section title="Trust note" description="The result still needs your own mortgage details." compact>
        <TrustNote children="A smaller monthly overpayment can still be useful, but the exact outcome depends on your own mortgage figures and whether the payment fits comfortably within your budget." />
      </Section>

      <CTASection
        title="Compare GBP100 and GBP200 with your own figures"
        description="Use the calculator to test both amounts side by side and see which one feels realistic as well as worthwhile."
        compact
      />
    </>
  )
}
