import { NextResponse } from "next/server";
import Docker from "dockerode";

const docker = new Docker({
  socketPath: "/var/run/docker.sock",
});

export async function GET() {
  const containers = await docker.listContainers({
    all: true,
  });

  const alerts = containers
    .filter((c) => c.State !== "running")
    .map((c) => ({
      id: c.Id,
      severity: "critical",
      title: `${c.Names[0].replace("/", "")} stopped`,
      state: c.State,
    }));

  return NextResponse.json(alerts);
}