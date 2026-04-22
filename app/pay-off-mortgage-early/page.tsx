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
  title: "How to Pay Off Your Mortgage Early | UK Guide",
  description:
    "Explore practical ways to pay off your mortgage early in the UK, reduce interest, and shorten your term with a clearer plan.",
  path: ROUTES.payOffEarly,
})

const breadcrumbs = makeBreadcrumbs([{ name: "How to pay off your mortgage early", href: ROUTES.payOffEarly }])
const faqs = getFaqs("payOffEarly")

const keyPoints = [
  "Paying off your mortgage early usually comes down to overpaying regularly, using lump sums, or doing both.",
  "The best early-payoff plan is usually the one you can maintain without weakening your wider finances.",
  "Mortgage terms, overpayment limits, and early repayment charges should always be checked before you move faster.",
]

const methods = [
  {
    title: "Regular monthly overpayments",
    text: "A steady extra amount each month can shorten the mortgage term gradually and may be easier to keep going than occasional large payments.",
  },
  {
    title: "One-off lump sums",
    text: "A bonus, inheritance, or built-up savings can reduce the balance in one move if the mortgage terms allow it safely.",
  },
  {
    title: "Blended approach",
    text: "Many people use a regular monthly overpayment and then add one-off lump sums when extra money becomes available.",
  },
]

