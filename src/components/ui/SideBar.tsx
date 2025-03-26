import { EditIcon, ProfileIcon } from "../../assets/icons"
import { SideBarList } from "../../constants"

const SideBar = () => {
    return (
        <aside className="fixed w-[20%] h-full bg-[var(--secondary)]/80 py-20 z-10">
            <nav className="space-y-4  p-6">
                {SideBarList.map((item, index) => (
                    <div key={index} className="flex cursor-pointer items-center space-x-2 rounded-lg p-3 hover:bg-[var(--primary)]/60">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </div>
                ))}
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