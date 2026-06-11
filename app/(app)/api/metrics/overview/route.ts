import { NextResponse } from "next/server";

async function queryPrometheus(query: string) {
  const response = await fetch(
    `http://192.168.8.198/api/v1/query?query=${encodeURIComponent(query)}`
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

    return NextResponse.json({
      cpu: Math.round(cpu),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load metrics" },
      { status: 500 }
    );
  }
}