const comparisonRows = [
  {
    factor: "Monthly overpayments",
    strength: "Easy to build into routine and powerful over time",
    watchout: "Can be hard to sustain if you over-commit",
  },
  {
    factor: "Lump sums",
    strength: "Immediate impact on the mortgage balance",
    watchout: "Can leave too little accessible cash if you go too far",
  },
  {
    factor: "Shorter term remortgage",
    strength: "Can speed up repayment through a formal change",
    watchout: "May increase required monthly payments sharply",
  },
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator" },
  { href: ROUTES.lumpSumOverpayment, label: "Read about lump sum mortgage overpayments" },
  { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
  { href: ROUTES.overpayVsSave, label: "Compare overpaying with saving in the UK" },
]

export default function PayOffEarlyPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "How to Pay Off Your Mortgage Early | UK Guide",
          description:
            "Explore practical ways to pay off your mortgage early, reduce interest, and shorten your term with a clearer plan.",
          path: ROUTES.payOffEarly,
        })}
      />
      <JsonLd
        data={articleSchema({
          title: "How to Pay Off Your Mortgage Early | UK Guide",
          description:
            "Explore practical ways to pay off your mortgage early, reduce interest, and shorten your term with a clearer plan.",
          path: ROUTES.payOffEarly,
          keywords: [
            "pay off mortgage early UK",
            "how to pay off your mortgage early",
            "mortgage overpayment calculator UK",
            "reduce mortgage term UK",
          ],
          about: ["Paying off a mortgage early", "Mortgage overpayments", "UK repayment mortgages"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="How to Pay Off Your Mortgage Early"
          intro="Paying off your mortgage early is often less about one dramatic move and more about using the right method consistently. This guide explains the practical ways UK borrowers usually reduce their mortgage term, what to check before moving faster, and how to build a plan that still feels realistic."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="If you want to pay off your mortgage early, the usual route is to reduce the balance faster than planned by making regular overpayments, using one-off lump sums, or switching to a structure that clears the debt sooner. The best method is the one that shortens the term without making the rest of your finances fragile. In practice, that usually means keeping an emergency fund, checking the mortgage rules, and testing a realistic overpayment level before you commit." />
          <KeyPointsList title="Key takeaway" items={keyPoints} />
        </div>
      </Section>

      <Section
        title="Why paying off early appeals"
        description="For many borrowers, the attraction is not only the interest saving but the freedom of owning the home outright sooner."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Paying off a mortgage early can reduce the total interest paid and shorten the period you are committed to monthly
            mortgage payments. That is the clear financial case for moving faster than the original repayment schedule.
          </p>
          <p>
            But there is usually a psychological side as well. Many people value the idea of removing the mortgage payment from
            their future budget, especially if they are thinking ahead to later life or simply want more control over household
            finances.
          </p>
          <p>
            The challenge is making progress without creating pressure elsewhere. A good early-payoff plan improves your long-
            term position without leaving you short of cash or forcing you to reverse course later.
          </p>
        </div>
      </Section>

      <Section
        title="Practical ways to reduce the mortgage term"
        description="Most early-payoff plans come down to a few simple levers."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {methods.map((item) => (
            <article key={item.title} className="card rounded-[2rem] px-5 py-5">
              <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Which method is best?"
        description="The answer usually depends on where the extra money comes from and how much certainty you need around your budget."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <h3 className="text-lg font-semibold text-slate-950">Comparing common early-payoff methods</h3>
          <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Method</th>
                <th className="py-2 pr-4 font-semibold">Main strength</th>
                <th className="py-2 font-semibold">Main watch-out</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.factor} className="border-b border-slate-100 align-top last:border-b-0">
                  <th className="py-3 pr-4 font-medium text-slate-950">{row.factor}</th>
                  <td className="py-3 pr-4">{row.strength}</td>
                  <td className="py-3">{row.watchout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Worked examples"
        description="These examples are illustrative, but they show why different borrowers use different ways to get to the same goal."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: Small monthly overpayment, long-term effect</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                A borrower with £230,000 left on the mortgage and 25 years remaining starts overpaying by £100 a month. The
                amount does not feel dramatic, but over time it can still trim years from the mortgage and reduce the total
                interest bill.
              </p>
              <p>
                This is often the most workable approach because it uses monthly discipline rather than waiting for a large cash
                windfall.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: Lump sum after a bonus</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Another borrower receives a bonus and uses part of it as a one-off mortgage overpayment. The balance falls
                immediately, which can produce a noticeable reduction in future interest if the mortgage terms allow it without
                a fee.
              </p>
              <p>
                This route can work especially well when the household already has enough accessible savings.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Mixed approach</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A household uses a steady £75 monthly overpayment and then adds an occasional lump sum when extra cash becomes
              available. This blended method can balance progress with flexibility surprisingly well.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 4: Overpaying too hard</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower tries to overpay aggressively but ends up relying on savings to get through uneven months. In that
              situation, the plan may look good on paper but not in real life. A smaller, steadier overpayment may be better.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="What makes an early-payoff plan workable?"
        description="The point is not only to reduce the mortgage quickly. It is to do it without creating avoidable strain."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A workable plan normally starts with affordability. If the extra payment makes monthly life uncomfortable, the plan
            is less likely to last. A slightly smaller overpayment that you can maintain may outperform a larger one that only
            survives a few months.
          </p>
          <p>
            It also helps to keep enough flexibility. Paying off early is a strong goal, but so is being able to handle car
            repairs, home costs, or a difficult month without scrambling.
          </p>
          <p>
            Before deciding on the amount, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator
            </Link>{" "}
            to test a few realistic scenarios rather than jumping straight to the most ambitious figure.
          </p>
        </div>
      </Section>

      <Section
        title="What to check before you overpay"
        description="Mortgage terms can affect the best route just as much as the maths."
        compact
      >
        <ol className="space-y-4">
          {[
            "Check whether the mortgage allows overpayments without an early repayment charge.",
            "Check whether annual limits apply and whether monthly overpayments and lump sums count together.",
            "Check whether the lender reduces the term or the monthly payment after an overpayment.",
            "Check your emergency fund and wider budget before deciding how hard to push.",
            "Check whether a monthly, one-off, or blended approach fits your circumstances best.",
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
        title="When paying off early may not be the best move"
        description="The right answer is not always to push harder on the mortgage right now."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Paying off early may not be the best move if you still have expensive debt, if your savings are too thin, or if a
            large overpayment would trigger fees. It may also be less attractive if you know the money is likely to be needed
            for something else in the near future.
          </p>
          <p>
            In those situations, the better plan may be to strengthen the foundations first and return to the early-payoff goal
            once your finances feel more balanced.
          </p>
        </div>
      </Section>

      <Section
        title="How to choose your first overpayment amount"
        description="The first figure matters because it often sets the tone for the whole plan."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If you are starting from nothing, a smaller amount is often the smartest place to begin. It gives you a realistic
            feel for how the extra payment affects the budget without forcing the plan too hard too early.
          </p>
          <p>
            Once the amount feels routine, you can decide whether to keep it there, increase it gradually, or add occasional
            lump sums on top. This usually works better than choosing an impressive target first and trying to squeeze life
            around it later.
          </p>
        </div>
      </Section>

      <Section
        title="How early is early enough?"
        description="You do not have to clear the mortgage in record time for the plan to be worthwhile."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Some borrowers imagine paying off the mortgage early only counts if they knock off a huge number of years. In
            reality, even a moderate reduction in the term can still be valuable if it saves interest and improves your future
            cash flow.
          </p>
          <p>
            A realistic early-payoff plan is usually better than an extreme one. If the strategy shortens the mortgage without
            making the present feel strained, that is already a meaningful win.
          </p>
        </div>
      </Section>

      <Section
        title="Common mistakes when trying to pay off early"
        description="The biggest setbacks usually come from moving too fast without checking what the plan costs elsewhere."
        compact
      >
        <ul className="space-y-4">
          {[
            "Overpaying so aggressively that savings fall too low.",
            "Ignoring mortgage limits or early repayment charges.",
            "Choosing an ambitious monthly figure that becomes hard to sustain.",
            "Assuming a shorter mortgage term always matters more than flexibility.",
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
        title="How to keep the plan going"
        description="Consistency is usually what turns an early-payoff goal into a real outcome."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The easiest way to keep the plan going is to choose a level that still leaves room for ordinary life. If the
            overpayment feels too sharp every month, the strategy can become fragile even if it looks strong on paper.
          </p>
          <p>
            Regular reviews help as well. A plan that felt right a year ago may be too cautious or too aggressive now. Revisiting
            the calculator from time to time can help you adjust the pace without losing direction.
          </p>
          <p>
            That review habit is often what turns a short burst of enthusiasm into a long-term early-payoff plan. Small
            adjustments over time can be more effective than relying on one perfect decision at the start.
          </p>
        </div>
      </Section>

      <Section
        title="What a good early-payoff plan usually feels like"
        description="In most cases, the right plan is noticeable but not stressful."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A good plan usually leaves you confident rather than stretched. You should be able to see the mortgage moving in the
            right direction without feeling that every month depends on everything going perfectly.
          </p>
          <p>
            That is why a steady overpayment, reviewed occasionally and increased only when it feels safe, often works better
            than a dramatic push that the budget cannot comfortably support.
          </p>
          <p>
            If the plan still feels calm after a few ordinary months, that is usually a good sign that it is built on something
            solid rather than wishful thinking.
          </p>
          <p>
            Over time, that calm consistency is usually what turns the idea of paying early into a result you can actually see.
          </p>
          <p>
            It also makes the plan easier to adjust if your mortgage rate, income, or household priorities change later on.
          </p>
          <p>This is often what separates a hopeful plan from one that genuinely lasts over the long term and survives real life well for years ahead.</p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Short answers to the questions people usually ask when planning to pay off the mortgage early."
        compact
      />

      <Section title="Useful next steps" description="These pages help you decide how to move faster without creating unnecessary pressure." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="Use the early-payoff goal as a guide, not as a reason to weaken the rest of your finances." compact>
        <TrustNote children="Paying off your mortgage early can be a strong long-term goal, but the right pace depends on affordability, flexibility, and the exact mortgage terms. The best plan is usually the one you can keep going comfortably." />
      </Section>

      <CTASection
        title="See how quickly your mortgage could move"
        description="Use the calculator to test a realistic monthly overpayment, a one-off lump sum, or both and compare the likely change in mortgage-free date."
        compact
      />
    </>
  )
}
