"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Database, HardDrive, Activity, TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    title: "Active Servers",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Server,
    description: "from last week",
  },
  {
    title: "Database Instances",
    value: "4",
    change: "0",
    trend: "neutral",
    icon: Database,
    description: "no change",
  },
  {
    title: "Storage Used",
    value: "2.4 TB",
    change: "+120 GB",
    trend: "up",
    icon: HardDrive,
    description: "from last week",
  },
  {
    title: "Avg Response Time",
    value: "45ms",
    change: "-12ms",
    trend: "down",
    icon: Activity,
    description: "from last week",
  },
]

export function StatsCards() {
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
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center gap-1 text-xs">
              {stat.trend === "up" && (
                <TrendingUp className="size-3 text-primary" />
              )}
              {stat.trend === "down" && (
                <TrendingDown className="size-3 text-primary" />
              )}
              <span
                className={
                  stat.trend === "up"
                    ? "text-primary"
                    : stat.trend === "down"
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                {stat.change}
              </span>
              <span className="text-muted-foreground">{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
