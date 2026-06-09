import { Card, CardContent, CardHeader, CardTitle, CardCategory } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


type ServiceCardProps = {
  name: string
  status: "online" | "offline"
  description: string
  port: number
  url: string
  lastCheck: string
  responseTime: string
  category: string
}

export default function ServiceCard({
  name,
  status,
  description,
  port,
  url,
  lastCheck,
  responseTime,
  category,

  
}: ServiceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <CardCategory>{category}</CardCategory>


          <Badge
            variant={status === "online" ? "default" : "destructive"}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        <div className="space-y-1 text-sm">
          <p>Port: {port}</p>
          <p className="truncate">{url}</p>
        </div>


        <div className="space-y-1 text-sm">
  <p>Port: {port}</p>
  <p>Last Check: {lastCheck}</p>
  <p>Response Time: {responseTime}</p>
  <p className="truncate">{url}</p>
</div>
        <Button asChild className="w-full">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Service
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}