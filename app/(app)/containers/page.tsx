"use client"

import { useEffect, useState } from "react"
import ContainerGrid from "@/components/containers/container-grid"
export const dynamic = "force-dynamic"

export default function ContainersPage() {
  const [containers, setContainers] = useState([])

  async function loadContainers() {
    const res = await fetch("/api/containers")
    const data = await res.json()

    setContainers(data)
  }

  useEffect(() => {
    loadContainers()
  }, [])

  return (
    <ContainerGrid
      containers={containers}
      onRefresh={loadContainers}
    />
  )
}