import React from "react";
import Header from "./Header";
import {
    Box,
    Card,
    CardMedia,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {OutlinedInput, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export function SpotifyIcon({ size = 24 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 168 168"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Spotify"
        >
            <circle fill="#1DB954" cx="84" cy="84" r="84" />
            <path
                fill="#fff"
                d="M120.5 113.4c-1.8 2.9-5.7 3.8-8.6 2-23.5-14.2-53.2-17.4-88.2-9.8-3.2.7-6.3-1.3-7-4.6-.7-3.2 1.3-6.3 4.6-7 37-8.2 69.1-4.4 95.7 11.6 2.9 1.8 3.8 5.7 2 8.6zM131.8 90.5c-2.2 3.6-6.9 4.6-10.5 2.4-26.9-16.4-67.9-21.2-99.5-11.8-4 .9-8.1-1.4-9-5.3-.9-4 1.4-8.1 5.3-9 34.9-10.2 79.2-4.8 109.1 13.3 3.6 2.2 4.7 6.9 2.5 10.4zM134.5 66c-2.7 4.4-8.5 5.8-12.9 3.2-30.6-18.7-77.2-24.2-112.4-13.5-4.7 1.4-9.7-1.2-11.1-5.9-1.4-4.7 1.2-9.7 5.9-11.1 39.7-12 91.3-6 125.6 15 4.3 2.6 5.7 8.3 3.2 12.3z"
            />
        </svg>
    );
}

export function AppleMusicIcon({ size = 24 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Apple Music"
        >
            {/* Background square */}
            <path
                fill="#fa2c56"
                d="M383.9 32H128.1C74.5 32 32 74.5 32 128.1v255.8C32 437.5 74.5 480 128.1 480h255.8c53.6 0 96.1-42.5 96.1-96.1V128.1C480 74.5 437.5 32 383.9 32z"
            />
            {/* Music note */}
            <path
                fill="#fff"
                d="M346.5 134.2c-4.3-3.2-9.7-4.4-14.9-3.3l-128 26.7c-7.2 1.5-12.3 7.9-12.3 15.2v109.9c-6.8-2.7-14.2-4.2-21.9-4.2-25 0-45.3 17.6-45.3 39.3s20.3 39.2 45.3 39.2 45.3-17.6 45.3-39.2V213.8l85.4-17.7v74c-6.8-2.7-14.2-4.2-21.9-4.2-25 0-45.3 17.6-45.3 39.3s20.3 39.2 45.3 39.2 45.3-17.6 45.3-39.2V149.1c0-4.9-2.3-9.6-6.1-12.8z"
            />
        </svg>
    );
}

export function YouTubeIcon({ size = 24 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="YouTube"
        >
            <path
                fill="#FF0000"
                d="M549.655 124.083c19.649 7.35 35.09 24.025 39.352 45.042 8.945 42.447 8.945 131.708 8.945 131.708s0 89.261-8.945 131.708c-4.262 21.017-19.703 37.692-39.352 45.042C500.039 486 288 486 288 486s-212.039 0-261.655-7.417c-19.649-7.35-35.09-24.025-39.352-45.042-8.945-42.447-8.945-131.708-8.945-131.708s0-89.261 8.945-131.708c4.262-21.017 19.703-37.692 39.352-45.042C75.961 38 288 38 288 38s212.039 0 261.655 7.417z"
            />
            <path
                fill="#fff"
                d="M232 164.694l142 91.306-142 91.306V164.694z"
            />
        </svg>
    );
}

export function MusicCard({title, artist, albumArtLink,links}) {
    return (
        <Card
            sx={{
                display: "flex",
                // Constrain overall card size for mobile
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 2,
                backgroundColor: "#fff",
                marginLeft: 2,
                marginRight: 2,
                marginTop: 2
            }}
        >
            {/* LEFT: Smaller album image */}
            <CardMedia
                component="img"
                image={albumArtLink}
                alt={`${title} Album Art`}
                sx={{
                    width: 100,        // Fixed width for the cover
                    height: "auto",
                    objectFit: "cover",
                    flexShrink: 0,     // Prevents image from shrinking
                }}
            />

            {/* RIGHT: Song info + streaming links */}
            <Box
                sx={{
                    flex: 1,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 0.5,
                }}
            >
                {/* Title */}
                <Typography
                    variant="subtitle1"
                    sx={{fontWeight: "bold", color: "#333"}}
                >
                    {title}
                </Typography>

                {/* Artist */}
                <Typography
                    variant="body2"
                    sx={{color: "#555"}}
                >
                    {artist}
                </Typography>

                {/* STREAMING LINKS */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        flexWrap: "wrap", // Wrap buttons on small screens
                        mt: 1,
                        gap: 1
                    }}
                >
                    {/*{Object.keys(links).map((key, i) => {*/}
                    {/*    return  <Button*/}
                    {/*        variant="outlined"*/}
                    {/*        startIcon={<HeadphonesIcon/>}*/}
                    {/*        endIcon={<PlayArrowIcon/>}*/}
                    {/*        sx={{*/}
                    {/*            textTransform: "none",*/}
                    {/*            fontSize: "0.8rem",*/}
                    {/*            borderColor: "#1DB954",*/}
                    {/*            color: "#1DB954",*/}
                    {/*            "&:hover": {*/}
                    {/*                borderColor: "#1DB954",*/}
                    {/*                backgroundColor: "#E8F5E9",*/}
                    {/*            },*/}
                    {/*        }}*/}
                    {/*        onClick={() =>*/}
                    {/*            window.open(links[key], "_blank")*/}
                    {/*        }*/}
                    {/*    >*/}
                    {/*        Spotify*/}
                    {/*    </Button>*/}
                    {/*})}*/}
                    <Button
                        variant="text"
                        startIcon={<SpotifyIcon/>}
                        sx={{
                            textTransform: "none",
                            fontSize: "0.8rem",
                            borderColor: "#1DB954",
                            color: "#1DB954",
                            "&:hover": {
                                borderColor: "#1DB954",
                                backgroundColor: "#E8F5E9",
                            },
                        }}
                        onClick={() =>
                            window.open(encodeURI(links.spotify), "_blank")
                        }
                    >
                        Spotify
                    </Button>

                    {/* Apple Music */}
                    <Button
                        variant="test"
                        startIcon={<AppleMusicIcon/>}
                        sx={{
                            textTransform: "none",
                            fontSize: "0.8rem",
                            borderColor: "#000",
                            color: "#000",
                            "&:hover": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                        onClick={() =>
                            window.open(encodeURI(links.apple), "_blank")
                        }
                    >
                        Apple
                    </Button>

                    {/* YouTube */}
                    <Button
                        variant="outlined"
                        startIcon={<YouTubeIcon/>}
                        sx={{
                            textTransform: "none",
                            fontSize: "0.8rem",
                            borderColor: "#FF0000",
                            color: "#FF0000",
                            "&:hover": {
                                backgroundColor: "#ffebee",
                            },
                        }}
                        onClick={() =>
                            window.open(encodeURI(links.youtube), "_blank")
                        }
                    >
                    </Button>
                </Stack>
            </Box>
        </Card>
    );
}

export function SlimSearchBar() {
    return (
        <OutlinedInput
            placeholder="Search song, playlist, artist..."
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#aaa", fontSize: 20 }} />
                </InputAdornment>
            }
            sx={{
                // Keeps the search bar compact
                height: 36,
                borderRadius: "9999px",
                backgroundColor: "#fff",
                width: "100%",
                marginTop: 2,

                // Light box shadow for depth (optional)
                boxShadow: 1,
                // Remove the default outline border
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },

                // Control input text & placeholder appearance
                "& .MuiOutlinedInput-input": {
                    // padding: "4px 8px",   // Minimal internal padding
                    fontSize: 14,
                    color: "#333",
                },
                "& .MuiOutlinedInput-input::placeholder": {
                    color: "#aaa",
                    opacity: 1,
                },
            }}
        />
    );
}

const music = [
    {
        title: 'We Still Believe (HLY FOREVER)',
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1793176264?i=1793176266&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/7pS6A11LEP0ID59nC8pB6a',
            youtube: 'https://www.youtube.com/watch?v=78bG5oNAeSE'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/27/ef/6b/27ef6b8a-8421-f4f0-54c8-7051b8c836f7/196872835670.jpg/512x512bb.jpg',
        artist: 'KB & Ryan Ofei, One Church Music'
    },
    {
        title: 'I Need Help',
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1773277765?i=1773277766&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/2wZ6SbRGqB20wbWh4f25q0',
            youtube: 'https://www.youtube.com/watch?v=DsTkMh62yk0'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/26/68/ef/2668ef3e-8e5e-8f25-4bdf-3fd45e88142a/797885463708_cover.jpg/512x512bb.jpg',
        artist: 'Connor Price, Maverick City Music & Taylor Hill, Nick Day'
    },
    {
        title: 'Take Over',
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1687366114?i=1687366651&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/4272RrXDkjaYEqRTSYgFs8',
            youtube: 'https://www.youtube.com/watch?v=pENPQbH1iZ8'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/05/e0/42/05e0425b-dae8-f63a-ce35-52561317f3dd/197188897352.jpg/512x512bb.jpg',
        artist: 'Sondae & Reggie Dartey'
    },
    {
        title: 'SPIN BACK!',
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1806724830?i=1806724831&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/5td2JvO9vGsPANQmafsXsj',
            youtube: 'https://www.youtube.com/watch?v=ohl0lNCff6o'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/94/9a/eb949a04-7473-dc25-b608-09604e4987c2/196833238601_cover.jpg/512x512bb.jpg',
        artist: 'Scootie Wop'
    },
    {
        title: "Can't Tell It All",
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1557351822?i=1557351843&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/4bvNwqjzJbbmUDClgpCTG0',
            youtube: 'https://www.youtube.com/watch?v=UyHh9tSU7JA'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/97/4e/be/974ebe1e-db40-74d0-ab8a-4e0117825600/447.jpg/512x512bb.jpg',
        artist: 'Hulvey'
    },
    {
        title: "Parabolic!",
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1518732094?i=1518732095&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/3pm0lUOKsphN8A3VLZivuS',
            youtube: 'https://www.youtube.com/watch?v=E4brLcnxhwo'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2d/d2/15/2dd2157e-3059-4f25-b6c5-e6dcae218a3d/artwork.jpg/512x512bb.jpg',
        artist: 'nobigdyl.'
    },
    {
        title: "West Orlando Flow",
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1556232131?i=1556232253&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/11SsZjc73w58L5y0csv67t',
            youtube: 'https://www.youtube.com/watch?v=bOkJUjFxpMQ'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/8f/0f/328f0f60-2e9e-4ccf-d594-d8e7d31e7422/859745917933_cover.jpg/512x512bb.jpg',
        artist: 'Caleb Gordon'
    },
    {
        title: "Lay Down II",
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1789207111?i=1789207117&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/1oWpZUAbdXCJt9ZNN6nFOG',
            youtube: 'https://www.youtube.com/watch?v=sAYTs0l3vr4'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/63/81/5c/63815cfb-6235-cc1a-849d-8463bb492612/1015.jpg/512x512bb.jpg',
        artist: 'Trip Lee'
    },
    {
        title: "Not Too Far",
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1501586082?i=1501586340&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/1UAZPeZdpFFYa8wanZCj1H',
            youtube: 'https://www.youtube.com/watch?v=SpSVAzPkwNM'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b1/ac/e6/b1ace654-0681-8c7f-adc7-c5d7c29e8b2c/247.jpg/512x512bb.jpg',
        artist: 'GAWVI'
    },
    {
        title: "Eagle",
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/1647758407?i=1647758408&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/5tx4rfrsFrxJGCmxVAsH0r',
            youtube: 'https://www.youtube.com/watch?v=M8f7edGVgos'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/e1/42/f3/e142f354-f406-dc5a-86ad-b45374551006/artwork.jpg/512x512bb.jpg',
        artist: 'Transformation Worship, KB'
    },
    {
        title: "Praise Him In Advance",
        links: {
            apple: 'https://geo.music.apple.com/ie/album/_/537679910?i=537680011&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
            spotify: 'https://open.spotify.com/track/3fJ1I1XNSSs7BcLkOxSCUp',
            youtube: 'https://www.youtube.com/watch?v=AFJUkfbn_Wo'
        },
        albumArtLink: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/db/8d/8e/db8d8ee1-f8bb-b472-6063-94f9f04992b1/mzi.kfzxeniz.jpg/512x512bb.jpg',
        artist: 'Marvin Sapp'
    }
]


export const Music = () => {
    return (
        <div>
            <Header title="Music"/>
            <SlimSearchBar />
            {music.map((item, index) => (
                <MusicCard
                    title={item.title}
                    artist={item.artist}
                    albumArtLink={item.albumArtLink}
                    key={index}
                    links={item.links}
                />))}
        </div>)
}