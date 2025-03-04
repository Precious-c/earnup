import koloIcon from "@/assets/images/kolocoin.png";
import QuestCard from "./QuestCard";
import { ChevronRight } from "lucide-react";
import { questsData } from "@/data";

export const QuestsList = () => {
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
        {questsData.map((quest, index) => {
          return (
            <QuestCard index={index} icon={quest.icon} title={quest.title} points={quest.points} />
          );
        })}
      </div>
    </div>
  );
};
