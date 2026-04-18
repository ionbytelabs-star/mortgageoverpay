import type { MortgageCalculationResult, MortgageInputs } from "@/lib/mortgage/types"
import { calculateMortgageOverpayment } from "@/lib/mortgage/calculations"

export type ScenarioResult = {
  label: string
  monthlyOverpayment: number
  result: MortgageCalculationResult
}

export function buildScenarioResults(
  inputs: MortgageInputs,
  scenarioValues: number[],
  startDate?: Date,
): ScenarioResult[] {
  return scenarioValues.map((value) => ({
    label: `+£${value}/month`,
    monthlyOverpayment: value,
    result: calculateMortgageOverpayment(
      {
        ...inputs,
        monthlyOverpayment: value,
      },
      startDate,
    ),
  }))
}
