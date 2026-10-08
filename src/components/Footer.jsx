import { Link } from 'react-router-dom';

const navigationLinks = [
  { to: '/', label: 'Home' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/contact', label: 'Contact Us' },
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'WhatsApp', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-8 border-[#1b2a4a] bg-[#1c1b1b] px-5 py-16 text-white md:px-16 md:py-20">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        <div className="flex flex-col gap-4">
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

        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e8354d]">
            Navigate
          </h2>
          <nav aria-label="Footer navigation" className="flex flex-col items-start gap-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-gray-300/80 transition-colors hover:text-[#e8354d]"
              >
                {link.label} 
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e8354d]">
            Connect
          </h2>
          <div className="flex flex-col items-start gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-300/80 transition-colors hover:text-[#e8354d]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-4 text-sm leading-relaxed text-gray-300/80 md:pt-8">
            © {currentYear} Berkah Media Gemilang.
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
