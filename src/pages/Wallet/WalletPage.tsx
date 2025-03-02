import OptionCard from "./components/OptionCard";
import crypoCardsImg from "@/assets/images/card-type-1f39398b.png";
import cryptoWalletImg from "@/assets/images/wallet-bg-7be46582.png";
import tonWalletImg from "@/assets/images/web3-type-6249bc51.png";

const WalletPage = () => {
  return (
    <div className="py-3 pb-20  ">
      <div className="text-center mb-5">
        <h1 className="text-2xl font-semibold text-white ">Welcome to Muna Wallet</h1>
        <p className="text-secondary text-sm font-normal break-words">Pick your option</p>
      </div>

      <div className="space-y-4">
        <OptionCard
          title="Crypto card"
          description="Pay anywhere with your beloved crypto asset"
          image={crypoCardsImg}
          comingSoon
        />

        <OptionCard
          title="Crypto wallet"
          description="Store, buy, sell, and send crypto on the go"
          image={cryptoWalletImg}
        />

        <OptionCard
          title="TON Wallet"
          description="Fast, secure, and fully yours on TON"
          image={tonWalletImg}
          comingSoon
        />
      </div>
    </div>
  );
};

export default WalletPage;
