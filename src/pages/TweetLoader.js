import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tweet } from './../tweet-card/Tweet';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function TweetLoader() {
  let [searchParams] = useSearchParams();

  // Initialize state variables for each tweet property
  const [name, setName] = useState('');
  const [screenName, setScreenName] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [verified, setVerified] = useState(false);
  const [headline, setHeadline] = useState('');
  const [commentCount, setCommentCount] = useState(0);
  const [retweetCount, setRetweetCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [text, setText] = useState('');
  const [viewCount, setViewCount] = useState(0);
  const [bookmark, setBookmark] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  const [date, setDate] = useState(0);

  const [warnings, setWarnings] = useState([]);

  

  useEffect(() => {

    let localWarnings = [];

    // Parameters that are expected
    const expectedParams = ['name', 'handle', 'profileImageUrl', 'follower', 'following', 'verified', 'headline', 'commentCount', 'retweetCount', 'favoriteCount', 'text', 'viewCount', 'bookmark','date'];

    // Check for each expected parameter
    expectedParams.forEach(param => {
      if (!searchParams.has(param) || searchParams.get(param) === '') {
        localWarnings.push(`Missing parameter: ${param}`);
      }
    });




    // Parse each query parameter and update state variables
    setName(searchParams.get('name') || '');
    setScreenName(searchParams.get('handle') || '');
    setProfileImageUrl(searchParams.get('profileImageUrl') || '');
    setFollower(parseInt(searchParams.get('follower') || 0, 10));
    setFollowing(parseInt(searchParams.get('following') || 0, 10));
    setVerified(searchParams.get('verified') === 'true');
    setHeadline(searchParams.get('headline') || '');
    setCommentCount(parseInt(searchParams.get('commentCount') || 0, 10));
    setRetweetCount(parseInt(searchParams.get('retweetCount') || 0, 10));
    setFavoriteCount(parseInt(searchParams.get('favoriteCount') || 0, 10));
    setText(searchParams.get('text') || '');
    setDate(searchParams.get('date') || '');
    setViewCount(parseInt(searchParams.get('viewCount') || 0, 10));
    setBookmark(parseInt(searchParams.get('bookmark') || 0, 10));
    setImageUrls(searchParams.get('imageUrls') ? searchParams.get('imageUrls').split(',') : []);
    setWarnings(localWarnings);


}, [searchParams]);
  return (
    <>
    <Stack sx={{ width: '100%', marginBottom: 2 }}>
        {warnings.map((warning, index) => (
          <Alert severity="warning" key={index}>{warning}</Alert>
        ))}
      </Stack>
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
        retweets: retweetCount,
        likes: favoriteCount,
        views: viewCount,
        comments: commentCount,
        bookmarks: bookmark,
        imageUrls: imageUrls,
        date: new Date(date),
      }}
    />
    </>
  );
}

export default TweetLoader;
