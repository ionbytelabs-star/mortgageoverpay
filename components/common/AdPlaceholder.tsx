type AdPlaceholderProps = {
  label?: string
  variant?: "banner" | "rectangle"
}

export function AdPlaceholder({
  label = "Reserved advert placement",
  variant = "banner",
}: AdPlaceholderProps) {
  return (
    <div
      aria-label={label}
      className={`rounded-[2rem] border-2 border-dashed border-slate-300 bg-slate-100/80 px-4 text-center text-sm text-slate-600 ${
        variant === "banner" ? "py-10" : "py-16"
      }`}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Advert placeholder</p>
        <p className="font-medium">{label}</p>
        <p className="text-xs text-slate-500">
          {variant === "banner" ? "Suggested leaderboard slot" : "Suggested in-content rectangle slot"}
        </p>
      </div>
    </div>
  )
}
