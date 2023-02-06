import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LandingPage, Home, Album, LoginPage, User, Photo } from './pages';
import { Footer, Header } from './components';
import { store } from './state';
import { PrivateRoute } from './components';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route
            path="/albums/:id"
            element={
              <PrivateRoute>
                <Album />
              </PrivateRoute>
            }
          />
          <Route
            path="/photos/:id"
            element={
              <PrivateRoute>
                <Photo />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
