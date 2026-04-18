import { formatCurrency } from "@/lib/formatting"
import type { MortgageCalculationResult } from "@/lib/mortgage/types"

type ResultsSummaryCardProps = {
  result: MortgageCalculationResult
}

export function ResultsSummaryCard({ result }: ResultsSummaryCardProps) {
  const headline =
    result.monthsSaved > 0
      ? `You could be mortgage-free ${result.timeSavedLabel} earlier`
      : "Your current overpayment plan does not shorten the term yet"

  return (
    <section className="rounded-[2rem] bg-slate-950 px-6 py-6 text-white shadow-xl shadow-slate-200">
      <p className="text-sm font-medium text-teal-300">Instant summary</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{headline}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl bg-white/6 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Interest saved</p>
          <p className="mt-2 text-2xl font-semibold text-white">{formatCurrency(result.interestSaved)}</p>
        </div>
        <div className="rounded-3xl bg-white/6 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">New payoff date</p>
          <p className="mt-2 whitespace-nowrap text-xl font-semibold text-white sm:text-2xl">
            {new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(result.overpayment.payoffDate)}
          </p>
        </div>
        <div className="rounded-3xl bg-white/6 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Original payoff date</p>
          <p className="mt-2 whitespace-nowrap text-xl font-semibold text-white sm:text-2xl">
            {new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(result.original.payoffDate)}
          </p>
        </div>
      </div>
    </section>
  )
}
