"use client"

import { Bell, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useRouter, usePathname } from "next/navigation"
import { getPageConfig } from "@/lib/page-config"
import Breadcrumbs from "@/components/layout/breadcrumbs"

export default function HeaderPage() {
  const router = useRouter()
  const pathname = usePathname()

  const page = getPageConfig(pathname)

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      
      <SidebarTrigger />

      <div className="flex flex-col">
        <h1 className="text-sm font-semibold">
          {page?.label || "Dashboard"}
        </h1>
        <Breadcrumbs />
        <p className="text-xs text-muted-foreground">
          {page?.description || "Infrastructure Control Panel"}
        </p>
      </div>

      <div className="flex-1" />

      <Button variant="ghost" size="icon">
        <Bell className="size-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <RefreshCw className="size-4" />
      </Button>

      <ThemeToggle />

      <Button
        variant="destructive"
        onClick={() => {
          localStorage.removeItem("loggedIn")
          router.push("/login")
        }}
      >
        Logout
      </Button>
    </header>
  )
}