import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

// Function to format the date
// function formatDate() {
//     const date = new Date();
//     const options = { month: 'short', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
// }

const DailyVerseCard = ({ verse, day, date, verseText }) => {
    return (
        <Card sx={{ maxWidth: 500, padding: 2, marginBottom: 2, borderRadius:'20px', boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)'}}>
            <CardContent>
                {/* First Row: Date on the left and Verse on the right */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center">
                    <Typography sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: '28px',
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        color: '#112B43',
                        marginRight: '10px'
                    }}>
                        {day}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '16.34px',
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        color: '#112B43',
                    }}>
                        {date}
                    </Typography>
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '11px',
                        fontWeight: 400,
                        lineHeight: '14.98px',
                        textAlign: 'center',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        color: '#93989D',
                        textDecoration: 'underline',
                    }}>
                        {verse} {/* Verse reference */}
                    </Typography>
                </Box>

                <Box sx={{ height: '16px' }} />

                {/* Second Row: Full Verse Text */}
                <Typography
                    sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        color: '#112B43',
                    }}
                    align="justify">
                    {verseText || 'And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb. In the midst of the street of it, and on either side of the river, was there the tree of life, which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations.'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DailyVerseCard;