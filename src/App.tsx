import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DipsRoboticsPage from './pages/dips-robotics';
import DipapaPropertiesPage from './pages/dipapa-properties';
import DpsBetterLifePage from './pages/dps-better-life';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/companies/dips-robotics" element={<DipsRoboticsPage />} />
              <Route path="/companies/dipapa-properties" element={<DipapaPropertiesPage />} />
              <Route path="/companies/dps-better-life" element={<DpsBetterLifePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App
