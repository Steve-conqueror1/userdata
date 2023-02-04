import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LandingPage, Home, Album, LoginPage, User, Photo } from './pages';
import { Footer, Header } from './components';
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<Home />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="/photos/:id" element={<Photo />} />s
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
