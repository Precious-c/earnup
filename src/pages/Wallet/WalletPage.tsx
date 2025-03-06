import OptionCard from "./components/OptionCard";
import crypoCardsImg from "@/assets/images/card-type-1f39398b.png";
import cryptoWalletImg from "@/assets/images/wallet-bg-7be46582.png";
import tonWalletImg from "@/assets/images/web3-type-6249bc51.png";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Currency from "@/utils/Currency";
import { Balance } from "./components/Balance";
import { QuickActions } from "./components/QuickActions";
import { TransactionSummary } from "./components/TransactionSummary";
import { ArrowDownLeft, ArrowUpRight, Clock } from "lucide-react";
import { MembershipPlans } from "./components/MembershipPlans";

const WalletPage = () => {
  const metrics = [
    {
      label: "Total Earnings",
      value: 0.0,
      icon: <ArrowDownLeft className="w-4 h-4" />,
    },
    {
      label: "Pending Balance",
      value: 0.0,
      icon: <Clock className="w-4 h-4" />,
    },
    {
      label: "Amount Spent",
      value: 0.0,
      icon: <ArrowUpRight className="w-4 h-4" />,
    },
  ]
  return (
    <div className="py-3 pb-20  ">
      <div className="text-center mb-5 mt-8">
        <h1 className="text-2xl font-semibold text-white ">Welcome to Muna Wallet</h1>
        {/* <p className="text-secondary text-sm font-normal break-words">Pick your option</p> */}
      </div>

      <main className="px-2 pt-2 pb-20">
        {/* Main Balance */}
        <Balance amount={0.0} />

        {/* Quick Actions */}
        {/* <QuickActions /> */}

        {/* Transaction Summary */}
        <TransactionSummary metrics={metrics} />

        {/* Membership plans */}
        <MembershipPlans/>

        {/* Recent Activity */}
        <div className="bg-[#1C1C1E] rounded-xl p-6">
          <h3 className="text-white mb-4">Recent Activity</h3>
          <div className="text-center text-gray-400 py-8">No transactions yet</div>
        </div>
      </main>

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
