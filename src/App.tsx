import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, Home, Album, LoginPage, User, Photo } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/albums/:id" element={<Album />} />
        <Route path="/photos/:id" element={<Photo />} />
      </Routes>
    </Router>
  );
}

export default App;
