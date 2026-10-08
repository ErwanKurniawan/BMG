import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function PageMotion({ children }) {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const targets = container.querySelectorAll('[data-page-reveal]');
    targets.forEach((target) => {
      target.classList.add('page-reveal', 'is-visible');
    });
    return undefined;
  }, [location.pathname]);

  return (
    <div className="page-motion" key={location.pathname} ref={containerRef}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <PageMotion>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/layanan" element={<Services />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageMotion>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}