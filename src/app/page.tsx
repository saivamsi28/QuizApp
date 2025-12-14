'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { questions } from "../data/questions"
import Progress from "../components/Progress"
import Option from "../components/Option"
import Navigation from "../components/Navigation"
import RollingScore from "../components/RollingScore"

export default function Page() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)

  const currentQuestion = questions[index]

  const selectOption = (optionIndex: number) => {
    const updated = [...answers]
    updated[index] = optionIndex
    setAnswers(updated)
  }

  const score = answers.filter(
    (answer, i) => answer === questions[i].correct
  ).length

  /* ---------------- FINAL SCORE SCREEN ---------------- */
  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="text-5xl font-serif text-slate-700">
            Your Final Score
          </h2>

          <div className="mt-10">
            <RollingScore
              value={Math.round((score / questions.length) * 100)}
            />
          </div>
        </motion.div>
      </div>
    )
  }

  /* ---------------- QUESTION SLIDES ---------------- */
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-[1100px] rounded-[32px] bg-white/70 backdrop-blur-xl shadow-2xl p-16 relative">

        {/* Header */}
        <h1 className="text-center text-5xl font-serif text-slate-700">
          Test Your Knowledge
        </h1>
        <p className="text-center mt-3 text-slate-500">
          Answer all questions to see your results
        </p>

        {/* Progress */}
        <Progress current={index} total={questions.length} />

        {/* Question + Options */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Paw + Best of Luck (ONLY Question 1) */}
            {index === 0 && (
              <div className="absolute left-6 bottom-6 flex items-end gap-3">
                {/* Paw */}
                <motion.img
                  src="/paw.gif"
                  alt="Paw"
                  className="w-20 h-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                />

                {/* Speech Bubble */}
                <motion.img
                  src="/best-of-luck.webp"
                  alt="Best of Luck"
                  className="w-40 h-auto"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
              </div>
            )}

            {/* Question */}
            <div className="mt-12 rounded-xl bg-sky-100 px-8 py-5 text-lg text-center text-slate-700">
              {index + 1}. {currentQuestion.text}
            </div>

            {/* Options */}
            <div className="mt-10 space-y-5">
              {currentQuestion.options.map((option, i) => (
                <Option
                  key={i}
                  text={option}
                  selected={answers[index] === i}
                  onClick={() => selectOption(i)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <Navigation
          index={index}
          total={questions.length}
          onPrev={() => setIndex(index - 1)}
          onNext={() => setIndex(index + 1)}
          onSubmit={() => setSubmitted(true)}
        />
      </div>
    </div>
  )
}
