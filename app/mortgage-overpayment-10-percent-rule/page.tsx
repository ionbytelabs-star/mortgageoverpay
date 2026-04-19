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
  title: "Mortgage Overpayment 10% Rule & ERC | Mortgage Overpay",
  description:
    "Understand the UK 10% mortgage overpayment rule, early repayment charges, and what to check before paying extra.",
  path: ROUTES.tenPercentRule,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Mortgage overpayment 10% rule and ERC", href: ROUTES.tenPercentRule }])

export default function TenPercentRulePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Mortgage Overpayment 10% Rule & ERC | Mortgage Overpay",
          description:
            "Understand the UK 10% mortgage overpayment rule, early repayment charges, and what to check before paying extra.",
          path: ROUTES.tenPercentRule,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Mortgage Overpayment Limits UK: The 10% Rule & ERC Explained"
          intro="Many borrowers hear about a 10% rule, but the exact allowance and any charge still depend on the mortgage terms."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer="The 10% rule is a common guide used on some UK mortgages to describe how much you can overpay within a year without a charge. It is not universal, and if you exceed the allowance an early repayment charge may apply, so the exact wording in your own mortgage terms matters more than the rule of thumb." />
          <KeyPointsList
            items={[
              "The 10% rule is common, not guaranteed",
              "ERC means early repayment charge",
              "Monthly overpayments and lump sums may both count towards the same limit",
            ]}
          />
        </div>
      </Section>

      <Section title="What should you check?" description="A few details make the difference between a helpful overpayment and an expensive one." compact>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">How the allowance is measured</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The limit may be based on the balance, the original loan, or a specific period in the mortgage year. That detail changes how much headroom you really have.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Whether an ERC applies</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Charges are most often relevant during fixed or discounted periods, which is why checking the mortgage deal stage matters.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">How lump sums are treated</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A one-off payment may count towards the same allowance as regular monthly overpayments, so it is worth checking before you act.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">How to test the impact</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Once you know the safe allowance, use the <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>mortgage overpayment calculator</Link> to estimate what that level of extra payment could change.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Related guides" description="Use these pages to connect the rule with the practical outcome." compact>
        <InternalLinkBlock
          links={[
            { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
            { href: ROUTES.lumpSumOverpayment, label: "Read about lump sum mortgage overpayments" },
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
          ]}
        />
      </Section>

      <Section title="Calm trust note" description="Rule of thumb does not replace the actual mortgage terms." compact>
        <TrustNote children="This page explains the common idea behind the 10% rule and ERCs, but your own lender wording is the part that counts. Always check the exact allowance before making a larger payment." />
      </Section>

      <CTASection
        title="Check the likely impact before you overpay"
        description="Use the calculator with a realistic extra payment that fits inside your own mortgage allowance."
        compact
      />
    </>
  )
}
