import Link from "next/link"

import { CTASection } from "@/components/common/CTASection"
import { Section } from "@/components/layout/Section"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildMetadata } from "@/lib/metadata"
import { ROUTES } from "@/lib/routes"
import { makeBreadcrumbs } from "@/lib/seo"
import { breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const metadata = buildMetadata({
  title: "Guides | Mortgage Overpay",
  description: "Browse practical UK mortgage overpayment guides and explanations from Mortgage Overpay.",
  path: ROUTES.guides,
})

const breadcrumbs = makeBreadcrumbs([{ name: "Guides", href: ROUTES.guides }])

const guideLinks = [
  {
    href: ROUTES.shouldIOverpay,
    title: "Should I overpay my mortgage?",
    description:
      "Understand when overpaying makes sense and when it might not. Learn how it affects your balance, interest, and monthly payments so you can make a confident decision.",
  },
  {
    href: ROUTES.overpaymentLimit,
    title: "Mortgage overpayment limits in the UK",
    description:
      "Most lenders allow you to overpay, but there are rules to follow. Discover how limits work, what you can do without penalties, and what to watch out for.",
  },
  {
    href: ROUTES.payOffEarly,
    title: "How to pay off your mortgage early",
    description:
      "Explore practical ways to reduce your mortgage term, cut interest, and become mortgage-free sooner using simple, effective strategies.",
  },
  {
    href: ROUTES.overpayVsSave,
    title: "Overpay Mortgage or Save in the UK: Which Is Better Right Now?",
    description:
      "Compare whether your money works harder reducing your mortgage or earning interest in savings, based on current UK rates and real scenarios.",
  },
  {
    href: ROUTES.worthIt,
    title: "Is Overpaying Your Mortgage Worth It in the UK?",
    description:
      "Weigh up the pros and cons of overpaying, including the potential savings, flexibility, and situations where it may not be the best option.",
  },
  {
    href: ROUTES.lumpSumOverpayment,
    title: "Lump Sum Mortgage Overpayment UK: How Much Can You Save?",
    description:
      "See how a one-off payment could reduce your balance, cut years off your mortgage, and save thousands in interest.",
  },
  {
    href: ROUTES.tenPercentRule,
    title: "Mortgage Overpayment Limits UK: The 10% Rule & ERC Explained",
    description:
      "Understand the 10% overpayment rule, early repayment charges, and how to stay within your lender's limits while maximising savings.",
  },
  {
    href: ROUTES.overpay100Or200,
    title: "What Happens If You Overpay GBP100 or GBP200 a Month on Your Mortgage?",
    description:
      "Find out how small monthly overpayments can impact your mortgage term, interest, and long-term savings with real examples.",
  },
  {
    href: ROUTES.higherRatePayments,
    title: "Just Remortgaged at a Higher Rate? How to Reduce Your Mortgage Payments Fast",
    description:
      "If your payments have jumped, explore practical ways to ease the pressure and take control of your mortgage costs.",
  },
]

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Guides | Mortgage Overpay",
          description: "Browse practical UK mortgage overpayment guides and explanations from Mortgage Overpay.",
          path: ROUTES.guides,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Section className="pt-6" compact>
        <div className="max-w-6xl space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Guides</h1>
          <p className="max-w-5xl text-base leading-7 text-slate-600 sm:text-lg">
            Clear, practical guides to help you understand mortgage overpayments, stay within UK limits, and pay off
            your mortgage sooner.
          </p>
        </div>
      </Section>

      <Section compact>
        <div className="mb-4 max-w-6xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Choose a guide</h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Pick the topic that matches your situation and get straight answers to help you decide what to do next.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {guideLinks.map((guide) => (
            <article key={guide.title} className="card rounded-[2rem] px-5 py-5">
              <h2 className="text-lg font-semibold text-slate-950">
                <Link href={guide.href} className="focus-ring rounded-sm underline-offset-4 hover:underline">
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {guide.description}{" "}
                <Link
                  href={guide.href}
                  className="focus-ring font-semibold text-teal-800 underline-offset-4 hover:underline"
                >
                  Find out more.
                </Link>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Need a quick answer instead?"
        description="Use the calculator to estimate your mortgage-free date, interest saved, and the effect of regular or one-off overpayments."
        compact
      />
    </>
  )
}
