"use client"

import { useEffect, useState } from "react"

type Server = {
  name: string
  status: string
}

export default function ServersList() {
  const [servers, setServers] = useState<Server[]>([])

  useEffect(() => {
    async function fetchServers() {
      const response = await fetch("/api/servers")

      const data = await response.json()

      setServers(data)
    }

    fetchServers()
  }, [])

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">
        Servers
      </h2>

      {servers.map((server) => (
        <div
          key={server.name}
          className="rounded-lg border p-4"
        >
          <div className="flex items-center justify-between">
            <span>{server.name}</span>

            <span>{server.status}</span>
          </div>
        </div>
      ))}
    </div>
  )
}