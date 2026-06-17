import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"


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
  const [logsOpen, setLogsOpen] = useState(false)
  const [logs, setLogs] = useState("")

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

  async function handleLogs() {
    console.log("Logs clicked", id)

    const res = await fetch(
      "/api/containers/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    )
    // console.log("Logs clicked", id)
    const data = (await res.json()) as { logs: string }
    // console.log("LENGTH", data.length)
    // console.log("FIRST 100", data.logs?.substring(0, 100))
    setLogs(
      data.logs
        .split("\n")
        .map((line: string) => line.substring(1))
        .join("\n")
    )
    // console.log(data.logs)
    // console.log("Logs clicked", id)
    setTimeout(() => {
      setLogsOpen(true)
    }, 100)
    setLogsOpen(true)
  }

  async function handleCopyLogs() {
    try {
      await navigator.clipboard.writeText(logs)
      toast.success("Logs copied")
    } catch (e) {
      console.error(e)
      toast.error("Failed to copy logs")
    }
  }

  function handleDownloadLogs() {
    try {
      const blob = new Blob([logs], {
        type: "text/plain",
      })

      const url = URL.createObjectURL(blob)

      const a = document.createElement("a")
      a.href = url
      a.download = `${name}-logs.txt`
      a.click()

      URL.revokeObjectURL(url)
      toast.success("Logs downloaded")
    } catch (e) {
      console.error(e)
      toast.error("Failed to download logs")
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
              className={`h-2 w-2 rounded-full ${state === "running"
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
<div className="mt-4 flex justify-center gap-2">
  {state === "running" ? (
    <>
      <Button size="sm" onClick={handleRestart}>
        Restart
      </Button>

      <Button
        size="sm"
        variant="destructive"
        onClick={handleStop}
      >
        Stop
      </Button>

      <Button size="sm" onClick={handleLogs}>
        Logs
      </Button>
    </>
  ) : (
    <>
      <Button size="sm" onClick={handleStart}>
        Start
      </Button>

      <Button size="sm" onClick={handleLogs}>
        Logs
      </Button>
    </>
  )}
</div>

      <Dialog
        open={logsOpen}
        onOpenChange={setLogsOpen}
      >
        <DialogContent className="!max-w-[75vw] w-[75vw]">
          <DialogHeader>
            <DialogTitle>
              {name} Logs
            </DialogTitle>
          </DialogHeader>
          <div>
            Length: {logs.length}
          </div>
          <div className="overflow-x-auto">
            <pre className={"overflow-x-auto whitespace-pre-wrap break-all max-h-[500px] overflow-auto rounded-lg bg-black p-4 text-xs text-green-400 font-mono"}>
              {logs}
            </pre>
          </div>
          <div className="flex mt-4">
            <Button size="sm" onClick={handleDownloadLogs}>
              Download
            </Button>
            <div className="ml-auto">
    <Button size="sm" onClick={handleCopyLogs}>
      Copy
    </Button>
  </div>


          </div>
        </DialogContent>
      </Dialog>

    </Card>

  )

}