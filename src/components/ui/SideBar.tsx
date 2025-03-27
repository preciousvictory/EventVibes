import { useNavigate } from "react-router-dom";
import { EditIcon, ProfileIcon } from "../../assets/icons"
import { SideBarList } from "../../constants"
import { useState } from "react";

const SideBar = () => {
    const navigate = useNavigate();
    const [selectedNav, setSelectedNav] = useState(SideBarList[0].name);

    const handleNavClick = (navItem: string) => {
        setSelectedNav(navItem);
        const path = navItem.toLowerCase().replace(/\s+/g, '-'); 
        navigate(`/${path}`);
    };

    return (
        <aside className="fixed w-[20%] h-full bg-[var(--secondary)]/80 py-20 z-10">
            <nav className="space-y-4  p-6">
                {SideBarList.map((nav, index) => {
                    const Icon = nav.icon; // Assign the icon component
                    return (
                        <div key={index}
                            className={`flex flex-row gap-2 p-3 rounded-lg mb-2 cursor-pointer transition-colors 
                            ${selectedNav === nav.name ? 'bg-[var(--inputColor)]' : ''} hover:bg-[var(--inputColor)]`}
                            onClick={() => handleNavClick(nav.name)}
                        >
                            <span>
                                <Icon color={selectedNav === nav.name ? "var(--navItemColorHover)" : "var(--navItemColor)"} />
                            </span>
                            <span className={` ${selectedNav === nav.name ? 'text-[var(--navItemColorHover)]' : 'text-[var(--navItemColor)]'}`}>
                                {nav.name}
                            </span>
                        </div>
                    );
                })}
            </nav>
            <div className="flex justify-between w-full items-center space-x-3 absolute bottom-8 px-6">
                <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-[var(--gray)] flex items-center justify-center">
                        <ProfileIcon />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Umar Faruq</p>
                        <p className="text-xs text-gray-400">0x1234...op7890qrst</p>
                    </div>
                </div>
                <EditIcon />
            </div>
        </aside>
    )
}

export default SideBar