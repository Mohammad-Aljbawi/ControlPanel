"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Database, HardDrive, Activity,} from "lucide-react"

export function StatsCards({
  cpu,
  memory,
  disk,
}: {
  cpu: number
  memory: number
  disk: number
}) {
  const stats = [
    {
      title: "CPU Usage",
      value: `${(cpu ?? 0).toFixed(1)}%`,
      icon: Activity,
    },
    {
      title: "Memory Usage",
      value: `${(memory ?? 0).toFixed(1)}%`,
      icon: Database,
    },
    {
      title: "Disk Usage",
      value: `${(disk ?? 0).toFixed(1)}%`,
      icon: HardDrive,
    },
    {
  title: "Containers",
  value: "13",
  icon: Server,
},
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="rounded-md bg-primary/10 p-2">
              <stat.icon className="size-4 text-primary" />
            </div>
          </CardHeader>
<CardContent>
  <div className="text-2xl font-bold">
    {stat.value}
  </div>
</CardContent>
        </Card>
      ))}
    </div>
  )
}
