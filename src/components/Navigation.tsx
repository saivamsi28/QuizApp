export default function Navigation({
  index,
  total,
  onPrev,
  onNext,
  onSubmit,
}: {
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
  onSubmit: () => void
}) {
  return (
    <div className="flex justify-end gap-4 mt-10">
      {index > 0 && (
        <button
          onClick={onPrev}
          className="h-10 w-10 rounded-md bg-sky-200 hover:bg-sky-300 transition text-xl"
        >
          ←
        </button>
      )}

      {index < total - 1 ? (
        <button
          onClick={onNext}
          className="h-10 w-10 rounded-md bg-sky-200 hover:bg-sky-300 transition text-xl"
        >
          →
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="px-8 py-2 rounded-md bg-sky-300 hover:bg-sky-400 transition text-lg"
        >
          Submit
        </button>
      )}
    </div>
  )
}
