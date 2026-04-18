import { COMPARISON_ITEMS } from "@/content/comparisons"

import { Section } from "@/components/layout/Section"

export function ComparisonSection() {
  return (
    <Section
      title="Different routes to an answer"
      description="Some tools prioritise reading. Some prioritise setup. This site is designed around speed, clarity, and low friction."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {COMPARISON_ITEMS.map((item) => (
          <article
            key={item.category}
            className={`rounded-[2rem] border px-5 py-6 ${
              item.highlighted ? "border-teal-700 bg-teal-50" : "border-slate-200 bg-white"
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-950">{item.category}</h3>
              <div>
                <p className="text-sm font-medium text-slate-500">Often good for</p>
                <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
                  {item.strengths.map((strength) => (
                    <li key={strength}>• {strength}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Possible trade-offs</p>
                <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
                  {item.tradeOffs.map((tradeOff) => (
                    <li key={tradeOff}>• {tradeOff}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
