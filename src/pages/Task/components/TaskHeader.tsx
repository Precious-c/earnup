"use client"

import { ArrowLeft, MoreVertical, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface TaskHeaderProps {
  title?: string
  onClose?: () => void
}

export function TaskHeader({ title = "Kolo", onClose }: TaskHeaderProps) {
  const navigate = useNavigate()

  return (
    <div className="sticky top-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-lg font-medium text-white ml-2">{title}</h1>
        </div>
        <div className="flex items-center">
          <button className="p-2 hover:bg-[#1C1C1E] rounded-full transition-colors">
            <MoreVertical className="w-6 h-6 text-white" />
          </button>
          {onClose && (
            <button onClick={onClose} className="p-2 ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

