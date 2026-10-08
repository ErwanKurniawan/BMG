import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/contact', label: 'Contact Us' },
];

function isActiveLink(to, location) {
  return !to.includes('#') && location.pathname === to;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      });
    } else if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        id="main-navbar"
        className={`sticky top-0 z-50 flex w-full items-center justify-between border-b-4 border-[#1b2a4a] bg-[#fcf9f8] px-5 py-3 transition-shadow duration-300 md:px-16 md:py-4 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <Link to="/" className="flex shrink-0 items-center gap-4" aria-label="Berkah Media Gemilang - Beranda">
          <img
            className="h-12 w-12 object-contain"
            alt="Berkah Media Gemilang Logo"
            src="/images/logo/bmg-mark.svg"
          />
          <span className="hidden font-display text-3xl font-black tracking-tighter text-[#bd001a] md:block">
            BMG
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActiveLink(link.to, location);
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`border-b-2 pb-1 font-mono text-xs font-bold uppercase tracking-widest transition-colors ${
                  active
                    ? 'border-[#bd001a] text-[#bd001a]'
                    : 'border-transparent text-[#1c1b1b] hover:text-[#bd001a]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          to="/contact"
          onClick={closeMobileMenu}
          className="hidden items-center justify-center border-2 border-[#1c1b1b] bg-[#bd001a] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_#1c1b1b] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#1c1b1b] md:inline-flex"
        >
          Get Started
        </Link>

        <button
          id="mobile-menu-toggle"
          className="cursor-pointer p-1 text-[#1c1b1b] md:hidden"
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="material-symbols-outlined block text-[32px]" aria-hidden="true">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#1c1b1b]/95 text-white transition-all duration-300 md:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <button
          id="mobile-menu-close"
          className="absolute right-5 top-4 cursor-pointer p-1 text-white"
          type="button"
          aria-label="Close menu"
          onClick={closeMobileMenu}
        >
          <span className="material-symbols-outlined block text-4xl" aria-hidden="true">close</span>
        </button>

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              aria-current={isActiveLink(link.to, location) ? 'page' : undefined}
              className="font-display text-2xl uppercase tracking-wider text-white transition-colors hover:text-[#f4e900]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="mt-4 border-2 border-white bg-[#bd001a] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#9b0a20]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
