import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';
import { useLanguage } from '../i18n/LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <>
      <title>{p.pageTitle}</title>
      <meta name="description" content={p.pageDescription} />

      <div className="privacy-page">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="privacy-hero" aria-labelledby="privacy-heading" data-page-reveal>
          <div className="privacy-container privacy-hero__inner">

            <Link to="/" className="privacy-back-link">
              {p.backLink}
            </Link>

            <span className="privacy-hero__badge">
              <span className="material-symbols-outlined" aria-hidden="true">gavel</span>
              {p.badge}
            </span>

            <h1 id="privacy-heading" className="privacy-hero__title">
              {p.title}<br />
              <span>{p.titleAccent}</span>
            </h1>

            <p className="privacy-hero__meta">{p.lastUpdated}</p>
          </div>
        </section>

        <section className="privacy-intro-section" aria-label={p.title} data-page-reveal>
          <div className="privacy-container">
            {p.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
