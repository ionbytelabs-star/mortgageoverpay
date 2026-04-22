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
  title: "Overpay Mortgage or Save in the UK? | Mortgage Overpay",
  description:
    "Compare overpaying your mortgage with saving in the UK and see when each approach may make more sense.",
  path: ROUTES.overpayVsSave,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Overpay mortgage or save in the UK?", href: ROUTES.overpayVsSave }])
const faqs = getFaqs("overpayVsSave")

const keyTakeaways = [
  "Overpaying gives a guaranteed saving equal to your mortgage rate because you reduce future mortgage interest.",
  "Saving keeps the money accessible, which may matter more than the extra mortgage saving if life feels uncertain.",
  "The right answer usually depends on mortgage rate, savings rate, emergency fund, and how much flexibility you want to keep.",
]

const comparisonRows = [
  {
    factor: "Guaranteed benefit",
    overpay: "Yes, equal to the mortgage rate saved",
    save: "Only if the savings rate stays attractive",
  },
  {
    factor: "Access to money",
    overpay: "Low once the money is paid into the mortgage",
    save: "High if kept in easy-access savings",
  },
  {
    factor: "Best for peace of mind",
    overpay: "Reducing debt and future interest",
    save: "Keeping a cash buffer and flexibility",
  },
  {
    factor: "Best for short-term resilience",
    overpay: "Usually weaker",
    save: "Usually stronger",
  },
  {
    factor: "Most useful when",
    overpay: "Mortgage rate is high and cash reserves are already strong",
    save: "You need access or savings rates are competitive",
  },
]

const decisionRules = [
  "If your mortgage rate is clearly higher than your savings rate after tax, overpaying usually has the stronger financial case.",
  "If your savings rate is clearly higher and the money needs to stay accessible, saving often makes more sense.",
  "If the difference is small, your emergency fund and comfort with risk usually matter more than chasing tiny percentage gaps.",
  "If you still have expensive debt elsewhere, clearing that is often a better priority than either saving or overpaying.",
]

