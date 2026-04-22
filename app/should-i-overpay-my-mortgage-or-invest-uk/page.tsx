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
  title: "Should I Overpay My Mortgage or Invest in the UK? | Mortgage Overpay",
  description:
    "Compare mortgage overpayments with investing in the UK, including certainty, risk, flexibility, and when each option may make more sense.",
  path: ROUTES.overpayVsInvest,
})

const breadcrumbs = makeBreadcrumbs([
  { name: "Should I overpay my mortgage or invest in the UK?", href: ROUTES.overpayVsInvest },
])

const faqs = getFaqs("overpayVsInvest")

const comparisonRows = [
  {
    label: "Return profile",
    overpay: "Guaranteed saving equal to the mortgage rate",
    invest: "Potentially higher long-term return, but uncertain",
  },
  {
    label: "Risk",
    overpay: "Low market risk",
    invest: "Value can rise and fall, especially over shorter periods",
  },
  {
    label: "Flexibility",
    overpay: "Money is tied up in the mortgage once paid",
    invest: "Money may be accessible, depending on account and timing",
  },
  {
    label: "Emotional benefit",
    overpay: "Can feel reassuring because debt falls faster",
    invest: "Can feel harder because progress is less predictable",
  },
  {
    label: "Best suited to",
    overpay: "People who value certainty and debt reduction",
    invest: "People with time, risk tolerance, and other buffers in place",
  },
]

const certaintyBars = [
  { label: "Overpaying", stable: 92, rangeLow: 92, rangeHigh: 92 },
  { label: "Investing", stable: 36, rangeLow: 20, rangeHigh: 86 },
]

const hybridSteps = [
  "Take any spare cash you know you can commit every month and split it deliberately rather than leaving the decision vague.",
  "Use one part for regular mortgage overpayments if debt reduction helps you sleep better or your rate is relatively high.",
  "Use the other part for long-term investing if you want growth potential and can accept that returns will not move in a straight line.",
  "Review the split when rates, income, or life priorities change rather than assuming one answer stays right forever.",
]

const commonMistakes = [
  "Comparing overpayments only with the best possible investing outcome instead of a realistic range of outcomes.",
  "Investing before building an emergency fund, then having to sell investments at a bad time when cash is suddenly needed.",
  "Ignoring mortgage terms and annual overpayment limits before making a lump sum.",
  "Treating investing and overpaying as purely mathematical when your comfort with risk matters as well.",
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.overpayVsSave, label: "Compare overpaying with saving in the UK" },
  { href: ROUTES.worthIt, label: "Read is overpaying your mortgage worth it?" },
  { href: ROUTES.lumpSumOverpayment, label: "Read about lump sum mortgage overpayments" },
  { href: ROUTES.guides, label: "Browse all mortgage overpayment guides" },
]

