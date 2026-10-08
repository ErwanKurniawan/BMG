import { useMemo, useState } from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'Bandung Festival Liem', category: 'event', label: 'EVENT · 2026', wide: true,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    alt: 'Suasana festival dengan panggung dan pengunjung',
    description: 'Produksi festival budaya dan kreatif berskala besar, mulai dari branding, produksi acara, hingga penempatan media.',
  },
  {
    title: 'Urban Soundscapes', category: 'media', label: 'MEDIA',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85',
    alt: 'Pertunjukan musik dengan pencahayaan panggung',
    description: 'Kampanye media dan digital OOH untuk rangkaian musik independen di pusat kota.',
  },
  {
    title: 'TechXpo Hub', category: 'digital', label: 'DIGITAL',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    alt: 'Komponen teknologi dan sirkuit elektronik',
    description: 'Pengalaman digital interaktif untuk membantu pengunjung menjelajahi pameran teknologi.',
  },
  {
    title: 'NextGen Product Launch', category: 'event', label: 'EVENT · LAUNCH', wide: true,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85',
    alt: 'Acara peluncuran produk di dalam ruangan',
    description: 'Peluncuran produk dengan desain ruang khusus, produksi panggung, dan pengalaman media yang imersif.',
  },
  {
    title: 'City Lights Campaign', category: 'media', label: 'MEDIA',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
    alt: 'Pemandangan kota pada malam hari',
    description: 'Perencanaan media luar ruang yang menjangkau audiens di berbagai titik strategis kota.',
  },
  {
    title: 'Beyond The Venue', category: 'digital', label: 'DIGITAL',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85',
    alt: 'Konser musik dengan audiens yang memenuhi venue',
    description: 'Aktivasi sosial media yang memperpanjang pengalaman event sebelum dan sesudah acara.',
  },
];

const filters = [
  { id: 'all', label: 'Semua Proyek' },
  { id: 'event', label: 'Event' },
  { id: 'media', label: 'Media' },
  { id: 'digital', label: 'Digital' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === 'all' || project.category === filter),
    [filter],
  );
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <>
      <title>Portofolio | Berkah Media Gemilang</title>
      <meta name="description" content="Jelajahi proyek event, media, dan digital Berkah Media Gemilang." />
      <div className="portfolio-page">
        <section className="portfolio-section">
          <div className="portfolio-container">
            <div className="portfolio-header">
              <div><span className="section-kicker">Ideas into impact</span><h1>Our<br /><span>Portofolio</span></h1></div>
              <p>Karya-karya berani, eksekusi kreatif, dan hasil yang nyata. Lihat bagaimana kami menghidupkan visi menjadi pengalaman yang berkesan.</p>
            </div>
            <div className="portfolio-filters" aria-label="Filter proyek portofolio">
              {filters.map((item) => (
                <button className={filter === item.id ? 'portfolio-filter is-active' : 'portfolio-filter'} key={item.id} onClick={() => { setFilter(item.id); setShowAll(false); }} type="button" aria-pressed={filter === item.id}>{item.label}</button>
              ))}
            </div>
            <div className="portfolio-grid" aria-live="polite">
              {visibleProjects.map((project) => (
                <article className={`portfolio-card ${project.wide && filter === 'all' ? 'portfolio-card--wide' : ''}`} key={project.title}>
                  <div className="portfolio-card__image">
                    <span className="portfolio-card__badge">{project.label}</span>
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  </div>
                  <div className="portfolio-card__body"><span className="portfolio-card__category">{project.category} / BMG</span><h2>{project.title}</h2><p>{project.description}</p></div>
                </article>
              ))}
            </div>
            {filteredProjects.length > 4 && !showAll && <div className="portfolio-more"><button className="home-button home-button--blue" onClick={() => setShowAll(true)} type="button">Lihat Proyek Lainnya <span aria-hidden="true">↓</span></button></div>}
          </div>
        </section>
      </div>
    </>
  );
}
