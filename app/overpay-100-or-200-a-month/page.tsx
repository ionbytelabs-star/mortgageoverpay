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
  title: "What Happens If You Overpay 100 or 200 a Month? | Mortgage Overpay",
  description:
    "See how an extra 100 or 200 a month could affect your mortgage term and interest in the UK.",
  path: ROUTES.overpay100Or200,
})

const breadcrumbs = makeBreadcrumbs([{ name: "What happens if you overpay 100 or 200 a month?", href: ROUTES.overpay100Or200 }])
const faqs = getFaqs("overpay100Or200")

const keyPoints = [
  "Even small monthly overpayments can make a noticeable difference over a long mortgage term.",
  "£200 a month will usually have a stronger effect than £100, but both can shorten the term and reduce interest.",
  "The real test is whether the amount feels sustainable alongside your budget and mortgage limits.",
]

const comparisonRows = [
  {
    factor: "Monthly cash impact",
    oneHundred: "Easier to sustain for many households",
    twoHundred: "Stronger results but more budget pressure",
  },
  {
    factor: "Term reduction",
    oneHundred: "Meaningful over time",
    twoHundred: "Usually much more noticeable",
  },
  {
    factor: "Interest saving",
    oneHundred: "Useful but more gradual",
    twoHundred: "Usually larger and easier to feel worthwhile",
  },
  {
    factor: "Best fit",
    oneHundred: "Cautious start or tighter budgets",
    twoHundred: "Stable budgets with more spare room",
  },
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to compare your own figures" },
  { href: ROUTES.shouldIOverpay, label: "Read should I overpay my mortgage?" },
  { href: ROUTES.worthIt, label: "Read is overpaying your mortgage worth it?" },
  { href: ROUTES.overpaymentLimit, label: "Read mortgage overpayment limits in the UK" },
  { href: ROUTES.payOffEarly, label: "Read how to pay off your mortgage early" },
]

