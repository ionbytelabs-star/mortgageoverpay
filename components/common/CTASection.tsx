import Link from "next/link"

import { Section } from "@/components/layout/Section"
import { ROUTES } from "@/lib/routes"

type CTASectionProps = {
  title: string
  description: string
  secondaryText?: string
  compact?: boolean
}

export function CTASection({ title, description, secondaryText, compact = false }: CTASectionProps) {
  return (
    <Section compact={compact}>
      <div className="card rounded-[2rem] bg-slate-950 px-6 py-8 text-white sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <p className="text-base leading-7 text-slate-300">{description}</p>
            {secondaryText ? <p className="text-sm text-slate-400">{secondaryText}</p> : null}
          </div>
          <Link
            href={ROUTES.calculator}
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
          >
            Try the calculator
          </Link>
        </div>
      </div>
    </Section>
  )
}
