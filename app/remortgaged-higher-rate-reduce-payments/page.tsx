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
  title: "Just Remortgaged at a Higher Rate? | Mortgage Overpay",
  description:
    "See practical ways to reduce payment pressure after remortgaging at a higher rate in the UK.",
  path: ROUTES.higherRatePayments,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Just remortgaged at a higher rate?", href: ROUTES.higherRatePayments }])
const faqs = getFaqs("higherRatePayments")

const firstSteps = [
  "Work out the new monthly payment clearly and compare it with your actual post-bills budget.",
  "Check whether the mortgage term, product structure, or payment method gives you any flexibility.",
  "Protect emergency savings before trying to force overpayments into a stretched budget.",
  "Review whether smaller overpayments may fit later once the new payment level feels normal.",
]

const comparisonRows = [
  {
    factor: "Immediate priority",
    before: "Optimising longer-term mortgage savings",
    after: "Protecting affordability and cash flow",
  },
  {
    factor: "Useful mindset",
    before: "Efficiency and term reduction",
    after: "Stability first, optimisation second",
  },
  {
    factor: "Best type of action",
    before: "Optional overpayments and tidy planning",
    after: "Budget review, rate review, and cautious next steps",
  },
  {
    factor: "Main risk",
    before: "Paying too little extra",
    after: "Trying to overpay before the new payment is truly manageable",
  },
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator" },
  { href: ROUTES.overpay100Or200, label: "Read what happens if you overpay £100 or £200 a month" },
  { href: ROUTES.overpayVsSave, label: "Compare overpaying with saving" },
  { href: ROUTES.afterFixedRate, label: "Read about overpaying after a fixed rate ends" },
  { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
]

export default function HigherRatePaymentsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Just Remortgaged at a Higher Rate? | Mortgage Overpay",
          description:
            "See practical ways to reduce payment pressure after remortgaging at a higher rate in the UK.",
          path: ROUTES.higherRatePayments,
        })}
      />
      <JsonLd
        data={articleSchema({
          title: "Just Remortgaged at a Higher Rate? | Mortgage Overpay",
          description:
            "See practical ways to reduce payment pressure after remortgaging at a higher rate in the UK.",
          path: ROUTES.higherRatePayments,
          keywords: [
            "just remortgaged at a higher rate",
            "reduce mortgage payments fast UK",
            "remortgaged higher rate what next",
            "mortgage overpayment calculator UK",
          ],
          about: ["Higher mortgage rates", "Remortgaging", "Mortgage affordability"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Just Remortgaged at a Higher Rate? How to Reduce Your Mortgage Payments Fast"
          intro="A higher mortgage rate can change the monthly budget overnight. This guide focuses on the practical next steps: how to steady the budget, where overpayments fit in later, and how to avoid making things harder while you adjust to the new payment."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="If your mortgage payment has jumped after remortgaging, the first priority is usually affordability, not overpaying. The most useful next steps are to review the budget, check whether the mortgage structure gives any flexibility, and protect your cash buffer. Overpayments can still help later, but only once the new payment level feels manageable." />
          <KeyPointsList title="Key takeaway" items={firstSteps} />
        </div>
      </Section>

      <Section
        title="Why the first response matters"
        description="A higher rate does not just raise the payment. It can change the whole feel of the monthly budget."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            When a mortgage payment rises sharply, it is natural to want a fast fix. But the best fix is not always the most
            dramatic one. The first goal is usually to stabilise the monthly position so you know what is genuinely affordable.
          </p>
          <p>
            That often means stepping back from overpayment plans for a moment and looking at the new mortgage payment in the
            context of all your outgoings. Once you know the true room in the budget, the next decision becomes clearer.
          </p>
          <p>
            In other words, the right question is not only how do I reduce the payment fast. It is how do I reduce pressure
            without damaging the rest of my finances.
          </p>
        </div>
      </Section>

      <Section
        title="What to do in the first few weeks"
        description="The early response should focus on clarity, not panic."
        compact
      >
        <ol className="space-y-4">
          {[
            "Write down the new mortgage payment and compare it with the old one so you can see the real change in pounds.",
            "Review essential spending and check what room is genuinely left each month after the new payment has landed.",
            "Pause any overpayment plan that now feels forced or uncomfortable.",
            "Protect emergency cash where possible, because a stretched budget is more vulnerable to disruption.",
            "Only reintroduce overpayments after the new payment level feels normal and manageable.",
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
        title="Before and after remortgaging at a higher rate"
        description="The planning focus usually changes once the new mortgage payment arrives."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <h3 className="text-lg font-semibold text-slate-950">How the priority shifts</h3>
          <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Factor</th>
                <th className="py-2 pr-4 font-semibold">Before the higher rate hits</th>
                <th className="py-2 font-semibold">After the higher rate hits</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.factor} className="border-b border-slate-100 align-top last:border-b-0">
                  <th className="py-3 pr-4 font-medium text-slate-950">{row.factor}</th>
                  <td className="py-3 pr-4">{row.before}</td>
                  <td className="py-3">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Ways to reduce the pressure"
        description="Some responses are about cutting costs, while others are about making the mortgage itself easier to manage."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Review the wider budget</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Start with the broader monthly picture. A cleaner budget often creates more room than expected without touching the
              mortgage terms.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Check the mortgage structure</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Depending on the deal, there may be choices around term, product, or payment approach that affect affordability.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Delay non-essential overpayments</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If the new payment is already a stretch, stabilising cash flow usually comes before trying to optimise interest
              savings again.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="When overpayments can come back into the plan"
        description="Higher rates do not automatically rule out overpaying forever. They just change the timing."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Once the new payment feels manageable, even a modest overpayment may still help reduce interest over time. The best
            first test is often not a large figure but a cautious one, such as £50 or £100 a month, just to see whether it
            genuinely fits.
          </p>
          <p>
            This is where our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator
            </Link>{" "}
            becomes useful again. It can show whether a smaller amount still changes the mortgage enough to feel worthwhile.
          </p>
          <p>
            If you are only just off a fixed deal, it is also worth checking whether overpayment flexibility has changed. Our
            guide on{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.afterFixedRate}>
              overpaying after a fixed rate ends
            </Link>{" "}
            covers that in more detail.
          </p>
        </div>
      </Section>

      <Section
        title="Worked examples"
        description="These examples are illustrative, but they show how different the right response can be depending on the budget."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: Payment rise leaves no real room</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                A household remortgages from a low fixed rate to a much higher one and sees the monthly mortgage cost jump by
                several hundred pounds. The budget is immediately tighter and emergency savings are modest.
              </p>
              <p>
                In that case, the first step is not overpaying. It is stabilising the budget, rebuilding breathing room, and
                deciding later whether a smaller overpayment plan is realistic.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: Payment rise is manageable, overpayments return later</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Another borrower sees the payment rise but still has room in the budget after a review. They pause all
                overpayments for two months, confirm the new normal, then restart with a smaller monthly amount.
              </p>
              <p>
                That approach can work well because it keeps the budget stable first and only adds the overpayment back once it
                is clearly sustainable.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section
        title="Common mistakes after remortgaging at a higher rate"
        description="The biggest errors usually come from reacting too quickly."
        compact
      >
        <ul className="space-y-4">
          {[
            "Trying to continue the old overpayment plan without checking whether the new mortgage payment has changed what is realistic.",
            "Reducing accessible savings too quickly just to keep up the appearance of progress on the mortgage.",
            "Ignoring product or term options that could make the payment more manageable.",
            "Assuming overpaying is still the main priority when affordability has clearly become the bigger issue.",
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

      <Section
        title="Can changing the term help?"
        description="Sometimes a longer term can relieve pressure, but it should be understood clearly before you use it."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Extending the mortgage term can reduce the monthly payment, which may be useful if the immediate problem is
            affordability. But it can also increase the total interest paid over the long run, so it is usually a trade-off
            rather than a free improvement.
          </p>
          <p>
            That does not make it a bad option. It simply means it should be used with a clear understanding of what it solves
            and what it costs. For some households, breathing room now is more important than the longer-term downside.
          </p>
        </div>
      </Section>

      <Section
        title="When to review the plan again"
        description="A higher-rate remortgage often needs one review immediately and another once the dust has settled."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The first review should happen as soon as the new payment starts. The second is often most useful after a couple of
            months, once you have seen how the budget really behaves under the new rate.
          </p>
          <p>
            That second review is often the point where you decide whether overpayments can return, whether the mortgage
            structure still works, or whether more savings should come first.
          </p>
        </div>
      </Section>

      <Section
        title="What if you are on the standard variable rate now?"
        description="Moving onto an SVR after a deal ends can change both the payment level and the flexibility around overpayments."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If you have landed on an SVR, the rate may be significantly higher than your old fixed deal. That can make the
            monthly payment feel heavier, but it may also come with different overpayment flexibility than the previous product.
          </p>
          <p>
            This is one reason the best answer is not always obvious. The right move may be a new deal, a pause on
            overpayments, or a smaller short-term overpayment while you decide what the next mortgage step should be.
          </p>
        </div>
      </Section>

      <Section
        title="Should you use savings to reduce the payment pressure?"
        description="Sometimes the instinct is to throw cash at the mortgage straight away, but that is not always the best response."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If the payment jump has made the budget feel fragile, using too much savings on the mortgage can backfire by
            reducing your margin for unexpected costs. In many cases, keeping a stronger cash buffer is more helpful in the
            short term than forcing the balance down immediately.
          </p>
          <p>
            Once the new rate, new budget, and any future mortgage product options are clearer, you can decide whether some of
            those savings are better used for an overpayment later.
          </p>
        </div>
      </Section>

      <Section
        title="What a calmer recovery plan looks like"
        description="The best response is often gradual rather than dramatic."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A calmer recovery plan usually means getting the monthly budget stable first, keeping cash accessible, and only then
            deciding whether a smaller overpayment can return. That may feel slower, but it is often the more durable route.
          </p>
          <p>
            If the budget improves later, you can always increase the pace. It is usually easier to build back up from a stable
            base than to unwind an overpayment plan that was too ambitious from the start.
          </p>
          <p>
            In that sense, slowing down temporarily is not failure. It is often the smartest way to regain control when the
            mortgage cost has changed sharply.
          </p>
        </div>
      </Section>

      <Section
        title="What a useful next step usually looks like"
        description="The right next move is often smaller and more practical than people expect."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            For many borrowers, the next step is simply to stabilise the budget, understand the new mortgage terms, and test a
            cautious overpayment later rather than rushing to solve everything in one move.
          </p>
          <p>
            That slower approach may not feel dramatic, but it usually creates a stronger base for every later decision about
            rates, savings, and overpayments.
          </p>
          <p>
            Once that base is in place, any later overpayment plan tends to be steadier and easier to trust.
          </p>
          <p>
            That is usually a far better foundation than trying to force progress before the new mortgage payment has settled in.
          </p>
          <p>In many cases, that patience is exactly what makes the later plan workable, realistic, easier to maintain, and far less stressful over time for the household overall as rates settle down properly month by month in practice and in the budget too.</p>
          <p>
            It gives you time to make decisions from a clearer position instead of reacting while the new payment still feels unfamiliar.
          </p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Short answers to the questions people usually ask after remortgaging onto a higher rate."
        compact
      />

      <Section title="Useful next steps" description="These pages help once the immediate pressure is under control." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="The first aim is usually to keep the mortgage comfortable and sustainable." compact>
        <TrustNote children="If your payment has just increased, affordability and resilience usually come before overpayments. Once the new rate feels manageable, you can return to the optimisation question with more confidence." />
      </Section>

      <CTASection
        title="See whether a smaller overpayment could still work later"
        description="Use the calculator to test a cautious extra amount once the new payment level feels more settled and manageable."
        compact
      />
    </>
  )
}
