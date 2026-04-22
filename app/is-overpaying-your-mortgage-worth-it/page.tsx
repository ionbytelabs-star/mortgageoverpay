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
  title: "Is Overpaying Your Mortgage Worth It? | Mortgage Overpay",
  description:
    "See when overpaying your mortgage may be worth it in the UK and when flexibility or savings may matter more.",
  path: ROUTES.worthIt,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Is overpaying your mortgage worth it?", href: ROUTES.worthIt }])
const faqs = getFaqs("worthIt")

const worthFactors = [
  "How high your mortgage rate is compared with savings returns",
  "How much emergency cash you already have",
  "Whether your lender limits overpayments or charges fees",
  "How strongly you value being mortgage-free sooner",
]

const comparisonRows = [
  {
    question: "What do you gain?",
    worthIt: "Lower future interest and a shorter mortgage term",
    lessWorthIt: "Less if savings, liquidity, or other goals matter more",
  },
  {
    question: "What do you give up?",
    worthIt: "Some cash access",
    lessWorthIt: "Possibly too much flexibility if reserves are low",
  },
  {
    question: "Best fit",
    worthIt: "Stable finances and a strong desire to reduce debt",
    lessWorthIt: "Tighter finances or a strong need for accessible cash",
  },
  {
    question: "Biggest risk",
    worthIt: "Overpaying without checking limits",
    lessWorthIt: "Delaying a useful overpayment because the decision stays vague",
  },
]

