import { FilterIcon } from "../../assets/icons";
import MainHeaderLayout from "../../components/MainHeaderLayout";
import { EventCard } from "../../components/ui/EventCard";
import SideBar from "../../components/ui/SideBar";
import { categories, events, trendingEvents } from "../../data";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[var(--secondary)]/80 text-white relative">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <MainHeaderLayout>
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
      </MainHeaderLayout>
    </div>
  );
}

export default Dashboard