export default function Overpay100Or200Page() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "What Happens If You Overpay 100 or 200 a Month? | Mortgage Overpay",
          description:
            "See how an extra 100 or 200 a month could affect your mortgage term and interest in the UK.",
          path: ROUTES.overpay100Or200,
        })}
      />
      <JsonLd
        data={articleSchema({
          title: "What Happens If You Overpay 100 or 200 a Month? | Mortgage Overpay",
          description:
            "See how an extra 100 or 200 a month could affect your mortgage term and interest in the UK.",
          path: ROUTES.overpay100Or200,
          keywords: [
            "what happens if you overpay 100 a month mortgage",
            "what happens if you overpay 200 a month mortgage",
            "mortgage overpayment calculator UK",
            "small mortgage overpayments UK",
          ],
          about: ["Small mortgage overpayments", "UK repayment mortgages", "Interest savings"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="What Happens If You Overpay £100 or £200 a Month on Your Mortgage?"
          intro="A lot of borrowers assume small monthly overpayments are not worth bothering with. In reality, an extra £100 or £200 a month can have a useful long-term effect, especially if many years remain on the mortgage. This guide explains what changes, what the trade-offs look like, and how to judge whether the amount is realistic for you."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="Overpaying by £100 or £200 a month can shorten your mortgage term and reduce the total interest paid, even though the monthly amount may feel modest. The larger amount will usually create the bigger saving, but the best choice is the one you can sustain comfortably. If the budget feels tight, a smaller regular overpayment can still be worthwhile over time." />
          <KeyPointsList title="Key takeaway" items={keyPoints} />
        </div>
      </Section>

      <Section
        title="Why small monthly overpayments can still matter"
        description="The power of a modest overpayment comes from repetition, not from a dramatic one-off change."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Every regular overpayment pushes the mortgage balance down a little earlier than planned. That matters because
            interest is usually charged on the balance that remains. Over time, those small earlier reductions begin to stack up.
          </p>
          <p>
            The effect is often strongest when there is still a long mortgage term ahead. More years remaining usually means
            more future interest to avoid, which gives smaller monthly overpayments more time to work.
          </p>
          <p>
            This is why a figure that looks modest month to month can still create a worthwhile long-term saving. The important
            thing is not whether the extra amount sounds impressive. It is whether it can be maintained without stress.
          </p>
        </div>
      </Section>

      <Section
        title="£100 vs £200 a month at a glance"
        description="A bigger overpayment will usually do more, but the best figure is the one that fits real life."
        compact
      >
        <div className="overflow-x-auto card rounded-[2rem] px-5 py-5">
          <h3 className="text-lg font-semibold text-slate-950">Comparing £100 and £200 a month</h3>
          <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Factor</th>
                <th className="py-2 pr-4 font-semibold">£100 a month</th>
                <th className="py-2 font-semibold">£200 a month</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.factor} className="border-b border-slate-100 align-top last:border-b-0">
                  <th className="py-3 pr-4 font-medium text-slate-950">{row.factor}</th>
                  <td className="py-3 pr-4">{row.oneHundred}</td>
                  <td className="py-3">{row.twoHundred}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Worked examples"
        description="These examples are illustrative, but they show why even a smaller monthly overpayment can add up over time."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: £100 a month on a long mortgage</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Imagine a mortgage balance of £200,000 at 4.6% with 25 years remaining. An extra £100 a month could reduce the
                term by a useful amount and cut total interest by several thousand pounds over time.
              </p>
              <p>
                The monthly amount does not feel huge, but the effect builds because the borrower keeps nudging the balance down
                every month ahead of schedule.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: £200 a month on the same mortgage</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                On the same mortgage, £200 a month would usually produce a noticeably larger effect. The term would generally
                fall faster, and the total interest reduction would be larger.
              </p>
              <p>
                But the improvement only matters if the higher figure still feels sustainable. If £200 would make the monthly
                budget feel tight, £100 may still be the better real-world answer.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 3: Later in the mortgage term</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If only a few years remain on the mortgage, both £100 and £200 a month can still help, but the total interest left
              to save is smaller than it would be earlier in the term. The effect may still be useful, just less dramatic.
            </p>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 4: Budget-first approach</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A borrower thinks £200 a month is probably possible, but starts at £100 first to test how the budget feels. That
              cautious approach may be more effective than aiming too high and stopping a few months later.
            </p>
          </article>
        </div>
      </Section>

      <Section
        title="How to decide between £100 and £200"
        description="The right number is usually the one that balances progress with consistency."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If £200 feels comfortable after bills, savings, and day-to-day costs, it will usually create the stronger mortgage
            result. But if £200 feels slightly forced and £100 feels easy to maintain, the smaller amount may be the better
            option because it is more likely to last.
          </p>
          <p>
            A regular overpayment plan only works if it survives real life. That means the monthly amount should not be so
            ambitious that a single awkward month knocks it off course.
          </p>
          <p>
            A sensible method is to test both figures in our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator
            </Link>{" "}
            and then compare the difference in results with the difference in budget pressure.
          </p>
        </div>
      </Section>

      <Section
        title="When a smaller overpayment can be smarter"
        description="A cautious overpayment is often better than an aggressive one that does not last."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A smaller overpayment can be smarter when your budget still needs flexibility, you are rebuilding savings, or you
            have uncertain costs ahead. In that situation, £100 may strike a better balance between progress and resilience.
          </p>
          <p>
            A smaller amount can also be a sensible trial period. You might start with £100, see how the budget feels for three
            or four months, then decide whether stepping up to £200 feels comfortable.
          </p>
        </div>
      </Section>

      <Section
        title="What to check before setting up the overpayment"
        description="Even a small monthly extra payment should still be checked against the mortgage terms."
        compact
      >
        <ol className="space-y-4">
          {[
            "Check whether your mortgage allows regular overpayments without a charge.",
            "Check if annual overpayment limits apply and whether monthly overpayments count towards the same total as lump sums.",
            "Check whether the lender reduces the mortgage term or monthly payment after the overpayment.",
            "Check your own budget first so the amount is realistic as well as appealing.",
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
        title="Why consistency matters more than perfection"
        description="The long-term result usually depends more on sticking with the plan than on choosing the mathematically ideal figure on day one."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A borrower who consistently overpays by £100 for years will usually be in a much stronger position than a borrower
            who plans £200 but keeps stopping and restarting. This is one of the main reasons a realistic monthly amount often
            beats an ambitious one.
          </p>
          <p>
            If you are unsure, start with the lower amount and review it later. The plan can always be increased once you know
            it sits comfortably within the budget.
          </p>
        </div>
      </Section>

      <Section
        title="When it makes sense to step up from £100 to £200"
        description="A higher amount usually becomes attractive once the smaller figure already feels easy to maintain."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A move from £100 to £200 a month often makes sense when your budget has strengthened, savings are in a good place,
            and you have already proved that the smaller amount is sustainable.
          </p>
          <p>
            The main point is that the increase should feel deliberate rather than hopeful. If doubling the overpayment would
            make the rest of your monthly finances feel tight, it is usually better to wait.
          </p>
        </div>
      </Section>

      <Section
        title="What if your budget changes later?"
        description="A monthly overpayment plan should be able to adapt if income, bills, or priorities move."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            One advantage of a monthly overpayment is that it can usually be adjusted more easily than a large one-off payment.
            If costs rise or income becomes less predictable, the overpayment can often be reduced or paused while you protect
            the essentials.
          </p>
          <p>
            That flexibility is one reason many people prefer monthly overpayments to waiting for a perfect lump sum. The plan
            can evolve with the rest of your finances rather than depending on a single big decision.
          </p>
          <p>
            It is also why a sustainable £100 can sometimes be more valuable than an over-ambitious £200. The better plan is the
            one you can keep going through ordinary months, not just the easiest months.
          </p>
        </div>
      </Section>

      <Section
        title="How to use the calculator with these amounts"
        description="Testing £100 and £200 properly can make the decision much less abstract."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Start with your mortgage as it stands now and note the original mortgage-free date. Then test £100 a month and see
            what changes. After that, test £200 a month and compare the extra benefit against the extra monthly commitment.
          </p>
          <p>
            The useful question is not only which option saves more. It is whether the difference between the two is large
            enough to justify the extra pressure on your budget every month.
          </p>
        </div>
      </Section>

      <Section
        title="What this choice often looks like in real life"
        description="For many borrowers, this is not a technical decision but a budgeting one."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Some households choose £100 because it feels comfortably repeatable and leaves space for savings. Others choose £200
            because they have more room and want to move the mortgage faster. Neither answer is better in isolation.
          </p>
          <p>
            What matters is whether the amount still fits after ordinary living costs, seasonal bills, and a bit of breathing
            room. If it does, the overpayment is much more likely to last long enough to make a real difference.
          </p>
          <p>
            That is why a smaller amount that feels ordinary can often outperform a larger amount that always feels slightly
            uncomfortable.
          </p>
        </div>
      </Section>

      <Section
        title="Why these smaller figures matter to so many borrowers"
        description="£100 and £200 a month are common because they sit in the space between useful and realistic."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            These amounts are large enough to move the mortgage, but still realistic enough that many households can picture
            fitting them into a monthly budget. That is what makes them such useful comparison points.
          </p>
          <p>
            They also make good stepping stones. If £100 works easily, £200 becomes easier to judge. If £100 already feels too
            tight, that tells you something valuable before you commit to a plan that is unlikely to last.
          </p>
          <p>
            In that sense, the smaller amount is not second best. It is often the most useful first benchmark.
          </p>
          <p>
            Once you know how that first benchmark feels, the decision about increasing it becomes much easier and more grounded.
          </p>
          <p>That makes the eventual step up, if you choose it, much less of a guess later on in the plan.</p>
        </div>
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Short answers to the questions people usually ask about £100 and £200 monthly overpayments."
        compact
      />

      <Section title="Useful next steps" description="These pages help if you want to compare the monthly overpayment idea with other options." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="Use the examples as planning guidance rather than exact predictions." compact>
        <TrustNote children="The exact impact of a £100 or £200 overpayment depends on your mortgage balance, rate, term, and lender rules. The right monthly amount is the one that helps without creating pressure elsewhere." />
      </Section>

      <CTASection
        title="Compare £100 and £200 with your own mortgage"
        description="Use the calculator to test both amounts side by side, compare the likely term reduction and interest saving, and choose the figure that feels realistic."
        compact
      />
    </>
  )
}
