"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

export default function Breadcrumbs() {
  const pathname = usePathname()

  const segments = pathname.split("/").filter(Boolean)

  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      <Link href="/dashboard" className="hover:text-foreground">
        Dashboard
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/")

        return (
          <div key={href} className="flex items-center gap-1">
            <ChevronRight className="size-4" />

            <Link
              href={href}
              className="capitalize hover:text-foreground"
            >
              {segment.replace("-", " ")}
            </Link>
          </div>
        )
      })}
    </div>
  )
}