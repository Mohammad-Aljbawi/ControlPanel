import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    inbound: Math.floor(Math.random() * 500),
    outbound: Math.floor(Math.random() * 400),
  })
}