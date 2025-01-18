import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Add} from "@mui/icons-material"; // Replace with your preferred icon

function HoveringIcon() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: 'fixed', // Ensures the icon is always visible
                bottom: '80px', // Adjust distance from the bottom of the screen
                right: '20px', // Adjust distance from the right of the screen
                zIndex: 1000, // Ensure it stays above other elements
            }}
        >
            <Tooltip title="Go to Home" arrow>
                <IconButton
                    onClick={() => navigate('/testimonies')} // Replace '/home' with your desired route
                    sx={{
                        backgroundColor: '#1976d2', // Primary color (adjust as needed)
                        color: '#fff', // Icon color
                        borderRadius: '50%', // Fully rounded shape
                        width: 56, // Adjust size
                        height: 56, // Adjust size
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow
                        transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth transition
                        '&:hover': {
                            backgroundColor: '#145ea8', // Darker shade on hover
                            transform: 'scale(1.1)', // Slightly enlarge on hover
                        },
                    }}
                >
                    <Add fontSize="large" />
                </IconButton>
            </Tooltip>
        </Box>
    );
}

export default HoveringIcon;