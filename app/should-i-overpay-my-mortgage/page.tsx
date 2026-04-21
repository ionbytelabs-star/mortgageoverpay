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
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "Should I Overpay My Mortgage in the UK? | Mortgage Overpay",
  description:
    "Find out when overpaying your mortgage may make sense in the UK, when it may not, and how to compare overpaying with saving.",
  path: ROUTES.shouldIOverpay,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Should I overpay my mortgage in the UK?", href: ROUTES.shouldIOverpay }])
const faqs = getFaqs("shouldIOverpay")

const decisionRules = [
  "Overpaying usually makes more sense when your mortgage rate is higher than what you could earn on easy-access savings after tax.",
  "It is far more sensible once expensive debts are cleared, because credit card or loan interest is usually a bigger drag than mortgage interest.",
  "An emergency fund should normally come first, because money paid into the mortgage is not easy to get back if life changes suddenly.",
  "Always check whether your mortgage allows overpayments and whether any early repayment charge or annual limit could apply.",
]

const reasonsNotToOverpay = [
  "You can earn a clearly better return in savings while keeping the money available.",
  "You are still carrying high-interest debt elsewhere.",
  "Your emergency fund is thin and you may need the cash soon.",
  "Your mortgage has a 10% annual limit or an early repayment charge that could reduce the benefit.",
]

const frameworkSteps = [
  "Check expensive debts first. If you still have costly borrowing, clearing that often gives a better return than overpaying the mortgage.",
  "Build your emergency fund. A few months of essential spending in accessible cash can matter more than shaving a little interest off the mortgage.",
  "Compare your mortgage rate with your savings rate. If the mortgage rate is clearly higher, overpaying often has the stronger case. If savings are clearly ahead, saving may suit you better.",
  "Check your mortgage terms. Confirm overpayment limits, whether a lump sum is treated differently, and whether an early repayment charge could apply.",
  "Test the numbers. Use our mortgage overpayment calculator to see your savings and compare a monthly overpayment with a lump sum.",
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.overpayVsSave, label: "Read overpay mortgage vs save in the UK" },
  { href: ROUTES.overpaymentLimit, label: "Check mortgage overpayment limits in the UK" },
  { href: ROUTES.tenPercentRule, label: "Read about the 10% rule and early repayment charges" },
  { href: ROUTES.payOffEarly, label: "Read how to pay off your mortgage early" },
]

