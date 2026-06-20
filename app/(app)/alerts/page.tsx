import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function AlertsPage() {
  return (
    <div className="space-y-4">

      <Collapsible>
        <CollapsibleTrigger className="font-bold">
          Uptime
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div>Server restarted</div>
          <div>Uptime below 5 min</div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="font-bold">
          Containers
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div>BookStack stopped</div>
          <div>Grafana restarted</div>
        </CollapsibleContent>
      </Collapsible>

    </div>
  );
}