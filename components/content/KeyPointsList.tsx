type KeyPointsListProps = {
  title?: string
  items: ReadonlyArray<string>
}

export function KeyPointsList({ title = "Key points", items }: KeyPointsListProps) {
  return (
    <section className="card rounded-[2rem] px-5 py-5">
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-teal-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
