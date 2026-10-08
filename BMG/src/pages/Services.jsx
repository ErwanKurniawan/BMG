import './Services.css';

const contactUrl = '/#contact';

function ServicesPage() {
  return (
    <>
      <title>Layanan | Berkah Media Gemilang</title>
      <meta name="description" content="Tiga pilar layanan utama Berkah Media Gemilang: Media Buying, Event Production, dan Digital Reach." />
    <div className="services-page">
      <div className="services-page__container">
        <header className="services-intro">
          <span className="services-intro__bar" aria-hidden="true" />
          <div>
            <span className="services-eyebrow">BMG / What we do</span>
            <h1>Kekuatan<br /><span>Eksekusi.</span></h1>
            <p>Kami tidak hanya merencanakan. Kami mendominasi ruang gema. Tiga pilar layanan utama kami dirancang untuk impact maksimal, asimetris, dan tak terlupakan.</p>
          </div>
        </header>

        <section className="service-feature-grid" aria-label="Layanan utama Berkah Media Gemilang">
          <article className="service-feature service-feature--media">
            <div className="service-feature__image">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" alt="Tim bekerja menyusun strategi media" />
              <span className="service-image-label">01 / STRATEGY</span>
            </div>
            <div className="service-feature__body">
              <div className="service-tags"><span>Strategic</span><span>ROI Focused</span></div>
              <h2>Media Buying</h2>
              <p>Penempatan presisi tinggi. Kami menguasai negosiasi ruang media untuk memastikan brand Anda mendominasi lanskap visual dengan efisiensi anggaran maksimal.</p>
              <a className="service-text-link" href={contactUrl}>Pelajari Lebih Lanjut <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <article className="service-feature service-feature--digital">
            <div className="service-feature__digital-content">
              <span className="service-feature__index">02 / AMPLIFICATION</span>
              <span className="material-symbols-outlined service-feature__icon" aria-hidden="true">moving</span>
              <h2>Digital Reach</h2>
              <p>Membangun gema di ruang digital. Amplifikasi kampanye media sosial yang menembus noise algoritma dan menciptakan interaksi organik bernilai tinggi.</p>
              <a className="service-digital-link" href={contactUrl}>Explore Digital <span aria-hidden="true">↗</span></a>
              <span className="service-feature__orbit" aria-hidden="true" />
            </div>
          </article>
        </section>

        <article className="service-production">
          <div className="service-production__copy">
            <span className="service-feature__index">03 / EXECUTION</span>
            <div className="service-tags service-tags--light"><span>Logistics</span><span>Staging</span><span>Vendor Management</span></div>
            <h2>Event<br />Production</h2>
            <p>Dari konsep hingga standing ovation. Kami menangani seluruh siklus produksi acara, dari logistik, panggung, hingga manajemen vendor, memastikan eksekusi lapangan yang tak tertandingi dan penuh energi.</p>
            <a className="service-production__link" href="/portfolio">Lihat Portofolio Event <span aria-hidden="true">→</span></a>
          </div>
          <div className="service-production__image">
            <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85" alt="Produksi event musik dengan panggung dan penonton" loading="lazy" />
            <span className="service-image-label">LIVE / IN THE MOMENT</span>
          </div>
        </article>

        <section className="services-cta">
          <span className="services-eyebrow">Make some noise</span>
          <h2>Siap Mendominasi?</h2>
          <p>Jangan biarkan brand Anda tenggelam dalam kebisingan. Mari diskusikan strategi agresif untuk kampanye Anda berikutnya.</p>
          <a href={contactUrl}>Mulai Proyek Anda <span aria-hidden="true">→</span></a>
        </section>
      </div>
    </div>
    </>
  );
}

export default ServicesPage;