function ComparisonChart() {
  return (
    <div className="card rounded-[2rem] px-5 py-5">
      <h3 className="text-lg font-semibold text-slate-950">Certainty vs possible upside</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        This simple visual shows the difference between a known mortgage saving and a wider range of possible investing
        outcomes over time.
      </p>
      <div className="mt-5 space-y-4">
        {certaintyBars.map((bar) => (
          <div key={bar.label}>
            <div className="flex items-center justify-between text-sm font-medium text-slate-700">
              <span>{bar.label}</span>
              <span>
                {bar.label === "Overpaying" ? "Known outcome" : "Range of outcomes"}
              </span>
            </div>
            <div className="mt-2 rounded-full bg-slate-100 px-1 py-1">
              <div className="relative h-5">
                <div
                  className="absolute top-0 h-5 rounded-full bg-teal-200"
                  style={{ left: `${bar.rangeLow}%`, width: `${bar.rangeHigh - bar.rangeLow || 4}%` }}
                />
                <div
                  className="absolute top-0 h-5 rounded-full bg-teal-700"
                  style={{ left: `${bar.stable}%`, width: "8%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OverpayVsInvestPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Should I Overpay My Mortgage or Invest in the UK? | Mortgage Overpay",
          description:
            "Compare mortgage overpayments with investing in the UK, including certainty, risk, flexibility, and when each option may make more sense.",
          path: ROUTES.overpayVsInvest,
        })}
      />
      <JsonLd
        data={articleSchema({
          title: "Should I Overpay My Mortgage or Invest in the UK? | Mortgage Overpay",
          description:
            "Compare mortgage overpayments with investing in the UK, including certainty, risk, flexibility, and when each option may make more sense.",
          path: ROUTES.overpayVsInvest,
          keywords: [
            "should I overpay my mortgage or invest UK",
            "overpay mortgage or invest UK",
            "mortgage overpayment calculator UK",
            "stocks and shares ISA or overpay mortgage",
          ],
          about: ["Mortgage overpayments", "Investing", "UK repayment mortgages"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Should I Overpay My Mortgage or Invest?"
          intro="This guide helps UK homeowners compare the certainty of mortgage overpayments with the long-term potential of investing. If you are deciding where spare cash should go, the aim is to make the trade-offs clear, practical, and easier to act on."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="You should usually overpay your mortgage if you want a guaranteed benefit equal to your mortgage rate, value becoming mortgage-free sooner, and already have an emergency fund in place. You may prefer investing if you have a long time horizon, can accept market ups and downs, and want the chance of stronger long-term growth than your mortgage rate. For many households, the best answer is not all or nothing but a deliberate split between both." />
          <KeyPointsList
            title="Key takeaway"
            items={[
              "Overpaying gives certainty because every extra pound reduces debt and future mortgage interest.",
              "Investing offers higher upside over the long term, but returns are not guaranteed and values can fall.",
              "If you want both progress and flexibility, a hybrid plan can often be easier to stick with.",
            ]}
          />
        </div>
      </Section>

      <Section
        title="Should You Overpay Your Mortgage or Invest?"
        description="This is really a choice between a guaranteed return and an uncertain return, with a big dose of personal preference in the middle."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A mortgage overpayment gives a return equal to the interest rate you avoid paying. If your mortgage costs 4.8%,
            overpaying is a bit like earning a guaranteed 4.8% return on that money because the balance falls and future
            interest is lower. There is no market drama attached to that. The saving is plain and steady.
          </p>
          <p>
            Investing is different. You are giving up certainty in exchange for the possibility of a better long-term result.
            Over many years, investments may outpace your mortgage rate, especially if you are using tax wrappers such as a
            stocks and shares ISA. But that possibility comes with volatility. Your money may be up one year, down the next,
            and flat for a while after that.
          </p>
          <p>
            This is why the question is not only about maths. It is also about how comfortable you are with uncertainty. Some
            people feel better seeing a mortgage balance drop every month. Others are happy to leave short-term fluctuations
            alone because they are focused on long-term growth. Neither mindset is automatically right. The better answer is
            the one that fits both your numbers and your behaviour.
          </p>
          <p>
            Before deciding, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>
            . It gives you the mortgage side of the comparison clearly, so you can judge whether the certainty is attractive
            enough compared with the risks of investing.
          </p>
        </div>
      </Section>

      <Section
        title="The Difference Between a Guaranteed Return and an Uncertain Return"
        description="This is the core idea that usually decides the answer."
        compact
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ComparisonChart />
          <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Overpaying vs investing at a glance</h3>
            <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 text-slate-950">
                  <th className="py-2 pr-4 font-semibold">Factor</th>
                  <th className="py-2 pr-4 font-semibold">Overpaying</th>
                  <th className="py-2 font-semibold">Investing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-medium text-slate-950">{row.label}</th>
                    <td className="py-3 pr-4">{row.overpay}</td>
                    <td className="py-3">{row.invest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A guaranteed return matters more than many people first think. If your mortgage rate is 5%, it can be difficult
            to find another use for spare cash that gives the same certainty. You know exactly what the money is doing and you
            know the balance is moving in the right direction.
          </p>
          <p>
            Investing can still be the better choice if you are prepared for the journey. Market returns do not arrive in a
            straight line. A good long-term average can still include unpleasant periods where values fall sharply. If you are
            likely to panic, stop contributions, or sell at the wrong time, the theoretical advantage of investing may not
            materialise in practice.
          </p>
        </div>
      </Section>

      <Section
        title="When Overpaying Your Mortgage May Make More Sense"
        description="There are several situations where the certainty of overpaying is hard to beat."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying may make more sense when your mortgage rate is relatively high and accessible savings are no better.
            If the guaranteed saving from overpaying looks more attractive than what you can earn elsewhere without taking risk,
            the case for reducing the mortgage is stronger.
          </p>
          <p>
            It can also make sense if your finances are already tidy. If you have no expensive debt, a proper emergency fund,
            and clear room in your budget, using spare cash to reduce the mortgage can be a calm and disciplined way to
            improve your position without adding complexity.
          </p>
          <p>
            Some people also place a high value on the emotional side. Seeing the mortgage term shorten can create momentum.
            The knowledge that debt is falling faster may matter more to you than chasing a higher but uncertain return in the
            markets. That is not irrational. Behaviour matters. A good plan is one you can stick with.
          </p>
          <p>
            Overpaying may be particularly appealing if you are close to a mortgage deal review and want to improve your
            loan-to-value position. A lower balance can support a stronger remortgage position, although you should not treat
            that as guaranteed. If you are leaning this way, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            and read our guide on{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.lumpSumOverpayment}>
              lump sum mortgage overpayments
            </Link>{" "}
            if you are considering a one-off payment.
          </p>
        </div>
      </Section>

      <Section
        title="When Investing May Make More Sense"
        description="Investing tends to become more compelling when time, risk tolerance, and flexibility all favour growth."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Investing may make more sense if you have a long time horizon and can leave the money alone through market ups and
            downs. The longer the time available, the easier it usually is to ride out volatility and give growth a chance to
            work.
          </p>
          <p>
            It can also make sense if your mortgage rate is relatively modest and you are comfortable with risk. In that case,
            the gap between the guaranteed mortgage saving and the potential long-term investment return may be wide enough to
            justify taking the market risk.
          </p>
          <p>
            Flexibility matters too. Money held in investments is still not risk-free or instantly stable, but it may still be
            easier to access than money already paid into your mortgage. If you want optionality for future choices, that can
            tip the balance away from overpaying.
          </p>
          <p>
            Investing can be especially attractive if you are already making sensible mortgage payments, have spare monthly
            cash that does not need to remain in your current account, and are happy to think in decades rather than months.
            That said, it should not come before an emergency fund or ahead of clearing expensive debt.
          </p>
        </div>
      </Section>

      <Section
        title="Overpaying vs Investing: Worked UK Examples"
        description="These examples are illustrative only, based on standard UK repayment mortgage assumptions and simple return ranges."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: £200 a month on a 4.9% mortgage</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Imagine a £225,000 repayment mortgage with 23 years left and an interest rate of 4.9%. If you overpay by
                £200 a month, the mortgage could finish roughly 3 years earlier and save around £20,000 to £25,000 in
                interest over the remaining term.
              </p>
              <p>
                Investing that same £200 each month might produce a higher long-term pot, but only if returns are strong and
                you stay invested through the rough patches. You may end up ahead, but you may also have years where the value
                is below what you put in.
              </p>
              <p>
                If certainty matters and the mortgage rate already feels expensive, overpaying may be the easier decision here.
                If growth potential matters more and you have time, investing may still be worth considering.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: £10,000 lump sum with 18 years left</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Now imagine a £180,000 mortgage at 4.4% with 18 years remaining. A £10,000 lump sum could cut a noticeable
                amount from the mortgage term and save several thousand pounds in future interest because the balance falls
                immediately.
              </p>
              <p>
                Investing the same £10,000 could deliver a better result over the long term, especially in a tax wrapper,
                but the timing risk is real. If markets dip just after you invest and you later need the money, the experience
                can feel very different from the original plan.
              </p>
              <p>
                This is a good example of why the best answer depends on whether you value certainty or upside more. Use our{" "}
                <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
                  mortgage overpayment calculator to see your savings
                </Link>{" "}
                before deciding what the guaranteed benefit actually looks like in pounds and months.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Higher-rate borrower, short time horizon</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower with only 8 years left on a mortgage at 5.3% may find overpaying more attractive because the
              guaranteed saving is high and the investment time horizon is shorter. If the money might be needed in under ten
              years, the risk of poor market timing is more awkward.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 4: Lower-rate borrower, long time horizon</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower with 25 years left and a mortgage rate below 4% may lean more towards investing, especially if their
              emergency fund is strong and they already feel comfortable with market volatility. In that case the trade-off may
              favour growth potential over certainty.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="A Hybrid Approach: Do Both"
        description="A split strategy can help if you want some certainty without giving up the long-term opportunity completely."
        compact
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <KeyPointsList title="Simple hybrid plan" items={hybridSteps} />
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              A hybrid approach is often underrated because people assume they must choose one side completely. In reality, a
              split can solve the behavioural problem. You still get visible mortgage progress, but you also keep building
              long-term investments.
            </p>
            <p>
              For example, instead of deciding between £300 a month to the mortgage or £300 a month into investments, you
              might send £150 to each. The return profile becomes less extreme. You give up some certainty compared with
              putting all £300 into the mortgage, but you also keep exposure to possible long-term growth.
            </p>
            <p>
              A hybrid plan can work especially well if you are torn between the emotional appeal of becoming mortgage-free
              sooner and the logical appeal of long-term investing. It is also useful if you want to test your comfort with
              investing without committing every spare pound to it straight away.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Risks, Tax Wrappers, and Time Horizon"
        description="These details often shape the decision more than headline return numbers."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Time horizon matters because investing needs enough time to absorb the bad patches. If you are investing for a
            long-term goal and can leave the money alone, the case for investing is stronger. If the money may be needed in the
            near to medium term, the certainty of overpaying becomes more attractive.
          </p>
          <p>
            Tax wrappers matter too. An investment held inside a tax-efficient wrapper can look more attractive than the same
            investment held outside one. But tax efficiency does not remove market risk. It simply means more of the return may
            stay with you if the investment performs well.
          </p>
          <p>
            There is also sequence risk. Poor returns early in the journey can feel discouraging even if the long-term picture
            improves later. Overpaying does not suffer from that issue in the same way. Each extra payment reduces the balance
            immediately, which is one reason many people find it easier to commit to.
          </p>
        </div>
      </Section>

      <Section
        title="Common Mistakes to Avoid"
        description="The biggest errors usually come from comparing the options too casually."
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
            One of the most common mistakes is forgetting that money can have more than one job. Some of it may be there to
            reduce debt, some to build wealth, and some to protect your day-to-day resilience. If you try to force one pot of
            money to do all three jobs, the answer becomes muddy.
          </p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Quick answers to the questions that usually come up when comparing overpayments with investing."
        compact
      />

      <Section title="Useful next steps" description="These guides help if you want to compare adjacent choices before deciding." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="This page is designed for planning, not personalised financial advice." compact>
        <TrustNote children="This is general guidance only. The worked examples use standard UK repayment mortgage assumptions and simplified investment ranges, but your mortgage rate, tax position, risk tolerance, and personal circumstances may lead you to a different answer." />
      </Section>

      <CTASection
        title="See the guaranteed side of the comparison with your own figures"
        description="Use our mortgage overpayment calculator to see how much interest and time you could save, then compare that certainty with the risks and rewards of investing."
        compact
      />
    </>
  )
}
