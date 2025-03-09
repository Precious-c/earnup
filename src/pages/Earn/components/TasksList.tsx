import koloIcon from "@/assets/images/kolocoin.png";
import TaskCard from "./TaskCard";
import { ChevronRight } from "lucide-react";
import {tasksData } from "@/data";

export const TasksList = () => {
  return (
    <div className="w-full flex flex-col max-w-[556px] mb-3">
      <div className="flex mb-3 justify-between w-full">
        <div className="flex">
          <img src={koloIcon} alt="" className="w-6 h-6 mr-2" />
          <h3 className="mt-[2px]">Quests</h3>
        </div>
        <div className="bg-stroke w-11 h-5 px-[6px] py-1  flex items-center justify-between rounded-full cursor-pointer">
          <p className="text-xs p-0 mt-[2px]">All</p>
          <ChevronRight strokeWidth={2.5} size={18} />
        </div>
      </div>

      <div className="max-w-full flex flex-col gap-3 overflow-x-scroll overflow-y-hidden">
        {tasksData.map((task, index) => {
          if(task.status === "pending" || task.status === "failed")
          return (
            <TaskCard key={task.id} index={index} icon={task.icon} title={task.title} points={task.totalPoints} id={task.id} status={task.status}/>
          );
        })}
      </div>
    </div>
  );
};
