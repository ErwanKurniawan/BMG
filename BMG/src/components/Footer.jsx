import { Link } from 'react-router-dom';

const navigationLinks = [
  { to: '/', label: 'Home' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/contact', label: 'Contact Us' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/berkahmediagemilang/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  { label: 'LinkedIn', href: '#' },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/628112144113',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-4 mt-40 mb-9 w-auto border-t-[10px] border-bmg-primary bg-[#1c1b1b] px-5 pt-10 pb-16 text-white md:px-16 md:pt-14 md:pb-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
        <div className="flex flex-col gap-5">
          <Link
            to="/"
            className="font-display text-3xl font-black uppercase tracking-tighter text-white"
            aria-label="Berkah Media Gemilang - Beranda"
          >
            Berkah Media<br />Gemilang
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-gray-300/80">
            Precision Media. Raw Energy.<br />
            We build experiences that refuse to be ignored.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e8354d]">
            Navigate
          </h2>
          <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => {
                  if (link.to === '/' && window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="text-sm text-gray-300/80 transition-colors hover:text-[#e8354d]"
              >
                {link.label} 
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e8354d]">
            Connect
          </h2>
          <div className="flex flex-col items-start gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="text-sm text-gray-300/80 transition-colors hover:text-[#e8354d]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-4 text-sm leading-relaxed text-gray-300/80 md:pt-8">
            © {currentYear} PT. Lasuarindo | BMG.id
            <br />
            <a
              className="underline decoration-2 underline-offset-4 transition-colors hover:text-[#e8354d]"
              href="#privacy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
