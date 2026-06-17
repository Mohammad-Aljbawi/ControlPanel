import { NextRequest, NextResponse } from "next/server"
import docker from "@/lib/docker"

export async function POST(
  request: NextRequest
) {
  try {
    const { id } = await request.json()

    const container =
      docker.getContainer(id)

    await container.restart()

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

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