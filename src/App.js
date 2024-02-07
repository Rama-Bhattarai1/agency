import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import Homeindex from './Component/Home';
import Blog from './Component/Blog/Blog';
import Aboutindex from './Component/About/AboutFitst';

function App() {
  return (
    <div>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Homeindex />} />
        <Route path="/about" element={<Aboutindex />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

