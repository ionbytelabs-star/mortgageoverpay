import { formatCurrency, formatMonthYear } from "@/lib/formatting"
import type { MortgageCalculationResult } from "@/lib/mortgage/types"

type ResultsBreakdownProps = {
  result: MortgageCalculationResult
}

const breakdownRows = (result: MortgageCalculationResult) => [
  { label: "New mortgage-free date", value: formatMonthYear(result.overpayment.payoffDate) },
  { label: "Original mortgage-free date", value: formatMonthYear(result.original.payoffDate) },
  { label: "Time saved", value: result.timeSavedLabel },
  { label: "Interest saved", value: formatCurrency(result.interestSaved) },
  { label: "Total interest without overpayments", value: formatCurrency(result.original.totalInterest) },
  { label: "Total interest with overpayments", value: formatCurrency(result.overpayment.totalInterest) },
  { label: "Total repaid without overpayments", value: formatCurrency(result.original.totalPaid) },
  { label: "Total repaid with overpayments", value: formatCurrency(result.overpayment.totalPaid) },
  { label: "Monthly repayment used", value: formatCurrency(result.original.monthlyPayment) },
]

export function ResultsBreakdown({ result }: ResultsBreakdownProps) {
  return (
    <section className="card rounded-[2rem] px-5 py-5">
      <h2 className="text-lg font-semibold text-slate-950">Results breakdown</h2>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        {breakdownRows(result).map((row) => (
          <div key={row.label} className="rounded-3xl border border-slate-100 bg-slate-50 px-4 py-4">
            <dt className="text-sm text-slate-500">{row.label}</dt>
            <dd className="mt-2 text-lg font-semibold text-slate-950">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
