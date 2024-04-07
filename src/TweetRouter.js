import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TweetLoader from './pages/TweetLoader'; // Component for loading tweets based on query parameters
import CustomTweetLoader from './pages/CustomTweetLoader'; // Component for loading tweets based on user-defined info

const TweetRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<TweetLoader />} />
        <Route path='/custom' element={<CustomTweetLoader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TweetRouter;
