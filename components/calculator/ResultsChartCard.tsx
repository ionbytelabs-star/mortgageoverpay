"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { formatCurrency } from "@/lib/formatting"
import type { MortgageTimelinePoint } from "@/lib/mortgage/types"

type ResultsChartCardProps = {
  data: MortgageTimelinePoint[]
}

export function ResultsChartCard({ data }: ResultsChartCardProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="card rounded-[2rem] px-5 py-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-950">Balance path</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          A quicker drop in the balance means less interest accrues over time.
        </p>
      </div>
      <div className="h-72 w-full">
        {isMounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="originalBalance" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="overpaymentBalance" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#0f766e" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0f766e" stopOpacity={0.06} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="label" tick={{ fill: "#64748b", fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis
                tick={{ fill: "#64748b", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => formatCurrency(Number(value))}
              />
              <Tooltip
                formatter={(value) => formatCurrency(Number(value ?? 0))}
                contentStyle={{
                  borderRadius: "18px",
                  border: "1px solid #dbe4ea",
                  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.08)",
                }}
              />
              <Area
                type="monotone"
                dataKey="originalBalance"
                name="Without overpayment"
                stroke="#64748b"
                fill="url(#originalBalance)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="overpaymentBalance"
                name="With overpayment"
                stroke="#0f766e"
                fill="url(#overpaymentBalance)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center rounded-3xl bg-slate-50 px-6 text-center text-sm leading-6 text-slate-500">
            This chart compares the mortgage balance with and without overpayments, so you can see how a faster balance
            drop can reduce interest over time.
          </div>
        )}
      </div>
    </section>
  )
}
