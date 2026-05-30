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
} from "lucide-react";

export const navItems = [
  { icon: LayoutDashboard, label: "Overview", description: "Infrastructure overview", href: "/dashboard" },
  { icon: Server, label: "Servers", description: "Manage your servers", href: "/servers" },
  { icon: Database, label: "Databases", description: "Manage your databases", href: "/databases" },
  { icon: HardDrive, label: "Storage", description: "Manage your storage", href: "/storage" },
  { icon: Network, label: "Network", description: "Manage your network", href: "/network" },
  { icon: Activity, label: "Monitoring", description: "Monitor your infrastructure", href: "/monitoring" },
  { icon: Settings, label: "Settings", description: "Manage your settings", href: "/settings" },
  { icon: BookOpen, label: "Wiki", description: "Access the knowledge base", href: "/wiki" },
  { icon: Wrench, label: "Tools", description: "Use various tools", href: "/tools" },
];