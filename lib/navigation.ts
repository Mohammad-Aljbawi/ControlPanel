import {
  LayoutDashboard,
  Server,
  Database,
  HardDrive,
  Network,
  Activity,
  Settings,
  Wrench,
  BookOpen,
  DatabaseBackupIcon,
} from "lucide-react";

export const navItems = [
  { icon: LayoutDashboard, label: "Overview", description: "Infrastructure overview", href: "/dashboard" },
  { icon: Server, label: "Services", description: "Manage your services", href: "/services" },
  { icon: HardDrive, label: "Storage", description: "Manage your Storages", href: "/storage" },
  { icon: Network, label: "Network", description: "Manage your network", href: "/network" },
  { icon: Activity, label: "Monitoring", description: "Monitor your infrastructure", href: "https://grafana.aljbawi.net", target: "_blank" },
  { icon: Wrench, label: "Tools", description: "Use various tools", href: "/tools" },
  { icon: BookOpen, label: "Wiki", description: "Access the knowledge base", href: "https://bookstack.aljbawi.net", target: "_blank" },
  { icon: Settings, label: "Settings", description: "Manage your settings", href: "/settings" },
];