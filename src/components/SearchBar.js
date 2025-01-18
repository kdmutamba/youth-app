import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        console.log("Search value changed:", event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Search submitted with value:", searchValue);
        // Add your search logic here
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchValue}
                onChange={handleInputChange}
                fullWidth
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    },
                }}
                style={{ margin: "10px 0" }}
            />
        </form>
    );
}
