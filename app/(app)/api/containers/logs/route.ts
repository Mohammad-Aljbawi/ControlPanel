import { NextRequest, NextResponse } from "next/server"
import docker from "@/lib/docker"

export async function POST(
  request: NextRequest
) {
  try {
    const { id } = await request.json()

    const container =
      docker.getContainer(id)

    const logs = await container.logs({
      stdout: true,
      stderr: true,
      tail: 100,
    })

    const cleanLogs = logs
  .toString("utf8")
  .replace(/.\[/g, "[")
  
  
return NextResponse.json({
  success: true,
  length: cleanLogs.length,
  logs: cleanLogs,
})
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    )
  }
}