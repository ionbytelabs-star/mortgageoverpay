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
  title: "Mortgage Overpayment Limits in the UK | Mortgage Overpay",
  description:
    "Understand the mortgage overpayment limit UK borrowers often face, how the 10% overpayment rule works, and what happens if you go over it.",
  path: ROUTES.overpaymentLimit,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Mortgage overpayment limits in the UK", href: ROUTES.overpaymentLimit }])
const faqs = getFaqs("overpaymentLimit")

const keyPoints = [
  "Many fixed-rate mortgages allow around 10% of the outstanding balance to be overpaid each year",
  "Going above the allowance can trigger an early repayment charge, often called an ERC",
  "Some tracker or standard variable rate mortgages may allow much more flexibility",
]

const mistakes = [
  "Assuming every mortgage uses the same 10% allowance",
  "Forgetting that monthly overpayments and lump sums often count towards the same total",
  "Not checking whether the allowance resets on the deal anniversary or another date",
  "Assuming the lender will shorten the term when it may reduce the monthly payment instead",
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.tenPercentRule, label: "Read about the 10% rule and early repayment charges" },
  { href: ROUTES.lumpSumOverpayment, label: "Read about lump sum mortgage overpayments" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage in the UK?" },
  { href: ROUTES.payOffEarly, label: "Read how to pay off your mortgage early" },
]

