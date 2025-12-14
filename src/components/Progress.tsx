export default function Progress({
  current,
  total,
}: {
  current: number
  total: number
}) {
  return (
    <div className="flex justify-center gap-6 mt-10">
      {Array.from({ length: total }).map((_, index) => {
        let fillWidth = "0%"

        if (index < current) {
          // Completed questions → fully dark
          fillWidth = "100%"
        } else if (index === current) {
          // Current question → 75% dark
          fillWidth = "75%"
        }

        return (
          <div
            key={index}
            className="w-28 h-1 bg-slate-200 rounded overflow-hidden"
          >
            {fillWidth !== "0%" && (
              <div
                className="h-full bg-slate-800 rounded transition-all duration-300"
                style={{ width: fillWidth }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
