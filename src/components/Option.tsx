import { motion } from "framer-motion"

export default function Option({
  text,
  selected,
  onClick,
}: {
  text: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        w-full rounded-xl border py-5 text-lg transition-all
        ${
          selected
            ? "bg-sky-200 border-sky-400"
            : "bg-gradient-to-r from-sky-100 to-sky-50 border-sky-200 hover:from-sky-200 hover:to-sky-100"
        }
      `}
    >
      {text}
    </motion.button>
  )
}
