"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function PortCheckerPage() {
  const [host, setHost] = useState("")
  const [port, setPort] = useState("")
  const [result, setResult] = useState<any>(null)

  return (
    <div className="max-w-2xl space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Port Checker</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            placeholder="Host"
            value={host}
            onChange={(e) => setHost(e.target.value)}
          />

          <Input
            placeholder="Port"
            type="number"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />

<Button
  className="w-full"
  onClick={async () => {
    const res = await fetch(
      "/api/tools/port-checker",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          host,
          port,
        }),
      }
    )

    const data = await res.json()

    setResult(data)
  }}
>
  Check Port
</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Result</CardTitle>
        </CardHeader>

        <CardContent>
          {result ? (
  <div className="space-y-2">
    <p>Host: {result.host}</p>
    <p>Port: {result.port}</p>
    <p>Status: {result.status}</p>
  </div>
) : (
  "No check performed yet."
)}
        </CardContent>
      </Card>
    </div>
  )
}