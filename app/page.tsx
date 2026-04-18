import Link from "next/link"

import { AdPlaceholder } from "@/components/common/AdPlaceholder"
import { BenefitsRow } from "@/components/common/BenefitsRow"
import { ComparisonSection } from "@/components/common/ComparisonSection"
import { CTASection } from "@/components/common/CTASection"
import { FAQSection } from "@/components/common/FAQSection"
import { TrustNote } from "@/components/common/TrustNote"
import { DirectAnswer } from "@/components/content/DirectAnswer"
import { InternalLinkBlock } from "@/components/content/InternalLinkBlock"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { MortgageCalculator } from "@/components/calculator/MortgageCalculator"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { JsonLd } from "@/components/seo/JsonLd"
import { getFaqs } from "@/lib/faq"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { websiteSchema, webPageSchema } from "@/lib/schema"
import { PAGE_COPY } from "@/content/pageCopy"
import { STRAPLINE } from "@/lib/constants"

export const metadata = buildMetadata({
  title: "UK Mortgage Overpayment Calculator and Guides | Mortgage Overpay",
  description:
    "See how UK mortgage overpayments could change your mortgage-free date, interest paid, and total term with instant estimates and practical supporting guides.",
  path: ROUTES.home,
})

const homeFaqs = getFaqs("home")

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd
        data={webPageSchema({
          title: "UK Mortgage Overpayment Calculator and Guides | Mortgage Overpay",
          description:
            "See how UK mortgage overpayments could change your mortgage-free date, interest paid, and total term with instant estimates and practical supporting guides.",
          path: ROUTES.home,
        })}
      />
      <FAQSchema items={homeFaqs} />

      <section className="pb-8 pt-8 sm:pt-10">
        <Container>
          <div className="grid gap-8 2xl:grid-cols-[0.72fr_1.28fr] 2xl:items-start">
            <div className="space-y-6 2xl:pr-6">
              <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
                Fast, practical answers
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  {PAGE_COPY.home.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">{PAGE_COPY.home.intro}</p>
                <p className="max-w-2xl text-base leading-7 text-slate-500">{STRAPLINE}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={ROUTES.calculator}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  Try the calculator
                </Link>
                <Link
                  href="#how-it-works"
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  See how it works
                </Link>
              </div>
              <DirectAnswer answer={PAGE_COPY.home.directAnswer} />
              <BenefitsRow />
            </div>

            <div id="calculator-preview" className="space-y-6">
              <MortgageCalculator variant="embedded" />
            </div>
          </div>
        </Container>
      </section>

      <Section className="pt-0">
        <AdPlaceholder label="Reserved banner placement below homepage hero" />
      </Section>

      <Section title="Useful next steps" description="Choose the page that best matches the question you want to answer next.">
        <InternalLinkBlock
          title="Start with the right page"
          links={[
            { href: ROUTES.calculator, label: "Use the UK mortgage overpayment calculator" },
            { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
            { href: ROUTES.overpaymentLimit, label: "Read about mortgage overpayment limits in the UK" },
            { href: ROUTES.payOffEarly, label: "Read how to pay off your mortgage early" },
          ]}
        />
      </Section>

      <Section
        title="How it works"
        description="The journey is designed to stay simple on a phone and clear on a larger screen."
        className="scroll-mt-24"
      >
        <div id="how-it-works" className="grid gap-4">
          {[
            ["Enter your mortgage figures", "Add your balance, rate, term, and any monthly or one-off overpayment."],
            ["See the result instantly", "The calculator updates straight away with time saved, interest saved, and payoff dates."],
            ["Compare your next move", "Use quick scenario buttons and supporting guides to test practical options."],
          ].map(([title, copy], index) => (
            <article key={title} className="card rounded-[2rem] px-5 py-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-sm font-semibold text-teal-800">
                {index + 1}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <ComparisonSection />

      <Section title="Plain-English trust note" description="Clear scope, calm tone, and no pressure.">
        <TrustNote />
      </Section>

      <FAQSection items={homeFaqs} />

      <CTASection
        title="Use the calculator when you are ready"
        description="Enter your figures, compare a few overpayment scenarios, and get a practical answer in under half a minute."
        secondaryText="No signup. No account linking. Just a faster route to a clearer answer."
      />
    </>
  )
}
