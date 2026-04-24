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
  title: "Mortgage Overpayment Limit UK (10% Rule Explained + Examples) | Mortgage Overpay",
  description:
    "Understand the mortgage overpayment limit UK borrowers usually face, how the 10% rule works, when ERCs apply, and how to check your allowance.",
  path: ROUTES.overpaymentLimit,
})

const breadcrumbs = makeBreadcrumbs([
  { name: "Mortgage overpayment limit UK", href: ROUTES.overpaymentLimit },
])

const faqs = getFaqs("overpaymentLimit")

const keyTakeaways = [
  "Most UK lenders allow around 10% of the outstanding balance to be overpaid each year during a fixed deal.",
  "If you go above the mortgage overpayment allowance while charges still apply, an early repayment charge may be added.",
  "Some tracker, flexible, and standard variable rate mortgages may allow more freedom, so terms can vary a lot.",
]

const exampleRows = [
  { balance: "£100,000", limit: "£10,000", monthly: "£833" },
  { balance: "£200,000", limit: "£20,000", monthly: "£1,666" },
  { balance: "£300,000", limit: "£30,000", monthly: "£2,500" },
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.tenPercentRule, label: "Read more on the 10% rule and early repayment charges" },
  { href: ROUTES.lumpSumOverpayment, label: "Read about lump sum mortgage overpayments" },
  { href: ROUTES.afterFixedRate, label: "Read about overpaying after a fixed rate ends" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage in the UK?" },
]

