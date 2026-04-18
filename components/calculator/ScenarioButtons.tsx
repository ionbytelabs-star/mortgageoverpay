type ScenarioButtonsProps = {
  options: number[]
  value: number
  onSelect: (value: number) => void
}

export function ScenarioButtons({ options, value, onSelect }: ScenarioButtonsProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-900">Quick scenarios</p>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const selected = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`focus-ring min-h-12 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selected
                  ? "border-teal-700 bg-teal-700 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-teal-200 hover:bg-teal-50"
              }`}
            >
              +£{option}/month
            </button>
          )
        })}
      </div>
    </div>
  )
}
