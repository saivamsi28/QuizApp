export default function Progress({
  current,
  total,
}: {
  current: number
  total: number
}) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 w-24 rounded transition-all ${
            i <= current ? "bg-slate-800" : "bg-slate-200"
          }`}
        />
      ))}
    </div>
  )
}
