type PageIntroProps = {
  title: string
  intro: string
}

export function PageIntro({ title, intro }: PageIntroProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="text-base leading-7 text-slate-600 sm:text-lg">{intro}</p>
    </div>
  )
}
