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
      className={`rounded-[2rem] border border-dashed border-slate-200 bg-slate-50/55 px-4 text-center text-xs text-slate-400 ${
        variant === "banner" ? "py-7" : "py-10"
      }`}
    >
      <span className="uppercase tracking-[0.18em] text-slate-400/90">{label}</span>
    </div>
  )
}
