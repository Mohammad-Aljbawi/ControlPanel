import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([
    {
      name: "Pi-hole",
      status: "online",
    },
    {
      name: "Nextcloud",
      status: "online",
    },
    {
      name: "Grafana",
      status: "offline",
    },
  ])
}