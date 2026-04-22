import Link from "next/link"

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
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "Lump Sum Mortgage Overpayment UK | Mortgage Overpay",
  description:
    "See how a lump sum mortgage overpayment could change your balance, term, and interest saving in the UK.",
  path: ROUTES.lumpSumOverpayment,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Lump sum mortgage overpayment UK", href: ROUTES.lumpSumOverpayment }])
const faqs = getFaqs("lumpSumOverpayment")

const keyPoints = [
  "A lump sum reduces the mortgage balance immediately, which usually lowers future interest.",
  "The earlier in the term you make the overpayment, the bigger the potential interest saving tends to be.",
  "A lump sum only works well if it still leaves enough accessible cash and stays within the mortgage rules.",
]

const comparisonRows = [
  {
    factor: "Speed of impact",
    lumpSum: "Immediate cut to the mortgage balance",
    monthly: "Builds effect gradually over time",
  },
  {
    factor: "Budget pressure",
    lumpSum: "One-off decision using existing cash",
    monthly: "Ongoing commitment from monthly income",
  },
  {
    factor: "Best suited to",
    lumpSum: "Bonus, inheritance, sale proceeds, mature savings",
    monthly: "Regular spare income you can sustain comfortably",
  },
  {
    factor: "Main risk",
    lumpSum: "Using too much cash in one go",
    monthly: "Choosing an amount that becomes hard to keep up",
  },
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.tenPercentRule, label: "Read about the 10% rule and ERCs" },
  { href: ROUTES.payOffEarly, label: "Read how to pay off your mortgage early" },
  { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
]

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
      <JsonLd
        data={articleSchema({
          title: "Lump Sum Mortgage Overpayment UK | Mortgage Overpay",
          description:
            "See how a lump sum mortgage overpayment could change your balance, term, and interest saving in the UK.",
          path: ROUTES.lumpSumOverpayment,
          keywords: [
            "lump sum mortgage overpayment UK",
            "one-off mortgage overpayment UK",
            "mortgage overpayment calculator UK",
            "lump sum overpay mortgage how much save",
          ],
          about: ["Lump sum mortgage overpayments", "UK repayment mortgages", "Interest savings"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Lump Sum Mortgage Overpayment UK: How Much Can You Save?"
          intro="A one-off mortgage overpayment can be one of the simplest ways to reduce the balance quickly. This guide explains how lump sums work, when they can be effective, what to check first, and how to judge whether a large one-off payment makes sense in your situation."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="A lump sum mortgage overpayment can save a meaningful amount of interest because it reduces the balance immediately. In general, the earlier you make the payment and the higher the mortgage rate, the stronger the saving can be. The catch is that a lump sum only works well if it stays within your mortgage terms and still leaves you with enough accessible cash afterwards." />
          <KeyPointsList title="Key takeaway" items={keyPoints} />
        </div>
      </Section>

      <Section
        title="Why a lump sum can be powerful"
        description="The main advantage of a lump sum is speed: it reduces the balance straight away instead of waiting for small monthly gains to build up."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            On a repayment mortgage, interest is usually charged on the balance that remains. If you reduce that balance in one
            large move, future interest is usually lower from that point onwards. That is why a lump sum can feel so effective.
          </p>
          <p>
            The timing matters too. A lump sum made earlier in the mortgage generally saves more total interest than the same
            lump sum paid much later, because there is more future interest left to avoid.
          </p>
          <p>
            This does not mean every lump sum should automatically go into the mortgage. It simply means the potential effect can
            be strong, which is why it is worth checking properly with our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator
            </Link>{" "}
            before deciding.
          </p>
        </div>
      </Section>

      <Section
        title="Where lump sum overpayments usually come from"
        description="The best candidates for a one-off overpayment are usually one-off pots of money rather than money needed for monthly living costs."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            "Annual bonuses or commission",
            "Maturing savings or fixed-term cash",
            "Inheritance or gifts",
            "Sale proceeds from another asset",
          ].map((item) => (
            <article key={item} className="card rounded-[2rem] px-5 py-5">
              <h3 className="text-base font-semibold text-slate-950">{item}</h3>
            </article>
          ))}
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The reason this matters is practical. If the money was already earmarked as a one-off amount, using some or all of
            it for the mortgage may be more realistic than trying to add a large extra monthly commitment from income that is
            already under pressure.
          </p>
        </div>
      </Section>

      <Section
        title="Lump sum vs monthly overpayments"
        description="Both approaches can work well. The better one depends on the source of the money and how much flexibility you want to keep."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <h3 className="text-lg font-semibold text-slate-950">One-off overpayment compared with monthly overpayments</h3>
          <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Factor</th>
                <th className="py-2 pr-4 font-semibold">Lump sum</th>
                <th className="py-2 font-semibold">Monthly overpayments</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.factor} className="border-b border-slate-100 align-top last:border-b-0">
                  <th className="py-3 pr-4 font-medium text-slate-950">{row.factor}</th>
                  <td className="py-3 pr-4">{row.lumpSum}</td>
                  <td className="py-3">{row.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The main strength of a lump sum is that it gets to work immediately. The main strength of a monthly overpayment is
            that it may be easier to fit into real life. Many people end up using both: a regular monthly amount when possible
            and a lump sum when a one-off pot becomes available.
          </p>
        </div>
      </Section>

      <Section
        title="Worked examples"
        description="These examples are illustrative only, but they show why lump sums can be effective when used carefully."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: £5,000 early in the term</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Imagine a mortgage balance of £220,000 at 4.8% with 24 years left. A £5,000 lump sum paid now could reduce the
                balance immediately and save a noticeable amount of interest over the years ahead.
              </p>
              <p>
                The exact saving depends on the repayment structure and lender treatment, but the basic point is simple: there
                is a lot of future interest still left on the mortgage, so the earlier balance reduction has time to work.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: £10,000 with only 8 years left</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Now imagine a borrower with only 8 years left on the mortgage. A £10,000 lump sum can still help, but the total
                interest left to save is smaller than in the first example because less time remains.
              </p>
              <p>
                In that case, the benefit may still be worthwhile, but it is less dramatic than many people expect. This is why
                testing the numbers matters rather than assuming a large lump sum always produces a huge saving.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Bonus arrives during a fixed deal</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower receives a work bonus and wants to overpay, but they are already close to the annual allowance on the
              mortgage. The idea may still work, but only if it fits within the deal rules or the charge is acceptable.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 4: Strong savings buffer first</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Another borrower has £12,000 spare but only a weak emergency fund. In that case the better move may be to keep
              part of the money in savings and use only a portion of it for the mortgage.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="What to check before using a lump sum"
        description="This is the part that stops a good idea becoming an expensive or stressful one."
        compact
      >
        <ol className="space-y-4">
          {[
            "Check the mortgage deal for any annual overpayment limit and any early repayment charge.",
            "Check whether the lender reduces the term or the monthly payment after a lump sum unless you instruct otherwise.",
            "Check how much cash you still need to keep available for emergencies or planned spending.",
            "Use the calculator to compare the lump sum with a smaller monthly overpayment plan.",
            "Decide whether all, some, or none of the lump sum should go into the mortgage.",
          ].map((step, index) => (
            <li key={step} className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-700">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-semibold text-teal-800">
                  {index + 1}
                </span>
                <span>{step}</span>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="When a lump sum may not be the best move"
        description="Even when the mortgage saving looks attractive, there are times when caution is the smarter choice."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A lump sum may not be the best move if using it would wipe out most of your cash reserves. It may also be a poor
            fit if you are near the end of a fixed deal and waiting a little longer could avoid a fee.
          </p>
          <p>
            It may also be less attractive if your mortgage rate is relatively low and the same money has a more valuable short-
            term job to do elsewhere. In those cases, the idea of a large overpayment can still sound good while being less
            practical than it first appears.
          </p>
        </div>
      </Section>

      <Section
        title="How much of a lump sum should you use?"
        description="The right answer is often some of the money, not automatically all of it."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A common mistake is to treat a one-off pot as if it only has one sensible destination. In practice, the money may
            need to do more than one job. Part of it may belong in savings, part in the mortgage, and part may be better kept
            for other planned costs.
          </p>
          <p>
            This is especially true if the lump sum represents a rare opportunity such as an inheritance or a bonus after a
            difficult year. The best outcome is not always the largest overpayment. It is the one that improves the mortgage
            without weakening your wider position.
          </p>
        </div>
      </Section>

      <Section
        title="Lump sum now or hold the cash back?"
        description="This is often the real decision behind the overpayment question."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Holding the cash back may be wiser if your savings would otherwise become too low, if a fixed deal is about to end,
            or if you are still deciding whether the money may be needed elsewhere. A lump sum should feel deliberate, not
            forced.
          </p>
          <p>
            If you are undecided, compare a one-off payment with a smaller monthly overpayment plan. Sometimes the best answer
            is not a single large move but a more cautious blend of both approaches.
          </p>
        </div>
      </Section>

      <Section
        title="How to compare a lump sum with a monthly plan"
        description="A one-off payment can look attractive, but it is worth comparing it with a smaller regular overpayment before deciding."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The right comparison is not only between paying and not paying. It is also between paying everything now or
            spreading the effort over time. A lump sum may create a bigger immediate drop in the balance, but a monthly plan may
            preserve more comfort and flexibility.
          </p>
          <p>
            This is especially relevant if the lump sum would use up a large part of your spare cash. A smaller regular
            overpayment may still move the mortgage in the right direction without concentrating all the decision into one day.
          </p>
          <p>
            Use the calculator to compare the lump sum with a monthly overpayment over the same period. That often makes the
            trade-off much easier to judge.
          </p>
        </div>
      </Section>

      <Section
        title="When a partial lump sum may be the best answer"
        description="You do not always need to choose between paying all of it and paying none of it."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Many of the best lump-sum decisions involve using only part of the money. That may mean keeping some back for
            emergency savings, a planned renovation, or a period of uncertain income while still putting a useful amount into the
            mortgage.
          </p>
          <p>
            A partial lump sum often feels more balanced because it gives you progress without the same pressure that can follow
            from using every available pound at once.
          </p>
          <p>
            That balance is often what makes the decision sustainable. The best lump sum is usually the one that improves the
            mortgage and still leaves the rest of your finances feeling steady afterwards.
          </p>
          <p>
            For many borrowers, that middle ground is what turns a tempting idea into a genuinely workable one.
          </p>
          <p>
            It also gives you room to adjust later if rates, income, or priorities change after the payment has been made.
          </p>
          <p>
            For many borrowers, that flexibility is exactly what makes a partial lump sum feel more sensible than an all-in
            decision.
          </p>
          <p>
            It gives the overpayment a stronger chance of feeling like progress rather than a source of second thoughts.
          </p>
          <p>That extra breathing room can matter just as much as the mortgage saving itself when life does not go exactly to plan later on in the year either for you or your household more generally.</p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Straight answers to the questions people usually ask before making a one-off mortgage overpayment."
        compact
      />

      <Section title="Useful next steps" description="These guides help you turn a one-off payment into a proper plan." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="A lump sum only works well when it fits both the mortgage rules and your wider finances." compact>
        <TrustNote children="This page is for general guidance only. The likely saving from a lump sum depends on your mortgage balance, rate, remaining term, lender rules, and how much cash you still need to keep accessible." />
      </Section>

      <CTASection
        title="Test a lump sum with your own figures"
        description="Enter a one-off overpayment in the calculator and compare the change in mortgage-free date and interest saved before making the payment."
        compact
      />
    </>
  )
}
