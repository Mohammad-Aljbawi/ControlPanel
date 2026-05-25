import {StatsCards } from "@/components/dashboard/stats-cards"
import ServersList from "@/components/dashboard/servers-list"
import { AlertsList } from "@/components/dashboard/alerts-list"
import { ResourceUsage } from "@/components/dashboard/resource-usage"

import {
  CpuChart,
  MemoryChart,
  NetworkChart,
} from "@/components/dashboard/charts"

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Infrastructure Overview
        </h1>

        <p className="text-muted-foreground">
          Monitor your infrastructure in real-time.
        </p>
      </div>

      <StatsCards />

      {/* <div className="grid gap-6 lg:grid-cols-3">
        <CpuChart />
        <MemoryChart />
        <NetworkChart />
      </div> */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ServersList />
        </div>

        <ResourceUsage />
      </div>

      <AlertsList />

    </div>
  )
}