
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/(users)/Dashboard";
import LandingPage from "./pages/Index";
import { TooltipProvider } from "./components/ui/Tooltip";
import ConnectWallet from "./pages/auth/ConnectWallet";
import SignupForm from "./pages/auth/SignupForm";
import NotFound from "./pages/error/NotFound";
import Search from "./pages/(users)/Search";
import Desktop4 from "./pages/landpage/LandingPage";
import NFT from "./pages/landpage/NFT";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Desktop4 />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />

          <Route path="/get-started" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
