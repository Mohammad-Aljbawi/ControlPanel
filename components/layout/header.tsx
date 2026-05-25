"use client"

import { Bell, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function HeaderPage() {
  const router = useRouter()

  return (
    <header className="flex items-center justify-end gap-2 border-b p-4">
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