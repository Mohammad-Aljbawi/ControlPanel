"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, XCircle, Clock } from "lucide-react"

const alerts = [
  {
    id: 1,
    title: "High CPU Usage",
    description: "prod-cache-01 CPU usage exceeded 90%",
    severity: "critical",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Memory Warning",
    description: "prod-api-01 memory usage at 85%",
    severity: "warning",
    time: "15 min ago",
  },
  {
    id: 3,
    title: "SSL Certificate Expiring",
    description: "Certificate for api.example.com expires in 7 days",
    severity: "warning",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Deployment Complete",
    description: "Successfully deployed v2.4.1 to production",
    severity: "info",
    time: "2 hours ago",
  },
  {
    id: 5,
    title: "Database Backup Complete",
    description: "Daily backup for prod-db-01 completed successfully",
    severity: "info",
    time: "4 hours ago",
  },
]

const severityConfig = {
  critical: {
    icon: XCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    badgeVariant: "destructive" as const,
  },
  warning: {
    icon: AlertTriangle,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    badgeVariant: "secondary" as const,
  },
  info: {
    icon: Info,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    badgeVariant: "outline" as const,
  },
}

export function AlertsList() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Recent Alerts</CardTitle>
          <Badge variant="destructive" className="font-normal">
            1 Critical
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {alerts.map((alert) => {
            const severity = severityConfig[alert.severity as keyof typeof severityConfig]
            const SeverityIcon = severity.icon

            return (
              <div
                key={alert.id}
                className="flex items-start gap-3 px-6 py-3 transition-colors hover:bg-muted/50"
              >
                <div className={`mt-0.5 rounded-full p-1.5 ${severity.bgColor}`}>
                  <SeverityIcon className={`size-3.5 ${severity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{alert.title}</p>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                    {alert.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                  <Clock className="size-3" />
                  {alert.time}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
