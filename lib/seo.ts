import { ROUTES } from "@/lib/routes"

export type BreadcrumbItem = {
  name: string
  href: string
}

export function makeBreadcrumbs(items: BreadcrumbItem[]) {
  return [{ name: "Home", href: ROUTES.home }, ...items]
}

export function buildRelatedLinks(links: BreadcrumbItem[]) {
  return links
}
