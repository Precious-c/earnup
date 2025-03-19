import { useState } from "react";
import CoinCatcher from "./components/CoinCatcher";
import { Communities } from "./components/Communities";
// import Miner from "./components/Miner";
import Preferences from "./components/Preferences";
import { TasksList } from "./components/TasksList";
import { Quiz } from "./components/Quiz";
import StatusBanner from "./components/StatusBanner";
import { quizQuestions } from "@/data";
import CreateTaskCard from "./components/CreateTaskCard";

const EarnPage = () => {
  const [quizScore, setQuizScore] = useState(0);

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    console.log(
      `Quiz completed with score: ${quizScore}/${quizQuestions.length}`
    );
  };
  return (
    <div className="min-h-screen bg-main">
      <main className=" pt-4 pb-20 flex flex-col justify-center items-center gap-3">
        <StatusBanner days={238} message="I've been waiting for my Muna card" />
        <CoinCatcher balance={10250} />
        {/* <Miner /> */}

        <Communities />
        <CreateTaskCard />
        {/* <QuestList quests={quests} /> */}
        <TasksList />
        <Quiz questions={quizQuestions} onComplete={handleQuizComplete} />
        <Preferences />
      </main>
    </div>
  );
};

export default EarnPage;
