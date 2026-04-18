import type { ReactNode } from "react"

import { Container } from "@/components/layout/Container"

type SectionProps = {
  children: ReactNode
  title?: string
  description?: string
  className?: string
  compact?: boolean
}

export function Section({ children, title, description, className = "", compact = false }: SectionProps) {
  return (
    <section className={`${compact ? "py-4 sm:py-5" : "py-10 sm:py-14"} ${className}`}>
      <Container>
        {(title || description) && (
          <div className={`${compact ? "mb-4" : "mb-8"} max-w-3xl space-y-3`}>
            {title ? <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h2> : null}
            {description ? <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
