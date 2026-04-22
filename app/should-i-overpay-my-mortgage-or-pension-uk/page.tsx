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
  title: "Should I Overpay My Mortgage or Pension in the UK? | Mortgage Overpay",
  description:
    "Compare mortgage overpayments with pension contributions in the UK, including tax relief, employer matching, access, and certainty.",
  path: ROUTES.overpayVsPension,
})

const breadcrumbs = makeBreadcrumbs([
  { name: "Should I overpay my mortgage or pension in the UK?", href: ROUTES.overpayVsPension },
])

const faqs = getFaqs("overpayVsPension")

const prioritySteps = [
  "Build or maintain an emergency fund so you are not forced into expensive borrowing if something changes.",
  "Clear high-interest debt first where possible, because those rates often outweigh the mortgage versus pension question.",
  "Take full advantage of any employer-matched pension contribution before thinking too hard about overpayments.",
  "After that, compare mortgage overpayments, extra pension contributions, and savings in light of your goals and access needs.",
]

const accessCards = [
  {
    title: "Mortgage overpayments",
    text: "Provide a guaranteed saving equal to the mortgage rate, but the money is no longer easy to access once paid.",
  },
  {
    title: "Pension contributions",
    text: "Can be boosted by tax relief and employer matching, but the money is locked away until pension access rules allow it.",
  },
  {
    title: "Accessible savings",
    text: "Remain available for emergencies or near-term spending and often sit alongside either strategy rather than replacing it.",
  },
]

const comparisonRows = [
  {
    factor: "Immediate uplift",
    mortgage: "No bonus beyond the mortgage interest saved",
    pension: "May benefit from tax relief and employer contributions",
  },
  {
    factor: "Access to money",
    mortgage: "Low once paid into the mortgage",
    pension: "Very low before pension access age",
  },
  {
    factor: "Return certainty",
    mortgage: "Guaranteed saving equal to mortgage rate",
    pension: "Long-term growth is uncertain",
  },
  {
    factor: "Behavioural appeal",
    mortgage: "Clear debt reduction each month",
    pension: "Less visible day to day, but can be very powerful later",
  },
  {
    factor: "Best suited to",
    mortgage: "People who prioritise certainty and lower debt",
    pension: "People with time, tax advantages, and retirement goals in focus",
  },
]

const commonMistakes = [
  "Ignoring employer matching and missing out on money you may not be able to recover later.",
  "Paying heavily into the mortgage while leaving yourself with too little accessible cash.",
  "Assuming pension contributions are always better without checking tax band, fees, and investment risk.",
  "Treating the mortgage versus pension decision as permanent rather than something you can review over time.",
]

const relatedLinks = [
  { href: ROUTES.calculator, label: "Use our mortgage overpayment calculator to see your savings" },
  { href: ROUTES.worthIt, label: "Read is overpaying your mortgage worth it?" },
  { href: ROUTES.overpayVsSave, label: "Compare overpaying with saving in the UK" },
  { href: ROUTES.guides, label: "Browse all mortgage overpayment guides" },
  { href: ROUTES.about, label: "Read about Mortgage Overpay" },
]

