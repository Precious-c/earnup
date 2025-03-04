import koloIcon from "@/assets/images/kolocoin.png";

export const Quiz = () => {
  return (
    <div className="w-full flex flex-col max-w-[556px] mb-5">
      <div className="flex mb-3 justify-between w-full">
        <div className="flex">
          <img src={koloIcon} alt="" className="w-6 h-6 mr-2" />
          <h3 className="mt-[2px]">Quiz</h3>
        </div>
      </div>

      <div className="bg-card1 rounded-xl p-4 py-5">
        <div className="flex mb-4">
          <p className="text-accent-green font-semibold text-[12px]">1 of 7</p>
          <div></div>
        </div>

        <div className="mb-5">
          <p className="text-lg font-[600] font-poppins">
            Isn't a 'crypto whale' an individual or entity that holds a significant amount of a
            particular cryptocurrence, yeah?
          </p>
        </div>

        <div>
          <img src="" alt="" />
          <p className="mb-5 text-center ">Swipe or press to answer</p>
          <div className="flex justify-center gap-2">
            <div className="bg-stroke-secondary p-5 w-24 rounded-full flex items-center justify-center text-red-600 font-semibold text-xl ">
              NO
            </div>
            <div className="bg-stroke-secondary p-5 w-24 rounded-full flex items-center justify-center text-accent-green font-semibold text-xl ">
              YES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