const mistakes = [
  "Comparing the mortgage rate with the headline savings rate without thinking about tax or access conditions.",
  "Overpaying too aggressively and leaving too little cash for emergencies.",
  "Leaving spare cash in a current account because the choice feels difficult, rather than making an active plan.",
  "Ignoring overpayment limits and possible early repayment charges.",
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
  { href: ROUTES.worthIt, label: "Read is overpaying your mortgage worth it?" },
  { href: ROUTES.tenPercentRule, label: "Read about the 10% rule and early repayment charges" },
  { href: ROUTES.overpayVsInvest, label: "Compare overpaying with investing in the UK" },
]

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
      <JsonLd
        data={articleSchema({
          title: "Overpay Mortgage or Save in the UK? | Mortgage Overpay",
          description:
            "Compare overpaying your mortgage with saving in the UK and see when each approach may make more sense.",
          path: ROUTES.overpayVsSave,
          keywords: [
            "overpay mortgage or save UK",
            "should I overpay my mortgage or save",
            "mortgage overpayment calculator UK",
            "is it better to overpay mortgage or save",
          ],
          about: ["Mortgage overpayments", "Savings", "UK repayment mortgages"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Overpay Mortgage or Save in the UK: Which Is Better Right Now?"
          intro="If you have spare cash, the practical question is whether it does more for you reducing mortgage interest or staying available in savings. This guide helps you compare both options clearly, so you can decide whether certainty or flexibility matters more in your situation."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="Overpaying usually makes more sense when your mortgage rate is higher than what you can earn on accessible savings after tax, you already have an emergency fund, and you want to become mortgage-free sooner. Saving usually makes more sense when you need flexibility, want a stronger cash buffer, or can earn a competitive savings return without locking the money into the mortgage. If the numbers are close, your need for access is often the deciding factor." />
          <KeyPointsList title="Key takeaway" items={keyTakeaways} />
        </div>
      </Section>

      <Section
        title="Why this decision matters"
        description="This is one of the most common money choices for homeowners because both options are sensible in the right circumstances."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying and saving both improve your position, but they do it in different ways. A mortgage overpayment reduces
            debt. Savings increase your flexibility. One improves the balance sheet by cutting a long-term liability. The other
            improves day-to-day resilience by keeping money within reach.
          </p>
          <p>
            That is why this is not simply a rates comparison. It is also about what job you need the money to do next. If you
            expect a stable year and want to reduce interest, overpaying can be attractive. If you think life might be uneven,
            or you are still building security, the case for saving becomes stronger.
          </p>
          <p>
            For many people, the most useful starting point is to use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>
            , then compare that result with what the same money would do if kept in savings instead.
          </p>
        </div>
      </Section>

      <Section
        title="How overpaying and saving differ in practice"
        description="The maths matters, but the practical trade-offs matter just as much."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <h3 className="text-lg font-semibold text-slate-950">Overpaying vs saving at a glance</h3>
          <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Factor</th>
                <th className="py-2 pr-4 font-semibold">Overpaying</th>
                <th className="py-2 font-semibold">Saving</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.factor} className="border-b border-slate-100 align-top last:border-b-0">
                  <th className="py-3 pr-4 font-medium text-slate-950">{row.factor}</th>
                  <td className="py-3 pr-4">{row.overpay}</td>
                  <td className="py-3">{row.save}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying works by reducing the mortgage balance faster than planned. Because interest is usually charged on the
            balance that remains, the long-term effect is a lower interest bill and often a shorter mortgage term.
          </p>
          <p>
            Saving works differently. Instead of reducing the debt, it strengthens your liquid position. That can matter more
            than the extra mortgage saving if you face uncertain costs, want a larger emergency fund, or know you may need the
            money for something else in the near future.
          </p>
        </div>
      </Section>

      <Section
        title="When overpaying usually makes more sense"
        description="Overpaying often looks strongest when the financial and practical pieces all point in the same direction."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying tends to make more sense when your mortgage rate is meaningfully higher than what you can earn on an
            accessible savings account after tax. In that case, reducing the mortgage may give the cleaner guaranteed result.
          </p>
          <p>
            It also looks stronger when your emergency fund is already in place. If you already have enough accessible cash to
            deal with short-term shocks, you may not need every spare pound to stay in savings. That is where overpaying can
            start to feel more efficient.
          </p>
          <p>
            Overpaying is often attractive to people who like certainty. The mortgage balance falls. The future interest bill is
            lower. The mortgage-free date moves closer. There is a calmness to that which many homeowners prefer over chasing
            marginally better savings returns that may not stay available for long.
          </p>
          <p>
            It can also help if your main goal is paying off the mortgage early. If that goal matters emotionally as well as
            financially, overpaying may have more value to you than a simple rate comparison suggests.
          </p>
        </div>
      </Section>

      <Section
        title="When saving usually makes more sense"
        description="Saving may be the better move when flexibility is still more valuable than reducing debt faster."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Saving often makes more sense when your cash buffer still feels too thin. If one unexpected bill would push you into
            stress or borrowing, building savings is usually more urgent than shaving interest off the mortgage.
          </p>
          <p>
            It can also make more sense when savings rates are competitive and you know the money may be needed in the next few
            years. Keeping the money accessible can be more valuable than using it for an irreversible mortgage overpayment.
          </p>
          <p>
            Saving is often stronger if your income feels uncertain, you expect large near-term costs, or you are already near
            the end of the mortgage term and the interest saving from overpaying is less dramatic than it would have been
            earlier on.
          </p>
          <p>
            Some people also simply function better with more cash in reserve. That is not a weakness in the plan. It is part of
            the plan. A strategy only works if you can live with it.
          </p>
        </div>
      </Section>

      <Section
        title="A simple rule of thumb"
        description="If you want the shortest possible version of the decision, this is it."
        compact
      >
        <ul className="space-y-4">
          {decisionRules.map((rule) => (
            <li key={rule} className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-700">
              <span className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-700" />
                <span>{rule}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Worked examples"
        description="These examples are illustrative only, but they show how the answer can change with the mortgage, rate, and cash position."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: Higher mortgage rate, strong emergency fund</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Imagine a borrower with £210,000 left on a repayment mortgage at 5.1%, 24 years remaining, and a healthy
                emergency fund already in place. They have £250 a month spare.
              </p>
              <p>
                In that situation, overpaying may look stronger because the mortgage rate is high enough for the guaranteed
                saving to feel meaningful. Over time, £250 a month could save a substantial amount of interest and cut years off
                the mortgage term.
              </p>
              <p>
                Saving is still an option, but if the accessible savings rate is weaker and the cash buffer is already healthy,
                the practical case for overpaying may be clearer.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: Lower mortgage rate, thin cash buffer</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Now imagine a borrower with a mortgage at 3.7%, only a small amount in savings, and concerns about near-term
                costs. They also have £250 a month spare.
              </p>
              <p>
                In that case, saving may be the better answer because the immediate need is not reducing long-term mortgage
                interest. It is building resilience. Even if overpaying would save some interest, keeping the money accessible
                may be more valuable right now.
              </p>
              <p>
                Once the savings buffer is stronger, the answer may change. This is why overpay or save is often a timing
                question as much as a maths question.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Split approach</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Some households split the difference. For example, instead of choosing between £300 to savings or £300 to the
              mortgage, they might send £150 to each. That keeps some flexibility while still reducing the mortgage balance.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 4: Shorter term remaining</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If only a few years remain on the mortgage, the total interest left to save may be lower than people expect. In
              that case, keeping more money in savings can sometimes feel more useful than overpaying aggressively.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The most useful next step is to use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            and then compare that outcome with what the same money would achieve in your savings plan.
          </p>
        </div>
      </Section>

      <Section
        title="What about overpayment limits and charges?"
        description="This is the part many people forget when the rates comparison looks clear."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying may have the better financial case and still not be the right move if you are close to an annual limit or
            an early repayment charge. Many UK fixed-rate mortgages allow around 10% of the balance to be overpaid each year
            without a fee, but that is not universal.
          </p>
          <p>
            If you are considering a larger overpayment, it is worth reading{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.tenPercentRule}>
              the 10% rule and early repayment charges
            </Link>{" "}
            first. A fee can reduce the benefit enough to change the decision.
          </p>
        </div>
      </Section>

      <Section
        title="Common mistakes to avoid"
        description="The right comparison is usually clearer once you strip out a few common errors."
        compact
      >
        <ul className="space-y-4">
          {mistakes.map((item) => (
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
        title="Why some households use both"
        description="A split approach can work well when reducing debt and keeping flexibility both matter."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Many borrowers eventually realise they do not need to choose a pure all-or-nothing answer. A split plan can be a
            very practical solution if part of the money clearly belongs in savings while another part can be used to reduce the
            mortgage.
          </p>
          <p>
            This can work particularly well when the rates are close or when your circumstances are in transition. You still get
            some guaranteed mortgage progress, but you do not lose the comfort of seeing cash build in the background.
          </p>
        </div>
      </Section>

      <Section
        title="So which is better?"
        description="In practice, the better option is the one that fits your next financial priority."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If the next job for the money is reducing long-term mortgage interest and moving the payoff date forward,
            overpaying is often the better answer. If the next job is protecting your monthly resilience or keeping options open,
            saving is often the better answer.
          </p>
          <p>
            If you cannot decide because both matter, that usually points towards a split approach rather than a wrong answer.
            A plan does not have to be extreme to be effective. Consistency matters more than making the mathematically perfect
            move once and then abandoning it.
          </p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Straight answers to the questions people usually ask before deciding whether to overpay or save."
        compact
      />

      <Section title="Useful next steps" description="These pages help if you want to compare the same decision from another angle." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="This is a planning comparison rather than personal financial advice." compact>
        <TrustNote children="This guide is for general guidance only. Mortgage rates, savings rates, tax, overpayment limits, and personal cash-flow needs vary, so it is worth checking your own figures before making a change." />
      </Section>

      <CTASection
        title="Compare the overpayment side with your own mortgage"
        description="Run the calculator to see what a realistic overpayment could save, then compare that result with the value of keeping the same money in savings."
        compact
      />
    </>
  )
}
