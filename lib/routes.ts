export const ROUTES = {
  home: "/",
  guides: "/guides",
  calculator: "/mortgage-overpayment-calculator-uk",
  shouldIOverpay: "/should-i-overpay-my-mortgage",
  overpaymentLimit: "/mortgage-overpayment-limit-uk",
  payOffEarly: "/pay-off-mortgage-early",
  overpayVsSave: "/overpay-vs-save-uk",
  overpayVsInvest: "/should-i-overpay-my-mortgage-or-invest-uk",
  overpayVsPension: "/should-i-overpay-my-mortgage-or-pension-uk",
  worthIt: "/is-overpaying-your-mortgage-worth-it",
  lumpSumOverpayment: "/lump-sum-mortgage-overpayment-uk",
  tenPercentRule: "/mortgage-overpayment-10-percent-rule",
  overpay100Or200: "/overpay-100-or-200-a-month",
  higherRatePayments: "/remortgaged-higher-rate-reduce-payments",
  afterFixedRate: "/can-i-overpay-my-mortgage-after-fixed-rate-ends",
  about: "/about",
  privacy: "/privacy",
  cookies: "/cookies",
  terms: "/terms",
} as const

export const PRIMARY_NAV = [
  { href: ROUTES.home, label: "🏠", ariaLabel: "Home" },
  { href: ROUTES.guides, label: "Guides" },
]

export const FOOTER_NAV = [
  { href: ROUTES.guides, label: "Guides" },
  { href: ROUTES.calculator, label: "Calculator" },
  { href: ROUTES.shouldIOverpay, label: "Should I overpay my mortgage?" },
  { href: ROUTES.overpaymentLimit, label: "Mortgage overpayment limit UK" },
  { href: ROUTES.payOffEarly, label: "Pay off mortgage early" },
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.privacy, label: "Privacy" },
  { href: ROUTES.cookies, label: "Cookies" },
  { href: ROUTES.terms, label: "Terms" },
]
