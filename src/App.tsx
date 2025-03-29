import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/Tooltip";
import ConnectWallet from "./pages/auth/ConnectWallet";
import SignupForm from "./pages/auth/SignupForm";
import NotFound from "./pages/error/NotFound";
import Search from "./pages/(users)/Search";
import Desktop4 from "./pages/landpage/LandingPage";
import NFT from "./pages/landpage/NFT";
import Events from "./pages/(users)/Dashboard";
import SeeMoreEvents from "./pages/(users)/SeeMoreEvents";
import EventPage from "./pages/(users)/EventPage";
import ImagePage from "./pages/(users)/ImagePage";
import ImageUploadform from "./pages/(users)/ImageUploadform";
<<<<<<< HEAD
import ZkLoginButton from "./pages/auth/zkLoginButton";
import ZkLoginCallback from "./pages/auth/zkLoginCallback";
=======
import AIPoweredSearch from "./pages/(users)/AIPoweredSearch";
>>>>>>> 34e41181bd6e16cd8109120bd5a44764c6fc8b95

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
<<<<<<< HEAD

          <Route path="/auth/callback" element={<ZkLoginCallback />} />
          <Route path="/login" element={<ZkLoginButton />} />

=======
>>>>>>> 34e41181bd6e16cd8109120bd5a44764c6fc8b95
          <Route path="/get-started" element={<SignupForm />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Events />} />
          <Route path="/create-event" element={<Events />} />
          <Route path="/my-nft" element={<Events />} />
          <Route path="/favourite" element={<Events />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ai-search" element={<AIPoweredSearch />} />
          <Route path={`/view-category-event`} element={<SeeMoreEvents />} />
          <Route path="/view-event" element={<EventPage />} />
          <Route path="/images" element={<ImagePage />} />
          <Route path="/upload" element={<ImageUploadform />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
