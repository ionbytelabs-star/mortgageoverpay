import type { MortgageInputValues } from "@/lib/mortgage/types"

export const DEFAULT_INPUT_VALUES: MortgageInputValues = {
  balance: "250000",
  annualRate: "4.75",
  remainingYears: "25",
  monthlyPayment: "",
  monthlyOverpayment: "250",
  lumpSum: "0",
}

export const SCENARIO_PRESETS = [100, 250, 500]
