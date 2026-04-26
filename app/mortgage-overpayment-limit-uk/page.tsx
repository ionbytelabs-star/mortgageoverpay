import Link from "next/link"

import { CTASection } from "@/components/common/CTASection"
import { FAQSection } from "@/components/common/FAQSection"
import { TrustNote } from "@/components/common/TrustNote"
import { InternalLinkBlock } from "@/components/content/InternalLinkBlock"
import { Section } from "@/components/layout/Section"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { getFaqs } from "@/lib/faq"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Mortgage Overpayment Limit UK (10% Rule Explained + Real Examples) | Mortgage Overpay",
  description:
    "Understand the mortgage overpayment limit UK lenders usually set, how the 10% rule works, when ERCs apply, and how to check your allowance.",
  path: ROUTES.overpaymentLimit,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Mortgage overpayment limit UK", href: ROUTES.overpaymentLimit }])

const faqs = getFaqs("overpaymentLimit")

const updatedLabel = "April 2026"
const authorName = "Mortgage Overpay Editorial Team"

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.tenPercentRule, label: "Read more about the 10% rule and ERCs" },
  { href: ROUTES.afterFixedRate, label: "Read about overpaying after a fixed rate ends" },
  { href: ROUTES.lumpSumOverpayment, label: "See how lump sum overpayments work in practice" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage in the UK?" },
]

const keyTakeaways = [
  "Most mortgages allow around 10% overpayment each year during a fixed-rate deal.",
  "Going above the allowance may trigger an early repayment charge on the excess.",
  "Fixed deals usually have limits, while tracker and variable deals are often more flexible.",
  "The allowance usually resets yearly and unused allowance usually cannot be rolled forward.",
  "Always check your mortgage terms before making a larger overpayment.",
]

