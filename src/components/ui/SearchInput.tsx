import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../assets/icons"
import { useState } from "react";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    const classn = `flex flex-col items-center justify-center gap-3 relative transition-all text-center text-white bg-[#737373] rounded-lg`
    return (
        <div
            className="relative p-[1px] rounded-lg bg-radial from-[#D9D9D9] to-[#737373]/20 group w-fit transition-all via-[#73737369] via-90%"
        >
            <div className={classn}>
                <form onSubmit={handleSearch} className="w-full rounded-lg bg-[var(--secondary)]/60 flex flex-row gap-2 items-center justify-start px-2 text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <SearchIcon />

                    <input
                        type="text"
                        placeholder={placeholder}
                        className=" py-2 text-white outline-none focus:outline-none focus:ring-0"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default SearchInput