import CoinCatcher from "./components/CoinCatcher";
import { Communities } from "./components/Communities";
import KoloMiner from "./components/KoloMiner";
import Preferences from "./components/Preferences";
import { QuestsList } from "./components/QuestsList";
import { Quiz } from "./components/Quiz";
import StatusBanner from "./components/StatusBanner";

const EarnPage = () => {
  return (
    <div className="min-h-screen bg-main">
      <main className=" pt-4 pb-20 flex flex-col justify-center items-center gap-3">
        <StatusBanner days={238} message="I've been waiting for my Kolo card" />
        <CoinCatcher balance={10250} />
        <KoloMiner />
        <Communities />
        {/* <QuestList quests={quests} /> */}
        <QuestsList />
        <Quiz />
        <Preferences />
      </main>
    </div>
  );
};

export default EarnPage;
