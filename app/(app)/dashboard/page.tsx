import { StatsCards } from "@/components/dashboard/stats-cards";
import { CpuChart, MemoryChart, NetworkChart } from "@/components/dashboard/charts";
import ServersList from "@/components/dashboard/servers-list";
import { AlertsList } from "@/components/dashboard/alerts-list";
import { ResourceUsage } from "@/components/dashboard/resource-usage";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-balance">
          Infrastructure Overview
        </h1>
        <p className="text-muted-foreground">
          Monitor your servers, databases, and network in real-time.
        </p>
      </div>

      <StatsCards />

      <div className="grid gap-4 lg:grid-cols-4">
        <CpuChart />
        <MemoryChart />
        <NetworkChart />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ServersList />
        </div>
        <div className="space-y-4">
          <ResourceUsage />
        </div>
      </div>

      <AlertsList />
    </>
  );
}