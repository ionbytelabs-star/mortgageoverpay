import { formatYearsMonths, roundToCurrency } from "@/lib/formatting"
import type {
  MortgageCalculationResult,
  MortgageInputs,
  MortgageMonth,
  MortgageTimelinePoint,
  ScheduleSummary,
} from "@/lib/mortgage/types"

const MAX_MONTHS = 12 * 100

export function calculateScheduledPayment(balance: number, annualRate: number, remainingYears: number) {
  const totalMonths = Math.max(1, Math.round(remainingYears * 12))
  const monthlyRate = annualRate / 100 / 12

  if (monthlyRate === 0) {
    return roundToCurrency(balance / totalMonths)
  }

  const numerator = balance * monthlyRate
  const denominator = 1 - (1 + monthlyRate) ** -totalMonths
  return roundToCurrency(numerator / denominator)
}

function addMonths(date: Date, months: number) {
  return new Date(date.getFullYear(), date.getMonth() + months, 1)
}

function simulateSchedule({
  balance,
  annualRate,
  monthlyPayment,
  monthlyOverpayment,
  lumpSum,
  startDate,
}: {
  balance: number
  annualRate: number
  monthlyPayment: number
  monthlyOverpayment: number
  lumpSum: number
  startDate: Date
}): ScheduleSummary {
  const months: MortgageMonth[] = []
  const monthlyRate = annualRate / 100 / 12
  let currentBalance = roundToCurrency(Math.max(0, balance - lumpSum))
  let monthIndex = 0
  let totalInterest = 0
  let totalPaid = lumpSum > 0 ? roundToCurrency(lumpSum) : 0

  if (currentBalance === 0) {
    return {
      payoffDate: startDate,
      totalInterest: 0,
      totalPaid,
      totalMonths: 0,
      monthlyPayment,
      months,
    }
  }

  while (currentBalance > 0 && monthIndex < MAX_MONTHS) {
    const openingBalance = currentBalance
    const interest = roundToCurrency(openingBalance * monthlyRate)
    const scheduledPayment = monthlyPayment
    const totalPlannedPayment = scheduledPayment + monthlyOverpayment

    if (totalPlannedPayment <= interest && interest > 0) {
      throw new Error("The payment is too low to reduce the balance, so the mortgage would not be repaid.")
    }

    const actualPayment = roundToCurrency(Math.min(totalPlannedPayment, openingBalance + interest))
    const principal = roundToCurrency(actualPayment - interest)
    const appliedOverpayment = roundToCurrency(Math.max(0, actualPayment - scheduledPayment))
    currentBalance = roundToCurrency(Math.max(0, openingBalance + interest - actualPayment))

    totalInterest = roundToCurrency(totalInterest + interest)
    totalPaid = roundToCurrency(totalPaid + actualPayment)

    months.push({
      monthIndex,
      date: addMonths(startDate, monthIndex + 1),
      openingBalance,
      payment: actualPayment,
      interest,
      principal,
      overpayment: appliedOverpayment,
      closingBalance: currentBalance,
    })

    monthIndex += 1
  }

  if (currentBalance > 0) {
    throw new Error("These values do not repay the mortgage within a realistic term.")
  }

  const finalMonth = months.at(-1)
  return {
    payoffDate: finalMonth?.date ?? startDate,
    totalInterest,
    totalPaid,
    totalMonths: months.length,
    monthlyPayment,
    months,
  }
}

function yearlyBalancePoint(months: MortgageMonth[], yearIndex: number) {
  if (months.length === 0) {
    return 0
  }

  if (yearIndex === 0) {
    return months[0]?.openingBalance ?? 0
  }

  const monthPosition = Math.min(months.length - 1, Math.max(0, yearIndex * 12 - 1))
  return months[monthPosition]?.closingBalance ?? 0
}

function buildChartData(original: ScheduleSummary, overpayment: ScheduleSummary) {
  const totalYears = Math.max(
    Math.ceil(original.totalMonths / 12),
    Math.ceil(overpayment.totalMonths / 12),
    1,
  )

  const chartData: MortgageTimelinePoint[] = []

  for (let yearIndex = 0; yearIndex <= totalYears; yearIndex += 1) {
    const label = yearIndex === 0 ? "Start" : `Year ${yearIndex}`
    chartData.push({
      label,
      monthIndex: yearIndex * 12,
      originalBalance: roundToCurrency(yearlyBalancePoint(original.months, yearIndex)),
      overpaymentBalance: roundToCurrency(yearlyBalancePoint(overpayment.months, yearIndex)),
    })
  }

  return chartData
}

export function calculateMortgageOverpayment(
  inputs: MortgageInputs,
  startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1),
): MortgageCalculationResult {
  const scheduledPayment =
    inputs.monthlyPayment && inputs.monthlyPayment > 0
      ? roundToCurrency(inputs.monthlyPayment)
      : calculateScheduledPayment(inputs.balance, inputs.annualRate, inputs.remainingYears)

  const original = simulateSchedule({
    balance: inputs.balance,
    annualRate: inputs.annualRate,
    monthlyPayment: scheduledPayment,
    monthlyOverpayment: 0,
    lumpSum: 0,
    startDate,
  })

  const overpayment = simulateSchedule({
    balance: inputs.balance,
    annualRate: inputs.annualRate,
    monthlyPayment: scheduledPayment,
    monthlyOverpayment: inputs.monthlyOverpayment,
    lumpSum: inputs.lumpSum,
    startDate,
  })

  const monthsSaved = Math.max(0, original.totalMonths - overpayment.totalMonths)
  const interestSaved = roundToCurrency(original.totalInterest - overpayment.totalInterest)
  const totalPaidSaved = roundToCurrency(original.totalPaid - overpayment.totalPaid)

  return {
    original,
    overpayment,
    interestSaved,
    totalPaidSaved,
    monthsSaved,
    timeSavedLabel: formatYearsMonths(monthsSaved),
    chartData: buildChartData(original, overpayment),
  }
}
