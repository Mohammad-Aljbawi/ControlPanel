"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const cpuData = [
  { time: "00:00", value: 30 },
  { time: "04:00", value: 25 },
  { time: "08:00", value: 45 },
  { time: "12:00", value: 65 },
  { time: "16:00", value: 55 },
  { time: "20:00", value: 40 },
  { time: "Now", value: 48 },
]

const memoryData = [
  { time: "00:00", value: 62 },
  { time: "04:00", value: 58 },
  { time: "08:00", value: 68 },
  { time: "12:00", value: 72 },
  { time: "16:00", value: 78 },
  { time: "20:00", value: 74 },
  { time: "Now", value: 71 },
]

const networkData = [
  { time: "00:00", inbound: 120, outbound: 80 },
  { time: "04:00", inbound: 90, outbound: 60 },
  { time: "08:00", inbound: 250, outbound: 180 },
  { time: "12:00", inbound: 380, outbound: 290 },
  { time: "16:00", inbound: 320, outbound: 240 },
  { time: "20:00", inbound: 200, outbound: 150 },
  { time: "Now", inbound: 280, outbound: 210 },
]

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-md">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      {payload.map((item, i) => (
        <p key={i} className="text-sm font-semibold" style={{ color: item.color }}>
          {item.name}: {item.value}
          {item.name === "CPU" || item.name === "Memory" ? "%" : " MB/s"}
        </p>
      ))}
    </div>
  )
}

export function CpuChart({
  data,
  current,
}: {
  data: { time: string; value: number }[]
  current: number
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
          <span className="text-2xl font-bold text-primary">{current}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.7 0.18 160)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="oklch(0.7 0.18 160)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "oklch(0.6 0 0)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "oklch(0.6 0 0)" }}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                name="CPU"
                stroke="oklch(0.7 0.18 160)"
                strokeWidth={2}
                fill="url(#cpuGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function MemoryChart({
  data,
  current,
}: {
  data: { time: string; value: number }[]
  current: number
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
          <span className="text-2xl font-bold text-chart-2">{current}%</span>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.65 0.15 200)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="oklch(0.65 0.15 200)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "oklch(0.6 0 0)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "oklch(0.6 0 0)" }}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                name="Memory"
                stroke="oklch(0.65 0.15 200)"
                strokeWidth={2}
                fill="url(#memoryGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function NetworkChart({
  data,
}: {
  data: {
    time: string
    inbound: number
    outbound: number
  }[]
}) {
  return (
    <Card className="lg:col-span-2">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Network Traffic</CardTitle>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">Inbound</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-chart-3" />
              <span className="text-muted-foreground">Outbound</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="inboundGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.7 0.18 160)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="oklch(0.7 0.18 160)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="outboundGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.75 0.18 80)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="oklch(0.75 0.18 80)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "oklch(0.6 0 0)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "oklch(0.6 0 0)" }}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="inbound"
                name="Inbound"
                stroke="oklch(0.7 0.18 160)"
                strokeWidth={2}
                fill="url(#inboundGradient)"
              />
              <Area
                type="monotone"
                dataKey="outbound"
                name="Outbound"
                stroke="oklch(0.75 0.18 80)"
                strokeWidth={2}
                fill="url(#outboundGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
