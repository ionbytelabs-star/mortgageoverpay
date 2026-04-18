import type { MortgageInputs, MortgageInputValues, ValidationState } from "@/lib/mortgage/types"

function parseOptionalNumber(value: string) {
  if (!value.trim()) {
    return undefined
  }

  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : Number.NaN
}

function parseNumber(value: string) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : Number.NaN
}

export function normaliseMortgageInputs(values: MortgageInputValues) {
  const inputs: MortgageInputs = {
    balance: parseNumber(values.balance),
    annualRate: parseNumber(values.annualRate),
    remainingYears: parseNumber(values.remainingYears),
    monthlyPayment: parseOptionalNumber(values.monthlyPayment),
    monthlyOverpayment: parseNumber(values.monthlyOverpayment || "0"),
    lumpSum: parseNumber(values.lumpSum || "0"),
  }

  return inputs
}

export function validateMortgageInputs(inputs: MortgageInputs): ValidationState {
  const errors: string[] = []
  const warnings: string[] = []

  if (!Number.isFinite(inputs.balance) || inputs.balance <= 0) {
    errors.push("Enter a mortgage balance greater than £0.")
  }

  if (!Number.isFinite(inputs.annualRate) || inputs.annualRate < 0 || inputs.annualRate > 100) {
    errors.push("Enter an annual interest rate between 0% and 100%.")
  }

  if (!Number.isFinite(inputs.remainingYears) || inputs.remainingYears <= 0 || inputs.remainingYears > 50) {
    errors.push("Enter a remaining term between 1 and 50 years.")
  }

  if (!Number.isFinite(inputs.monthlyOverpayment) || inputs.monthlyOverpayment < 0) {
    errors.push("Monthly overpayment cannot be negative.")
  }

  if (!Number.isFinite(inputs.lumpSum) || inputs.lumpSum < 0) {
    errors.push("One-off lump sum cannot be negative.")
  }

  if (inputs.monthlyPayment !== undefined) {
    if (!Number.isFinite(inputs.monthlyPayment) || inputs.monthlyPayment <= 0) {
      errors.push("If you enter a monthly payment, it must be greater than £0.")
    }
  }

  if (inputs.lumpSum >= inputs.balance) {
    warnings.push("The lump sum is large enough to clear nearly all of the balance immediately.")
  }

  if (inputs.monthlyOverpayment === 0 && inputs.lumpSum === 0) {
    warnings.push("Add an overpayment or a one-off lump sum to see how the result changes.")
  }

  return { errors, warnings }
}
