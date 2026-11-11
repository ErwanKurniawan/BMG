import { ArrowRight, ArrowUpRight, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';
import { useLanguage } from '../i18n/LanguageContext';

const contactUrl = '/#contact';

function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      <title>{s.pageTitle}</title>
      <meta name="description" content={s.pageDescription} />
      <div className="services-page">
        <div className="services-page__container">
          <header className="services-intro" data-page-reveal>
            <span className="services-intro__bar" aria-hidden="true" />
            <div>
              <span className="services-eyebrow">{s.eyebrow}</span>
              <h1>{s.heroTitle1}<br /><span>{s.heroTitle2}</span></h1>
              <p>{s.heroBody}</p>
            </div>
          </header>

          <section className="service-feature-grid" aria-label={`${s.media.title}, ${s.digital.title} Berkah Media Gemilang`}>
            <article className="service-feature service-feature--media" data-page-reveal>
              <div className="service-feature__image">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" alt={s.media.imgAlt} />
                <span className="service-image-label">01 / STRATEGY</span>
              </div>
              <div className="service-feature__body">
                <div className="service-tags">
                  {s.media.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <h2>{s.media.title}</h2>
                <p>{s.media.body}</p>
                <Link className="service-text-link" to={contactUrl}>{s.media.link} <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" /></Link>
              </div>
            </article>

            <article className="service-feature service-feature--digital" data-page-reveal>
              <div className="service-feature__digital-content">
                <span className="service-feature__index">02 / AMPLIFICATION</span>
                <Truck className="service-feature__icon" size={42} strokeWidth={1.5} aria-hidden="true" />
                <h2>{s.digital.title}</h2>
                <p>{s.digital.body}</p>
                <Link className="service-digital-link" to={contactUrl}>{s.digital.link} <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" /></Link>
                <span className="service-feature__orbit" aria-hidden="true" />
              </div>
            </article>
          </section>

          <article className="service-production" data-page-reveal>
            <div className="service-production__copy">
              <span className="service-feature__index">03 / EXECUTION</span>
              <div className="service-tags service-tags--light">
                {s.production.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <h2>{s.production.title1}<br />{s.production.title2}</h2>
              <p>{s.production.body}</p>
              <Link className="service-production__link" to="/portfolio">{s.production.link} <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" /></Link>
            </div>
            <div className="service-production__image">
              <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85" alt={s.production.imgAlt} loading="lazy" />
              <span className="service-image-label">LIVE / IN THE MOMENT</span>
            </div>
          </article>

          <section className="services-cta" data-page-reveal>
            <span className="services-eyebrow">{s.cta.eyebrow}</span>
            <h2>{s.cta.title}</h2>
            <p>{s.cta.body}</p>
            <Link to={contactUrl}>{s.cta.link} <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" /></Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
