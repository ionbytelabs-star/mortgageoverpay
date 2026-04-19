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
  title: "Is Overpaying Your Mortgage Worth It? | Mortgage Overpay",
  description:
    "See when overpaying your mortgage may be worth it in the UK and when flexibility or savings may matter more.",
  path: ROUTES.worthIt,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Is overpaying your mortgage worth it?", href: ROUTES.worthIt }])

export default function WorthItPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Is Overpaying Your Mortgage Worth It? | Mortgage Overpay",
          description:
            "See when overpaying your mortgage may be worth it in the UK and when flexibility or savings may matter more.",
          path: ROUTES.worthIt,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Is Overpaying Your Mortgage Worth It in the UK?"
          intro="Overpaying can be worthwhile, but the real value depends on how much interest it saves and what flexibility you give up."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer="Overpaying is often worth considering if you want to reduce interest and become mortgage-free sooner. It may be less attractive if you need easier access to cash, face overpayment charges, or would feel stretched by giving up extra savings." />
          <KeyPointsList
            items={[
              "Worth is about both savings and flexibility",
              "Charges and limits can change the result",
              "Small overpayments can still make a noticeable difference over time",
            ]}
          />
        </div>
      </Section>

      <Section title="When does it usually feel worthwhile?" description="People often judge the decision by a mix of savings and peace of mind." compact>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">It may feel worthwhile when</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              You value clearing the mortgage sooner, you already have a cash buffer, and the projected interest saving feels meaningful enough to justify the extra payment.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">It may feel less worthwhile when</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Your budget is tight, you may need the money soon, or your mortgage terms mean a charge could apply if you overpay too aggressively.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">A practical way to sense-check it</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Use the <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>mortgage overpayment calculator</Link> and compare the savings with the flexibility you would lose.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">One detail people overlook</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Some of the benefit can disappear if you breach a limit or ignore an early repayment charge, so checking the terms still matters.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Related guides" description="Use one page for the principle and another for the numbers." compact>
        <InternalLinkBlock
          links={[
            { href: ROUTES.overpayVsSave, label: "Compare overpaying with saving" },
            { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
          ]}
        />
      </Section>

      <Section title="Important note" description="A useful estimate is still only part of the picture." compact>
        <TrustNote children="Whether overpaying feels worth it is personal as well as mathematical. Use the projected savings as a guide, then compare them with your need for flexibility and your own mortgage terms." />
      </Section>

      <CTASection
        title="Check whether the saving feels worth it"
        description="Enter your figures and compare the projected time saved and interest saved against the trade-off in flexibility."
        compact
      />
    </>
  )
}