export default function OverpaymentLimitPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Mortgage Overpayment Limit UK (10% Rule Explained + Examples) | Mortgage Overpay",
          description:
            "Understand the mortgage overpayment limit UK borrowers usually face, how the 10% rule works, when ERCs apply, and how to check your allowance.",
          path: ROUTES.overpaymentLimit,
        })}
      />
      <JsonLd
        data={articleSchema({
          title: "Mortgage Overpayment Limit UK (10% Rule Explained + Examples) | Mortgage Overpay",
          description:
            "Understand the mortgage overpayment limit UK borrowers usually face, how the 10% rule works, when ERCs apply, and how to check your allowance.",
          path: ROUTES.overpaymentLimit,
          keywords: [
            "mortgage overpayment limit UK",
            "how much can I overpay my mortgage UK",
            "10% mortgage overpayment rule UK",
            "mortgage overpayment allowance UK",
            "early repayment charge mortgage UK",
            "can I overpay more than 10% mortgage UK",
          ],
          about: ["Mortgage overpayment limits", "10% mortgage overpayment rule", "Early repayment charges"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Mortgage Overpayment Limit UK (10% Rule Explained + Examples)"
          intro="The mortgage overpayment limit UK borrowers most often face is around 10% of the outstanding balance each year on many fixed-rate deals. Go above that while charges still apply and you may face an early repayment charge, often called an ERC. Most UK lenders allow around 10%, but the exact mortgage overpayment allowance UK borrowers get still varies by deal, lender, and mortgage type."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="If you are asking how much can I overpay my mortgage UK deals by, the most common answer is around 10% a year on many fixed-rate mortgages. That 10% mortgage overpayment rule UK borrowers often hear about is usually based on the outstanding balance and usually resets yearly. But there is no single rule for every mortgage, which is why checking the exact mortgage overpayment limit UK lenders set in your own paperwork is so important." />
          <KeyPointsList title="Quick answer" items={keyTakeaways} />
        </div>
      </Section>

      <Section
        title="What Is the Mortgage Overpayment Limit in the UK?"
        description="The mortgage overpayment limit UK borrowers deal with is simply the extra amount a lender allows before a charge may apply."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A mortgage overpayment allowance UK lenders set is a cap on how much extra you can pay on top of your normal
            mortgage payments over a defined period. On many fixed-rate mortgages, that limit is around 10% of the outstanding
            balance each mortgage year.
          </p>
          <p>
            Most UK lenders allow around 10%, which is why the rule is quoted so often, but it is not a law and it is not
            universal. Some lenders allow more, some allow less, and some mortgages have much more flexibility than others.
          </p>
          <p>
            The important thing is that the mortgage overpayment limit UK borrowers talk about is not really one national rule.
            It is a common product feature. That is why the practical answer always comes back to your own mortgage terms.
          </p>
        </div>
      </Section>

      <Section
        title="The 10% Mortgage Overpayment Rule Explained"
        description="The 10% mortgage overpayment rule UK borrowers hear about is usually straightforward once you strip away the jargon."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            On many fixed-rate mortgages, you can usually overpay up to around 10% of the outstanding balance in a mortgage year
            without paying an early repayment charge. The outstanding balance matters because the allowance is often worked out on
            what you still owe, not on what the original mortgage used to be.
          </p>
          <p>
            The allowance usually resets yearly, but yearly does not always mean calendar year. Some lenders reset it on the
            mortgage anniversary, some on the product anniversary, and others use their own mortgage year definition. That detail
            matters because it affects how much room you really have left at any point.
          </p>
          <p>
            In practical terms, the 10% mortgage overpayment rule UK borrowers rely on is there to give some flexibility without
            allowing unlimited capital repayments during a deal that was priced on the expectation you would stay longer.
          </p>
          <p>
            The safest assumption is not that the allowance definitely works in a particular way. It is that you should confirm
            exactly how your lender calculates it before sending a large overpayment.
          </p>
        </div>
      </Section>

      <Section
        title="Example Overpayment Limits (Real Numbers)"
        description="The table below shows what a typical 10% mortgage overpayment allowance UK borrowers might see looks like in pounds."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <table className="min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Mortgage Balance</th>
                <th className="py-2 pr-4 font-semibold">10% Limit</th>
                <th className="py-2 font-semibold">Monthly Equivalent</th>
              </tr>
            </thead>
            <tbody>
              {exampleRows.map((row) => (
                <tr key={row.balance} className="border-b border-slate-100 last:border-b-0">
                  <td className="py-3 pr-4 font-medium text-slate-950">{row.balance}</td>
                  <td className="py-3 pr-4">{row.limit}</td>
                  <td className="py-3">{row.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            These figures show why the mortgage overpayment limit UK borrowers ask about can sound generous on paper. But the
            monthly equivalent is only a rough comparison. The lender usually cares about the yearly total, not whether you send
            the money monthly or as one lump sum.
          </p>
          <p>
            So a £200,000 mortgage may have an allowance of around £20,000 in the year, but that does not mean you need to
            spread it neatly at £1,666 a month. You could often use a mix of monthly overpayments and lump sums as long as the
            total stays within the allowance.
          </p>
        </div>
      </Section>

      <Section
        title="What Happens If You Go Over the Limit?"
        description="If you go above the mortgage overpayment allowance UK lenders set while charges still apply, you may face an ERC."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            An early repayment charge mortgage UK borrowers often see is usually a percentage fee. A typical range is around 1%
            to 5%, although the exact level depends on the deal and how far through the fixed or discounted period you are.
          </p>
          <p>
            In many cases, the early repayment charge mortgage UK lenders apply is charged only on the excess amount above the
            allowance, not on the whole overpayment. So if your safe allowance is £10,000 and you overpay £12,000, the charge
            may be worked out on the extra £2,000 rather than on the full £12,000.
          </p>
          <p>
            That still matters. A fee can reduce the benefit of an overpayment and in some situations make it much less
            attractive than it looked at first. This is why it is sensible to check the allowance before sending a larger lump
            sum.
          </p>
        </div>
      </Section>

      <Section
        title="Mortgage Types and Overpayment Rules"
        description="The answer changes a lot depending on the kind of mortgage deal you are on."
        compact
      >
        <div className="space-y-6">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Fixed-rate mortgages</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Fixed-rate mortgages are the deals most likely to have a 10% cap. This is where the phrase mortgage overpayment
                limit UK borrowers know best usually comes from.
              </p>
              <p>
                During the fixed period, the lender often wants to limit how much of the capital can be repaid early without a
                fee. That is why the 10% mortgage overpayment rule UK borrowers hear about is so commonly linked to fixed deals.
              </p>
            </div>
          </article>

          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Tracker mortgages</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Tracker mortgages often have much more flexibility, and some may allow unlimited overpayments. But often does
                not mean always. Some tracker products still use restrictions, so the mortgage terms remain the deciding factor.
              </p>
            </div>
          </article>

          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Standard variable rate (SVR)</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Standard variable rate mortgages are typically more flexible and often allow unlimited overpayments, but again it
                is worth checking. If your fixed deal has ended and you have moved onto an SVR, the mortgage overpayment
                allowance UK lenders gave you during the fixed period may no longer apply in the same way.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section
        title="Can You Overpay More Than 10%?"
        description="Yes, in some situations you can overpay more than 10% mortgage UK deals by, but only if the mortgage terms allow it."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The answer to can I overpay more than 10% mortgage UK deals by is sometimes yes. Some flexible mortgages allow more
            than 10%. Some tracker or SVR products are much less restrictive. And once a fixed period ends, the old limit may
            disappear or change completely.
          </p>
          <p>
            This is one reason borrowers should not assume the 10% rule applies forever. The mortgage type, product stage, and
            current lender terms all matter.
          </p>
          <p>
            If you are close to the end of a fixed deal, it can also be worth checking whether it is better to wait until the
            old restrictions fall away before making a large extra payment.
          </p>
        </div>
      </Section>

      <Section
        title="Monthly vs Lump Sum Overpayments"
        description="Both monthly and lump sum overpayments can work, but both often count towards the same mortgage overpayment allowance UK lenders track."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Monthly overpayments</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Regular monthly overpayments can be easier to budget for and easier to track through the year. They often work
                well if you want to use part of the allowance steadily rather than making one big decision.
              </p>
            </div>
          </article>

          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Lump sum overpayments</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Lump sums can be useful after a bonus, inheritance, or a build-up of savings. But they often count towards the
                same yearly total, so they need to be checked against any previous monthly overpayments you have already made.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            In other words, the lender often looks at the total extra repaid in the mortgage year rather than treating monthly
            and lump sum overpayments as separate allowances.
          </p>
        </div>
      </Section>

      <Section
        title="How to Check Your Overpayment Limit"
        description="If you want the real answer for your mortgage overpayment limit UK terms, these are the places to check."
        compact
      >
        <ul className="space-y-4">
          {[
            "Your mortgage offer or product terms, where the overpayment allowance is often written clearly.",
            "Your annual statement, which may show the product and the current deal details.",
            "Your lender directly, if the wording is unclear or you want confirmation before sending a large payment.",
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
        title="How to Avoid Early Repayment Charges"
        description="The best way to avoid an early repayment charge mortgage UK borrowers face is to treat the allowance as a plan, not just a headline number."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Stay within the allowance if you want the safest route. If your mortgage allows around 10%, track all extra payments
            together rather than looking at each one in isolation.
          </p>
          <p>
            Time larger payments around the reset date if that gives you more flexibility. In some cases, splitting overpayments
            across two mortgage years can avoid a fee and still achieve most of the same result.
          </p>
          <p>
            The key is not rushing. A day or two spent checking the reset date, allowance basis, and current product terms can
            protect you from a charge that did not need to happen.
          </p>
        </div>
      </Section>

      <Section
        title="Use Our Mortgage Overpayment Calculator"
        description="Once you know your mortgage overpayment allowance UK terms, the next step is to see what that level of extra payment could actually achieve."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Use our{" "}
            <Link className="text-teal-800 font-semibold underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator
            </Link>{" "}
            to estimate how much interest and time you could save by overpaying your mortgage. It is the fastest way to compare
            a monthly overpayment with a lump sum and see whether using more of your allowance looks worthwhile.
          </p>
          <p>
            Once you have the likely saving in front of you, it is much easier to judge whether you want to use a little of the
            allowance, most of it, or none of it at all.
          </p>
        </div>
      </Section>

      <Section title="Useful next steps" description="These guides go one level deeper once you understand the mortgage overpayment limit UK rules." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="This page is designed to be factual, useful, and practical rather than promotional." compact>
        <TrustNote children="This is general guidance only. Most UK lenders allow around 10%, but your own mortgage terms are what count. Always check the mortgage offer, annual statement, or lender confirmation before making a larger extra payment." />
      </Section>

      <FAQSection
        items={faqs}
        title="FAQs"
        description="Quick answers to the most common mortgage overpayment limit UK questions."
        compact
      />

      <CTASection
        title="Use our calculator to see how much you could save by overpaying your mortgage"
        description="Test a realistic overpayment amount, compare monthly and lump sum options, and see what your mortgage overpayment allowance could mean in real numbers."
        compact
      />
    </>
  )
}
