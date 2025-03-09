"use client"

import { Check } from "lucide-react"
import type { SubTask } from "@/types"

interface SubTaskItemProps {
  subTask: SubTask
  onOpen?: (task: SubTask) => void
  onCheck?: (task: SubTask) => void
}

export function SubTaskItem({ subTask, onOpen, onCheck }: SubTaskItemProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-[#1C1C1E] last:border-0">
      <div className="flex items-center">
        <div className="mr-3">
          <div className="text-white">{subTask.title}</div>
          <div className="text-[#4CD964] text-sm flex items-center">
            {subTask.points}
            <span className="ml-1">○</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onOpen?.(subTask)}
          className="px-4 py-1.5 bg-[#2C2C2E] rounded-full text-sm text-white hover:bg-[#3C3C3E] transition-colors"
        >
          Open
        </button>
        <button
          onClick={() => onCheck?.(subTask)}
          className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
            subTask.status === "completed" ? "bg-[#4CD964] text-black" : "bg-[#2C2C2E] text-white hover:bg-[#3C3C3E]"
          }`}
        >
          {subTask.status === "completed" ? <Check className="w-4 h-4" /> : "Check"}
        </button>
      </div>
    </div>
  )
}

