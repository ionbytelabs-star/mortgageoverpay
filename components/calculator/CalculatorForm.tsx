import type { ChangeEvent } from "react"

import type { MortgageInputValues } from "@/lib/mortgage/types"

type CalculatorFormProps = {
  values: MortgageInputValues
  onChange: (field: keyof MortgageInputValues, value: string) => void
}

const fields: Array<{
  key: keyof MortgageInputValues
  label: string
  hint: string
  prefix?: string
  suffix?: string
  step?: string
  optional?: boolean
}> = [
  {
    key: "balance",
    label: "Current mortgage balance",
    hint: "Remaining balance today",
    prefix: "GBP",
    step: "1000",
  },
  {
    key: "annualRate",
    label: "Annual interest rate",
    hint: "Use your current mortgage rate",
    suffix: "%",
    step: "0.01",
  },
  {
    key: "remainingYears",
    label: "Remaining term",
    hint: "Years left on the mortgage",
    suffix: "years",
    step: "1",
  },
  {
    key: "monthlyPayment",
    label: "Current monthly payment",
    hint: "Optional. Leave blank to estimate it",
    prefix: "GBP",
    step: "1",
    optional: true,
  },
  {
    key: "monthlyOverpayment",
    label: "Monthly overpayment",
    hint: "Extra amount paid each month",
    prefix: "GBP",
    step: "1",
  },
  {
    key: "lumpSum",
    label: "One-off lump sum overpayment",
    hint: "Optional extra payment made now",
    prefix: "GBP",
    step: "1",
    optional: true,
  },
]

export function CalculatorForm({ values, onChange }: CalculatorFormProps) {
  const handleChange =
    (field: keyof MortgageInputValues) => (event: ChangeEvent<HTMLInputElement>) => onChange(field, event.target.value)

  return (
    <form className="grid gap-4 sm:grid-cols-2" aria-label="Mortgage overpayment inputs">
      {fields.map((field) => (
        <label key={field.key} className={`block ${field.key === "monthlyPayment" || field.key === "lumpSum" ? "" : ""}`}>
          <span className="mb-2 block text-sm font-semibold text-slate-900">
            {field.label}
            {field.optional ? <span className="ml-2 text-xs font-medium text-slate-500">Optional</span> : null}
          </span>
          <span className="mb-2 block text-xs leading-5 text-slate-500">{field.hint}</span>
          <div className="relative">
            {field.prefix ? (
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-sm text-slate-500">
                {field.prefix}
              </span>
            ) : null}
            <input
              inputMode="decimal"
              type="number"
              min="0"
              step={field.step}
              value={values[field.key]}
              onChange={handleChange(field.key)}
              className={`focus-ring min-h-12 w-full rounded-2xl border border-slate-200 bg-white pr-4 text-base text-slate-950 placeholder:text-slate-400 ${
                field.prefix ? "pl-12" : "pl-4"
              }`}
              placeholder={field.optional ? "Leave blank or enter a value" : ""}
              aria-label={field.label}
            />
            {field.suffix ? (
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-sm text-slate-500">
                {field.suffix}
              </span>
            ) : null}
          </div>
        </label>
      ))}
    </form>
  )
}
