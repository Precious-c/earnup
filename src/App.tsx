import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { BottomNavbar } from "./components/BottomNavbar";
import Wallet from "@/pages/Wallet/WalletPage";
import Earn from "@/pages/Earn/EarnPage";
import Friends from "@/pages/Friends/FriendsPage";
import Profile from "@/pages/Profile/ProfilePage";
import PlansPage from "./pages/Plans/PlansPage";

function App() {
  return (
    <Router>
      <div className="App min-h-screen pb-16 w-full px-4">
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/frens" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/plans/:planId" element={<PlansPage />} />
          <Route path="/" element={<Navigate to="/wallet" replace />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
