"use client";

import { useEffect, useState } from "react";
import { StatsCards } from "@/components/dashboard/stats-cards";
import {
  CpuChart,
  MemoryChart,
  NetworkChart,
} from "@/components/dashboard/charts";
import ServersList from "@/components/dashboard/services-list";
import { AlertsList } from "@/components/dashboard/alerts-list";
import { ResourceUsage } from "@/components/dashboard/resource-usage";

export default function DashboardPage() {
  const [system, setSystem] = useState<any>(null);
  const [cpuHistory, setCpuHistory] = useState<
    { time: string; value: number }[]
  >([]);
  const [memoryHistory, setMemoryHistory] = useState<
    { time: string; value: number }[]
  >([]);
  const [networkHistory, setNetworkHistory] = useState<
    {
      time: string;
      inbound: number;
      outbound: number;
    }[]
  >([]);

  useEffect(() => {
    async function loadSystem() {
      // const res = await fetch("/api/system");
      const res = await fetch("/api/metrics/overview");
      const data = await res.json();

      setSystem(data);

      const networkRes = await fetch("/api/network");
      const networkData = await networkRes.json();

      setSystem(data);

      setCpuHistory((prev) => [
        ...prev.slice(-9),
        {
          time: new Date().toLocaleTimeString(),
          value: data.cpu,
        },
      ]);
      setMemoryHistory((prev) => [
        ...prev.slice(-9),
        {
          time: new Date().toLocaleTimeString(),
          value: data.memory,
        },
      ]);

      setNetworkHistory((prev) => [
        ...prev.slice(-9),
        {
          time: new Date().toLocaleTimeString(),
          inbound: networkData.inbound,
          outbound: networkData.outbound,
        },
      ]);
    }

    loadSystem();

    const interval = setInterval(loadSystem, 100000);

    return () => clearInterval(interval);
  }, []);

  if (!system) return null;
  return (
    <>
      <iframe src="http://grafana.aljbawi.net/d-solo/rYdddlPWk/node-exporter-full?orgId=1&ffrom=now-1h&timezone=browser&var-ds_prometheus=bfojwh0m2tfy8c&var-job=node&var-nodename=moe-LIFEBOOK-E780&var-node=node-exporter:9100&refresh=5s&panelId=20" width="450" height="200" frameBorder="0"></iframe>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-balance">
          Infrastructure Overview
        </h1>
        <p className="text-muted-foreground">
          Monitor your servers, databases, and network in real-time.
        </p>
      </div>

      <StatsCards cpu={system.cpu} memory={system.memory} disk={system.disk} />

      <div className="grid gap-4 lg:grid-cols-4">
        <CpuChart current={system.cpu} data={cpuHistory} />
        <MemoryChart current={system.memory} data={memoryHistory} />
        <NetworkChart data={networkHistory} />
      </div>

     
    </>
  );
}
