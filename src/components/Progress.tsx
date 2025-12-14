export default function Progress() {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md h-1 bg-slate-200 rounded overflow-hidden">
        {/* Filled underline – fixed at 75% */}
        <div className="h-full w-[75%] bg-slate-800 rounded" />
      </div>
    </div>
  )
}
