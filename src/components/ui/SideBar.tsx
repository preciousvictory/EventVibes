import { EditIcon } from "../../assets/icons"
import { SideBarList } from "../../constants"

const SideBar = () => {
    return (
        <aside className="relative w-1/4 h-[100vh] bg-[var(--secondary)]/80 py-20">
            <nav className="space-y-4  p-6">
                {SideBarList.map((item, index) => (
                    <div key={index} className="flex cursor-pointer items-center space-x-2 rounded-lg p-3 hover:bg-gray-700">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </nav>
            <div className="mt-auto flex items-center space-x-3 px-2 absolute bottom-8">
                <div className="h-10 w-10 rounded-full bg-gray-600"></div>
                <div>
                    <p className="text-sm font-semibold">Umar Faruq</p>
                    <p className="text-xs text-gray-400">0x1234...op7890qrst</p>
                </div>
                <EditIcon />
            </div>
        </aside>
    )
}

export default SideBar