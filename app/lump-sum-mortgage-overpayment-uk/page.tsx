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
  title: "Lump Sum Mortgage Overpayment UK | Mortgage Overpay",
  description:
    "See how a lump sum mortgage overpayment could change your balance, term, and interest saving in the UK.",
  path: ROUTES.lumpSumOverpayment,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Lump sum mortgage overpayment UK", href: ROUTES.lumpSumOverpayment }])

export default function LumpSumOverpaymentPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Lump Sum Mortgage Overpayment UK | Mortgage Overpay",
          description:
            "See how a lump sum mortgage overpayment could change your balance, term, and interest saving in the UK.",
          path: ROUTES.lumpSumOverpayment,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Lump Sum Mortgage Overpayment UK: How Much Can You Save?"
          intro="A one-off payment can reduce your mortgage balance straight away, which may shorten the term and cut future interest."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer="A lump sum overpayment can save interest because it reduces the balance immediately. The earlier the balance falls, the less interest is usually charged afterwards, although the exact saving depends on your rate, remaining term, and mortgage rules." />
          <KeyPointsList
            items={[
              "A lump sum hits the balance straight away",
              "The benefit depends on the mortgage rate and time left",
              "Always check whether the payment counts towards an overpayment limit",
            ]}
          />
        </div>
      </Section>

      <Section title="What changes after a lump sum?" description="The result often comes through a few linked effects." compact>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Lower balance</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The outstanding balance drops immediately, so the mortgage has less capital left to repay.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Lower future interest</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Interest is then usually charged on a smaller amount, which is where the long-term saving can come from.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Shorter path</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Depending on your lender’s approach, the mortgage term may reduce faster once the balance has been cut.
            </p>
          </article>
        </div>
      </Section>

      <Section title="What to check first" description="A lump sum can be powerful, but the mortgage terms still come first." compact>
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Check whether a one-off payment counts towards your annual allowance and whether an early repayment charge could apply. It may also help to compare the effect of a lump sum with a smaller ongoing monthly overpayment in the{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section title="Related guides" description="Use these pages to sense-check the result before you act." compact>
        <InternalLinkBlock
          links={[
            { href: ROUTES.tenPercentRule, label: "Read about the 10% rule and ERCs" },
            { href: ROUTES.payOffEarly, label: "Read how to pay off your mortgage early" },
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
          ]}
        />
      </Section>

      <Section title="Practical note" description="A lump sum can help, but it still needs context." compact>
        <TrustNote children="A one-off overpayment can look strong on paper, but the right amount depends on your cash reserves, mortgage terms, and whether the money may be needed elsewhere." />
      </Section>

      <CTASection
        title="Try a lump sum with your own figures"
        description="Enter a one-off overpayment in the calculator and compare the change in payoff date and interest saved."
        compact
      />
    </>
  )
}
