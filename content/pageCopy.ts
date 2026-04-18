import { ROUTES } from "@/lib/routes"

export const PAGE_COPY = {
  home: {
    title: "Pay off your mortgage sooner",
    intro:
      "See your new mortgage-free date, interest saved, and best overpayment option in seconds.",
    directAnswer:
      "Mortgage Overpay helps UK homeowners estimate how monthly overpayments and one-off lump sums could change their mortgage-free date, total interest paid, and overall term without any signup friction.",
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
      "This calculator estimates the effect of regular overpayments and one-off lump sums on a UK repayment mortgage using monthly compounding and a reducing balance.",
    relatedLinks: [
      { href: ROUTES.shouldIOverpay, label: "Should I overpay my mortgage?" },
      { href: ROUTES.overpaymentLimit, label: "Mortgage overpayment limits in the UK" },
      { href: ROUTES.payOffEarly, label: "How to pay off your mortgage early" },
    ],
  },
  shouldIOverpay: {
    title: "Should I overpay my mortgage?",
    intro:
      "A mortgage overpayment can reduce interest and shorten your term, but it is not automatically the right next step for every household.",
    directAnswer:
      "Overpaying your mortgage may make sense if your main goal is cutting long-term interest and becoming mortgage-free sooner, but it should be weighed against flexibility, emergency savings, and any overpayment limits.",
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
      "Many UK mortgages allow overpayments up to a certain limit during a set period, and going above that level can sometimes trigger an early repayment charge, so checking the exact terms is essential.",
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
      "The most practical ways to pay off a mortgage early are regular monthly overpayments, occasional lump sums, and checking that extra payments fit within your terms and wider budget.",
    keyPoints: [
      "Small regular overpayments can add up",
      "Lump sums can make a noticeable dent in the balance",
      "A plan works best when it stays affordable",
    ],
  },
} as const
