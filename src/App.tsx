import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { BottomNavbar } from "./components/BottomNavbar";
import Wallet from "@/pages/Wallet/WalletPage";
import Earn from "@/pages/Earn/EarnPage";
import Friends from "@/pages/Friends/FriendsPage";
import Profile from "@/pages/Profile/ProfilePage";
import PlansPage from "./pages/Plans/PlansPage";
import TaskDetailPage from "./pages/Task/TaskDetailPage";
import { TopUpPage } from "./pages/TopUp/TopUpPage";
import { WithdrawPage } from "./pages/Withdraw/WithdrawPage";
function App() {
  return (
    <Router>
      <div className="App min-h-screen pb-16 w-full px-4">
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/frens" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/plans/" element={<PlansPage />} />
          <Route path="/tasks/:taskId" element={<TaskDetailPage />} />
          <Route path="/top-up" element={<TopUpPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} /> 
          <Route path="/" element={<Navigate to="/wallet" replace />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
