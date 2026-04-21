import Link from "next/link"

import { BenefitsRow } from "@/components/common/BenefitsRow"
import { ComparisonSection } from "@/components/common/ComparisonSection"
import { CTASection } from "@/components/common/CTASection"
import { FAQSection } from "@/components/common/FAQSection"
import { TrustNote } from "@/components/common/TrustNote"
import { DirectAnswer } from "@/components/content/DirectAnswer"
import { InternalLinkBlock } from "@/components/content/InternalLinkBlock"
import { KeyPointsList } from "@/components/content/KeyPointsList"
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
  title: "UK Mortgage Overpayment Calculator | Interest & Time Saved",
  description:
    "Calculate how much time and interest you could save by overpaying your mortgage. Compare monthly and lump-sum overpayments with a fast, easy-to-use UK calculator.",
  path: ROUTES.home,
})

const homeFaqs = getFaqs("home")

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd
        data={webPageSchema({
          title: "UK Mortgage Overpayment Calculator | Interest & Time Saved",
          description:
            "Calculate how much time and interest you could save by overpaying your mortgage. Compare monthly and lump-sum overpayments with a fast, easy-to-use UK calculator.",
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
                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Designed for UK repayment mortgages, it helps you estimate interest saved, time saved, and how a monthly
                  overpayment or lump sum could change your mortgage-free date.
                </p>
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
              <div className="space-y-4">
                <DirectAnswer title="UK mortgage overpayment calculator" answer={PAGE_COPY.home.directAnswer} />
                <ul className="space-y-3 rounded-[2rem] border border-slate-200 bg-white px-5 py-5 text-sm leading-6 text-slate-700">
                  {PAGE_COPY.home.keyPoints.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <BenefitsRow />
            </div>

            <div id="calculator-preview" className="space-y-6">
              <MortgageCalculator variant="embedded" />
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="What Happens When You Overpay Your Mortgage?"
        description="Overpaying works by reducing the mortgage balance faster than planned."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Why overpayments can save interest</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              When you overpay a repayment mortgage, the extra amount usually goes towards the balance. That means there is less
              left outstanding, so less interest is usually charged over time.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Why the mortgage term can shorten</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If the balance falls faster, the mortgage can finish earlier than planned. Some lenders may reduce the monthly
              payment instead unless instructed otherwise, so it is worth checking how your own mortgage works.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            This is the reason people use a mortgage overpayment calculator UK borrowers can trust: it turns a general idea into
            a practical estimate. Instead of guessing, you can see how an overpay mortgage UK plan could affect interest paid and
            the mortgage-free date.
          </p>
        </div>
      </Section>

      <Section
        title="Should You Overpay Your Mortgage?"
        description="For some households it is a strong move. For others it is sensible to hold back."
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying can make sense when your mortgage rate is relatively high, you do not have expensive debt elsewhere, you
            already have an emergency fund, and you value becoming mortgage-free sooner.
          </p>
            <p>
              It may not be the best option when savings rates are stronger, you need more accessible cash, or your mortgage
              terms include charges that reduce the benefit. That is why the question should I overpay my mortgage UK borrowers
              ask so often never has a one-size-fits-all answer.
            </p>
          <p>The right decision usually depends on your mortgage rate, savings rate, other debts, emergency fund, and how much flexibility you want to keep.</p>
          </div>
          <KeyPointsList
            title="A simple rule of thumb"
            items={[
              "Overpaying often makes more sense when the mortgage rate is higher than the savings rate",
              "Saving may make more sense when you need flexibility or stronger cash reserves",
              "Clearing expensive debt usually comes before mortgage overpayments",
            ]}
          />
        </div>
      </Section>

      <Section
        title="How Much Could You Save by Overpaying?"
        description="This is where the calculator becomes most useful."
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The calculator helps you test the practical result of overpayments rather than relying on rough assumptions. You can
            see how much interest you might save, how much sooner the mortgage could end, and how the outcome changes if you use
            regular monthly overpayments instead of a lump sum.
          </p>
          <p className="font-medium text-slate-800">
            Use the calculator to see how much interest and time you could save.
          </p>
          <p>
            Try different overpayment amounts to compare the results. Testing a few realistic options often makes the next step
            clearer than reading a general guide alone.
          </p>
        </div>
      </Section>

      <Section
        title="Mortgage Overpayment Limits in the UK"
        description="Overpayment limits matter because they affect how much extra you can pay without a charge."
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Many UK mortgages allow around 10% of the outstanding balance to be overpaid each year during a fixed deal without
            an early repayment charge.
          </p>
          <p>
            Go above the allowance and an early repayment charge may apply. Some mortgages, especially certain tracker or
            standard variable rate deals, may be more flexible or have no meaningful limit at all. Lender terms vary, so it is
            important to check your agreement rather than relying on a general rule.
          </p>
          <p>
            If you want to understand that properly, read{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.overpaymentLimit}>
              mortgage overpayment limits in the UK
            </Link>{" "}
            or go deeper with the{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.tenPercentRule}>
              10% rule and ERC guide
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section
        title="Ways to Overpay Your Mortgage"
        description="There is more than one way to make extra payments."
        className="scroll-mt-24"
      >
        <div id="how-it-works" className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Regular monthly overpayments</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This suits people who want a steady, predictable plan. A modest monthly overpayment can build up well over time and
              is often easier to budget for.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Occasional lump sums</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Lump sums can work well after a bonus, inheritance, or other one-off event. They can make a noticeable dent in the
              balance straight away, but they still need to fit your mortgage terms.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Small extra payments whenever possible</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Some people prefer flexible overpayments whenever there is spare cash. Even smaller amounts can still matter if the
              habit is consistent and the mortgage term is long enough.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>If you are not sure which method is best, try different overpayment amounts to compare the results and see what feels practical as well as worthwhile.</p>
        </div>
      </Section>

      <Section
        title="Common Questions About Mortgage Overpayments"
        description="Clear answers help you decide faster."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Is overpaying your mortgage worth it?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              It often is if your goal is to reduce interest and become mortgage-free sooner, and if the overpayment does not
              leave you short of cash elsewhere.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">How much can you overpay on a mortgage in the UK?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Many mortgages allow around 10% of the outstanding balance each year during a fixed deal, but the exact mortgage
              overpayment limit UK borrowers have depends on the lender and deal terms.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Does overpaying reduce the term or monthly payment?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              It can do either, depending on the lender. If your aim is to pay off the mortgage early, check how the overpayment
              is applied.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h2 className="text-lg font-semibold text-slate-950">Should you overpay your mortgage or save instead?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If the mortgage rate is higher than the savings rate, overpaying often has the stronger case. If savings rates are
              better or you need more flexibility, saving may be the better choice.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5 lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-950">Can small overpayments still make a difference?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Yes. Even smaller extra payments can reduce the balance faster and lower the total interest paid over time,
              especially when there are many years left on the mortgage.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="Learn More About Mortgage Overpayments"
        description="Use the homepage as a starting point, then move into the guide that fits your question best."
      >
        <InternalLinkBlock
          title="Start with the right guide"
          links={[
            { href: ROUTES.shouldIOverpay, label: "Should I overpay my mortgage?" },
            { href: ROUTES.overpaymentLimit, label: "Mortgage overpayment limits in the UK" },
            { href: ROUTES.payOffEarly, label: "How to pay off your mortgage early" },
            { href: ROUTES.overpayVsSave, label: "Overpay mortgage or save in the UK" },
          ]}
        />
      </Section>

      <Section
        title="Important Things to Check Before Overpaying"
        description="A short checklist can save you from the most common mistakes."
      >
        <ul className="grid gap-4 lg:grid-cols-2">
          {[
            "Check whether early repayment charges could apply",
            "Check your annual overpayment limit and when it resets",
            "Check whether the lender reduces the term or the monthly payment",
            "Check whether expensive debt should be cleared first",
            "Check whether your emergency fund is strong enough before locking cash into the mortgage",
          ].map((item) => (
            <li key={item} className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-700">
              <span className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-700" />
                <span>{item}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <ComparisonSection />

      <Section title="Plain-English trust note" description="Clear scope, calm tone, and no pressure.">
        <TrustNote children="This calculator gives estimates based on a UK repayment mortgage model. Results are for general guidance only, and lender terms, overpayment limits, charges, and your wider finances may all affect the real outcome." />
      </Section>

      <FAQSection items={homeFaqs} />

      <CTASection
        title="Use the calculator when you are ready"
        description="See how much time and interest you could save, compare a few realistic overpayment amounts, and get a clearer answer in minutes."
        secondaryText="No signup. No account linking. Just a faster route to a more informed decision."
      />
    </>
  )
}
