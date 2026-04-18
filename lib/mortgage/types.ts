export type MortgageInputValues = {
  balance: string
  annualRate: string
  remainingYears: string
  monthlyPayment: string
  monthlyOverpayment: string
  lumpSum: string
}

export type MortgageInputs = {
  balance: number
  annualRate: number
  remainingYears: number
  monthlyPayment?: number
  monthlyOverpayment: number
  lumpSum: number
}

export type ValidationState = {
  errors: string[]
  warnings: string[]
}

export type MortgageMonth = {
  monthIndex: number
  date: Date
  openingBalance: number
  payment: number
  interest: number
  principal: number
  overpayment: number
  closingBalance: number
}

export type MortgageTimelinePoint = {
  label: string
  monthIndex: number
  originalBalance: number
  overpaymentBalance: number
}

export type ScheduleSummary = {
  payoffDate: Date
  totalInterest: number
  totalPaid: number
  totalMonths: number
  monthlyPayment: number
  months: MortgageMonth[]
}

export type MortgageCalculationResult = {
  original: ScheduleSummary
  overpayment: ScheduleSummary
  interestSaved: number
  totalPaidSaved: number
  monthsSaved: number
  timeSavedLabel: string
  chartData: MortgageTimelinePoint[]
}
