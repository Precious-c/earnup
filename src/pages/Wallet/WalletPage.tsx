import { Balance } from "./components/Balance";
import { TransactionSummary } from "./components/TransactionSummary";
import { ArrowDownLeft, ArrowUpRight, Clock, Settings2 } from "lucide-react";
import PlansWidget from "./components/PlansWidget";

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
      <div className="flex items-center justify-between px-2 py-3">
        <div className="flex items-center">
          <h1 className="text-xl font-medium text-white">Wallet</h1>
        </div>
        <button className="p-2 text-white hover:bg-[#1C1C1E] rounded-full transition-colors">
          <Settings2 className="w-6 h-6" />
        </button>
      </div>


      <main className="px-2 pt-2 pb-20">
        {/* Main Balance */}
        <Balance amount={0.0} />

        {/* Quick Actions */}
        {/* <QuickActions /> */}

        {/* Transaction Summary */}
        <TransactionSummary metrics={metrics} />

        <PlansWidget/>
       
        {/* Recent Activity */}
        <div className="bg-[#1C1C1E] rounded-xl p-6">
          <h3 className="text-white mb-4">Recent Activity</h3>
          <div className="text-center text-gray-400 py-8">No transactions yet</div>
        </div>
      </main>

    </div>
  );
};

export default WalletPage;
