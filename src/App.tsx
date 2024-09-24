import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import HeaderAbout from './pages/HeaderAbout';
import HeaderContactMe from './components/HeaderContactMe';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Define Routes for different sections */}
        <Routes>
          <Route path="/home" element={<><Carousel /><AboutMe /><Skills /><Portfolio /></>} />
          <Route path="/about" element={<HeaderAbout />} />
          <Route path="/contact" element={<HeaderContactMe />} />
        </Routes>

        <Footer />
        <ScrollToTop /> 
      </div>
    </Router>
  );
};

export default App;
