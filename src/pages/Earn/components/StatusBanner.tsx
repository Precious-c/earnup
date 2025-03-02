import seal from "@/assets/images/seal.Ct9Xs28w.gif";

interface StatusBannerProps {
  days: number;
  message: string;
}

const StatusBanner = ({ days, message }: StatusBannerProps) => {
  return (
    <div
      className="rounded-full py-3 flex items-center justify-between
     mb-8 gap-2 max-w-96"
    >
      <div className="flex items-center">
        <div className="w-16 h-16 mr-2 min-w-15 flex items-center">
          <img src={seal} alt="" className="max-h-full max-w-full object-contain" />
        </div>

        <div className="rounded-full bg-[#2E2E2E] py-2 px-4 relative z-10 min-h-[18px]">
          {" "}
          {/*after:content-[ ] after:absolute after:bottom-0 after:left-0 after:z-[-1] after:w-0 after:h-0 after:border-r-[39.1px] after:border-r-transparent after:border-b-[15px]  after:border-b-[#2E2E2E] after:border-l-[15.8px] border-l-transparent"> */}
          <p className="text-white ml-2">
            <span className="text-[#22c45c] font-medium">{days} days </span>
            {message}
          </p>
        </div>
      </div>
      <button className="p-4 bg-stroke rounded-full">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-white"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default StatusBanner;
