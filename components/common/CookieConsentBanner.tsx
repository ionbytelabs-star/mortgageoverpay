"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/constants"
import { ROUTES } from "@/lib/routes"

type ConsentChoice = "accepted" | "essential"

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)

    if (!storedChoice) {
      setIsVisible(true)
    }
  }, [])

  function saveChoice(choice: ConsentChoice) {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="mx-auto max-w-5xl">
        <section
          aria-label="Cookie consent"
          className="card pointer-events-auto rounded-[1.75rem] border-slate-200 px-4 py-4 sm:px-5 sm:py-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-2">
              <p className="text-sm font-semibold text-slate-950">Cookie preferences</p>
              <p className="text-sm leading-6 text-slate-600">
                We use cookies to understand site usage and improve the experience. You can accept analytics cookies
                or continue with essential cookies only. Read our{" "}
                <Link href={ROUTES.cookies} className="focus-ring font-medium text-slate-950 underline decoration-slate-300 underline-offset-4">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href={ROUTES.privacy} className="focus-ring font-medium text-slate-950 underline decoration-slate-300 underline-offset-4">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => saveChoice("essential")}
                className="focus-ring rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Use essential only
              </button>
              <button
                type="button"
                onClick={() => saveChoice("accepted")}
                className="focus-ring rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
              >
                Accept cookies
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
