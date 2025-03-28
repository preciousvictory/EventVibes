import { useNavigate } from "react-router-dom";
import MainHeaderLayout from "../../components/MainHeaderLayout";
import { EventCard } from "../../components/ui/EventCard";
import SideBar from "../../components/ui/SideBar";
import { categories, EventView, trendingEvents } from "../../data";
import { cleanString } from "./SeeMoreEvents";
import Filter from "../../components/ui/Filter";

const Events = () => {
  const navigate = useNavigate();

  const handleClickCategory = (categoryName: string) => {
    const path = `/view-category-event?q=${cleanString(categoryName)}`; ; 
    navigate(path);
  }
  const handleClickEvent = (event: string) => {
    const path = `/view-event?q=${cleanString(event)}`; ; 
    navigate(path);
  }

  return (
    <div className="flex h-screen bg-[var(--secondary)]/80 text-white relative">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <MainHeaderLayout>
        <div className="flex items-center justify-end  space-x-2 ">
          <Filter />
        </div>

        {/* Trending Events Section */}
        <div className="mb-8">
          <div className="flex flex-row items-center justify-between">
            <h3 className="mb-4 text-2xl font-semibold text-left">Trending Events</h3>
            <button onClick={() => handleClickCategory('Trending Event')} className="text-[#E37BFF] cursor-pointer">See More</button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {trendingEvents.map((event: EventView, index: number) => (
              <div key={index} onClick={() => handleClickEvent(event.name)}>
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
              <button onClick={() => handleClickCategory(category.title)} className="text-[#E37BFF] cursor-pointer">See More</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {category.events.map((event: EventView, index: number) => (
                <div key={index} onClick={() => handleClickEvent(event.name)}>
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

export default Events