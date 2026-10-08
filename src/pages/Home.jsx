import { useEffect, useState } from 'react';
import './Home.css';

const services = [
  {
    icon: 'campaign',
    tag: 'Strategic',
    title: 'Media Buying',
    description: 'Penempatan strategis di berbagai channel premium. Kami memaksimalkan visibilitas Anda dengan pembelian iklan yang berdampak tinggi dan terukur.',
    className: 'service-card--blue',
  },
  {
    icon: 'celebration',
    tag: 'Execution',
    title: 'Event Production',
    description: 'Dari konsep hingga eksekusi sempurna. Kami menangani logistik, staging, dan manajemen vendor untuk dampak skala kota.',
    className: 'service-card--red',
  },
  {
    icon: 'share',
    tag: 'Amplification',
    title: 'Digital Reach',
    description: 'Memaksimalkan jangkauan melalui strategi digital dan social media, memastikan event Anda hidup melampaui venue.',
    className: 'service-card--yellow',
  },
];

const values = [
  { icon: 'precision_manufacturing', title: 'Precision', description: 'Setiap penempatan media dan layout dikalkulasi untuk ROI maksimal dan keterlibatan audiens optimal.', accent: 'blue' },
  { icon: 'bolt', title: 'Energy', description: 'Kami menghadirkan energi mentah yang tak terbendung ke setiap live event, menciptakan pengalaman tak terlupakan.', accent: 'red' },
  { icon: 'design_services', title: 'Expert UI/UX', description: 'Latar belakang kami dalam user experience diterjemahkan menjadi alur event dan interaksi digital yang mulus.', accent: 'dark' },
  { icon: 'handshake', title: 'Partnership', description: 'Kami berkolaborasi dengan Anda untuk membangun pengalaman dan mendominasi ruang industri bersama.', accent: 'dark' },
];

function SectionHeading({ children, accent = 'red' }) {
  return <div className={`section-heading section-heading--${accent} home-reveal`}><h2>{children}</h2></div>;
}

