import Link from "next/link"

import { Container } from "@/components/layout/Container"
import { PRIMARY_NAV, ROUTES } from "@/lib/routes"

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/92 backdrop-blur">
      <Container className="py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href={ROUTES.home} className="focus-ring inline-flex items-center gap-3 rounded-full">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-lg font-semibold text-teal-800">
                M
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-950">Mortgage Overpay</div>
                <div className="text-xs text-slate-500">UK mortgage overpayment tool</div>
              </div>
            </Link>
            <Link
              href={ROUTES.calculator}
              className="focus-ring rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm sm:hidden"
            >
              Calculator
            </Link>
          </div>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-2 sm:justify-end">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.ariaLabel}
                className={`focus-ring rounded-full px-3 py-2 text-sm transition hover:bg-slate-100 hover:text-slate-950 ${
                  item.href === ROUTES.guides ? "font-semibold text-slate-800" : "font-medium text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ROUTES.calculator}
              className="focus-ring hidden rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 sm:inline-flex"
            >
              Try the calculator
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
