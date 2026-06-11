import { NextResponse } from "next/server";

async function queryPrometheus(query: string) {
  const response = await fetch(
    `http://192.168.8.198:9090/api/v1/query?query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Prometheus query failed");
  }

  const data = await response.json();

  return Number(
    data.data.result?.[0]?.value?.[1] ?? 0
  );
}
export async function GET() {
  try {
    const cpu = await queryPrometheus(
      '100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)'
    );

    const memory = await queryPrometheus(
      '(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100'
    );

    const disk = await queryPrometheus(
      '100 * (1 - (node_filesystem_avail_bytes{mountpoint="/"} / node_filesystem_size_bytes{mountpoint="/"}))'
    );

    const uptime = await queryPrometheus(
      'node_time_seconds - node_boot_time_seconds'
    );

    return NextResponse.json({
      cpu: Math.round(cpu),
      memory: Math.round(memory),
      disk: Math.round(disk),
      uptime: Math.round(uptime / 86400),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        cpu: 0,
        memory: 0,
        disk: 0,
        uptime: 0,
        error: "Failed to load metrics",
      },
      { status: 500 }
    );
  }
}