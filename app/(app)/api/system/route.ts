import { NextResponse } from "next/server"
import si from "systeminformation"

export async function GET() {
  const load = await si.currentLoad()
  const memory = await si.mem()
  const fs = await si.fsSize()
  const uptime = await si.time()

  return NextResponse.json({
    cpu: Math.round(load.currentLoad),

    memory: Math.round(
      (memory.used / memory.total) * 100
    ),

    disk: Math.round(fs[0].use),

    uptime: uptime.uptime,
  })
}