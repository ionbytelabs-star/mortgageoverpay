type ValidationMessageProps = {
  title: string
  items: string[]
  tone: "error" | "warning"
}

export function ValidationMessage({ title, items, tone }: ValidationMessageProps) {
  if (items.length === 0) {
    return null
  }

  const toneClasses =
    tone === "error"
      ? "border-rose-200 bg-rose-50 text-rose-950"
      : "border-amber-200 bg-amber-50 text-amber-950"

  return (
    <div className={`rounded-3xl border px-4 py-4 ${toneClasses}`} role={tone === "error" ? "alert" : "status"}>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-2 space-y-2 text-sm leading-6">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}
