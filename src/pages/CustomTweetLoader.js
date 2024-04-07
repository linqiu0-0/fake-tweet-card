import React, { useState } from 'react';
import { Tweet } from './../tweet-card/Tweet';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';

export default function CustomTweetLoader() {
    // Set up state for each property of the tweet
    const [name, setName] = useState('Yakov 🚲🚃🚠🎗️');
    const [screenName, setScreenName] = useState('transitive_bs');
    const [profileImageUrl, setProfileImageUrl] = useState('https://pbs.twimg.com/profile_images/1754555939263287296/c4DY9fsD_400x400.jpg');
    const [follower, setFollower] = useState(322);
    const [following, setFollowing] = useState(534);
    const [verified, setVerified] = useState(true);
    const [headline, setHeadline] = useState("Working to end career retaliation against #survivors of sexual violence in Hollywood. Founded by #SilenceBreaker @sarahannmasse. #HireSurvivorsHollywood");
    const [commentCount, setCommentCount] = useState(300);
    const [retweetCount, setRetweetCount] = useState(2517);
    const [favoriteCount, setFavoriteCount] = useState(16342);
    const [text, setText] = useState("Happy Sunday to the #HireSurvivorsHollywood Community! We've decided to use Sundays to highlight #survivors and #SilenceBreakers and the wonderful work they're doing!\n\nToday we're celebrating Amber Heard (#AmberHeard)! https://t.co/rCigkEijIY");
    const [viewCount, setViewCount] = useState(5000);
    const [bookmark, setBookmark] = useState(67897);
    const [date, setDate] = useState('2020-04-20T16:20:00-0400');
    const [imageUrlsInput, setImageUrlsInput] = useState(["https://pbs.twimg.com/media/GH3pdhKacAAQewr?format=jpg&name=medium"]);
    const [imageUrls, setImageUrls] = useState("https://pbs.twimg.com/media/GH3pdhKacAAQewr?format=jpg&name=medium");


    const handleSubmit = (event) => {
        event.preventDefault();
        const newImageUrls = imageUrls.split('\n').map(url => url.trim()).filter(url => url);
        setImageUrlsInput(newImageUrls)

        // Normally you would probably update the Tweet component's props with new state here
        // However, for simplicity, we'll log the state to the console
        console.log({
            name,
            screenName,
            profileImageUrl,
            follower,
            following,
            verified,
            headline,
            commentCount,
            retweetCount,
            favoriteCount,
            text,
            viewCount,
            bookmark,
            imageUrlsInput,
        });
    };

    return (
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {/* Input Form Column */}
            <Grid item xs={12} md={6}>

                <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
                    <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
                    <TextField label="Screen Name" value={screenName} onChange={(e) => setScreenName(e.target.value)} fullWidth margin="normal" />
                    <TextField label="Profile Image URL" value={profileImageUrl} onChange={(e) => setProfileImageUrl(e.target.value)} fullWidth margin="normal" />
                    <TextField type="number" label="Followers" value={follower} onChange={(e) => setFollower(e.target.value)} fullWidth margin="normal" />
                    <TextField type="number" label="Following" value={following} onChange={(e) => setFollowing(e.target.value)} fullWidth margin="normal" />
                    <TextField label="Verified" value={verified} onChange={(e) => setVerified(e.target.value === 'true')} fullWidth margin="normal" />
                    <Switch
                        checked={verified}
                        onChange={(e) => setVerified(e.target.checked)}
                        name="verified"
                    />
                    <TextField label="date" value={date} onChange={(e) => setDate(e.target.value)} fullWidth margin="normal" />
                    <TextField type="number" label="Comment Count" value={commentCount} onChange={(e) => setCommentCount(e.target.value)} fullWidth margin="normal" />
                    <TextField type="number" label="Retweet Count" value={retweetCount} onChange={(e) => setRetweetCount(e.target.value)} fullWidth margin="normal" />
                    <TextField type="number" label="Favorite Count" value={favoriteCount} onChange={(e) => setFavoriteCount(e.target.value)} fullWidth margin="normal" />
                    <TextField label="Headline" value={headline} onChange={(e) => setHeadline(e.target.value)} fullWidth margin="normal" multiline />
                    <TextField label="Tweet Text" value={text} onChange={(e) => setText(e.target.value)} fullWidth margin="normal" multiline />
                    <TextField type="number" label="View Count" value={viewCount} onChange={(e) => setViewCount(e.target.value)} fullWidth margin="normal" />
                    <TextField type="number" label="Bookmark" value={bookmark} onChange={(e) => setBookmark(e.target.value)} fullWidth margin="normal" />
                    <TextField
                        label="Image URLs"
                        value={imageUrls}
                        onChange={(e) => setImageUrls(e.target.value)}
                        fullWidth
                        margin="normal"
                        helperText="Enter each URL on a new line."
                        multiline
                        rows={4}
                    />

                    <p />
                    <Button variant="contained" color="primary" type="submit">
                        Update Tweet
                    </Button>
                </Box>
            </Grid>

            {/* Tweet Card Column */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>


                {/* The Tweet component is rendered below with the state passed as props */}
                <Tweet
                    config={{
                        user: {
                            avatar: profileImageUrl,
                            nickname: screenName,
                            name: name,
                            verified: verified,
                            following: following,
                            followers: follower,
                            headline: headline
                        },
                        text: text,
                        app: 'Twitter Web App',
                        date: new Date(date), // Assuming you want to keep this static
                        retweets: retweetCount,
                        likes: favoriteCount,
                        views: viewCount,
                        comments: commentCount,
                        bookmarks: bookmark,
                        imageUrls: imageUrlsInput,
                    }}
                />
            </Grid>
        </Grid>
    );
}
