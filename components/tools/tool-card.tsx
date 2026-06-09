import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


type ToolCardProps = {
    title: string
  description: string
    url: string
}

export default function ToolCard({
  title,
  description,
  url,


}: ToolCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
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