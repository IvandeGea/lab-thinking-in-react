import { useState } from "react";

function SearchBar({ handleSearchValue }) {

    const [searchValue, setSearchValue] = useState("")

    return (
        <div className="bar">
            <input
                placeholder="Search..."
                type="text"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    handleSearchValue(e.target.value)
                }}
            >
            </input>

        </div>
    )
}

export default SearchBar;