"use client"

import { DashboardSidebar } from "@/components/layout/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Bell, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <DashboardSidebar>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative size-8">
          <Bell className="size-4" />
          <Badge className="absolute -right-1 -top-1 size-4 rounded-full p-0 text-[10px]">
            3
          </Badge>
        </Button>
        <Button variant="ghost" size="icon" className="size-8">
          <RefreshCw className="size-4" />
        </Button>
        <ThemeToggle />
      </div>
    </DashboardSidebar>
  )
}
