import { ROUTES } from "@/lib/routes"

export const PAGE_COPY = {
  home: {
    title: "Pay off your mortgage sooner",
    intro:
      "See your new mortgage-free date, interest saved, and best overpayment option in seconds.",
    directAnswer:
      "Mortgage Overpay helps UK homeowners see how mortgage overpayments could change their mortgage-free date, total interest, and overall term. You can enter a few practical figures, compare monthly overpayments or a lump sum, and get an instant estimate designed for UK repayment mortgages.",
    keyPoints: [
      "Fast results on mobile",
      "Clear view of interest saved",
      "Simple scenario comparison",
    ],
  },
  calculator: {
    title: "UK Mortgage Overpayment Calculator",
    intro:
      "Find out how much interest you could save and how much sooner you could become mortgage-free.",
    directAnswer:
      "A mortgage overpayment calculator shows how extra payments could change your payoff date, total interest, and mortgage term. This one is designed for UK repayment mortgages and lets you compare regular monthly overpayments with a one-off lump sum in plain English.",
    keyPoints: [
      "See your new mortgage-free date at a glance",
      "Compare monthly overpayments with a lump sum",
      "Use the result as an estimate, then check your own mortgage terms",
    ],
    relatedLinks: [
      { href: ROUTES.shouldIOverpay, label: "Should I overpay my mortgage in the UK?" },
      { href: ROUTES.overpaymentLimit, label: "How mortgage overpayment limits work in the UK" },
      { href: ROUTES.payOffEarly, label: "Ways to pay off your mortgage early" },
    ],
  },
  shouldIOverpay: {
    title: "Should I overpay my mortgage?",
    intro:
      "A mortgage overpayment can reduce interest and shorten your term, but it is not automatically the right next step for every household.",
    directAnswer:
      "Overpaying your mortgage can make sense if your main goal is to reduce interest and become mortgage-free sooner. It is usually worth balancing that against flexibility, emergency savings, and any overpayment rules or charges in your mortgage terms.",
    keyPoints: [
      "Overpaying usually reduces total interest",
      "Flexibility matters as much as headline savings",
      "Check limits and charges before acting",
    ],
  },
  overpaymentLimit: {
    title: "Mortgage overpayment limits in the UK",
    intro:
      "Overpayment limits matter because extra payments above a set allowance can trigger charges on some mortgages.",
    directAnswer:
      "Many UK mortgages allow extra payments up to a stated limit during a set period. If you go above that allowance, an early repayment charge can sometimes apply, so the safest next step is always to check the exact wording of your own mortgage terms.",
    keyPoints: [
      "Limits vary by mortgage",
      "Lump sums can count towards the allowance",
      "Check charges before making a larger payment",
    ],
  },
  payOffEarly: {
    title: "How to pay off your mortgage early",
    intro:
      "Paying off a mortgage early usually comes down to reducing the balance faster than planned while staying realistic about cash flow.",
    directAnswer:
      "The most practical ways to pay off a mortgage early are regular monthly overpayments, occasional lump sums, and a plan that still feels affordable month to month. The aim is to reduce the balance faster without ignoring overpayment limits, charges, or the need for cash reserves.",
    keyPoints: [
      "Small regular overpayments can add up",
      "Lump sums can make a noticeable dent in the balance",
      "A plan works best when it stays affordable",
    ],
  },
} as const
