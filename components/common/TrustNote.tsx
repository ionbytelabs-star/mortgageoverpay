import { CONTENT_NOTE } from "@/lib/constants"

type TrustNoteProps = {
  children?: string
}

export function TrustNote({ children = CONTENT_NOTE }: TrustNoteProps) {
  return (
    <div className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-amber-950">
      <p>{children}</p>
    </div>
  )
}
