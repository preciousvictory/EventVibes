import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../assets/icons"
import { useState } from "react";

const SearchInput = ({placeholder}: {placeholder: string}) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    };
    
    return (
        <form onSubmit={handleSearch} className="w-full rounded-lg bg-[var(--inputColor)] flex flex-row gap-2 items-center justify-start px-2 text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
            <SearchIcon />

            <input
                type="text"
                placeholder={placeholder}
                className=" py-2 text-white outline-none focus:outline-none focus:ring-0"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
    )
}

export default SearchInput