const mistakes = [
  "Thinking overpaying is automatically worth it for everyone because it reduces interest.",
  "Ignoring the value of a healthy cash buffer and ending up less resilient.",
  "Judging the idea by a rough guess instead of using the calculator with your own figures.",
  "Looking only at the money saved and not at the flexibility lost.",
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
  { href: ROUTES.overpayVsSave, label: "Compare overpaying with saving in the UK" },
  { href: ROUTES.overpayVsInvest, label: "Compare overpaying with investing in the UK" },
  { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
]

export default function WorthItPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Is Overpaying Your Mortgage Worth It? | Mortgage Overpay",
          description:
            "See when overpaying your mortgage may be worth it in the UK and when flexibility or savings may matter more.",
          path: ROUTES.worthIt,
        })}
      />
      <JsonLd
        data={articleSchema({
          title: "Is Overpaying Your Mortgage Worth It? | Mortgage Overpay",
          description:
            "See when overpaying your mortgage may be worth it in the UK and when flexibility or savings may matter more.",
          path: ROUTES.worthIt,
          keywords: [
            "is overpaying mortgage worth it UK",
            "should I overpay my mortgage UK",
            "mortgage overpayment calculator UK",
            "overpay mortgage UK",
          ],
          about: ["Mortgage overpayments", "UK repayment mortgages", "Interest savings"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Is Overpaying Your Mortgage Worth It in the UK?"
          intro="Overpaying your mortgage can be worthwhile, but the real answer depends on more than the headline interest saving. This guide helps you decide when overpaying is genuinely useful, when it may not be the best move, and how to judge the trade-off with confidence."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="Overpaying your mortgage is often worth it if you want a guaranteed saving equal to your mortgage rate, already have an emergency fund, and value becoming mortgage-free sooner. It is often less worthwhile if the overpayment would leave you short of accessible cash, if you can earn a better return elsewhere, or if fees and limits reduce the benefit. In short, it is worth it when the saving matters more than the flexibility you give up." />
          <KeyPointsList title="Key takeaway" items={worthFactors} />
        </div>
      </Section>

      <Section
        title="Why people ask this question so often"
        description="The phrase worth it sounds simple, but it wraps together money, behaviour, and peace of mind."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            The basic financial argument for overpaying is easy to understand. When you reduce the balance faster, the mortgage
            usually charges less interest over time. That is a real benefit, and on a large balance over many years it can be a
            meaningful one.
          </p>
          <p>
            But worth it is not only a question of total pounds saved. It is also about what the money might need to do for you
            instead. If the same money is the difference between feeling secure and feeling exposed, the mortgage saving may not
            be the most important thing right now.
          </p>
          <p>
            That is why overpaying can be absolutely worth it for one household and a poor fit for another. The numbers matter,
            but so do flexibility, timing, and your wider financial position.
          </p>
        </div>
      </Section>

      <Section
        title="What makes mortgage overpayments worthwhile"
        description="Overpaying usually looks strongest when several factors line up rather than just one."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A mortgage overpayment is often worth it when the mortgage rate is high enough for the interest saving to be
            noticeable. The higher the rate, the stronger the guaranteed benefit of reducing the balance early.
          </p>
          <p>
            It is also more likely to feel worthwhile when you already have a proper emergency fund. If you can make the
            overpayment without weakening your safety net, the trade-off becomes easier to justify.
          </p>
          <p>
            Overpaying may be especially worthwhile if you are motivated by the idea of clearing the mortgage sooner. For some
            people, the emotional benefit of seeing the term reduce is every bit as valuable as the financial saving.
          </p>
          <p>
            If this sounds close to your position, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>{" "}
            and put some real figures against the idea.
          </p>
        </div>
      </Section>

      <Section
        title="When overpaying may be less worthwhile"
        description="There are plenty of situations where the right answer is to wait, save, or do something else first."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying may be less worthwhile if your savings are low and one awkward month could push you into stress or
            borrowing. In that case, preserving flexibility may have more value than reducing mortgage interest.
          </p>
          <p>
            It may also be less worthwhile when savings rates are strong and the money can work harder while staying accessible.
            In that situation, the mortgage saving may not be enough to justify tying the money up.
          </p>
          <p>
            Another reason to hold back is when mortgage terms create friction. Annual limits and early repayment charges can
            reduce the benefit, especially on larger extra payments. If you are unsure, read{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.overpaymentLimit}>
              mortgage overpayment limits in the UK
            </Link>{" "}
            before acting.
          </p>
        </div>
      </Section>

      <Section
        title="Worth it on paper vs worth it in real life"
        description="A mathematically sensible move can still be wrong if it makes the rest of your finances less stable."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <h3 className="text-lg font-semibold text-slate-950">A practical worth-it comparison</h3>
          <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Question</th>
                <th className="py-2 pr-4 font-semibold">More likely worth it</th>
                <th className="py-2 font-semibold">More likely less worth it</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.question} className="border-b border-slate-100 align-top last:border-b-0">
                  <th className="py-3 pr-4 font-medium text-slate-950">{row.question}</th>
                  <td className="py-3 pr-4">{row.worthIt}</td>
                  <td className="py-3">{row.lessWorthIt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Worked examples"
        description="These examples are illustrative only, but they show why the answer can change so much from one borrower to another."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: Overpaying is clearly worth it</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                A borrower has £240,000 left on a repayment mortgage at 5%, 25 years remaining, and a solid emergency fund.
                They can afford an extra £200 a month without strain.
              </p>
              <p>
                In that case, overpaying is likely to look worthwhile because the rate is high enough for the interest saving to
                build up well over time. The household is not sacrificing financial stability to make the extra payment.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: Worth considering, but maybe not yet</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Another borrower has a mortgage at 4.1% and can technically overpay by £150 a month, but they only have a small
                cash buffer and expect car costs soon.
              </p>
              <p>
                Overpaying might still save interest, but it may not feel worthwhile right now because the loss of flexibility
                is too significant. Building savings first could be the better move.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Small overpayments still count</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower can only manage £75 to £100 a month. That may still be worth doing if the budget remains comfortable
              and the mortgage term is long enough for the interest saving to add up meaningfully over time.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 4: Charges change the answer</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower plans a large lump sum but is close to their annual overpayment limit. Once a possible ERC is taken
              into account, the idea may become less worthwhile than it first looked.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="How to judge it properly"
        description="A simple step-by-step check can stop the decision turning into guesswork."
        compact
      >
        <ol className="space-y-4">
          {[
            "Check your mortgage rate and remaining term so you know how much interest is still in play.",
            "Check your emergency fund and upcoming costs before deciding what spare cash is truly available.",
            "Check the mortgage terms for annual limits and early repayment charges.",
            "Use the calculator to estimate the likely saving from the overpayment you could actually sustain.",
            "Compare that saving with the flexibility you would lose and decide whether the trade-off feels worthwhile.",
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
        title="Common mistakes"
        description="These are the traps that most often distort the worth-it question."
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
        title="How mortgage rates change the answer"
        description="The higher the mortgage rate, the easier it usually is to see why overpaying might be worthwhile."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            When mortgage rates are low, the guaranteed return from overpaying may still be useful, but it often competes more
            closely with savings and with the value of keeping cash accessible. When mortgage rates rise, the case for
            overpaying often becomes clearer because the interest being avoided is more expensive.
          </p>
          <p>
            That does not mean a high rate makes overpaying automatically right. It simply means the financial saving tends to
            carry more weight in the decision. You still need to compare it with flexibility, liquidity, and your wider plan.
          </p>
        </div>
      </Section>

      <Section
        title="When doing nothing for now is the right answer"
        description="A pause can be a sensible decision if the rest of your finances still need work."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Sometimes the honest answer is that overpaying may be worth doing later, but not yet. If you are rebuilding
            savings, coping with a higher rate, or dealing with uneven income, pressing pause can be the most responsible move.
          </p>
          <p>
            Doing nothing for now is not the same as giving up. It is simply recognising that the best time to overpay is when
            the benefit is not undermined by a weaker overall financial position.
          </p>
        </div>
      </Section>

      <Section
        title="How to use the calculator to answer the question properly"
        description="The calculator is most useful when you compare a few realistic overpayment levels rather than only one ideal scenario."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Start by entering the mortgage as it stands now so you can see the baseline payoff date and total interest. Then add
            a modest monthly overpayment that feels realistic rather than aspirational.
          </p>
          <p>
            After that, test one slightly higher amount and one one-off lump sum if that is relevant to you. This gives a better
            view of whether the extra saving from pushing harder is actually worth the additional loss of flexibility.
          </p>
          <p>
            If two scenarios produce similar long-term results but one feels much easier to live with, that usually tells you a
            lot about whether overpaying is worth it at the level you first had in mind.
          </p>
          <p>
            In other words, the calculator helps turn a vague idea into a practical decision by showing whether the likely gain
            is large enough to justify the trade-off.
          </p>
        </div>
      </Section>

      <Section
        title="Final view"
        description="For many people, the answer becomes clearer once the numbers and the cash position are looked at together."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Overpaying is worth it when it saves meaningful interest, helps you move towards a mortgage-free date that matters
            to you, and does not weaken the rest of your finances. It is less worth it when the gain is small relative to the
            flexibility you give up.
          </p>
          <p>
            If you are on the fence, that usually means the next step is not to guess. It is to test the numbers with your own
            mortgage and compare the result with your wider priorities.
          </p>
          <p>
            In that sense, the question is less about a universal rule and more about whether the outcome feels useful enough to
            earn its place among your other priorities right now.
          </p>
          <p>
            If the answer is yes after you run the numbers properly, that is usually a strong sign that the overpayment is
            genuinely worth considering.
          </p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Short answers to the questions that usually come up when deciding whether overpaying is worth it."
        compact
      />

      <Section title="Useful next steps" description="Use these guides to compare overpaying with the main alternatives." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="This page is for general guidance only." compact>
        <TrustNote children="Whether overpaying is worth it depends on your mortgage terms, savings position, and wider financial priorities. The examples here use standard UK repayment mortgage assumptions rather than personal advice." />
      </Section>

      <CTASection
        title="Check whether overpaying looks worthwhile with your own figures"
        description="Use the calculator to compare time saved and interest saved, then judge whether the trade-off feels right for your budget and priorities."
        compact
      />
    </>
  )
}
