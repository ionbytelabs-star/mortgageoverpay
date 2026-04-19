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
  title: "Overpay Mortgage or Save in the UK? | Mortgage Overpay",
  description:
    "Compare overpaying your mortgage with saving in the UK and see when each approach may make more sense.",
  path: ROUTES.overpayVsSave,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Overpay mortgage or save in the UK?", href: ROUTES.overpayVsSave }])

export default function OverpayVsSavePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Overpay Mortgage or Save in the UK? | Mortgage Overpay",
          description:
            "Compare overpaying your mortgage with saving in the UK and see when each approach may make more sense.",
          path: ROUTES.overpayVsSave,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Overpay Mortgage or Save in the UK: Which Is Better Right Now?"
          intro="If you have spare cash, the practical question is whether it does more for you reducing mortgage interest or staying available in savings."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer="Overpaying can make sense when your priority is reducing mortgage interest and becoming mortgage-free sooner. Saving may make more sense when flexibility, emergency access, or stronger savings rates matter more than reducing the balance straight away." />
          <KeyPointsList
            items={[
              "Overpaying usually gives a guaranteed reduction in mortgage interest",
              "Savings keep money accessible for emergencies or near-term costs",
              "The right choice depends on rates, flexibility, and your wider plan",
            ]}
          />
        </div>
      </Section>

      <Section title="What usually tips the balance?" description="A simple decision often comes down to a few practical factors." compact>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Your mortgage rate</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The higher the mortgage rate, the stronger the case for overpaying can become because the interest saving is more noticeable.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Your need for access</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Money used for an overpayment is locked into the mortgage, while savings stay available if life changes unexpectedly.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Mortgage terms and limits</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Before overpaying, check <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.tenPercentRule}>the 10% rule and early repayment charges</Link> so the saving is not reduced by fees.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Useful next steps" description="Test the outcome and compare it against your mortgage terms." compact>
        <InternalLinkBlock
          links={[
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
            { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
            { href: ROUTES.worthIt, label: "Read is overpaying your mortgage worth it?" },
          ]}
        />
      </Section>

      <Section title="Practical note" description="A simple rule of thumb still needs a real-world check." compact>
        <TrustNote children="This comparison gives a planning view rather than a personal recommendation. The better option depends on your own rate, cash buffer, and how much flexibility you want to keep." />
      </Section>

      <CTASection
        title="Compare the result with your own figures"
        description="Run the calculator to see what a realistic overpayment could save, then compare that outcome with the value of keeping the cash aside."
        compact
      />
    </>
  )
}
