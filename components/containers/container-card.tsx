import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import  { toast} from "sonner"

interface ContainerCardProps {
  id: string
  name: string
  image: string
  state: string
  status: string
  onRefresh?: () => void
}

export default function ContainerCard({
  id,
  name,
  image,
  state,
  status,
  onRefresh,
}: ContainerCardProps) {
  const [loading, setLoading] = useState(false)

  async function handleRestart() {
    setLoading(true)

    try {
      const res = await fetch("/api/containers/restart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })

      const data = await res.json()

      if (onRefresh) {
        await onRefresh()
      }
      // console.log(data)
      toast.success("Container restarted successfully")
    } catch (error) {
      console.error(error)
      toast.error("Failed to restart container")
    } finally {
      setLoading(false)
    }
  }
  async function handleStop() {
    setLoading(true)

    try {
      const res = await fetch("/api/containers/stop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })

      const data = await res.json()

      if (onRefresh) {
        await onRefresh()
      }
      // console.log(data)
      toast.success("Container stopped successfully")
    } catch (error) {
      console.error(error)
      toast.error("Failed to stop container")
    } finally {
      setLoading(false)
    }
  }
  async function handleStart() {
    setLoading(true)

    try {
      const res = await fetch("/api/containers/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })

      const data = await res.json()

      if (onRefresh) {
        await onRefresh()
      }
      // console.log(data)
      toast.success("Container started successfully")
    } catch (error) {
      console.error(error)
      toast.error("Failed to start container")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">
            {name}
          </h3>

          <p className="text-sm text-muted-foreground break-all">
            {image}
          </p>

          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${
                state === "running"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            />

            <span className="text-sm font-medium">
              {state}
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            {status}
          </p>
        </div>
      </CardContent>
<div className="flex gap-2 mt-4">

  {state === "running" && (
    <>
      <Button
        size="sm"
        onClick={handleRestart}
      >
        Restart
      </Button>

      <Button
        size="sm"
        variant="destructive"
        onClick={handleStop}
      >
        Stop
      </Button>
    </>
  )}

  {state !== "running" && (
    <Button
      size="sm"
      onClick={handleStart}
    >
      Start
    </Button>
  )}

</div>
    </Card>
  )

}