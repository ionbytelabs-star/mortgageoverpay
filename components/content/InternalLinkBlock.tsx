import Link from "next/link"

type InternalLinkBlockProps = {
  title?: string
  links: ReadonlyArray<{ href: string; label: string }>
}

export function InternalLinkBlock({ title = "Related pages", links }: InternalLinkBlockProps) {
  return (
    <aside className="card rounded-[2rem] px-5 py-5">
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="focus-ring rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-slate-950"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  )
}
