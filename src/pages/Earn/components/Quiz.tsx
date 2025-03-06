"use client"

import { useState } from "react"
import type { QuizQuestion } from "@/data"
import { ArrowLeft, ArrowRight } from "lucide-react"
import yellowKolo from "@/assets/images//kolo-yellow.png"

interface QuizProps {
  questions: QuizQuestion[]
  onComplete?: (score: number) => void
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<number, "YES" | "NO" | null>>({})
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = questions[currentIndex]
  const totalQuestions = questions.length

  const handleAnswer = (answer: "YES" | "NO") => {
    const newAnswers = { ...userAnswers, [currentQuestion.id]: answer }
    setUserAnswers(newAnswers)
    setShowExplanation(true)

    // Auto-advance after a delay
    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex(currentIndex + 1)
        setShowExplanation(false)
      } else {
        // Quiz completed
        const score = Object.entries(newAnswers).reduce((acc, [id, answer]) => {
          const question = questions.find((q) => q.id === Number(id))
          return question?.correctAnswer === answer ? acc + 1 : acc
        }, 0)

        if (onComplete) {
          onComplete(score)
        }
      }
    }, 2000)
  }

  const isAnswered = userAnswers[currentQuestion.id] !== undefined
  const isCorrect = userAnswers[currentQuestion.id] === currentQuestion.correctAnswer

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <img src={yellowKolo} alt="" className="mr-2" />
        <h2 className="text-white text-xl mt-[2px]">Quiz</h2>
      </div>

      <div className="bg-[#1C1C1E] rounded-xl p-6">
        <div className="mb-5 flex justify-between w-[100%] gap-1 items-center">
          <div className="flex items-center justify-between w-[15%] ">
            <span className="text-[#4CD964]">
              {currentIndex + 1} of {totalQuestions}
            </span>
          </div>
          <div className="h-[6px] bg-[#2C2C2E] rounded-full w-[85%]">
            <div
              className="h-full bg-[#4CD964] rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <p className="text-white text-xl mb-6">{currentQuestion.question}</p>

        {showExplanation ? (
          <div className={`p-4 rounded-xl mb-6 ${isCorrect ? "bg-[#4CD964]/20" : "bg-[#FF3B30]/20"}`}>
            <p className={`text-sm ${isCorrect ? "text-[#4CD964]" : "text-[#FF3B30]"}`}>
              {isCorrect ? "Correct!" : "Incorrect!"} {currentQuestion.explanation}
            </p>
          </div>
        ) : (
          <div className="text-gray-400 text-center mb-8">Swipe or press to answer</div>
        )}

        <div className="flex justify-between gap-4">
          <button
            className={`w-full py-3  font-semibold rounded-xl flex items-center justify-center transition-colors
              ${
                isAnswered && userAnswers[currentQuestion.id] === "NO"
                  ? isCorrect
                    ? "bg-[#4CD964]/20 text-[#4CD964]"
                    : "bg-[#FF3B30]/20 text-[#FF3B30]"
                  : "bg-[#2C2C2E] text-[#FF3B30]"
              }`}
            onClick={() => !isAnswered && handleAnswer("NO")}
            disabled={isAnswered}
          >
            <ArrowLeft strokeWidth={3} className="mr-1 h-4 w-4 mb-1 " />
            NO
          </button>
          <button
            className={`w-full py-3 font-semibold rounded-xl flex items-center justify-center transition-colors
              ${
                isAnswered && userAnswers[currentQuestion.id] === "YES"
                  ? isCorrect
                    ? "bg-[#4CD964]/20 text-[#4CD964]"
                    : "bg-[#FF3B30]/20 text-[#FF3B30]"
                  : "bg-[#2C2C2E] text-[#4CD964]"
              }`}
            onClick={() => !isAnswered && handleAnswer("YES")}
            disabled={isAnswered}
          >
            YES
            <ArrowRight  strokeWidth={3} className="ml-1 h-4 w-4 mb-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

