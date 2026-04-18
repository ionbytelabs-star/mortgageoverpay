import { AdPlaceholder } from "@/components/common/AdPlaceholder"
import { CTASection } from "@/components/common/CTASection"
import { FAQSection } from "@/components/common/FAQSection"
import { TrustNote } from "@/components/common/TrustNote"
import { DirectAnswer } from "@/components/content/DirectAnswer"
import { InternalLinkBlock } from "@/components/content/InternalLinkBlock"
import { KeyPointsList } from "@/components/content/KeyPointsList"
import { PageIntro } from "@/components/content/PageIntro"
import { Section } from "@/components/layout/Section"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { JsonLd } from "@/components/seo/JsonLd"
import { getFaqs } from "@/lib/faq"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"
import { PAGE_COPY } from "@/content/pageCopy"

export const metadata = buildMetadata({
  title: "Should I Overpay My Mortgage? | UK Guide",
  description:
    "Learn when mortgage overpayments may make sense, what to check first, and how to compare overpaying with other options.",
  path: ROUTES.shouldIOverpay,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Should I overpay my mortgage?", href: ROUTES.shouldIOverpay }])
const faqs = getFaqs("shouldIOverpay")

export default function ShouldIOverpayPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Should I Overpay My Mortgage? | UK Guide",
          description:
            "Learn when mortgage overpayments may make sense, what to check first, and how to compare overpaying with other options.",
          path: ROUTES.shouldIOverpay,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6">
        <PageIntro title={PAGE_COPY.shouldIOverpay.title} intro={PAGE_COPY.shouldIOverpay.intro} />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer={PAGE_COPY.shouldIOverpay.directAnswer} />
          <KeyPointsList items={PAGE_COPY.shouldIOverpay.keyPoints} />
        </div>
      </Section>

      <Section title="What usually matters most?" description="The best answer is often more about priorities than formulas.">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Overpaying may suit you when</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Reducing interest, becoming mortgage-free sooner, and keeping the plan simple matter more to you than preserving maximum cash flexibility.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Holding cash may suit you when</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              You want a stronger emergency buffer, expect near-term spending, or are not fully comfortable locking extra money into the mortgage balance.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">What to check first</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Look at overpayment limits, possible charges, your current interest rate, and whether the extra payment still leaves enough monthly breathing room.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">A practical way to decide</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Test a realistic figure in the calculator, then ask whether the projected time saved and interest saved feel worth the reduced flexibility.
            </p>
          </article>
        </div>
      </Section>

      <Section className="pt-0">
        <AdPlaceholder label="Reserved banner placement after the first major supporting section" />
      </Section>

      <Section title="Helpful next steps" description="Move from a general decision to a more specific plan.">
        <InternalLinkBlock
          links={[
            { href: ROUTES.calculator, label: "Use the mortgage overpayment calculator" },
            { href: ROUTES.overpaymentLimit, label: "Check mortgage overpayment limits in the UK" },
            { href: ROUTES.payOffEarly, label: "Read how to pay off your mortgage early" },
          ]}
        />
      </Section>

      <Section className="pt-0">
        <AdPlaceholder
          label="Optional lower-page advert placement on a longer supporting guide"
          variant="rectangle"
        />
      </Section>

      <Section title="Clear limitation" description="A good result still needs a final sense-check.">
        <TrustNote children="Whether overpaying is right for you depends on your own mortgage terms, cash buffer, and wider priorities. This page explains the trade-offs, not a one-size-fits-all answer." />
      </Section>

      <FAQSection items={faqs} />

      <CTASection
        title="Compare the numbers with your own figures"
        description="If you are weighing overpaying against other options, the calculator gives you a practical answer to compare."
      />
    </>
  )
}
