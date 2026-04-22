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
  title: "Mortgage Overpayment 10% Rule & ERC | Mortgage Overpay",
  description:
    "Understand the UK 10% mortgage overpayment rule, early repayment charges, and what to check before paying extra.",
  path: ROUTES.tenPercentRule,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Mortgage overpayment 10% rule and ERC", href: ROUTES.tenPercentRule }])
const faqs = getFaqs("tenPercentRule")

const keyPoints = [
  "The 10% rule is common on some fixed-rate mortgages, but it is not universal.",
  "ERC means early repayment charge and may apply if you go above the allowed level while charges still exist.",
  "Monthly overpayments and lump sums often count towards the same annual allowance.",
]

const comparisonRows = [
  {
    factor: "What it controls",
    tenPercent: "How much you can usually overpay without a charge during the relevant period",
    erc: "What fee may apply if you go above the permitted amount or redeem early",
  },
  {
    factor: "Most common on",
    tenPercent: "Fixed-rate and discounted mortgage deals",
    erc: "Fixed-rate and discounted mortgage deals",
  },
  {
    factor: "Main misunderstanding",
    tenPercent: "Assuming it applies to every mortgage in the same way",
    erc: "Assuming it applies to the whole overpayment rather than the excess",
  },
  {
    factor: "What to check",
    tenPercent: "Allowance basis and reset date",
    erc: "Percentage charge and when it ends",
  },
]

const mistakes = [
  "Assuming 10% is always measured in the same way across every mortgage deal.",
  "Guessing the reset date instead of checking the deal anniversary or mortgage year.",
  "Making a lump sum and forgetting it may count alongside monthly overpayments.",
  "Ignoring the lender's treatment of overpayments after the payment is made.",
]

