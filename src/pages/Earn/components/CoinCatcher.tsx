import koloCoin from "@/assets/images/kolocoin.png";
interface CoinCatcherProps {
  balance: number;
}
const CoinCatcher = ({ balance }: CoinCatcherProps) => {
  return (
    <div className="text-center mb-2">
      <h1 className="text-white text-4xl font-bold mb-4">{balance}</h1>
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="absolute inset-0 bg-[#4CD964] rounded-full opacity-20 animate-pulse"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img src={koloCoin} alt="Kolo coin" className="w-16 h-16" />
        </div>
      </div>
      <p className="text-secondary text-sm">Catch the coin</p>
    </div>
  );
};

export default CoinCatcher;
