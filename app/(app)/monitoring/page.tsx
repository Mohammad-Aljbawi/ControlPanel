import { AlertsList } from "@/components/dashboard/alerts-list";
import ServersList from "@/components/dashboard/services-list";

export default function MonitoringPage() {
  return (
    <div>
      {" "}
      <div className="grid gap-4 lg:grid-cols-3">
      </div>
      <AlertsList />
    </div>
  );
}
