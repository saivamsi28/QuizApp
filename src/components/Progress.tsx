export default function Progress({
  current,
  total,
}: {
  current: number
  total: number
}) {
  return (
    <div className="flex justify-center gap-6 mt-10">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="w-28 h-1 bg-slate-200 rounded overflow-hidden"
        >
          {index === current && (
            <div className="h-full w-[75%] bg-slate-800 rounded" />
          )}
        </div>
      ))}
    </div>
  )
}
