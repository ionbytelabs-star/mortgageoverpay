import Link from "next/link"

import { Container } from "@/components/layout/Container"
import { FOOTER_NAV, ROUTES } from "@/lib/routes"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div>
              <Link href={ROUTES.home} className="focus-ring text-lg font-semibold text-slate-950">
                Mortgage Overpay
              </Link>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                A fast, mobile-first website for estimating how mortgage overpayments could affect payoff date,
                interest paid, and total term for UK repayment mortgages.
              </p>
            </div>
            <p className="text-sm text-slate-500">
              Information only. Always check your own mortgage terms, charges, and overpayment rules before acting.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-2 sm:grid-cols-2">
            {FOOTER_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
