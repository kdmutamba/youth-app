import React from "react";
import Header from "./Header";
import { Box, Typography } from '@mui/material';
import DailyVerseCard from "./DailyVerseCard";

const VerseCard = ({ reference, verseText }) => {
    return (
        <Box
            sx={{
                textAlign: 'center', // Center text horizontally
                padding: 3, // Add spacing inside the card
                background: 'transparent', // Transparent background
                borderRadius: 0, // No visible borders
            }}
        >
            {/* Reference */}
            <Typography
                sx={{
                    fontSize: '0.9rem',
                    color: '#93989D', // Light gray color
                    marginBottom: 1,
                    textDecoration: 'underline',
                }}
            >
                {reference || 'Revelation 22:12-14'}
            </Typography>

            {/* Verse Text */}
            <Typography
                sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '19px',
                    fontWeight: 500,
                    lineHeight: '26px',
                    textAlign: 'center',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    color: '#112B43', // Darker text color
                }}
            >
                {verseText ||
                    'And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be.'}
            </Typography>
        </Box>
    );
};


const DailyVerseCards = [
    {
        day: 'Today', date: 'Jan 17', verseText: 'And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb. In the midst of the street of it, and on either side of the river, was there the tree of life, which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations.', verse: 'Romans 25:7'
    },
    {
        day: 'Yesterday', date: 'Jan 16', verseText: 'Come, everyone who thirsts, to the waters! Come, he who has no money, buy, and eat! Yes, come, buy wine and milk without money and without price. Why do you spend money for that which is not bread, and your labor for that which doesn’t', verse: 'Revelations 25:3'
    },
    {
        day: 'Wednesday', date: 'Jan 15', verseText: 'And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb. In the midst of the street of it, and on either side of the river, was there the tree of life, which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations.', verse: 'Genesis 25:3'
    },
    {
        day: 'Tuesday', date: 'Jan 14', verseText: 'Come, everyone who thirsts, to the waters! Come, he who has no money, buy, and eat! Yes, come, buy wine and milk without money and without price. Why do you spend money for that which is not bread, and your labor for that which doesn’t', verse: 'Revelations 25:3'
    },
    {
        day: 'Monday', date: 'Jan 13', verseText: 'And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb. In the midst of the street of it, and on either side of the river, was there the tree of life, which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations.', verse: 'Genesis 25:3'
    },
    {
        day: 'Sunday', date: 'Jan 12', verseText: 'Come, everyone who thirsts, to the waters! Come, he who has no money, buy, and eat! Yes, come, buy wine and milk without money and without price. Why do you spend money for that which is not bread, and your labor for that which doesn’t', verse: 'Revelations 25:3'
    },
    {
        day: 'Saturday', date: 'Jan 11', verseText: 'And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb. In the midst of the street of it, and on either side of the river, was there the tree of life, which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations.', verse: 'Romans 25:7'
    }
]



export const Home = () => {
    return (<div>
        <Header title='Welcome back!' subtitle='How do you feel today?'/>
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #f9fafb, #edf2f7)', // Light background
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'column', // Stack items vertically
                padding: '12px',
            }}
        >
            <VerseCard
                reference="Revelation 22:12-14"
                verseText="And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be."
            />
            {
                DailyVerseCards.map(card => <DailyVerseCard
                    verse={card.verse}
                    verseText={card.verseText}
                    date={card.date}
                    day={card.day}
                />)
            }
        </div>
    </div>)
}