import { Link } from 'react-router-dom';
import './About.css';

const missions = [
  'Menghadirkan eksekusi event berskala besar dengan perencanaan matang dan presisi tinggi.',
  'Mengoptimalkan hasil media buying melalui strategi berbasis data yang terukur.',
  'Membangun kemitraan yang transparan, kuat, dan saling menguntungkan sekaligus oke banget.',
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-container about-hero__grid">
          <div className="about-hero__copy">
            <span className="about-eyebrow">Tentang Berkah Media Gemilang</span>
            <h1 id="about-title">Menggerakkan <span>industri.</span></h1>
            <p className="about-hero__lead">
              Kami adalah arsitek di balik layar. Sebuah powerhouse media buying dan event production yang
              mengubah ide berani menjadi eksekusi presisi tinggi—dengan energi yang tak mudah dilupakan.
            </p>
            <div className="about-hero__actions">
              <Link className="about-button" to="/layanan">
                Kenali layanan kami <span aria-hidden="true">→</span>
              </Link>
              <span className="about-hero__note">Precision media. Raw energy.</span>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-visual__frame">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85"
                alt="Panggung event dengan sorot lampu dan suasana yang energik"
              />
              <span className="about-visual__label">Ideas into impact / BMG</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-purpose" aria-label="Visi dan misi Berkah Media Gemilang">
        <div className="about-container about-purpose__grid">
          <article className="about-purpose-card about-purpose-card--vision">
            <span className="about-purpose-card__eyebrow">Tujuan utama</span>
            <h2>Visi</h2>
            <p>
              Menjadi episentrum inovasi media dan event di Asia Tenggara, tempat kreativitas berani bertemu
              dengan strategi dan analitik yang tajam. Kami tidak sekadar mengikuti tren—kami ikut membentuknya.
            </p>
            <span className="about-purpose-card__index" aria-hidden="true">01</span>
          </article>

          <article className="about-purpose-card about-purpose-card--mission">
            <span className="about-purpose-card__eyebrow">Cara kami bergerak</span>
            <h2>Misi</h2>
            <ul>
              {missions.map((mission, index) => (
                <li key={mission}>
                  <span aria-hidden="true">{['⚡', '↗', '✳'][index]}</span>
                  <p>{mission}</p>
                </li>
              ))}
            </ul>
            <span className="about-purpose-card__index" aria-hidden="true">02</span>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container about-cta__inner">
          <div>
            <span className="about-eyebrow">Punya ide besar?</span>
            <h2>Mari wujudkan sesuatu yang berdampak.</h2>
          </div>
          <Link className="about-button about-button--light" to="/#contact">
            Mulai kolaborasi <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