function HeroSection() {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <div className="home-hero__title-wrap home-hero-enter">
            <h1 className="home-hero__title">Amplifying<br /><span>Brands.</span><br />Igniting<br className="home-hero__mobile-break" /> <strong>Events.</strong></h1>
          </div>
          <p className="home-hero__description home-hero-enter home-hero-enter--second">Berkah Media Gemilang adalah partner media buying dan produksi event yang menggabungkan presisi strategis dengan energi tanpa batas untuk mengangkat brand Anda.</p>
          <a className="home-button home-button--light home-hero-enter home-hero-enter--third" href="#contact">Mulai Rencanakan Event Anda <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-brand-card home-hero-enter home-hero-enter--card" aria-label="Berkah Media Gemilang, berdiri sejak 2019">
          <div className="hero-brand-card__backdrop" />
          <div className="hero-brand-card__content">
            <img src="/images/logo/bmg-mark.svg" alt="Logo sementara Berkah Media Gemilang" />
            <span className="hero-brand-card__name">Berkah Media Gemilang</span>
            <span className="hero-brand-card__est">EST. 2019</span>
          </div>
        </div>
      </div>
      <span className="hero-side-note" aria-hidden="true">PRECISION MEDIA · RAW ENERGY</span>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="home-section services-section" id="layanan">
      <div className="home-container">
        <SectionHeading>Layanan Kami</SectionHeading>
        <div className="services-grid">
          {services.map((service) => (
            <article className={`service-card home-reveal ${service.className}`} key={service.title}>
              <div className="service-card__visual"><span className="material-symbols-outlined" aria-hidden="true">{service.icon}</span></div>
              <div className="service-card__body">
                <span className="eyebrow-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPortfolioSection() {
  return (
    <section className="home-portfolio" id="portofolio" aria-labelledby="home-portfolio-title">
      <div className="home-container">
        <div className="home-portfolio__heading home-reveal">
          <span className="home-portfolio__bar" aria-hidden="true" />
          <h2 id="home-portfolio-title">Portofolio</h2>
        </div>
        <article className="home-featured-project home-reveal">
          <div className="home-featured-project__image">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85"
              alt="Suasana festival dengan panggung dan pengunjung"
              loading="lazy"
            />
          </div>
          <div className="home-featured-project__content">
            <span className="home-featured-project__eyebrow">Featured Project</span>
            <h3>Bandung<br /><span>Festival</span></h3>
            <p>
              Sukses menghadirkan festival kota yang meriah melalui produksi acara,
              koordinasi talent, dan integrasi media lokal yang berdampak.
            </p>
            <ul className="home-featured-project__tags" aria-label="Layanan proyek">
              <li>Event Production</li>
              <li>Vendor Management</li>
              <li>Media Buying</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="home-section about-section" id="tentang">
      <div className="home-container">
        <SectionHeading>Tentang Kami</SectionHeading>
        <p className="about-intro home-reveal">PT Berkah Media Gemilang adalah perusahaan media yang didirikan pada tahun 2019. Kami berfokus pada Event Organizer, Media Buying, Event Production &amp; Logistik, serta Digital &amp; Social Media Management.</p>
        <div className="values-grid">
          {values.map((value) => (
            <article className={`value-card home-reveal value-card--${value.accent}`} key={value.title}>
              <span className="material-symbols-outlined" aria-hidden="true">{value.icon}</span>
              <h3>{value.title}</h3><p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading home-reveal"><span className="section-kicker">Let’s make it happen</span><h2>Ready to disrupt<br />the market?</h2><p>Drop us a line. Kami siap mengubah ide berani menjadi pengalaman berdampak.</p></div>
        <div className="contact-grid home-reveal">
          <div className="contact-form-card">
            <h3>Kirim Pesan</h3>
            <form onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
              <div className="contact-form-row">
                <label className="contact-field"><span>Nama *</span><input name="name" type="text" placeholder="Nama lengkap" autoComplete="name" required /></label>
                <label className="contact-field"><span>Email *</span><input name="email" type="email" placeholder="nama@email.com" autoComplete="email" required /></label>
              </div>
              <label className="contact-field"><span>Perusahaan</span><input name="company" type="text" placeholder="Nama perusahaan" autoComplete="organization" /></label>
              <label className="contact-field"><span>Ceritakan proyek Anda</span><textarea name="message" rows="5" placeholder="Ceritakan ide atau kebutuhan event Anda..." /></label>
              <div className="contact-form-footer"><button className="home-button home-button--red" type="submit">Kirim Pesan <span aria-hidden="true">→</span></button></div>
              {submitted && <p className="form-success" role="status">Terima kasih! Pesan Anda sudah kami terima.</p>}
            </form>
          </div>
          <aside className="contact-details" aria-label="Informasi kontak">
            <a className="contact-detail" href="mailto:hello@bmg.co.id"><span className="contact-detail__icon material-symbols-outlined" aria-hidden="true">mail</span><span><small>Email Us</small><strong>hello@bmg.co.id</strong></span><span className="contact-detail__arrow" aria-hidden="true">↗</span></a>
            <a className="contact-detail" href="https://wa.me/628110000000" target="_blank" rel="noreferrer"><span className="contact-detail__icon material-symbols-outlined" aria-hidden="true">chat</span><span><small>WhatsApp</small><strong>+62 811-0000-000</strong></span><span className="contact-detail__arrow" aria-hidden="true">↗</span></a>
            <div className="location-card"><div className="location-card__heading"><span><small>Headquarters</small><strong>Jakarta, Indonesia</strong></span><span className="location-pin material-symbols-outlined" aria-hidden="true">location_on</span></div><div className="location-map"><span className="location-map__label">BMG · JAKARTA</span><span className="location-map__pin material-symbols-outlined" aria-hidden="true">location_on</span></div><p>Gedung Gemilang Tower Lt. 14<br />Jl. Jend. Sudirman Kav. 88<br />Jakarta Pusat, 10220</p></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.home-page .home-reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      <ServicesSection />
      <FeaturedPortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}