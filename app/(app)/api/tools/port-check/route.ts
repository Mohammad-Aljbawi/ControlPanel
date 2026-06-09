import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()

  return NextResponse.json({
    host: body.host,
    port: body.port,
    status: "open",
  })
}