function UpliftBars() {
  return (
    <div className="card rounded-[2rem] px-5 py-5">
      <h3 className="text-lg font-semibold text-slate-950">Illustrative boost from pension advantages</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Pension contributions may be stronger than they first look because tax relief and employer matching can increase the
        amount working for you. Mortgage overpayments do not get that uplift, but they do offer certainty.
      </p>
      <div className="mt-5 space-y-4">
        <div>
          <div className="flex items-center justify-between text-sm font-medium text-slate-700">
            <span>£100 of take-home cash to mortgage</span>
            <span>£100 working</span>
          </div>
          <div className="mt-2 h-5 rounded-full bg-slate-100">
            <div className="h-5 rounded-full bg-teal-700" style={{ width: "44%" }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm font-medium text-slate-700">
            <span>£100 of take-home cash to pension with tax relief</span>
            <span>Often more than £100 working</span>
          </div>
          <div className="mt-2 h-5 rounded-full bg-slate-100">
            <div className="h-5 rounded-full bg-teal-500" style={{ width: "64%" }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm font-medium text-slate-700">
            <span>Employer-matched pension contribution</span>
            <span>Potentially much stronger uplift</span>
          </div>
          <div className="mt-2 h-5 rounded-full bg-slate-100">
            <div className="h-5 rounded-full bg-teal-300" style={{ width: "88%" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OverpayVsPensionPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Should I Overpay My Mortgage or Pension in the UK? | Mortgage Overpay",
          description:
            "Compare mortgage overpayments with pension contributions in the UK, including tax relief, employer matching, access, and certainty.",
          path: ROUTES.overpayVsPension,
        })}
      />
      <JsonLd
        data={articleSchema({
          title: "Should I Overpay My Mortgage or Pension in the UK? | Mortgage Overpay",
          description:
            "Compare mortgage overpayments with pension contributions in the UK, including tax relief, employer matching, access, and certainty.",
          path: ROUTES.overpayVsPension,
          keywords: [
            "should I overpay my mortgage or pension UK",
            "mortgage overpayment or pension contribution UK",
            "overpay mortgage or pension tax relief",
            "mortgage overpayment calculator UK",
          ],
          about: ["Mortgage overpayments", "Pension contributions", "UK repayment mortgages"],
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <FAQSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <PageIntro
          title="Should I Overpay My Mortgage or Pension in the UK?"
          intro="This guide compares two sensible uses for spare money: reducing your mortgage and building your pension. The right answer depends on certainty, tax relief, employer matching, retirement timescales, and how much flexibility you need along the way."
        />
      </Section>

      <Section className="pt-0" compact>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <DirectAnswer answer="In many cases, pension contributions should come before mortgage overpayments if you are getting employer matching or valuable tax relief, because the uplift can be hard to beat. Mortgage overpayments may still be the better move if your pension is already in a good place, you value certainty, and becoming mortgage-free sooner matters more to you than locking more money away until later life. A balanced answer often starts with matched pension contributions, then compares extra pension saving with mortgage overpayments from there." />
          <KeyPointsList
            title="Key takeaway"
            items={[
              "Employer-matched pension contributions are often one of the strongest first priorities.",
              "Mortgage overpayments give certainty and visible debt reduction, which many people value highly.",
              "If access, age, tax position, and risk tolerance all point in different directions, a split strategy can work well.",
            ]}
          />
        </div>
      </Section>

      <Section
        title="Mortgage Overpayments vs Pension Contributions: Which Comes First?"
        description="The answer is usually easier if you deal with the obvious priorities before comparing the two directly."
        compact
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <KeyPointsList title="Common order of priority" items={prioritySteps} />
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              This order matters because it stops the mortgage versus pension question becoming more complicated than it needs
              to be. If you have no emergency fund, the first issue is resilience. If you are carrying expensive borrowing, the
              first issue is cost. If your employer offers pension matching, ignoring it may mean turning down a very valuable
              benefit.
            </p>
            <p>
              Once those obvious pieces are in place, the decision becomes more balanced. Mortgage overpayments offer
              certainty and faster debt reduction. Pension contributions can be boosted by tax relief and employer support, but
              the value is tied to investment performance and the money is not accessible in the meantime.
            </p>
            <p>
              If you are still unsure at that point, use our{" "}
              <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
                mortgage overpayment calculator to see your savings
              </Link>{" "}
              so you understand what you are giving up if you put the spare cash into your pension instead.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Why Pension Contributions Can Be More Powerful Than They First Look"
        description="This is the part many people underestimate when comparing pensions with mortgage overpayments."
        compact
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <UpliftBars />
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Pension contributions can receive tax relief, which means more money is invested than you might assume from the
              take-home cost alone. In some workplaces, employer matching adds another layer of value. That combination can
              make pensions much more powerful than they first appear.
            </p>
            <p>
              A basic-rate taxpayer may find that a pension contribution costs less out of pocket than the amount that ends up
              invested. A higher-rate taxpayer may have an even stronger case if additional tax relief is available through the
              way contributions are made. Add employer matching on top and the gap can widen again.
            </p>
            <p>
              This is why many people treat matched pension contributions as a first call on spare money before they think
              about overpaying the mortgage. The uplift can be immediate, whereas a mortgage overpayment only delivers the
              return of the mortgage rate itself.
            </p>
            <p>
              None of this means pensions always win. The extra value is still locked inside a pension, exposed to investment
              risk, and not available for near-term needs. But it does explain why the mortgage versus pension decision should
              never be based on headline monthly amounts alone.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Why Mortgage Overpayments Still Appeal"
        description="Pensions may be more powerful on paper in some cases, but that does not make mortgage overpayments second best."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {accessCards.map((card) => (
            <article key={card.title} className="card rounded-[2rem] px-5 py-5">
              <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A mortgage overpayment is easy to understand. The balance falls. The future interest bill is lower. The mortgage
            can end sooner. There is a strong psychological benefit in that simplicity, especially if becoming mortgage-free
            is a major life goal.
          </p>
          <p>
            Overpaying can also feel safer than increasing pension contributions because the return is not tied to market
            performance. If your mortgage rate is high and you like certainty, the calmness of a guaranteed saving can be
            very attractive.
          </p>
          <p>
            It also creates optionality later. Reaching a lower mortgage balance sooner may improve affordability, reduce
            pressure when a deal ends, or make it easier to shift focus to pensions and investing later. If that sounds close
            to your situation, read{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.worthIt}>
              is overpaying your mortgage worth it?
            </Link>{" "}
            after using the calculator.
          </p>
        </div>
      </Section>

      <Section
        title="When Pension Contributions May Be the Better Move"
        description="The pension case tends to be strongest when the built-in advantages are obvious."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Pension contributions may be the better move if your employer matches them and you are not yet taking full
            advantage of that match. That is one of the clearest reasons to prioritise pension saving before mortgage
            overpayments.
          </p>
          <p>
            They may also be stronger if you are in a tax position where the relief is meaningful, have many years until
            retirement, and are comfortable with investment risk. In that case, the long-term growth potential plus the tax
            advantages may outweigh the guaranteed but lower return of overpaying the mortgage.
          </p>
          <p>
            Pension contributions can also suit people who worry they will otherwise spend spare cash. Locking the money away
            can be useful if it keeps the plan on track and supports a retirement goal that might otherwise be neglected.
          </p>
        </div>
      </Section>

      <Section
        title="When Mortgage Overpayments May Be Better"
        description="Overpaying can be the stronger move when certainty and debt reduction are more important than pension advantages."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Mortgage overpayments may be better if you are already contributing sensibly to a pension, your employer match is
            already fully used, and the remaining question is where the next spare pound should go.
          </p>
          <p>
            They may also be better if your mortgage rate is high enough that the guaranteed saving feels compelling. The
            higher the mortgage rate, the stronger the overpayment case becomes.
          </p>
          <p>
            Overpaying can also make sense if retirement is not that far away and you want the mortgage gone sooner rather than
            building more wealth inside a pension that remains locked away. Some people simply value a lower fixed outgo more
            than a larger retirement pot on paper.
          </p>
        </div>
      </Section>

      <Section
        title="Worked UK Examples"
        description="These worked examples are illustrative only and use simplified assumptions to show how the trade-off can change."
        compact
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 1: Basic-rate taxpayer with employer matching</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Imagine a homeowner with a £210,000 mortgage at 4.6%, 24 years remaining, and £250 a month spare. If
                they are not yet taking full employer-matched pension contributions, sending that spare money to the pension
                may be very hard to beat because of the immediate uplift from the employer and tax relief.
              </p>
              <p>
                The mortgage overpayment would still help. It could trim the term and reduce interest. But if every £250 of
                take-home pay effectively turns into more than £250 inside the pension before investment growth is even
                considered, the pension case is often stronger.
              </p>
            </div>
          </article>
          <article className="card rounded-[2rem] px-5 py-5">
            <h3 className="text-lg font-semibold text-slate-950">Example 2: Higher-rate taxpayer near mid-career</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Now imagine a higher-rate taxpayer with a £180,000 mortgage at 4.2%, 17 years left, already contributing a
                decent amount to a pension but considering an extra £400 a month. The additional tax relief available may
                still make pension contributions highly attractive.
              </p>
              <p>
                But the answer becomes less automatic if the mortgage balance still feels burdensome and the household values
                reducing outgo sooner. At this point, behaviour and priorities can matter as much as tax efficiency.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-4 overflow-x-auto card rounded-[2rem] px-5 py-5">
          <h3 className="text-lg font-semibold text-slate-950">Mortgage vs pension comparison table</h3>
          <table className="mt-4 min-w-full text-left text-sm leading-6 text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-950">
                <th className="py-2 pr-4 font-semibold">Factor</th>
                <th className="py-2 pr-4 font-semibold">Mortgage overpayment</th>
                <th className="py-2 font-semibold">Pension contribution</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.factor} className="border-b border-slate-100 align-top last:border-b-0">
                  <th className="py-3 pr-4 font-medium text-slate-950">{row.factor}</th>
                  <td className="py-3 pr-4">{row.mortgage}</td>
                  <td className="py-3">{row.pension}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            If you want to understand the mortgage side more precisely, use our{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.calculator}>
              mortgage overpayment calculator to see your savings
            </Link>
            . It will not solve the pension side for you, but it will show exactly what the overpayment route may save in
            time and interest.
          </p>
        </div>
      </Section>

      <Section
        title="What About Employer Matching?"
        description="This is often the easiest part of the decision."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Employer matching is one of the strongest arguments for pension contributions. If your employer adds money when you
            contribute, not taking the available match can mean leaving a valuable benefit behind.
          </p>
          <p>
            That does not mean mortgage overpayments should be ignored forever. It simply means the comparison usually starts
            after matched contributions are already being captured. Once that base is covered, the next pound becomes a more
            balanced decision between pension, mortgage, and savings.
          </p>
        </div>
      </Section>

      <Section
        title="What About Higher-Rate Tax Relief?"
        description="Tax relief can change the maths in a meaningful way, especially for higher earners."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Higher-rate taxpayers may find extra pension contributions particularly attractive because tax relief can make the
            effective cost lower than the amount being invested. That can tilt the balance towards pensions more strongly than
            it does for a basic-rate taxpayer.
          </p>
          <p>
            Even so, tax relief should not be treated as the whole answer. Pension money is still locked away, investment
            returns are not guaranteed, and the emotional appeal of reducing mortgage debt may still matter to you. This is
            why many people prefer a balanced approach rather than pushing every spare pound in one direction.
          </p>
        </div>
      </Section>

      <Section
        title="A Balanced Strategy"
        description="For many households, the best answer is a sequence rather than a single choice."
        compact
      >
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            A practical balanced strategy often looks like this: build your emergency fund, clear expensive debt, take full
            advantage of employer-matched pension contributions, then split additional spare cash between mortgage overpayments,
            pensions, and accessible savings based on your goals.
          </p>
          <p>
            This approach works because it respects both certainty and long-term growth. You are not pretending the answer must
            be purely emotional or purely mathematical. You are giving each priority the right job.
          </p>
          <p>
            If your main concern is whether mortgage overpayments are even worth doing at all, read{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.worthIt}>
              is overpaying your mortgage worth it?
            </Link>{" "}
            and{" "}
            <Link className="text-teal-800 underline-offset-4 hover:underline" href={ROUTES.overpayVsSave}>
              overpay mortgage vs save in the UK
            </Link>{" "}
            alongside the calculator.
          </p>
        </div>
      </Section>

      <Section
        title="Common Mistakes to Avoid"
        description="The biggest errors usually come from focusing on one advantage and ignoring the wider trade-offs."
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
      </Section>

      <FAQSection
        items={faqs}
        title="Frequently asked questions"
        description="Short answers to the questions people usually ask when comparing mortgages with pensions."
        compact
      />

      <Section title="Useful next steps" description="Use these guides if you want to compare the decision from another angle." compact>
        <InternalLinkBlock links={relatedLinks} />
      </Section>

      <Section title="Important note" description="This page is for general guidance only." compact>
        <TrustNote children="The examples and comparisons on this page use general UK assumptions. Pension rules, tax relief, employer matching, mortgage rates, and access rules vary, so it is worth checking your own arrangements before making changes." />
      </Section>

      <CTASection
        title="See what the mortgage side of the decision looks like with your own figures"
        description="Use our mortgage overpayment calculator to estimate time saved and interest saved, then compare that certainty with the long-term value of extra pension contributions."
        compact
      />
    </>
  )
}
