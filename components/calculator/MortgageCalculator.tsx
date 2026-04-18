"use client"

import { useState } from "react"

import { AdPlaceholder } from "@/components/common/AdPlaceholder"
import { CalculatorForm } from "@/components/calculator/CalculatorForm"
import { ExplanationBlock } from "@/components/calculator/ExplanationBlock"
import { ResultsBreakdown } from "@/components/calculator/ResultsBreakdown"
import { ResultsChartCard } from "@/components/calculator/ResultsChartCard"
import { ResultsSummaryCard } from "@/components/calculator/ResultsSummaryCard"
import { ScenarioButtons } from "@/components/calculator/ScenarioButtons"
import { ValidationMessage } from "@/components/calculator/ValidationMessage"
import { formatCurrency, formatMonthYear } from "@/lib/formatting"
import { DEFAULT_INPUT_VALUES, SCENARIO_PRESETS } from "@/lib/mortgage/defaults"
import { calculateMortgageOverpayment } from "@/lib/mortgage/calculations"
import { buildScenarioResults } from "@/lib/mortgage/scenarios"
import type { MortgageInputValues } from "@/lib/mortgage/types"
import { normaliseMortgageInputs, validateMortgageInputs } from "@/lib/mortgage/validation"

type MortgageCalculatorProps = {
  variant?: "full" | "embedded"
}

export function MortgageCalculator({ variant = "full" }: MortgageCalculatorProps) {
  const [values, setValues] = useState<MortgageInputValues>(DEFAULT_INPUT_VALUES)

  const normalised = normaliseMortgageInputs(values)
  const validation = validateMortgageInputs(normalised)
  const hasErrors = validation.errors.length > 0
  const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1)

  let calculationError = ""
  let result = null
  let scenarios = null

  if (!hasErrors) {
    try {
      result = calculateMortgageOverpayment(normalised, startDate)
      scenarios = buildScenarioResults(normalised, SCENARIO_PRESETS, startDate)
    } catch (error) {
      calculationError = error instanceof Error ? error.message : "The calculator could not produce a result."
    }
  }

  const handleChange = (field: keyof MortgageInputValues, nextValue: string) => {
    setValues((current) => ({
      ...current,
      [field]: nextValue,
    }))
  }

  const handleScenarioSelect = (nextValue: number) => {
    setValues((current) => ({
      ...current,
      monthlyOverpayment: String(nextValue),
    }))
  }

  const isEmbedded = variant === "embedded"

  return (
    <div className="space-y-6">
      <div className={`grid gap-6 ${isEmbedded ? "" : "2xl:grid-cols-[1.08fr_0.92fr]"}`}>
        <section className="card rounded-[2rem] px-5 py-5 sm:px-6 lg:px-7">
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Enter your figures</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use realistic UK-style values. You can edit the defaults straight away and see live updates below.
              </p>
            </div>

            <ScenarioButtons
              options={SCENARIO_PRESETS}
              value={Number(values.monthlyOverpayment || 0)}
              onSelect={handleScenarioSelect}
            />

            <CalculatorForm values={values} onChange={handleChange} />

            <ValidationMessage title="Please check these inputs" items={validation.errors} tone="error" />
            <ValidationMessage title="Helpful notes" items={validation.warnings} tone="warning" />
            <ValidationMessage title="Calculation note" items={calculationError ? [calculationError] : []} tone="error" />
          </div>
        </section>

        <div className={`space-y-6 ${isEmbedded ? "" : ""}`}>
          {result ? (
            <>
              <ResultsSummaryCard result={result} />
              <ResultsBreakdown result={result} />
            </>
          ) : (
            <section className="card rounded-[2rem] px-6 py-6 lg:px-7">
              <h2 className="text-xl font-semibold text-slate-950">Your results will appear here</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Adjust the balance, rate, term, and overpayments to see how your mortgage-free date and interest cost could change.
              </p>
            </section>
          )}
        </div>
      </div>

      {result ? (
        <>
          <ResultsChartCard data={result.chartData} />

          <AdPlaceholder
            label={
              isEmbedded
                ? "Reserved banner placement below homepage calculator preview"
                : "Reserved banner placement below calculator results"
            }
          />

          <ExplanationBlock result={result} inputs={normalised} />

          {scenarios ? (
            <section className="card rounded-[2rem] px-5 py-5">
              <div className="mb-5">
                <h2 className="text-lg font-semibold text-slate-950">Scenario comparison</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Quick view of how common monthly overpayment amounts can change the mortgage path.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {scenarios.map((scenario) => (
                  <div key={scenario.monthlyOverpayment} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-sm font-semibold text-slate-900">{scenario.label}</p>
                    <p className="mt-2 text-xl font-semibold text-slate-950">{scenario.result.timeSavedLabel} saved</p>
                    <p className="mt-1 text-sm text-slate-600">{formatCurrency(scenario.result.interestSaved)} interest saved</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Mortgage-free by {formatMonthYear(scenario.result.overpayment.payoffDate)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : null}
    </div>
  )
}
