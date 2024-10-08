import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import HeaderAbout from './pages/HeaderAbout';
import HeaderContactMe from './pages/HeaderContactMe';
import Projects from './pages/HeaderProjects';
import CardGrid from './components/Services';
import BuyMeCoffee from './pages/BuyMeACoffee';
import PaymentPage from './pages/Payment';

const App: React.FC = () => {
  return (
   
      <Router>
        <div className="App">
          <Header />

          {/* Define Routes for different sections */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<><Carousel /><AboutMe /><Portfolio /><Skills /></>} />
            <Route path="/about" element={<HeaderAbout />} />
            <Route path="/contact" element={<HeaderContactMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/buy-me-a-coffee" element={<BuyMeCoffee   />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<div>404 Not Found</div>} /> {/* Handle 404 */}
          </Routes>
          <CardGrid/>
          <Footer />
          <ScrollToTop /> 
        </div>
      </Router>
    
  );
};

export default App;