const relatedLinks = [
  { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
  { href: ROUTES.lumpSumOverpayment, label: "Read about lump sum mortgage overpayments" },
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator" },
  { href: ROUTES.afterFixedRate, label: "Read about overpaying after a fixed rate ends" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
]

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
      <JsonLd
        data={articleSchema({
          title: "Mortgage Overpayment 10% Rule & ERC | Mortgage Overpay",
          description:
            "Understand the UK 10% mortgage overpayment rule, early repayment charges, and what to check before paying extra.",
          path: ROUTES.tenPercentRule,
          keywords: [
            "10% overpayment rule UK",
            "early repayment charge mortgage UK",
            "mortgage overpayment limit UK",
            "mortgage overpayment calculator UK",
          ],
          about: ["10% overpayment rule", "Early repayment charges", "UK mortgages"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Mortgage Overpayment Limits UK: The 10% Rule & ERC Explained"
          intro="Many UK borrowers hear about a 10% mortgage overpayment rule, but the detail behind it is often much less clear. This guide explains what the rule usually means, how early repayment charges fit into the picture, and what you should check before making either a lump sum or regular overpayment."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="The 10% rule usually means you can overpay up to around 10% of your mortgage balance in a mortgage year without an early repayment charge, but this is not a universal rule. ERCs are fees that may apply if you go above the allowance or redeem the mortgage early while charges still exist. The exact wording in your own mortgage agreement matters more than the rule of thumb itself." />
          <KeyPointsList title="Key takeaway" items={keyPoints} />
        </div>
      </Section>

      <Section
        title="What the 10% rule actually means"
        description="In plain English, the rule is there to define how much extra you can usually repay without triggering a charge."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            On many fixed-rate mortgages, the lender allows some overpayments each year without penalty. A common allowance is
            around 10% of the outstanding balance, which is why the phrase 10% rule is used so often.
          </p>
          <p>
            That does not mean every mortgage uses exactly 10%, and it does not mean every lender calculates it in the same
            way. Some will measure it against the outstanding balance. Others may have wording that refers to the original loan,
            the mortgage year, or the deal anniversary.
          </p>
          <p>
            This is why you should treat the 10% rule as a common guide rather than a universal fact. It is useful, but it is
            only useful when it matches your actual mortgage terms.
          </p>
        </div>
      </Section>

      <Section
        title="What ERC means in practice"
        description="ERC stands for early repayment charge, and it is the fee that can turn an otherwise sensible overpayment into a more expensive one."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            An ERC is usually a percentage charge that applies if you repay more than the mortgage allows during a restricted
            period. The percentage can vary by deal and is often highest earlier in the fixed period, then lower later on.
          </p>
          <p>
            The important practical point is that an ERC does not always apply to the entire overpayment. Often it applies to
            the amount above the allowance. So if your safe allowance is used up and you overpay a bit more, the charge may be
            calculated on that excess amount.
          </p>
          <p>
            That still matters. Even a modest fee can change the usefulness of the overpayment, especially if the interest
            saving was not large to begin with.
          </p>
        </div>
      </Section>

      <Section
        title="10% rule vs ERC at a glance"
        description="These two concepts are closely linked, but they are not the same thing."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <h3 className="text-lg font-semibold text-slate-950">How the rule and the charge differ</h3>
          <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Factor</th>
                <th className="py-2 pr-4 font-semibold">10% rule</th>
                <th className="py-2 font-semibold">ERC</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.factor} className="border-b border-slate-100 align-top last:border-b-0">
                  <th className="py-3 pr-4 font-medium text-slate-950">{row.factor}</th>
                  <td className="py-3 pr-4">{row.tenPercent}</td>
                  <td className="py-3">{row.erc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Worked examples"
        description="These examples are simplified, but they show why wording and timing matter so much."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: £150,000 balance, 10% allowance</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                If the lender allows 10% of the outstanding balance and the balance is £150,000, the charge-free allowance may
                be around £15,000 in that mortgage year.
              </p>
              <p>
                If you make £3,000 of regular monthly overpayments and then want to add a £12,000 lump sum, you may already be
                close to the full allowance. That is why the total matters, not just the latest payment.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: Going over the limit</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Suppose the safe allowance is £10,000 and you overpay £12,000 while a 3% ERC still applies. The excess is
                £2,000, so the charge could be around £60 if the lender calculates it on the excess amount.
              </p>
              <p>
                That may still leave the overpayment worthwhile, but it is no longer a free gain. The charge needs to be part
                of the decision.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Reset date catches the borrower out</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower assumes the allowance resets in January, but the deal anniversary is actually in March. They make a
              lump sum in February thinking the new allowance has started and accidentally breach the old year's limit.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 4: Fixed deal ends and ERC disappears</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Another borrower waits until the fixed period ends, checks that the ERC has gone, and then makes a larger
              overpayment without the same fee risk. Timing alone changes the outcome.
            </p>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If you want to see whether the likely saving still looks attractive once you factor in the mortgage terms, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator
            </Link>{" "}
            after checking the allowance.
          </p>
        </div>
      </Section>

      <Section
        title="How to check your own mortgage properly"
        description="A few quick checks can tell you far more than relying on a generic rule."
        compact
      >
        <ol className="space-y-4">
          {[
            "Read the mortgage offer or current product terms to find the exact overpayment wording.",
            "Check whether the allowance is based on the balance, original loan, or another measure.",
            "Check when the allowance resets and whether it uses the deal anniversary or another mortgage year.",
            "Check whether monthly overpayments and lump sums are added together.",
            "Check whether the lender reduces the mortgage term or the monthly payment after an overpayment.",
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
        title="Common mistakes to avoid"
        description="The rule itself is not usually the problem. Misreading how it works is."
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
        title="When the rule matters less"
        description="Some borrowers will find that the 10% rule is less relevant than they first thought."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If your mortgage is on a more flexible tracker or standard variable rate, overpayment rules may be looser. If your
            fixed deal has already ended, the old ERC may have disappeared. In both cases, the practical focus shifts away from
            avoiding a charge and towards deciding whether the overpayment still makes sense financially.
          </p>
          <p>
            If that is your situation, our guide on{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.afterFixedRate}>
              overpaying after a fixed rate ends
            </Link>{" "}
            may be the better next read.
          </p>
        </div>
      </Section>

      <Section
        title="Questions worth asking your lender"
        description="If the mortgage wording is unclear, a few direct questions can remove the guesswork."
        compact
      >
        <ul className="space-y-4">
          {[
            "How is the overpayment allowance calculated on my deal?",
            "When exactly does the allowance reset?",
            "Do regular overpayments and lump sums count towards the same total?",
            "Does the lender shorten the term or reduce the payment after an overpayment?",
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
        title="Why the 10% rule is only half the decision"
        description="Staying within the limit is useful, but you still need to decide whether the overpayment itself is the right move."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Borrowers sometimes focus so much on avoiding the fee that they forget to ask whether overpaying is the best use of
            the money in the first place. The 10% rule tells you what may be allowed. It does not tell you whether the payment
            fits your wider finances.
          </p>
          <p>
            Once you know the safe allowance, the next step is still to compare overpaying with your savings needs, your
            mortgage rate, and your overall goals. The rule protects you from one kind of mistake, but it does not make the
            decision for you.
          </p>
        </div>
      </Section>

      <Section
        title="How to plan the allowance across the year"
        description="A little planning can help you use the available flexibility without drifting over the line."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Some borrowers prefer to spread overpayments evenly through the year so the running total stays easy to track.
            Others leave room for a possible lump sum later in the year in case a bonus or one-off pot becomes available.
          </p>
          <p>
            Either approach can work. The key is to know how much of the allowance has already been used and how much headroom
            remains. That matters more than the exact pattern you choose.
          </p>
          <p>
            If you like flexibility, it can be sensible to avoid using the whole allowance too early. That way you still have
            room later in the mortgage year if an opportunity or need arises.
          </p>
          <p>
            This is one reason some borrowers prefer a steady monthly overpayment rather than a single large payment early in
            the year. It keeps the mortgage moving while preserving room to react later.
          </p>
          <p>
            The more deliberately you plan the allowance, the less likely it is that a useful overpayment turns into an
            avoidable charge simply because the timing was handled loosely.
          </p>
        </div>
      </Section>

      <Section
        title="Why borrowers often confuse the 10% rule"
        description="The rule sounds simple, but the wording behind it can vary enough to change the practical result."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Some borrowers assume the 10% rule always resets on 1 January. Others assume the allowance is always based on the
            current balance or that every extra payment above the limit is charged in the same way. Those assumptions are where
            problems usually start.
          </p>
          <p>
            The safest habit is to treat the rule as a prompt to check the deal wording, not as a shortcut that removes the need
            to check it.
          </p>
          <p>
            That one habit alone can prevent a lot of avoidable confusion and a surprising number of unnecessary charges.
          </p>
          <p>
            It also makes it much easier to use the mortgage allowance deliberately rather than accidentally.
          </p>
          <p>Clarity is often the cheapest mortgage saving you can create before any payment is even made at all on the mortgage deal itself in practice first too.</p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Short answers to the questions people usually ask about the 10% rule and ERCs."
        compact
      />

      <Section title="Useful next steps" description="These pages help you move from rules and charges to a practical overpayment plan." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="The mortgage agreement is always more important than the rule of thumb." compact>
        <TrustNote children="This guide is for general guidance only. The 10% rule is common but not universal, and lender wording on ERCs, reset dates, and overpayment treatment can vary from one mortgage deal to another." />
      </Section>

      <CTASection
        title="Check the likely impact before you overpay"
        description="Once you know the safe allowance on your mortgage, use the calculator to estimate what that extra payment could do to your term and interest bill."
        compact
      />
    </>
  )
}
