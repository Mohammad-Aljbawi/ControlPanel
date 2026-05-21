"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const resources = [
  {
    name: "Production Database",
    used: 847,
    total: 1000,
    unit: "GB",
  },
  {
    name: "Cache Storage",
    used: 12.4,
    total: 16,
    unit: "GB",
  },
  {
    name: "File Storage",
    used: 1.6,
    total: 2,
    unit: "TB",
  },
  {
    name: "Backup Storage",
    used: 420,
    total: 500,
    unit: "GB",
  },
]

export function ResourceUsage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Resource Usage</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {resources.map((resource) => {
          const percentage = (resource.used / resource.total) * 100
          const isWarning = percentage >= 80
          const isCritical = percentage >= 90

          return (
            <div key={resource.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{resource.name}</span>
                <span className="font-medium">
                  {resource.used} / {resource.total} {resource.unit}
                </span>
              </div>
              <Progress
                value={percentage}
                className={`h-2 ${
                  isCritical
                    ? "[&>div]:bg-destructive"
                    : isWarning
                    ? "[&>div]:bg-chart-3"
                    : "[&>div]:bg-primary"
                }`}
              />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
