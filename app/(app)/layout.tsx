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
  }, [])

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <main className="flex-2 flex flex-col p-6">
        {children}
      </main>
    </div>
  )
}