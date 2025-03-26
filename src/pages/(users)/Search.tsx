import { FilterIcon } from "../../assets/icons";
import MainHeaderLayout from "../../components/MainHeaderLayout";
import { EventCard } from "../../components/ui/EventCard";
import SideBar from "../../components/ui/SideBar";
import { categories, events } from "../../data";

const searchResults = categories;

const Search = () => {
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

        {/* Events Section */}
        {searchResults.map((searchEvents) => (
          <div key={searchEvents.title} className="mb-8">
            <div className="flex flex-row items-center justify-between">
              <h3 className="mb-4 text-2xl font-semibold text-left">{searchEvents.title}</h3>
              <a href="#" className="text-[#E37BFF]">See More</a>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {searchEvents.events.map((event: events, index: number) => (
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

export default Search