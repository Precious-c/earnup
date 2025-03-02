import koloMiner from "@/assets/images/kolominer.png";

const KoloMiner = () => {
  return (
    <div className="bg-[#4CD964] rounded-2xl p-6 mb-8 relative overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
      <div className="flex items-center justify-between mb-4">
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <div className="flex items-center">
          <img src={koloMiner} alt="" />
        </div>
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <button className="w-24 bg-white/20 hover:bg-white/30 text-white font-medium py-3 rounded-xl transition-colors">
        Start
      </button>
    </div>
  );
};

export default KoloMiner;
