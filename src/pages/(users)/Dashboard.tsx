import { FilterIcon, SearchIcon, UploadIcon } from "../../assets/icons";
import { Logo } from "../../assets/Logo";
import MainLayout from "../../components/MainLayout";
import AnimatedButton from "../../components/ui/Button";
import { EventCard } from "../../components/ui/EventCard";
import SideBar from "../../components/ui/SideBar";
import { categories, events, trendingEvents } from "../../data";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[var(--secondary)]/80 text-white relative">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <MainLayout>
        {/* Header */}
        <div className="mb-6 flex flex-row items-center justify-between">
          <div className="flex flex-row bg-[var(--gray)] py-2 px-4 w-fit text-center  gap-1 ">
            <Logo /> <span className="text-black">Event Vibe</span>
          </div>
          <div className="flex items-center justify-center space-x-4 flex-row">
            <div className="w-full rounded-lg bg-[var(--inputColor)] flex flex-row gap-2 items-center justify-start px-2 text-left">
              <SearchIcon />

              <input
                type="text"
                placeholder="Search events"
                className=" py-2 text-white outline-none"
              />
            </div>

            <div>
              <AnimatedButton  icon={<UploadIcon />}>
                <span>Upload</span>
              </AnimatedButton>
            </div>
          </div>
        </div>

        <div className="h-0.5 w-full bg-[var(--gray)]/30 mb-2"></div>

        <div className="flex items-center justify-end  space-x-2 ">
          <div className="flex flex-row items-center justify-center gap-1 rounded-lg p-2 bg-[var(--inputColor)] cursor-pointer">
            <FilterIcon />
            <span>Filter</span>
          </div>
        </div>

        {/* Trending Events Section */}
        <div className="mb-8">
          <div className="flex flex-row items-center justify-between">
            <h3 className="mb-4 text-2xl font-semibold text-left">Trending Events</h3>
            <a href="#" className="text-[#E37BFF]">See More</a>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {trendingEvents.map((event: events, index: number) => (
              <div key={index}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        {categories.map((category) => (
          <div key={category.title} className="mb-8">
            <div className="flex flex-row items-center justify-between">
              <h3 className="mb-4 text-2xl font-semibold text-left">{category.title}</h3>
              <a href="#" className="text-[#E37BFF]">See More</a>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {category.events.map((event: events, index: number) => (
                <div key={index}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </MainLayout>
    </div>
  );
}

export default Dashboard