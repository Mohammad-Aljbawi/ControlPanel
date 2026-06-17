import ContainerCard from "./container-card"

interface ContainerGridProps {
  containers: any[]
  onRefresh?: () => void
}

export default function ContainerGrid({
  containers,
  onRefresh,
}: ContainerGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {containers.map((container) => (
        <ContainerCard
        id={container.Id}
          key={container.Id}
          name={container.Names?.[0]?.replace("/", "")}
          image={container.Image}
          state={container.State}
          status={container.Status}
          onRefresh={onRefresh}
        />
      ))}
    </div>
  )
}