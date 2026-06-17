import { NextResponse } from "next/server";
import docker from "@/lib/docker";

export async function GET() {
  try {
    const containers = await docker.listContainers({
      all: true,
    });

    return NextResponse.json(containers);
  } catch (error) {
    console.error(error);

    console.error("Docker Error:", error);

return NextResponse.json(
  {
    error: String(error),
  },
  {
    status: 500,
  }
);
  }
}