export default function OverpaymentLimitPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Mortgage Overpayment Limits in the UK | Mortgage Overpay",
          description:
            "Understand the mortgage overpayment limit UK borrowers often face, how the 10% overpayment rule works, and what happens if you go over it.",
          path: ROUTES.overpaymentLimit,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Mortgage Overpayment Limits in the UK"
          intro="Most UK mortgages allow around 10% of the outstanding balance to be overpaid each year without a penalty, although the exact allowance varies between lenders and mortgage deals. If you go above that limit while an early repayment charge applies, you may be charged a fee. Some mortgages, especially certain tracker or standard variable rate deals, may have no meaningful overpayment limit at all."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <DirectAnswer answer="If you are asking how much can I overpay mortgage UK deals by, the answer is usually around 10% a year on many fixed-rate mortgages, often based on the outstanding balance. That is why the phrase mortgage overpayment limit UK and the 10% overpayment rule UK come up so often. But it is not universal, and some mortgages either use a different limit or allow overpayments much more freely. This is general guidance only, so always check your mortgage agreement before making a larger extra payment." />
          <KeyPointsList title="Quick answer" items={keyPoints} />
        </div>
      </Section>

      <Section
        title="How Much Can You Overpay Your Mortgage?"
        description="This is usually the first practical question borrowers need answered."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            On many fixed-rate mortgages, the starting point is around 10% of the outstanding mortgage balance in a mortgage
            year. That is the most common mortgage overpayment limit UK borrowers come across, but it is still only a guide until
            you confirm your own terms.
          </p>
          <p>
            The exact amount can vary because the lender may define the balance differently, may treat lump sums differently, or
            may set the allowance against a specific mortgage year rather than the calendar year. So even when two mortgages both
            use a 10% rule, the practical limit may not work in exactly the same way.
          </p>
          <p>
            If you want to know whether overpaying is worth using your available allowance for, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            with your own balance, rate, and term.
          </p>
        </div>
      </Section>

      <Section
        title="What Is the 10% Overpayment Rule?"
        description="The rule is simple in principle, but the detail still matters."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The 10% overpayment rule usually means you can overpay up to around 10% of the outstanding balance in a mortgage
            year without an early repayment charge. It is most common on fixed-rate and discounted mortgage deals.
          </p>
          <p>
            In plain English, if the balance is £150,000 and your deal allows 10%, your charge-free allowance for that period
            may be around £15,000. In many cases that total includes regular monthly overpayments and any one-off lump sums
            added together.
          </p>
          <p>
            The allowance usually resets annually, but annual does not always mean from January to December. Some lenders reset
            it on the deal anniversary, while others use their own mortgage year. That is one reason borrowers can accidentally
            go over the limit.
          </p>
        </div>
      </Section>

      <Section
        title="What Happens If You Go Over the Limit?"
        description="The main consequence is usually an early repayment charge."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If you exceed the allowance while an ERC applies, the lender may charge a fee. An early repayment charge mortgage UK
            borrowers often see is usually calculated as a percentage. A common range is around 1% to 5%, depending on the deal
            and how far through the fixed or discounted period you are.
          </p>
          <p>
            In many cases the fee is based on the amount above the allowance. For example, if your allowance is used up and you
            then overpay by another £2,000, a 3% ERC would cost around £60. If the excess payment is much larger, the charge
            becomes more noticeable.
          </p>
          <p>
            That does not always mean going over the allowance is never worth it, but it does mean the numbers need checking.
            Use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            and compare the likely interest reduction with any potential charge.
          </p>
        </div>
      </Section>

      <Section
        title="Examples of Mortgage Overpayment Limits"
        description="These examples show how the rule works in practice."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: £100,000 mortgage</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If the outstanding balance is £100,000 and your mortgage allows 10% a year, the overpayment allowance may be
              around £10,000 before any charge applies.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: £200,000 mortgage</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If the outstanding balance is £200,000 and the same 10% rule applies, the allowance may be around £20,000 in
              that mortgage year. Monthly overpayments and lump sums may both count towards that figure.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Going over the allowance</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If your allowance is £10,000 but you overpay £12,000, the excess is £2,000. If the ERC is 3%, the charge
              could be around £60 on that excess payment.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            These examples are simplified, but they make the point clearly: allowances can look generous, yet it is still easy
            to drift over them if you are not tracking total overpayments carefully. Use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            once you know the rough safe limit on your own mortgage.
          </p>
        </div>
      </Section>

      <Section
        title="Do All Mortgages Have Overpayment Limits?"
        description="No. The rules often depend on the type of mortgage deal."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Fixed-rate mortgages are the deals most likely to have a formal overpayment limit. That is where the 10% overpayment
            rule UK borrowers often hear about is most common.
          </p>
          <p>
            Tracker mortgages and some standard variable rate deals often allow much more flexibility, and some may allow
            unlimited overpayments. But often does not mean always, so the mortgage agreement still needs checking.
          </p>
          <p>
            This is why one borrower may be tightly limited while another can pay extra quite freely. The mortgage type is often
            the biggest reason for the difference.
          </p>
        </div>
      </Section>

      <Section
        title="How Often Can You Overpay?"
        description="In most cases, you can choose how to use the allowance."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Many lenders allow regular monthly overpayments, one-off lump sums, or a combination of both. The real restriction
            is usually the total amount you pay over the mortgage year, not the number of separate payments.
          </p>
          <p>
            This means you are often free to spread the allowance across the year if that feels easier to manage. For some
            people, smaller monthly overpayments are easier to budget for and easier to track.
          </p>
          <p>
            If you want to compare a monthly plan with a one-off payment, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            and test both approaches.
          </p>
        </div>
      </Section>

      <Section
        title="When Does Your Overpayment Allowance Reset?"
        description="This is a small detail that can have a big effect."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Some lenders reset the allowance on the mortgage or deal anniversary. Others use their own mortgage year. It does
            not always reset on 1 January.
          </p>
          <p>
            If you assume the wrong reset date, you may think you have fresh allowance when you do not. That can lead to an
            avoidable early repayment charge.
          </p>
          <p>
            If the wording in your agreement is not clear, the safest option is to check before making a larger extra payment.
          </p>
        </div>
      </Section>

      <Section
        title="Best Way to Use Your Overpayment Allowance"
        description="There is no single perfect method, but there are practical ways to use it well."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Monthly overpayments</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A regular monthly amount can be easier to budget for and helps reduce the chance of misjudging the total
              allowance.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Lump sums</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A lump sum can work well after a bonus, inheritance, or other one-off event, but it still needs to fit inside the
              allowance if the deal has a limit.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Spreading payments</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              For many people, spreading the allowance across the year is the simplest way to avoid a large accidental breach of
              the limit.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Timing can matter too. If the allowance is due to reset soon, it may be worth thinking about whether splitting
            payments across two mortgage years gives you more flexibility.
          </p>
        </div>
      </Section>

      <Section
        title="Common Mistakes to Avoid"
        description="Overpaying is usually simple, but these errors can be costly."
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
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            One more detail to watch is what the lender does after the overpayment. If your goal is to shorten the term, but the
            lender reduces the monthly payment instead, the outcome may not be what you expected.
          </p>
        </div>
      </Section>

      <Section
        title="Should You Max Your Overpayment Limit?"
        description="Not always. The best answer depends on the numbers and on your wider priorities."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Using the full allowance can be attractive because it may reduce interest faster and move the mortgage-free date
            forward more quickly.
          </p>
          <p>
            But there are trade-offs. Maxing the allowance may leave you with less accessible cash, less savings, and less room
            if your finances change. That matters even more when savings rates are competitive or you still need a stronger cash
            buffer.
          </p>
          <p>
            A balanced answer is often best. Use as much of the allowance as feels sensible after checking your mortgage rate,
            savings position, and need for flexibility.
          </p>
        </div>
      </Section>

      <Section
        title="Questions worth asking before you use the full allowance"
        description="The allowance tells you how far you can go without a likely charge, but it does not automatically tell you how far you should go."
        compact
      >
        <ul className="space-y-4">
          {[
            "Do I still have enough accessible cash after using this allowance?",
            "Does the lender shorten the term or reduce the monthly payment after the overpayment?",
            "Would a smaller overpayment still achieve most of the benefit with less pressure on savings?",
            "Is the deal close to ending, which could change the flexibility soon anyway?",
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
        title="How limits fit into the wider overpayment decision"
        description="The mortgage overpayment limit matters, but it is still only one part of a bigger choice."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Borrowers often focus on the limit first because it looks like the key rule. In reality, the limit only answers one
            question: how much can I usually overpay without a charge? It does not answer whether overpaying is the best use of
            the money or whether the full allowance should actually be used.
          </p>
          <p>
            That broader decision still depends on your mortgage rate, your savings position, your need for flexibility, and how
            strongly you want to shorten the mortgage term. The limit protects you from fees, but it does not replace a wider
            financial judgement.
          </p>
          <p>
            In practice, the most useful approach is often to work out the safe allowance first, then decide how much of it you
            actually want to use. That way the rule becomes a guardrail rather than the whole plan.
          </p>
          <p>
            If the numbers are close, it can help to compare a smaller overpayment with the full allowance rather than assuming
            the maximum is automatically the smartest option.
          </p>
        </div>
      </Section>

      <Section
        title="Useful next steps"
        description="These pages help you move from the rule of thumb to a practical decision."
        compact
      >
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section
        title="Important note"
        description="This page explains the principle, but your own mortgage agreement is still the final word."
        compact
      >
        <TrustNote children="This is general guidance only. Mortgage overpayment limits, annual reset dates, and early repayment charges vary by lender and by mortgage deal, so always check your mortgage terms before making a larger extra payment." />
      </Section>

      <FAQSection items={faqs} compact />

      <CTASection
        title="Check the impact before you make an extra payment"
        description="Use our mortgage overpayment calculator to see your savings, compare monthly and lump sum overpayments, and test the figures against your mortgage limit."
        compact
      />
    </>
  )
}
