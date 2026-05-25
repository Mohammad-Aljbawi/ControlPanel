export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* هنا يتم رندرة محتوى صفحة الدشبرد والشارتات تلقائياً */}
      {children}
    </div>
  )
}