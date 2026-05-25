"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"


import {
  Server,
  Database,
  Activity,
  Bell,
  Settings,
  LayoutDashboard,
  HardDrive,
  Network,
  Shield,
  Terminal,
  ChevronDown,
  Search,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { StatsCards } from "@/components/dashboard/stats-cards";
import {
  CpuChart,
  MemoryChart,
  NetworkChart,
} from "@/components/dashboard/charts";
import ServersList from "@/components/dashboard/servers-list";
import { AlertsList } from "@/components/dashboard/alerts-list";
import { ResourceUsage } from "@/components/dashboard/resource-usage";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  {
    icon: Server,
    label: "Servers",
    href: "/servers",
  },
  {
    icon: Database,
    label: "Databases",
    href: "/databases",
  },
  {
    icon: HardDrive,
    label: "Storage",
    href: "/storage",
  },
  {
    icon: Network,
    label: "Network",
    href: "/network",
  },
  {
    icon: Activity,
    label: "Monitoring",
    href: "/monitoring",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: Settings,
    label: "Wiki",
    href: "/wiki",
  },
  {
    icon: Settings,
    label: "Tools",
    href: "/tools",
  },
];

const systemItems = [
  { icon: Shield, label: "Security", href: "/dashboard/security" },
  { icon: Terminal, label: "Logs", href: "/dashboard/logs" },
  { icon: Bell, label: "Alerts", badge: "3", href: "/dashboard/alerts" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  <h1>NEW SIDEBAR</h1>
  const pathname = usePathname();
  const router = useRouter();
  return (
    <SidebarProvider>
      <Sidebar className="border-r border-sidebar-border">
        <SidebarHeader className="border-b border-sidebar-border px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <Server className="size-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">HomeLab</span>
              <span className="text-xs text-muted-foreground">
                Infrastructure
              </span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-2 py-4">
          <div className="px-2 pb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="h-9 bg-secondary/50 pl-8 text-sm"
              />
            </div>
          </div>

          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Infrastructure
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <Link href={item.href}>
                      <SidebarMenuButton
                        isActive={pathname === item.href}
                        className="justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="size-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
                            {item.badge}
                          </span>
                        )}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              System
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {systemItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <Link href={item.href}>
                      <SidebarMenuButton className="justify-between">
                        <div className="flex items-center gap-3">
                          <item.icon className="size-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="rounded-md bg-destructive/15 px-1.5 py-0.5 text-xs font-medium text-destructive">
                            {item.badge}
                          </span>
                        )}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-sidebar-accent">
                <Avatar className="size-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium">John Doe</p>
                  <p className="truncate text-xs text-muted-foreground">
                    Admin
                  </p>
                </div>
                <ChevronDown className="size-4 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Team Settings</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  localStorage.removeItem("loggedIn");
                  router.push("/login");
                }}
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SidebarTrigger />
          <div className="flex-1" />
          {children}
        </header>
        <DashboardContent />
      </SidebarInset>
    </SidebarProvider>
  );
}

function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col gap-6 overflow-auto p-6">
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
    </div>
  );
}
