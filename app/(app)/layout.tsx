"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { DashboardSidebar } from "@/components/layout/sidebar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      router.push("/login")
    }
  }, [router])

  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar>
        {children}
      </DashboardSidebar>
    </div>
  )
}