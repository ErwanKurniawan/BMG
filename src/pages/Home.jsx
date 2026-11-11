import { useEffect, useState } from 'react';
import './Home.css';
import { useLanguage } from '../i18n/LanguageContext';

const serviceIcons = ['campaign', 'celebration', 'share'];
const serviceClasses = ['service-card--blue', 'service-card--red', 'service-card--yellow'];
const valueIcons = ['precision_manufacturing', 'bolt', 'design_services', 'handshake'];
const valueAccents = ['blue', 'red', 'dark', 'dark'];

function SectionHeading({ children, accent = 'red' }) {
  return <div className={`section-heading section-heading--${accent} home-reveal`}><h2>{children}</h2></div>;
}

function HeroSection({ t }) {
  const h = t.home.hero;
  return (
    <section className="home-hero" id="home">
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <div className="home-hero__title-wrap home-hero-enter">
            <h1 className="home-hero__title">
              Amplifying<br /><span>Brands.</span><br />
              Igniting<br className="home-hero__mobile-break" /> <strong>Events.</strong>
            </h1>
          </div>
          <p className="home-hero__description home-hero-enter home-hero-enter--second">{h.description}</p>
          <a className="home-button home-button--light home-hero-enter home-hero-enter--third" href="#contact">
            {h.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-brand-card home-hero-enter home-hero-enter--card" aria-label={`Berkah Media Gemilang, ${h.founded}`}>
          <div className="hero-brand-card__backdrop" />
          <div className="hero-brand-card__content">
            <img src="/images/logo/bmg-mark.png" alt="Logo Berkah Media Gemilang" />
            <span className="hero-brand-card__name">Berkah Media Gemilang</span>
          </div>
        </div>
      </div>
      <span className="hero-side-note" aria-hidden="true">{h.sideBadge}</span>
    </section>
  );
}

function ServicesSection({ t }) {
  const s = t.home.services;
  return (
    <section className="home-section services-section" id="layanan">
      <div className="home-container">
        <SectionHeading>{s.heading}</SectionHeading>
        <div className="services-grid">
          {s.items.map((service, index) => (
            <article className={`service-card home-reveal ${serviceClasses[index]}`} key={service.title}>
              <div className="service-card__visual">
                <span className="material-symbols-outlined" aria-hidden="true">{serviceIcons[index]}</span>
              </div>
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

function FeaturedPortfolioSection({ t }) {
  const p = t.home.portfolio;
  return (
    <section className="home-portfolio" id="portofolio" aria-labelledby="home-portfolio-title">
      <div className="home-container">
        <div className="home-portfolio__heading home-reveal">
          <span className="home-portfolio__bar" aria-hidden="true" />
          <h2 id="home-portfolio-title">{p.heading}</h2>
        </div>
        <article className="home-featured-project home-reveal">
          <div className="home-featured-project__image">
            <img
              src="/images/portfolio/bandung-festival-2026.webp"
              alt={p.altImage}
              loading="lazy"
            />
          </div>
          <div className="home-featured-project__content">
            <span className="home-featured-project__eyebrow">{p.featuredLabel}</span>
            <h3>{p.featuredTitle1}<br /><span>{p.featuredTitle2}</span></h3>
            <p>{p.featuredDescription}</p>
            <ul className="home-featured-project__tags" aria-label={p.heading}>
              {p.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function AboutSection({ t }) {
  const a = t.home.about;
  return (
    <section className="home-section about-section" id="tentang">
      <div className="home-container">
        <SectionHeading>{a.heading}</SectionHeading>
        <p className="about-intro home-reveal">{a.intro}</p>
        <div className="values-grid">
          {a.values.map((value, index) => (
            <article className={`value-card home-reveal value-card--${valueAccents[index]}`} key={value.title}>
              <span className="material-symbols-outlined" aria-hidden="true">{valueIcons[index]}</span>
              <h3>{value.title}</h3><p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  const c = t.home.contact;
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading home-reveal">
          <span className="section-kicker">{c.kicker}</span>
          <h2>{c.heading1}<br />{c.heading2}</h2>
          <p>{c.subheading}</p>
        </div>
        <div className="contact-grid home-reveal">
          <div className="contact-form-card">
            <h3>{c.formTitle}</h3>
            <form onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
              <div className="contact-form-row">
                <label className="contact-field">
                  <span>{c.labelName}</span>
                  <input name="name" type="text" placeholder={c.placeholderName} autoComplete="name" required />
                </label>
                <label className="contact-field">
                  <span>{c.labelEmail}</span>
                  <input name="email" type="email" placeholder="nama@email.com" autoComplete="email" required />
                </label>
              </div>
              <label className="contact-field">
                <span>{c.labelCompany}</span>
                <input name="company" type="text" placeholder={c.placeholderCompany} autoComplete="organization" />
              </label>
              <label className="contact-field">
                <span>{c.labelMessage}</span>
                <textarea name="message" rows="5" placeholder={c.placeholderMessage} />
              </label>
              <div className="contact-form-footer">
                <button className="home-button home-button--red" type="submit">
                  {c.submit} <span aria-hidden="true">→</span>
                </button>
              </div>
              {submitted && <p className="form-success" role="status">{c.successMessage}</p>}
            </form>
          </div>
          <aside className="contact-details" aria-label={c.hqLabel}>
            <a className="contact-detail" href="mailto:hello@bmg.co.id">
              <span className="contact-detail__icon material-symbols-outlined" aria-hidden="true">mail</span>
              <span><small>{c.emailLabel}</small><strong>hello@bmg.co.id</strong></span>
              <span className="contact-detail__arrow" aria-hidden="true">↗</span>
            </a>
            <a className="contact-detail" href="https://wa.me/628112144113" target="_blank" rel="noreferrer">
              <span className="contact-detail__icon material-symbols-outlined" aria-hidden="true">chat</span>
              <span><small>{c.waLabel}</small><strong>+62 811-2144-113</strong></span>
              <span className="contact-detail__arrow" aria-hidden="true">↗</span>
            </a>
            <div className="location-card">
              <div className="location-card__heading">
                <span><small>{c.hqLabel}</small><strong>{c.hqCity}</strong></span>
                <span className="location-pin material-symbols-outlined" aria-hidden="true">location_on</span>
              </div>
              <div className="location-map">
                <span className="location-map__label">BMG · BANDUNG</span>
                <span className="location-map__pin material-symbols-outlined" aria-hidden="true">location_on</span>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Jl.%20Tamblong%20No.46%2C%20Kb.%20Pisang%2C%20Kec.%20Sumur%20Bandung%2C%20Bandung%2040112" target="_blank" rel="noopener noreferrer">
                <p>Jl. Tamblong No.46<br />Kb. Pisang, Kec. Sumur Bandung<br />Bandung 40112</p>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { lang, t } = useLanguage();

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
  }, [lang]);

  return (
    <div className="home-page">
      <HeroSection t={t} />
      <ServicesSection t={t} />
      <FeaturedPortfolioSection t={t} />
      <AboutSection t={t} />
      <ContactSection t={t} />
    </div>
  );
}