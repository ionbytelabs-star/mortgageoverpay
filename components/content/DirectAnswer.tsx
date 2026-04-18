type DirectAnswerProps = {
  title?: string
  answer: string
}

export function DirectAnswer({ title = "Direct answer", answer }: DirectAnswerProps) {
  return (
    <section className="rounded-[2rem] border border-teal-200 bg-teal-50 px-5 py-5">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">{title}</p>
      <p className="mt-3 text-base leading-7 text-slate-800">{answer}</p>
    </section>
  )
}