export default function OverpaymentLimitPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Mortgage Overpayment Limit UK (10% Rule Explained + Real Examples)
          </h1>
          <p className="text-sm leading-6 text-slate-500">
            By {authorName}, mortgage content specialist | Last updated: {updatedLabel}
          </p>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Most UK mortgages allow around 10% of the outstanding balance to be overpaid each year without penalty during
            a fixed deal. Go above that and you may face an early repayment charge, often called an ERC. Some mortgages
            allow more and some allow less, so the exact overpayment limit depends on your lender and mortgage terms.
          </p>
        </div>
      </Section>

      <Section className="pt-0" compact>
        <Section
          title="Quick Answer"
          description="If you want the shortest version first, these are the points that matter most."
          compact
        >
          <ul className="space-y-3 text-sm leading-7 text-slate-600">
            <li>
              <strong className="text-slate-950">Most UK mortgages allow up to 10% overpayment per year</strong> during a
              fixed deal.
            </li>
            <li>
              <strong className="text-slate-950">This is usually based on your outstanding balance</strong>, not the amount
              you originally borrowed.
            </li>
            <li>
              <strong className="text-slate-950">Going over the limit may trigger early repayment charges</strong>, often
              called ERCs.
            </li>
            <li>
              <strong className="text-slate-950">Limits vary depending on your mortgage type</strong>, so always check your
              mortgage terms before making a larger payment.
            </li>
          </ul>
        </Section>
      </Section>

      <Section
        title="What Is the Overpayment Limit in the UK?"
        description="The overpayment limit is the extra amount a lender lets you pay off without triggering a charge."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            An overpayment allowance is the amount you can pay above your normal monthly mortgage payment within a defined
            period. On many fixed-rate mortgages, that allowance is around <strong className="text-slate-950">10% of the
            outstanding balance each year</strong>.
          </p>
          <p>
            Most UK lenders allow around 10%, but the exact limit varies by lender, mortgage type, and deal terms. Some
            mortgages are more flexible. Some are tighter. Some have no practical cap once a fixed period ends.
          </p>
          <p>
            So the short answer is straightforward: many borrowers can overpay around 10% a year, but the exact amount on
            your mortgage depends on your own paperwork.
          </p>
          <p>
            This matters because overpaying can reduce your balance faster, cut the total interest you pay, and potentially
            help you become mortgage-free sooner. But it only works well if you understand the rules first.
          </p>
        </div>
      </Section>

      <Section
        title="The 10% Mortgage Overpayment Rule Explained"
        description="The 10% rule is simple once you strip away the jargon."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            On many fixed-rate mortgages, you can overpay up to around 10% of the <strong className="text-slate-950">
            outstanding mortgage balance</strong> in a mortgage year without paying an ERC.
          </p>
          <p>
            The most important point is that the allowance is usually based on what you still owe, not what you originally
            borrowed. So if your remaining balance is £180,000, a typical 10% allowance could mean you can overpay around
            £18,000 in that mortgage year without penalty.
          </p>
          <p>
            The allowance usually <strong className="text-slate-950">resets yearly</strong>. That does not always mean a
            calendar year. Some lenders use the mortgage anniversary, some use the product anniversary, and some define the
            year in their own way.
          </p>
          <p>
            In most cases, the lender works out the allowance using the <strong className="text-slate-950">outstanding
            balance at the start of the allowance period</strong>. That means the 10% figure is normally set from one starting
            balance rather than changing every time the balance moves during the year.
          </p>
          <p>
            Unused allowance usually <strong className="text-slate-950">cannot be carried over</strong>. If you do not use
            your full allowance this year, you normally do not get to add the unused part to next year.
          </p>
          <p>
            In practice, the 10% rule is a useful guide, but it is not a substitute for checking the wording of your own
            deal. Always check your mortgage terms before making a larger overpayment.
          </p>
        </div>
      </Section>

      <Section
        title="Real Example: How the 10% Overpayment Limit Works"
        description="A simple example makes the 10% rule much easier to understand."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Imagine your mortgage balance is <strong className="text-slate-950">£200,000</strong>. If your lender allows
            10% overpayment in the year, your allowance would usually be <strong className="text-slate-950">£20,000</strong>.
          </p>
          <p>
            If you then make an overpayment of <strong className="text-slate-950">£25,000</strong>, the first{" "}
            <strong className="text-slate-950">£20,000</strong> would normally fall within the allowance and would usually
            not trigger a charge.
          </p>
          <p>
            The remaining <strong className="text-slate-950">£5,000</strong> would be the part above the limit. In most
            cases, that is the amount the ERC would be calculated on.
          </p>
          <p>
            In other words, the charge usually applies only to the <strong className="text-slate-950">excess</strong>, not
            to the full overpayment. That is an important detail because it makes the rule less confusing and helps you
            estimate the real cost of going over your limit.
          </p>
        </div>

        <figure
          role="img"
          aria-label="Diagram showing how the 10% mortgage overpayment limit works on a £200,000 mortgage balance"
          className="mt-6 rounded-[2rem] border border-teal-200 bg-gradient-to-br from-teal-50 to-white px-5 py-5"
        >
          <figcaption className="text-sm font-semibold text-slate-950">How the 10% limit works</figcaption>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mortgage balance</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">£200,000</p>
            </div>
            <div className="rounded-2xl border border-teal-200 bg-teal-50 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">10% allowance</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">£20,000</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Overpayment made</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">£25,000</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">ERC applies to</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">£5,000</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            The first £20,000 falls within the allowance. The extra £5,000 sits above the limit, so that is the part that
            would usually be checked for an early repayment charge.
          </p>
        </figure>
      </Section>

      <Section
        title="Example Overpayment Limits (Real Numbers)"
        description="The table below shows what a typical allowance looks like in practice."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <table className="min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Mortgage Balance</th>
                <th className="py-2 pr-4 font-semibold">10% Annual Limit</th>
                <th className="py-2 font-semibold">Monthly Equivalent</th>
              </tr>
            </thead>
            <tbody>
              {[
                { balance: "£100,000", limit: "£10,000", monthly: "£833" },
                { balance: "£200,000", limit: "£20,000", monthly: "£1,666" },
                { balance: "£300,000", limit: "£30,000", monthly: "£2,500" },
              ].map((row) => (
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
            This is the easiest way to understand how much you can overpay. If your remaining balance is £100,000, a
            typical 10% annual allowance could mean £10,000 of extra repayments in that year. If your balance is £200,000,
            the allowance could be around £20,000. If it is £300,000, it could be around £30,000.
          </p>
          <p>
            The monthly equivalent is only a guide. Your lender usually cares about the yearly total, not whether you send
            the money monthly or as one lump sum. So you could often use a mix of regular overpayments and one-off payments,
            as long as the total stays within the annual limit.
          </p>
          <p>
            This is why some borrowers choose a steady monthly overpayment, while others wait for a bonus or savings build-up
            and make one larger lump sum payment instead.
          </p>
        </div>
      </Section>

      <Section
        title="What Happens If You Go Over the Limit?"
        description="If you go above the allowance while charges still apply, you may have to pay an ERC."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            An early repayment charge is usually a percentage fee. A typical range is around{" "}
            <strong className="text-slate-950">1% to 5%</strong>, although the exact number depends on the deal and how far
            through the restricted period you are. If you want a plain-English overview,{" "}
            <a
              href="https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgages-and-early-repayment-charges"
              className="font-semibold text-teal-800 underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              MoneyHelper explains early repayment charges clearly
            </a>
            .
          </p>
          <p>
            In many cases, the ERC applies only to the amount <strong className="text-slate-950">above the limit</strong>,
            not to the whole overpayment. That point matters because it helps you work out the real cost of exceeding your
            allowance.
          </p>
          <div className="card rounded-[2rem] px-5 py-5">
            <p className="text-sm font-semibold text-slate-950">Example</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
              <li>£200,000 mortgage</li>
              <li>£20,000 limit</li>
              <li>£25,000 overpayment</li>
              <li>ERC applies to £5,000 only</li>
            </ul>
          </div>
          <p>
            So if your lender charged 3% on the excess, the fee would be worked out on the £5,000 above the allowance, not
            on the full £25,000. That still reduces the value of overpaying, which is why it is worth checking first.
          </p>
          <p>
            As another simple example, a <strong className="text-slate-950">2% ERC on £5,000 would cost £100</strong>. That
            is why many borrowers prefer to stay inside the allowance unless they have checked that going over still makes
            financial sense.
          </p>
          <p>
            Going over the limit does not always mean overpaying is a bad idea, but it does mean you should compare the
            likely interest saving with the likely charge before acting.
          </p>
        </div>
      </Section>

      <Section
        title="Mortgage Types and Overpayment Rules"
        description="The answer changes a lot depending on the kind of mortgage deal you have."
        compact
      >
        <div className="space-y-6">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Fixed-rate mortgages</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Fixed-rate mortgages are the type most likely to have a <strong className="text-slate-950">10% cap</strong>.
                During the fixed period, lenders often allow overpayments but limit how much you can repay early without a
                fee.
              </p>
            </div>
          </article>

          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Tracker mortgages</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Tracker mortgages often have more flexibility and may have no overpayment limit, but you still need to check
                the terms. Some trackers are flexible, while others still have restrictions.
              </p>
            </div>
          </article>

          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Standard variable rate (SVR)</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Standard variable rate mortgages are usually more flexible and often have no practical limit on overpayments,
                but again the only reliable answer is the wording in your own mortgage conditions.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section
        title="Can You Overpay More Than 10%?"
        description="Yes, but whether you can do it cheaply depends on the mortgage type and whether ERCs still apply."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Sometimes you can overpay more than 10%. Some flexible mortgages allow it. Some tracker or SVR mortgages may
            allow unlimited overpayments. And once a fixed period ends, the old cap may disappear altogether.
          </p>
          <p>
            The practical catch is that if you are still inside a restricted period and your mortgage uses a 10% annual
            allowance, going above it may trigger an ERC on the excess.
          </p>
          <p>
            That means overpaying more than 10% is often possible, but not always sensible. The best time to consider a
            large overpayment is often when:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-7 text-slate-600">
            <li>your fixed deal is ending soon</li>
            <li>you have moved to a more flexible mortgage type</li>
            <li>your lender has confirmed no ERC applies</li>
            <li>your mortgage is specifically designed to allow larger overpayments</li>
          </ul>
          <p>
            If you are planning a big lump sum, it is worth checking whether waiting a little longer could move you into a
            more flexible part of the mortgage and save you a charge.
          </p>
        </div>
      </Section>

      <Section
        title="Important Edge Cases Most People Miss"
        description="A few practical details can change how the overpayment limit works in real life."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            <strong className="text-slate-950">At the end of a fixed-rate deal:</strong> overpayments usually become much
            more flexible once the deal ends. In most cases, the old cap no longer applies in the same way, and
            overpayments may become unlimited if you move onto a more flexible rate.
          </p>
          <p>
            <strong className="text-slate-950">If you switch mortgage deals mid-year:</strong> the allowance may reset,
            change, or be replaced with a new overpayment rule depending on the lender and the new product. Always check
            your mortgage terms rather than assuming the old allowance carries across neatly.
          </p>
          <p>
            <strong className="text-slate-950">If your mortgage has multiple parts:</strong> each part may have its own
            balance, rate, and overpayment limit. In that situation, the allowance on one part may not be the same on
            another.
          </p>
          <p>
            These edge cases are easy to miss, especially if you are focused only on the headline 10% rule. A quick check
            before making a larger payment can remove a lot of uncertainty.
          </p>
        </div>
      </Section>

      <Section
        title="Monthly vs Lump Sum Overpayments"
        description="Both methods can work well, and both usually count toward the same annual allowance."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Monthly overpayments</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Monthly overpayments are small extra amounts added to your normal payment. They are often easier to budget
                for and easier to keep going consistently.
              </p>
              <p>
                They work well if you want to reduce the balance steadily without making one large decision in one go.
              </p>
            </div>
          </article>

          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Lump sum overpayments</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Lump sum overpayments are one-off payments, often made from savings, a bonus, or another windfall. They can
                make a bigger immediate dent in the mortgage balance.
              </p>
              <p>
                They work well if your spare money comes in larger chunks rather than month by month.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The main practical point is simple: monthly and lump sum overpayments usually count towards the same annual
            allowance.
          </p>
          <p>
            So if you have already been paying an extra £200 a month and then decide to make a £5,000 lump sum payment,
            both amounts normally need to be counted together when checking whether you are still inside the yearly limit.
          </p>
        </div>
      </Section>

      <Section
        title="How to Check Your Overpayment Limit"
        description="If you want the real answer for your own mortgage, these are the three places to check first."
        compact
      >
        <ul className="space-y-4">
          {[
            "Your mortgage offer document, where the overpayment allowance and ERC wording are often set out clearly.",
            "Your annual mortgage statement, which may show the current deal details and any overpayments already made.",
            "Your lender directly, if you want confirmation before making a larger monthly or lump sum overpayment.",
          ].map((item) => (
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
            If the wording is unclear, ask direct questions. For example: what is my current annual allowance, when does it
            reset, and would this exact payment trigger an ERC?
          </p>
          <p>
            That is often the quickest way to remove uncertainty before you act. If you want broader consumer guidance,
            the{" "}
            <a
              href="https://www.fca.org.uk/consumers/mortgages"
              className="font-semibold text-teal-800 underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              FCA's mortgage information page
            </a>{" "}
            is also a useful place to start.
          </p>
        </div>
      </Section>

      <Section
        title="How to Avoid Early Repayment Charges"
        description="The safest way to avoid an ERC is to plan your overpayments rather than treating the allowance as a rough guess."
        compact
      >
        <ul className="space-y-4 text-sm leading-7 text-slate-600">
          <li>
            <strong className="text-slate-950">Stay within the 10% allowance.</strong> If your mortgage uses a 10% rule,
            keep a running total of all monthly and lump sum overpayments together.
          </li>
          <li>
            <strong className="text-slate-950">Check the reset date.</strong> The allowance usually resets yearly, but not
            always on 1 January.
          </li>
          <li>
            <strong className="text-slate-950">Time payments across years if needed.</strong> In some cases, splitting a
            larger overpayment across two allowance years can avoid a charge.
          </li>
          <li>
            <strong className="text-slate-950">Confirm the details before paying.</strong> A quick check with the lender can
            stop an avoidable ERC.
          </li>
        </ul>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Most UK lenders allow around 10%, but the small details matter. A payment made a few days earlier or later can
            sometimes make the difference between staying inside the allowance and triggering a fee.
          </p>
          <p>
            That is why borrowers making a larger overpayment often plan around the reset date rather than just around when
            they happen to have the cash available.
          </p>
        </div>
      </Section>

      <Section
        title="How Much Can You Overpay Without Penalty?"
        description="In most cases, the answer depends on your current balance, your mortgage type, and the lender rules that apply to your deal."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <table className="min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Mortgage balance</th>
                <th className="py-2 font-semibold">Typical 10% annual overpayment limit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["£100,000", "£10,000"],
                ["£200,000", "£20,000"],
                ["£250,000", "£25,000"],
                ["£300,000", "£30,000"],
              ].map(([balance, limit]) => (
                <tr key={balance} className="border-b border-slate-100 last:border-b-0">
                  <td className="py-3 pr-4 font-medium text-slate-950">{balance}</td>
                  <td className="py-3">{limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            In most cases, your exact limit depends on your current mortgage balance, mortgage type and lender rules. The
            safest approach is to check your mortgage terms before making a large overpayment.
          </p>
          <p>
            Use our{" "}
            <Link className="font-semibold text-teal-800 underline-offset-4 hover:underline" href={ROUTES.home}>
              mortgage overpayment calculator
            </Link>{" "}
            to test your own numbers and see how much interest you could save.
          </p>
        </div>
      </Section>

      <Section title="Useful next steps" description="These guides help once you understand the limit and want to decide what to do with it." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="This page is designed to be clear, practical, and factual rather than promotional." compact>
        <TrustNote>
          This is general guidance only. Most UK lenders allow around 10% during a fixed period, but lender terms vary.
          Always check your mortgage offer, annual statement, or lender confirmation before making a larger overpayment.
        </TrustNote>
      </Section>

      <FAQSection
        items={faqs}
        title="FAQs"
        description="Quick answers to the most common questions about overpayment limits."
        compact
      />

      <CTASection
        title="Use our calculator to see exactly how much you can overpay without triggering charges and how much interest you could save"
        description="Test monthly and lump sum scenarios, compare realistic figures, and see what your allowance could mean in pounds and time saved."
        compact
      />

      <Section title="Key Takeaways" description="If you only want the main points to remember, focus on these." compact>
        <ul className="space-y-3 text-sm leading-7 text-slate-600">
          {keyTakeaways.map((item) => (
            <li key={item}>
              <strong className="text-slate-950">{item}</strong>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-6 text-slate-500">Last updated: {updatedLabel}</p>
      </Section>
    </>
  )
}
