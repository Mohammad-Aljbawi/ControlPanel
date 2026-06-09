import { tools } from "@/lib/data/tool"
import ToolCard from "@/components/tools/tool-card"

export default function ToolsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard
          key={tool.title}
          {...tool}
        />
      ))}
    </div>
  )
}