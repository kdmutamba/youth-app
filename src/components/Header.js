import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';

const Header = ({ title, subtitle, onBackClick }) => {
    return (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={0}
            sx={{
                borderBottom: '2px solid #E2E8F0', // Distinct bottom border
                // paddingX: 2, // Increased horizontal padding
                // paddingBottom: 1, // Added more bottom padding
                // paddingTop: 2, // Added top padding
            }}
        >
            <Toolbar
                sx={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 1, // Increase spacing between title and subtitle
                    justifyContent: 'center', // Center items horizontally
                    // alignItems: 'center',    // Center items vertically
                    display: 'flex',         // Ensure Flexbox layout
                    minHeight: 64,           // Adjust height if needed
                }}
            >
                {/* Title and Subtitle */}
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                            color: '#112B43',
                            marginBottom: 1, // Additional space below the title
                            fontFamily: 'Open Sans, sans-serif', // Set the font family
                            fontSize: '20px',
                            lineHeight: '28px'
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: '400',
                            color: '#112B4399',
                            fontFamily: 'Open Sans, sans-serif', // Set the font family
                            fontSize: '12px',
                            lineHeight: '20px'
                        }}
                    >
                        {subtitle}
                    </Typography>
                </Box>

                {/* Back Button */}
                {/*<IconButton*/}
                {/*    edge="start"*/}
                {/*    color="inherit"*/}
                {/*    aria-label="back"*/}
                {/*    onClick={onBackClick}*/}
                {/*    sx={{*/}
                {/*        alignSelf: 'flex-start', // Align button with text*/}
                {/*        marginTop: 1, // Add margin between subtitle and back button*/}
                {/*        marginLeft: '-8px', // Align arrow with start of text*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <ArrowBackIcon />*/}
                {/*</IconButton>*/}
            </Toolbar>
        </AppBar>
    );
};

export default Header;