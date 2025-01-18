// components/BottomNavigationBar.js
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as HomeFilledIcon } from "../assets/home_filled.svg";
import { ReactComponent as MusicIcon } from "../assets/music.svg";
import { ReactComponent as MusicFilledcIcon } from "../assets/music_filled.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as SearchFilledIcon } from "../assets/search_filled.svg";
import { ReactComponent as TestimoniesIcon } from "../assets/testimonies.svg";
import { ReactComponent as TestimoniesFilledIcon } from "../assets/testimonies_filled.svg";

const BottomNavigationBar = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) navigate("/");
        if (newValue === 1) navigate("/testimonies");
        if (newValue === 2) navigate("/music");
        if (newValue === 3) navigate("/search");
    };

    useEffect(() => {
        handleChange(null, value);
    }, [value]);

    return (
        <div className="bottom-navigation-bar">
        <BottomNavigation
            value={value}
            onChange={handleChange}
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: "#fff",
                borderTop: "1px solid #ccc",
            }}
            className="MuiBottomNavigation-root"
            >
            <BottomNavigationAction
                label="Home"
                icon={
                    <TabIcon
                        isActive={value === 0}
                        ActiveIcon={HomeFilledIcon}
                        InactiveIcon={HomeIcon}
                    />
                }
            />
            <BottomNavigationAction
                label="Testimonies"
                icon={
                    <TabIcon
                        isActive={value === 1}
                        ActiveIcon={TestimoniesFilledIcon}
                        InactiveIcon={TestimoniesIcon}
                    />
                }
            />
            <BottomNavigationAction
                label="Music"
                icon={
                    <TabIcon
                        isActive={value === 2}
                        ActiveIcon={MusicFilledcIcon}
                        InactiveIcon={MusicIcon}
                    />
                }
            />
            <BottomNavigationAction
                label="Search"
                icon={
                    <TabIcon
                        isActive={value === 3}
                        ActiveIcon={SearchFilledIcon}
                        InactiveIcon={SearchIcon}
                    />
                }
            />
        </BottomNavigation>
        </div>
    );
};

const TabIcon = ({ isActive, ActiveIcon, InactiveIcon, size = 24 }) => {
    const IconComponent = isActive ? ActiveIcon : InactiveIcon;

    return <IconComponent style={{ width: size, height: size }} />;
};

export default BottomNavigationBar;