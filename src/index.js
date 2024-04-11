import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import EVJF from './pages/evjf/evjf';
import EVG from './pages/evg/evg';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './assets/css/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evjf" element={<EVJF />} />
          <Route path="/evg" element={<EVG />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
