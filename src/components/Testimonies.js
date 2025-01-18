import React from "react";
import Header from "./Header";
import DailyVerseCard from "./DailyVerseCard";
import HoveringIcon from "./HoveringIcon";


const Testimoninials = [
    {
        day: 'Anna K.',
        verseText: 'I was lost and hopeless, drowning in my mistakes. But then I found God\'s love, and He pulled me out of the darkness. Now, I live in the light, forgiven and renewed.'
    },
    {
        day: 'John S.',
        verseText: 'Addiction held me captive, tearing my life apart. But when I surrendered to Jesus, He broke the chains that bound me. Now, I walk in freedom, a living testimony of His power to overcome.'
    },
    {
        day: 'Kenan D.',
        verseText: 'When life crumbled around me, I felt helpless and alone. But God\'s presence became my refuge, giving me strength to face every trial. I surrendered my life to Jesus. Now, I walk with unwavering faith, knowing He is with me.'
    }
]


export const Testimonies = () => {
    return (<div>
        <Header title='Share your story'/>
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #f9fafb, #edf2f7)', // Light background
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
            flexDirection: 'column', // Stack items vertically
            padding: '12px',
        }}>
            {
                Testimoninials.map((item, index) =>
                    <DailyVerseCard
                        day={item.day} key={index}
                        verseText={item.verseText}
                    />)
            }
            <HoveringIcon/>
        </div>
    </div>)
}