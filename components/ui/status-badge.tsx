type StatusBadgeProps = {
  status: "online" | "offline"
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={
        status === "online"
          ? "text-green-500"
          : "text-red-500"
      }
    >
      {status}
    </span>
  )
}

<StatusBadge status="online" />