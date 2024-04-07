import React from 'react'

import { Tweet } from './tweet-card/Tweet'

const tweet = {
  user: {
    id_str: '327034465',
    name: 'Travis Fischer',
    screen_name: 'transitive_bs',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1754555939263287296/c4DY9fsD_400x400.jpg',
    follower: 322,
    following:534,
    verified: true,
    headline: "Working to end career retaliation against #survivors of sexual violence in Hollywood. Founded by #SilenceBreaker @sarahannmasse. #HireSurvivorsHollywood"
  },
  comment_count:300,
  retweet_count: 2517,
  favorite_count: 16342,
  text: "Happy Sunday to the #HireSurvivorsHollywood Community! We've decided to use Sundays to highlight #survivors and #SilenceBreakers and the wonderful work they're doing!\n\nToday we're celebrating Amber Heard (#AmberHeard)! https://t.co/rCigkEijIY",
  view_count:5000,
  bookmark: 67897
}

export default function App() {
  return (
    <Tweet
      config={{
        user: {
          avatar: tweet.user.profile_image_url,
          nickname: tweet.user.screen_name,
          name: tweet.user.name,
          verified: tweet.user.verified,
          following: tweet.user.following,
          followers:tweet.user.follower,
          headline:tweet.user.headline
        },
        text: tweet.text,
        app: 'Twitter Web App',
        date: new Date('2020-04-20T16:20:00-0400'),
        retweets: tweet.retweet_count,
        likes: tweet.favorite_count,
        views: tweet.view_count,
        comments: tweet.comment_count,
        bookmarks: tweet.bookmark,
        image:"https://pbs.twimg.com/media/FRR9lwbXwAA3DEy.jpg"
      }}
    />
  )
}
