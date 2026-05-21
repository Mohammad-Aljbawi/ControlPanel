"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, AlertCircle, Clock } from "lucide-react"

const servers = [
  {
    name: "prod-web-01",
    status: "healthy",
    cpu: 45,
    memory: 68,
    uptime: "45d 12h",
    region: "US East",
  },
  {
    name: "prod-web-02",
    status: "healthy",
    cpu: 32,
    memory: 52,
    uptime: "45d 12h",
    region: "US East",
  },
  {
    name: "prod-api-01",
    status: "warning",
    cpu: 78,
    memory: 85,
    uptime: "12d 8h",
    region: "US West",
  },
  {
    name: "prod-db-01",
    status: "healthy",
    cpu: 24,
    memory: 71,
    uptime: "90d 4h",
    region: "US East",
  },
  {
    name: "prod-cache-01",
    status: "critical",
    cpu: 92,
    memory: 94,
    uptime: "2h 15m",
    region: "EU West",
  },
  {
    name: "staging-web-01",
    status: "healthy",
    cpu: 12,
    memory: 34,
    uptime: "7d 3h",
    region: "US East",
  },
]

const statusConfig = {
  healthy: {
    icon: CheckCircle2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    label: "Healthy",
  },
  warning: {
    icon: AlertCircle,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    label: "Warning",
  },
  critical: {
    icon: XCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    label: "Critical",
  },
}

export function ServersList() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Server Status</CardTitle>
          <Badge variant="outline" className="font-normal">
            6 Servers
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {servers.map((server) => {
            const status = statusConfig[server.status as keyof typeof statusConfig]
            const StatusIcon = status.icon

            return (
              <div
                key={server.name}
                className="flex items-center gap-4 px-6 py-3 transition-colors hover:bg-muted/50"
              >
                <div className={`rounded-full p-1.5 ${status.bgColor}`}>
                  <StatusIcon className={`size-4 ${status.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-medium">{server.name}</p>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {server.region}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span>CPU: {server.cpu}%</span>
                    <span>Memory: {server.memory}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3" />
                  {server.uptime}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
