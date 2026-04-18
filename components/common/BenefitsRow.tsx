import Link from "next/link"

import { ROUTES } from "@/lib/routes"

const BENEFITS = [
  {
    title: "See your mortgage-free date",
    description: "Jump straight to the calculator and see the payoff date change in real time.",
    href: ROUTES.calculator,
  },
  {
    title: "Compare overpayment scenarios",
    description: "Test common monthly overpayments and compare the savings side by side.",
    href: ROUTES.calculator,
  },
  {
    title: "Get instant answers on mobile",
    description: "See how the tool works in a fast, tap-friendly flow designed for smaller screens.",
    href: "#how-it-works",
  },
] as const

export function BenefitsRow() {
  return (
    <div className="grid gap-4">
      {BENEFITS.map((item, index) => (
        <Link
          key={item.title}
          href={item.href}
          className="focus-ring card group rounded-3xl px-5 py-5 transition hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50/50"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-sm font-semibold text-teal-800">
            {index + 1}
          </div>
          <p className="text-sm font-semibold text-slate-900">{item.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          <span className="mt-4 inline-flex text-sm font-semibold text-teal-800 transition group-hover:translate-x-0.5">
            Explore
          </span>
        </Link>
      ))}
    </div>
  )
}
