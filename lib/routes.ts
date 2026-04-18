export const ROUTES = {
  home: "/",
  calculator: "/mortgage-overpayment-calculator-uk",
  shouldIOverpay: "/should-i-overpay-my-mortgage",
  overpaymentLimit: "/mortgage-overpayment-limit-uk",
  payOffEarly: "/pay-off-mortgage-early",
  about: "/about",
  privacy: "/privacy",
  terms: "/terms",
} as const

export const PRIMARY_NAV = [
  { href: ROUTES.calculator, label: "Calculator" },
  { href: ROUTES.shouldIOverpay, label: "Should I overpay?" },
  { href: ROUTES.overpaymentLimit, label: "Overpayment limits" },
  { href: ROUTES.payOffEarly, label: "Pay off early" },
]

export const FOOTER_NAV = [
  { href: ROUTES.calculator, label: "Calculator" },
  { href: ROUTES.shouldIOverpay, label: "Should I overpay my mortgage?" },
  { href: ROUTES.overpaymentLimit, label: "Mortgage overpayment limit UK" },
  { href: ROUTES.payOffEarly, label: "Pay off mortgage early" },
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.privacy, label: "Privacy" },
  { href: ROUTES.terms, label: "Terms" },
]
