import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
// import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Achievements from './pages/Achievements';

// const routes = [
//   { path"/", element: {<Home />} },
//   { path: '/game', Component: GamePage, title: 'Game Page' },
//   { path: '/quest', Component: QuestPage, title: 'Quest Page' },
//   { path: '/shop', Component: ShopPage, title: 'Shop Page' },
//   { path: '/empty', Component: GamePage, title: 'Empty Page' }
// ];


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sibcom/" element={<Home />} />
        <Route path="/sibcom/about" element={<About />} />
        <Route path="/sibcom/products" element={<Products />} />
        <Route path="/sibcom/achievements" element={<Achievements />} />
        <Route path="/sibcom/services" element={<Services />} />
        { /* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/sibcom/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;