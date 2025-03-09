import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
// import { TaskHeader } from "./components/TaskHeader"
import { TaskIcon } from "./components/TaskIcon"
import { SubTaskItem } from "./components/SubTaskItem"
import type { Task, SubTask } from "@/types"
import { getTaskById } from "@/data"
import { ArrowLeft } from "lucide-react"
import coinsPatternBg from "@/assets/images/bg-1727368588.png"
import KoloCoin from "@/assets/icons/KoloCoin"


const TaskDetailPage = () => {
  const navigate = useNavigate()
  const { taskId } = useParams<{ taskId: string }>()
  const [task, setTask] = useState<Task | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    setIsLoading(true)
    setTimeout(() => {
      setTask(getTaskById(taskId) || null)
      setIsLoading(false)
    }, 500)
  }, [taskId])

  const handleSubTaskOpen = (subTask: SubTask) => {
    if (subTask.link) {
      window.open(subTask.link, "_blank")
    }
  }

  const handleSubTaskCheck = async (subTask: SubTask) => {
    // Simulate verification
    const newSubTasks = task?.subTasks?.map((t) =>
      t.id === subTask.id ? { ...t, status: t.status === "completed" ? "pending" as "pending" | "completed" | "failed" : "completed" as "pending" | "completed" | "failed" } : t,
    )

    if (task && newSubTasks) {
      setTask({
        ...task,
        subTasks: newSubTasks,
        status: newSubTasks.every((t) => t.status === "completed") ? "completed" : "pending",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#4CD964]" />
      </div>
    )
  }

  if (!task) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Task not found</div>
  }

  return (
    <div className="min-h-screen text-white w-full flex flex-col ">
      <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors mt-2 relative z-20">
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      {/* Task Header */}
      <div className="relative pb-8 ">
        <div className="absolute w-[100%] -top-11 h-60 bg-no-repeat bg-center bg-cover" 
          style={{backgroundImage: `url(${coinsPatternBg })`}} />

          <div className="flex items-center justify-center"><TaskIcon icon={task.icon} size="lg" className="mt-8" /></div>

        <div className="relative top-20 flex flex-col items-center">
          <h1 className="text-2xl font-bold mt-4 mb-2">{task.title}</h1>
          {task.description && <p className="text-gray-400 text-center mb-4">{task.description}</p>}
          
          <div className="flex items-center  bg-stroke  px-2  rounded-full justify-center">
            <span className="font-medium mt-[5px]">{task.totalPoints}</span>
            <span className="w-[20px] ml-1"><KoloCoin/></span>
          </div>
        </div>
      </div>

      {/* Sub Tasks */}
      {task.type === "multi" && task.subTasks && (
        <div className="px-4">
          <div className="bg-[#1C1C1E] rounded-xl overflow-hidden">
            {task.subTasks.map((subTask) => (
              <SubTaskItem key={subTask.id} subTask={subTask} onOpen={handleSubTaskOpen} onCheck={handleSubTaskCheck} />
            ))}
          </div>
        </div>
      )}

      {/* Task Status */}
      {task.status !== "completed" && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#1C1C1E] border-t border-gray-800">
          <div className="flex items-center text-red-500">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            Task isn't complete
          </div>
        </div>
      )}

      {task.type === "single" && (
        <div className="flex justify-center items-center w-full fixed bottom-20 left-0 right-0">
        <button onClick={() => window.open(task.link, "_blank")} className="w-full mx-3 rounded-md self-center py-3 bg-white px-4  text-black">{task.title}</button>
        </div>
      )}
    </div>
  )
}


export default TaskDetailPage