export default function ShouldIOverpayPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Should I Overpay My Mortgage in the UK? | Mortgage Overpay",
          description:
            "Find out when overpaying your mortgage may make sense in the UK, when it may not, and how to compare overpaying with saving.",
          path: ROUTES.shouldIOverpay,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Should I Overpay My Mortgage in the UK?"
          intro="Overpaying your mortgage can be a strong move if you want to cut interest and become mortgage-free sooner, but it is not always the best use of spare cash. In general, you should consider overpaying when you already have an emergency fund, no expensive debt, and a mortgage rate that beats what you can get from accessible savings. You should usually avoid overpaying when you need flexibility, can earn a clearly better savings return, or could be hit by an early repayment charge."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer="For many UK homeowners, overpaying makes sense when the aim is simple: reduce interest, shorten the mortgage term, and become mortgage-free sooner. It may not make sense when the money would be better kept in savings, used to clear more expensive debt, or protected for emergencies. This is for general guidance only, based on standard UK repayment mortgage assumptions, and the right answer depends on your mortgage terms and wider finances." />
          <KeyPointsList
            title="Quick answer"
            items={[
              "Overpay when interest saved matters more to you than keeping the cash accessible",
              "Do not overpay blindly if you still have expensive debt or a weak emergency fund",
              "Compare mortgage rate, savings rate, and mortgage terms before deciding",
            ]}
          />
        </div>
      </Section>

      <Section
        title="Is It Worth Overpaying Your Mortgage?"
        description="For many borrowers, the answer is yes, but only if the practical trade-offs still work in real life."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying a repayment mortgage usually does three useful things. First, it reduces the balance faster. Second,
            because the balance falls faster, it usually reduces the total interest paid over the life of the mortgage.
            Third, it can help you become mortgage-free sooner, which many people value just as much as the financial saving.
          </p>
          <p>
            There can also be a wider benefit if lower borrowing improves your loan-to-value position over time. A lower LTV
            can be helpful when you review future mortgage options, because a smaller balance relative to the property value
            generally puts you in a stronger position.
          </p>
          <p>
            But “worth it” is not only about the headline saving. A mortgage overpayment is money you are no longer keeping in
            easy access savings. If that cash would have protected you during a difficult month, paid for a known upcoming cost,
            or earned a stronger return elsewhere, then overpaying may not be the best choice right now.
          </p>
          <p>
            This is why the most useful question is not simply “will overpaying save interest?” It usually will. The better
            question is whether that saving is worth the loss of flexibility. Use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            with your own figures before deciding.
          </p>
        </div>
      </Section>

      <Section
        title="When Should You Overpay Your Mortgage?"
        description="There are a few common signs that overpaying may be the right next step."
        compact
      >
        <ul className="grid gap-4 lg:grid-cols-2">
          {decisionRules.map((rule) => (
            <li key={rule} className="card rounded-[2rem] px-5 py-5 text-sm leading-7 text-slate-700">
              <span className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-700" />
                <span>{rule}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            In simple terms, overpaying often suits people who are already financially stable and want to use spare money to
            reduce a long-term cost. If you have breathing room in your monthly budget and you like the certainty of reducing
            debt, overpaying can be a very sensible move.
          </p>
          <p>
            It can also suit people who value momentum. Seeing the mortgage term shorten can feel motivating. If that helps you
            stay consistent with a plan, a modest monthly overpayment may be more valuable than leaving the money idle.
          </p>
        </div>
      </Section>

      <Section
        title="When Should You NOT Overpay Your Mortgage?"
        description="Overpaying is not automatically the smartest option just because you can afford it."
        compact
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <KeyPointsList title="Common reasons to hold back" items={reasonsNotToOverpay} />
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              A better savings rate is one of the clearest reasons not to overpay right away. If accessible savings are paying
              more than your mortgage rate, the money may work harder staying in savings, at least in the short term.
            </p>
            <p>
              Liquidity matters too. Once money is overpaid into the mortgage, it is no longer easy to access. If your job feels
              uncertain, you expect a large bill, or you are still building up a proper cash buffer, keeping funds available can
              be the wiser choice.
            </p>
            <p>
              Another reason not to overpay is opportunity cost. Some people would rather use spare cash to strengthen savings,
              improve pension contributions, or keep flexibility for future goals. Overpaying is rarely a bad thing in isolation,
              but it may not be the best thing for your wider finances.
            </p>
            <p>
              Finally, mortgage terms matter. Some UK mortgages have a common annual overpayment allowance of around 10%, but
              that is not a universal rule. If you go above the allowed level while an early repayment charge applies, the charge
              can reduce or even wipe out the benefit. If you are unsure, read{" "}
              <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.tenPercentRule}>
                the 10% rule and ERC guide
              </Link>{" "}
              before acting.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Overpay Mortgage vs Save - Which Is Better?"
        description="This is the comparison most people really want to make."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            As a simple rule, if your mortgage rate is higher than the savings rate you can realistically get on accessible
            money, overpaying often has the better case. If your savings rate is higher than your mortgage rate, saving may be
            more attractive.
          </p>
          <p>
            That rule is useful because it is easy to understand. If the mortgage costs more than savings can earn, reducing the
            mortgage can give a stronger guaranteed benefit. If savings earn more, keeping the cash may make more sense.
          </p>
          <p>
            But do not treat that as the whole decision. A better savings rate is still not enough on its own if you know the
            cash will disappear into day-to-day spending. Equally, overpaying is not always better just because your mortgage
            rate is slightly higher if you have no emergency fund and would feel exposed without the money.
          </p>
          <p>
            A practical way to think about it is this:
          </p>
          <ul className="space-y-3 text-sm leading-7 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-teal-700" />
              <span>If mortgage rate is clearly above savings rate, overpaying is often stronger.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-teal-700" />
              <span>If savings rate is clearly above mortgage rate, saving often wins on flexibility and return.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-teal-700" />
              <span>If the difference is small, your cash buffer and personal priorities probably matter more.</span>
            </li>
          </ul>
          <p>
            If you want to compare the overpayment side properly, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            and then compare that with what the money could do in savings.
          </p>
        </div>
      </Section>

      <Section
        title="Real Examples"
        description="These examples are illustrative only, based on a standard UK repayment mortgage model, and are meant to show how the decision can look in practice."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: GBP100 a month</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              On a GBP200,000 mortgage at 4.5% with 25 years remaining, overpaying by GBP100 a month could cut the term by
              roughly 2 years and save around GBP13,000 to GBP16,000 in interest.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              That is why small overpayments can still matter. The monthly amount may feel modest, but the long-term effect can
              be meaningful because the balance falls ahead of schedule every month.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: GBP5,000 lump sum</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              On a similar mortgage, a one-off GBP5,000 lump sum early in the term could save several thousand pounds in
              interest and cut many months off the payoff date, because the balance drops immediately.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The same lump sum paid later in the mortgage usually still helps, but the total saving is often smaller because
              there is less future interest left to avoid.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Small vs large mortgage</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A GBP100 overpayment on a smaller mortgage may bring a useful reduction in term, but the cash saving will often be
              lower in absolute terms than the same GBP100 overpayment on a larger mortgage with a similar rate and term.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              In other words, the same overpayment can feel more powerful when the balance and interest cost are larger, even if
              the rule of thumb is the same.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The exact numbers always depend on your mortgage balance, interest rate, and term. Use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            with your own figures rather than relying on generic examples alone.
          </p>
        </div>
      </Section>

      <Section
        title="How Mortgage Overpayments Actually Work"
        description="Understanding the mechanics makes the decision far easier."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            On a repayment mortgage, each monthly payment covers interest and some of the balance. When you overpay, the extra
            amount usually goes straight towards the balance. That means the mortgage has less capital left outstanding from that
            point onwards.
          </p>
          <p>
            Because interest is charged on the balance that remains, reducing that balance sooner usually lowers future interest.
            That is the real engine behind mortgage overpayment savings.
          </p>
          <p>
            Different lenders can handle overpayments in slightly different ways. Some automatically reduce the mortgage term.
            Others may reduce the required monthly payment unless you ask for the term to stay the same. If your goal is to clear
            the mortgage sooner, it is worth checking exactly how your lender applies the change.
          </p>
          <p>
            You may also hear that mortgage interest is worked out daily. The important practical point is simple: the sooner the
            balance goes down, the sooner less interest is usually charged. You do not need to get buried in formulas to grasp
            the main idea.
          </p>
          <p>
            Finally, remember the annual limit. Many UK borrowers talk about a 10% rule, where up to roughly 10% of the balance
            can be overpaid within a year without penalty. That can be true on some mortgages, but not all. Monthly overpayments
            and lump sums may count towards the same total, so check the exact wording before paying extra.
          </p>
        </div>
      </Section>

      <Section
        title="Risks and Downsides of Overpaying"
        description="Overpaying can be sensible, but it is not risk-free in a practical sense."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Liquidity</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The biggest downside is loss of access. Once the money is used to reduce the mortgage, it is no longer sitting in
              your savings account ready for emergencies.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Opportunity cost</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The money might have been more useful elsewhere, whether that means savings, investing, pensions, or simply keeping
              more breathing room in your monthly budget.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">ERCs and limits</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If you breach the overpayment allowance while an early repayment charge applies, the benefit can be reduced by fees.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            None of these downsides mean overpaying is a bad idea. They simply explain why the best choice depends on your wider
            financial position, not just the mortgage calculation in isolation.
          </p>
        </div>
      </Section>

      <Section
        title="How to Decide"
        description="A simple framework can make the answer much clearer."
        compact
      >
        <ol className="space-y-4">
          {frameworkSteps.map((step, index) => (
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
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If you work through those steps honestly, the answer is usually clearer than it first seems. Use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            once you reach step five so the decision is grounded in real numbers rather than guesswork.
          </p>
        </div>
      </Section>

      <Section title="Useful next steps" description="These pages help you go one level deeper depending on what is blocking your decision." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="This page is designed to help you decide, not to replace personal advice." compact>
        <TrustNote children="This is for general guidance only. The examples and explanations on this page use standard UK repayment mortgage assumptions, but your lender terms, savings options, tax position, and personal circumstances may differ." />
      </Section>

      <FAQSection items={faqs} compact />

      <CTASection
        title="Still deciding? Run the numbers with your own mortgage"
        description="Use our mortgage overpayment calculator to see your savings, compare monthly overpayments with a lump sum, and make the decision with more confidence."
        compact
      />
    </>
  )
}
