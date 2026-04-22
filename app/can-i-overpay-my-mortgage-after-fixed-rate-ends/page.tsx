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
  title: "Can I Overpay My Mortgage After My Fixed Rate Ends? | Mortgage Overpay",
  description:
    "Learn what often changes when a fixed mortgage deal ends, whether ERCs still apply, and when overpaying may become more flexible.",
  path: ROUTES.afterFixedRate,
})

const breadcrumbs = makeBreadcrumbs([
  { name: "Can I overpay my mortgage after my fixed rate ends?", href: ROUTES.afterFixedRate },
])

const faqs = getFaqs("afterFixedRate")

const timelineSteps = [
  {
    title: "Fixed deal ends",
    text: "Your initial rate period finishes and the protection or limits linked to that deal may change.",
  },
  {
    title: "SVR or new deal",
    text: "You may move onto the lender's standard variable rate or onto a fresh fixed or tracker deal.",
  },
  {
    title: "Check flexibility",
    text: "Early repayment charges may end, overpayment limits may change, and the best overpayment method may look different.",
  },
]

const comparisonRows = [
  {
    factor: "Early repayment charge",
    during: "Often still applies during the fixed period",
    after: "May end, but check before assuming",
  },
  {
    factor: "Overpayment allowance",
    during: "Often capped, commonly around 10% a year",
    after: "May improve or change on SVR or a new deal",
  },
  {
    factor: "Rate level",
    during: "Known deal rate",
    after: "Could rise sharply on SVR or reset on a new deal",
  },
  {
    factor: "Best action",
    during: "Stay within the deal rules",
    after: "Reassess whether lump sums or monthly overpayments now make more sense",
  },
]

const checklist = [
  "Check whether you have moved onto an SVR, a tracker, or a new fixed deal.",
  "Confirm whether any early repayment charge still applies and exactly when it ends.",
  "Check whether the overpayment allowance has changed or whether there is now more flexibility.",
  "Ask whether overpayments reduce the term or the monthly payment unless you instruct otherwise.",
  "Test both a monthly overpayment and a lump sum with the calculator before acting.",
]

const commonMistakes = [
  "Assuming early repayment charges have ended without checking the lender terms or statement.",
  "Moving onto an SVR and waiting too long before reviewing whether a new deal or overpayment plan would help.",
  "Making a large lump sum without checking if a new fixed deal has introduced fresh limits.",
  "Focusing on overpayments before stabilising affordability after a higher monthly payment.",
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
  { href: ROUTES.tenPercentRule, label: "Read the 10% rule and ERC guide" },
  { href: ROUTES.higherRatePayments, label: "Read just remortgaged at a higher rate?" },
  { href: ROUTES.guides, label: "Browse all mortgage overpayment guides" },
]

