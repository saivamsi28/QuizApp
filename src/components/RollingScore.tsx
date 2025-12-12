'use client'

import { motion, animate } from "framer-motion"
import { useEffect, useState } from "react"

export default function RollingScore({ value }: { value: number }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [value])

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-7xl font-bold text-slate-800"
    >
      {display}%
    </motion.div>
  )
}
