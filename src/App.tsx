import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BottomNavbar } from "./components/BottomNavbar";
import Wallet from "@/pages/Wallet/WalletPage";
import Earn from "@/pages/Earn/EarnPage";

// const Wallet = () => <div>Wallet Page</div>;
// const Earn = () => <div>Earn Page</div>;
const Frens = () => <div>Frens Page</div>;
const Profile = () => <div>Profile Page</div>;

function App() {
  return (
    <Router>
      <div className="App min-h-screen pb-16 w-full px-4">
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/frens" element={<Frens />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