function DealTimeline() {
  return (
    <div className="card rounded-[2rem] px-5 py-5">
      <h3 className="text-lg font-semibold text-slate-950">What usually happens around the end of a fixed deal</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {timelineSteps.map((step, index) => (
          <div key={step.title} className="rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">Step {index + 1}</p>
            <h4 className="mt-2 text-base font-semibold text-slate-950">{step.title}</h4>
            <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AfterFixedRatePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Can I Overpay My Mortgage After My Fixed Rate Ends? | Mortgage Overpay",
          description:
            "Learn what often changes when a fixed mortgage deal ends, whether ERCs still apply, and when overpaying may become more flexible.",
          path: ROUTES.afterFixedRate,
        })}
      />
      <JsonLd
        data={articleSchema({
          title: "Can I Overpay My Mortgage After My Fixed Rate Ends? | Mortgage Overpay",
          description:
            "Learn what often changes when a fixed mortgage deal ends, whether ERCs still apply, and when overpaying may become more flexible.",
          path: ROUTES.afterFixedRate,
          keywords: [
            "can I overpay my mortgage after fixed rate ends",
            "overpay mortgage after fixed rate UK",
            "mortgage overpayment limit UK",
            "early repayment charge mortgage UK",
          ],
          about: ["Fixed rate mortgages", "Mortgage overpayments", "Early repayment charges"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Can You Overpay Your Mortgage After a Fixed Rate Ends?"
          intro="Yes, often you can, and in many cases overpayment flexibility improves once a fixed deal ends. This guide explains what usually changes, whether early repayment charges may fall away, and what to check before making either a lump sum or a regular monthly overpayment."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="Once a fixed rate ends, many borrowers find it becomes easier to overpay because early repayment charges may end and the old annual cap may no longer apply in the same way. However, you should not assume that automatically. Check whether you have moved onto an SVR or a new deal, whether any ERC still applies, and whether your lender now gives more or less freedom for lump sums and monthly overpayments." />
          <KeyPointsList
            title="Key takeaway"
            items={[
              "The end of a fixed deal often changes your overpayment options, but the exact terms still matter.",
              "ERCs commonly end with the fixed period, though you should check rather than assume.",
              "A lump sum can work well after a fixed deal if charges have ended and the payment still fits your wider plan.",
            ]}
          />
        </div>
      </Section>

      <Section
        title="What Usually Changes When a Fixed Mortgage Deal Ends"
        description="The biggest change is often not just the interest rate but the flexibility around the mortgage."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            When a fixed deal ends, one of two things usually happens. You either move onto the lender's standard variable
            rate, which can be much higher than the fixed deal you just left, or you arrange a new deal. In both cases, the
            rules that applied during the old fixed period may no longer be the rules you are working under now.
          </p>
          <p>
            This matters because many borrowers are used to hearing about a 10% annual overpayment limit during a fixed deal.
            Once that deal ends, the cap, the early repayment charge, and the treatment of overpayments may all change. In some
            cases the mortgage becomes more flexible. In others, a new product comes with a fresh set of limits.
          </p>
          <p>
            The best first step is simply to stop thinking in terms of what your old deal allowed. Treat the end of the fixed
            period as a reset point. Check the current mortgage terms, then decide whether a lump sum, a monthly overpayment,
            or a new deal should come first.
          </p>
        </div>
        <div className="mt-4">
          <DealTimeline />
        </div>
      </Section>

      <Section
        title="Do Early Repayment Charges Still Apply?"
        description="Often they do not, but this is one of the most important details to confirm before you act."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Early repayment charges usually apply during a fixed deal, especially if you repay more than the allowed annual
            amount or redeem the mortgage early. Once the fixed period ends, those charges often fall away. That is one reason
            some people wait until the deal ends before making a large lump sum.
          </p>
          <p>
            Even so, it is worth checking carefully. If you have moved straight onto a new deal, fresh limits and charges may
            already apply. If you are on an SVR, the mortgage may be more flexible, but you still need to confirm what the
            lender says rather than relying on memory or assumptions.
          </p>
          <p>
            If you are unsure, read our guide to{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.tenPercentRule}>
              the 10% rule and early repayment charges
            </Link>{" "}
            before making the payment. That step alone can prevent an expensive mistake.
          </p>
        </div>
      </Section>

      <Section
        title="When Overpaying After a Fixed Deal Can Make Sense"
        description="The answer often depends on whether your payment flexibility has improved and what has happened to your rate."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying after a fixed deal can make sense if you have spare cash available, early repayment charges have ended,
            and the current rate makes reducing the balance attractive. If you have rolled onto a higher SVR, even a modest
            overpayment may save meaningful interest because the rate is no longer as low as it was during the fixed period.
          </p>
          <p>
            It can also make sense if you have been holding back a lump sum specifically because you wanted to avoid the old
            deal's penalties. In that situation, the end of the fixed period can be the point where the overpayment finally
            becomes worthwhile.
          </p>
          <p>
            Overpaying may be especially useful if it helps you reduce the balance before taking a new deal, improve your
            affordability, or give yourself more breathing room later. Use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            and compare the effect of different overpayment amounts before deciding.
          </p>
        </div>
      </Section>

      <Section
        title="Lump Sum vs Monthly Overpayments After a Fixed Deal"
        description="Both can work well, but they solve slightly different problems."
        compact
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Lump sum overpayments</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                A lump sum can make sense if you have cash ready, the old charges have ended, and you want to reduce the
                balance immediately. This often suits people who have built up savings during the fixed period and were waiting
                for a cleaner opportunity to use them.
              </p>
              <p>
                The benefit is speed. The balance drops at once, so future interest is usually lower straight away. The risk is
                that you commit too much and leave yourself short of accessible cash.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Monthly overpayments</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Monthly overpayments can be easier to manage if the end of the fixed deal has changed your payment level and you
                want to move cautiously. A regular extra amount lets you test what is affordable under the new setup.
              </p>
              <p>
                This route is often more comfortable if you have remortgaged onto a higher rate and want to keep control of
                cash flow. If that sounds familiar, read{" "}
                <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.higherRatePayments}>
                  just remortgaged at a higher rate?
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section
        title="What to Check Before You Act"
        description="A quick checklist can stop a good idea turning into a messy one."
        compact
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <KeyPointsList title="Before you overpay" items={checklist} />
          <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">During a fixed deal vs after it ends</h3>
            <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 text-slate-950">
                  <th className="py-2 pr-4 font-semibold">Factor</th>
                  <th className="py-2 pr-4 font-semibold">During fixed deal</th>
                  <th className="py-2 font-semibold">After fixed deal</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="border-b border-slate-100 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-medium text-slate-950">{row.factor}</th>
                    <td className="py-3 pr-4">{row.during}</td>
                    <td className="py-3">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            This checklist is worth slowing down for because the end of a fixed deal can feel like an obvious green light to
            overpay, but the details still matter. A new product may have restarted the old limits, or a jump in monthly cost
            may mean preserving flexibility is more sensible for a while.
          </p>
        </div>
      </Section>

      <Section
        title="Worked UK Examples"
        description="These are illustrative examples using standard UK repayment mortgage assumptions."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: Fixed deal ends and ERCs disappear</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                A borrower has £160,000 left on the mortgage, 19 years remaining, and a fixed rate ending this month. They
                have £8,000 in savings set aside for a possible overpayment but did not want to exceed the old annual
                allowance.
              </p>
              <p>
                Once the fixed period ends, they confirm there is no early repayment charge on the current setup. The lump sum
                now makes more sense because it avoids the old fee risk and reduces the balance before too much interest is
                charged at the follow-on rate.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: Rate jumps and affordability comes first</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Another borrower reaches the end of a fixed deal and sees monthly payments jump sharply on the lender's SVR.
                They had planned to overpay, but the new payment already feels uncomfortable.
              </p>
              <p>
                In that case, the smarter move may be to pause overpayments, review the next mortgage deal, and rebuild
                confidence in the monthly budget first. Overpaying later could still help, but only once the new payment level
                feels manageable.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: New fixed deal, new annual limit</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower remortgages immediately onto a fresh fixed rate after the old one ends. The new deal comes with a new
              annual overpayment allowance. They can still overpay, but the idea that the end of the old deal means total
              freedom would be wrong. The new terms now control the decision.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 4: Small regular overpayment instead of one-off cash dump</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A household has just come off a fixed deal but wants to keep more cash available because energy and living costs
              remain uncertain. Instead of making a large one-off overpayment, they start with a smaller monthly amount and
              review it after three months. That cautious approach may be easier to sustain.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If you want to compare the effect of a lump sum with a regular monthly overpayment, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>
            . It is one of the easiest ways to test the trade-off before you contact the lender.
          </p>
        </div>
      </Section>

      <Section
        title="Common Mistakes After a Fixed Rate Ends"
        description="The most common problems come from rushing because the old deal is over."
        compact
      >
        <ul className="grid gap-4 lg:grid-cols-2">
          {commonMistakes.map((mistake) => (
            <li key={mistake} className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-700">
              <span className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-700" />
                <span>{mistake}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            It is worth pausing because the end of a fixed deal often creates a lot of activity at once: new rate, new payment,
            new deal options, and maybe a desire to reset the whole mortgage plan. The best decision is usually the one that
            checks the detail first and acts second.
          </p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Short answers to the questions borrowers often ask as a fixed deal comes to an end."
        compact
      />

      <Section title="Useful next steps" description="These guides help if your next question is about limits, charges, or affordability." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="Use this page as a planning guide, not a substitute for your mortgage terms." compact>
        <TrustNote children="This is general guidance only. Overpayment rules, ERCs, follow-on rates, and new-deal conditions vary between mortgages, so it is worth checking the current terms before making a lump sum or setting up regular overpayments." />
      </Section>

      <CTASection
        title="See what an overpayment could do after your fixed deal ends"
        description="Use our mortgage overpayment calculator to compare a lump sum with monthly overpayments and estimate how much interest and time you could save."
        compact
      />
    </>
  )
}
