import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

// Simple Icons no longer ships a LinkedIn glyph (removed over brand guidelines),
// so LinkedIn stays a text-only link — Instagram & WhatsApp use Simple Icons.
const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/berkahmediagemilang/',
    target: '_blank',
    rel: 'noopener noreferrer',
    Icon: SiInstagram,
  },
  { label: 'LinkedIn', href: '#', Icon: null },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/628112144113',
    target: '_blank',
    rel: 'noopener noreferrer',
    Icon: SiWhatsapp,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navigationLinks = [
    { to: '/', label: t.nav.home },
    { to: '/layanan', label: t.nav.services },
    { to: '/tentang', label: t.nav.about },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="site-footer mx-4 mt-40 mb-9 w-auto border-t-8 border-[#c8102e] bg-[#1c1b1b] px-6 pt-10 pb-14 text-white sm:px-10 md:px-14 md:pt-14 md:pb-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-10 lg:gap-4">
        <div className="flex flex-col gap-6">
          <Link
            to="/"
            className="font-display text-3xl font-black uppercase tracking-tighter text-white"
            aria-label="Berkah Media Gemilang - Beranda"
          >
            Berkah Media<br />Gemilang
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-gray-300/80 whitespace-pre-line">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e8354d]">
            {t.footer.navigate}
          </h2>
          <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3 md:gap-3.5">
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
            {t.footer.connect}
          </h2>
          <div className="flex flex-col items-start gap-3 md:gap-3.5">
            {socialLinks.map(({ label, Icon, ...link }) => (
              <a
                key={label}
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="inline-flex items-center gap-2.5 text-sm text-gray-300/80 transition-colors hover:text-[#e8354d]"
              >
                {Icon && <Icon size={17} aria-hidden="true" />}
                {label}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-1.5 pt-6 text-sm leading-relaxed text-gray-300/80 md:pt-8">
            <span>© {currentYear} PT. Lasuarindo | BMG.id</span>
            <Link
              to="/privacy-policy"
              className="underline decoration-2 underline-offset-4 transition-colors hover:text-[#e8354d]"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
