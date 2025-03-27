
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Index";
import { TooltipProvider } from "./components/ui/Tooltip";
import ConnectWallet from "./pages/auth/ConnectWallet";
import SignupForm from "./pages/auth/SignupForm";
import NotFound from "./pages/error/NotFound";
import Search from "./pages/(users)/Search";
import Events from "./pages/(users)/Dashboard";
import SeeMoreEvents from "./pages/(users)/SeeMoreEvents";
import EventPage from "./pages/(users)/EventPage";
import ImagePage from "./pages/(users)/ImagePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />

          <Route path="/get-started" element={<SignupForm />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Events />} />
          <Route path="/create-event" element={<Events />} />
          <Route path="/my-nft" element={<Events />} />
          <Route path="/favourite" element={<Events />} />

          <Route path="/search" element={<Search />} />
          <Route path={`/view-category-event`} element={<SeeMoreEvents />} />
          <Route path="/view-event" element={<EventPage />} />
          <Route path="/images" element={<ImagePage />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
