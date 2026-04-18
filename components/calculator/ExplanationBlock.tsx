import { formatCurrency, formatMonthYear } from "@/lib/formatting"
import type { MortgageCalculationResult, MortgageInputs } from "@/lib/mortgage/types"

type ExplanationBlockProps = {
  result: MortgageCalculationResult
  inputs: MortgageInputs
}

export function ExplanationBlock({ result, inputs }: ExplanationBlockProps) {
  return (
    <section className="card rounded-[2rem] px-5 py-5">
      <h2 className="text-lg font-semibold text-slate-950">What these results mean</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
        <p>
          Based on a mortgage balance of {formatCurrency(inputs.balance)}, an annual rate of {inputs.annualRate.toFixed(2)}
          %, and a remaining term of {inputs.remainingYears} years, this model estimates the effect of paying an extra{" "}
          {formatCurrency(inputs.monthlyOverpayment)} each month and a one-off {formatCurrency(inputs.lumpSum)} now.
        </p>
        <p>
          In this example, the mortgage could finish in {formatMonthYear(result.overpayment.payoffDate)} instead of{" "}
          {formatMonthYear(result.original.payoffDate)}, with an estimated interest saving of{" "}
          {formatCurrency(result.interestSaved)}.
        </p>
        <p>
          The calculation assumes a repayment mortgage with monthly compounding, a stable interest rate, and overpayments
          going directly towards the balance. Your actual lender process and charges may differ.
        </p>
      </div>
    </section>
  )
}
