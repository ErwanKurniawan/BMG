import { useMemo, useState } from 'react';
import './Portfolio.css';
import { useLanguage } from '../i18n/LanguageContext';

const projectImages = [
  '/images/portfolio/bandung-festival-2026.webp',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85',
];

export default function Portfolio() {
  const { t } = useLanguage();
  const p = t.portfolio;

  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Merge image URLs into translated project list
  const projects = useMemo(
    () => p.projects.map((proj, i) => ({ ...proj, image: projectImages[i] })),
    [p.projects],
  );

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === 'all' || project.category === filter),
    [filter, projects],
  );
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <>
      <title>{p.pageTitle}</title>
      <meta name="description" content={p.pageDescription} />
      <div className="portfolio-page">
        <section className="portfolio-section">
          <div className="portfolio-container">
            <div className="portfolio-header" data-page-reveal>
              <div>
                <span className="section-kicker">{p.kicker}</span>
                <h1>{p.heading1}<br /><span>{p.heading2}</span></h1>
              </div>
              <p>{p.subheading}</p>
            </div>
            <div className="portfolio-filters" aria-label={p.filterAriaLabel} data-page-reveal>
              {p.filters.map((item) => (
                <button
                  className={filter === item.id ? 'portfolio-filter is-active' : 'portfolio-filter'}
                  key={item.id}
                  onClick={() => { setFilter(item.id); setShowAll(false); }}
                  type="button"
                  aria-pressed={filter === item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="portfolio-grid" aria-live="polite">
              {visibleProjects.map((project) => (
                <article
                  className={`portfolio-card ${project.wide && filter === 'all' ? 'portfolio-card--wide' : ''}`}
                  key={project.title}
                  data-page-reveal
                >
                  <div className="portfolio-card__image">
                    <span className="portfolio-card__badge">{project.label}</span>
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  </div>
                  <div className="portfolio-card__body">
                    <span className="portfolio-card__category">{project.category} / BMG</span>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
            {filteredProjects.length > 4 && !showAll && (
              <div className="portfolio-more">
                <button
                  className="home-button home-button--blue"
                  onClick={() => setShowAll(true)}
                  type="button"
                >
                  {p.showMore} <span aria-hidden="true">↓</span>
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
