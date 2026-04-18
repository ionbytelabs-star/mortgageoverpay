import Link from "next/link"

import { Container } from "@/components/layout/Container"
import type { BreadcrumbItem } from "@/lib/seo"

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Container className="pt-6">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {index === items.length - 1 ? (
                <span className="font-medium text-slate-700">{item.name}</span>
              ) : (
                <Link href={item.href} className="focus-ring rounded-md hover:text-slate-950">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  )
}
