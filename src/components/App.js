import React from 'react';
import {StyleRoot} from 'radium';
import { Routes, Route } from 'react-router-dom';
// import { Navbar, Home, CreatePost, PostDetail } from './';
import Navbar from './Navbar';
import PostDetail from './PostDetail';
import Home from './Home';
import CreatePost from './CreatePost';

function App() {
  return (
    <StyleRoot>
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:postId" element={<PostDetail />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
    </StyleRoot>
  );
}

export default App;
