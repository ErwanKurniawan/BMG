import { ArrowRight, ArrowUpRight, Asterisk, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';
import { useLanguage } from '../i18n/LanguageContext';

const missionIcons = [Zap, ArrowUpRight, Asterisk];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <title>{a.pageTitle}</title>
      <meta name="description" content={a.pageDescription} />
      <div className="about-page">
        <section className="about-hero" aria-labelledby="about-title" data-page-reveal>
          <div className="about-container about-hero__grid">
            <div className="about-hero__copy">
              <span className="about-eyebrow">{a.eyebrow}</span>
              <h1 id="about-title">{a.heroTitle1} <span>{a.heroTitle2}</span></h1>
              <p className="about-hero__lead">{a.heroLead}</p>
              <div className="about-hero__actions">
                <Link className="about-button" to="/layanan">
                  {a.servicesLink} <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </Link>
                <span className="about-hero__note">{a.heroNote}</span>
              </div>
            </div>

            <div className="about-visual">
              <div className="about-visual__frame">
                <img
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85"
                  alt={a.imageAlt}
                />
                <span className="about-visual__label">{a.imageLabel}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-purpose" aria-label={`${a.visionTitle} ${a.missionTitle} Berkah Media Gemilang`}>
          <div className="about-container about-purpose__grid">
            <article className="about-purpose-card about-purpose-card--vision" data-page-reveal>
              <span className="about-purpose-card__eyebrow">{a.visionEyebrow}</span>
              <h2>{a.visionTitle}</h2>
              <p>{a.visionBody}</p>
              <span className="about-purpose-card__index" aria-hidden="true">01</span>
            </article>

            <article className="about-purpose-card about-purpose-card--mission" data-page-reveal>
              <span className="about-purpose-card__eyebrow">{a.missionEyebrow}</span>
              <h2>{a.missionTitle}</h2>
              <ul>
                {a.missions.map((mission, index) => {
                  const MissionIcon = missionIcons[index];
                  return (
                    <li key={mission}>
                      <span className="about-mission-icon" aria-hidden="true">
                        <MissionIcon size={19} strokeWidth={2} />
                      </span>
                      <p>{mission}</p>
                    </li>
                  );
                })}
              </ul>
              <span className="about-purpose-card__index" aria-hidden="true">02</span>
            </article>
          </div>
        </section>

        <section className="about-cta" data-page-reveal>
          <div className="about-container about-cta__inner">
            <div>
              <span className="about-eyebrow">{a.ctaEyebrow}</span>
              <h2>{a.ctaTitle}</h2>
            </div>
            <Link className="about-button about-button--light" to="/#contact">
              {a.ctaLink} <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
