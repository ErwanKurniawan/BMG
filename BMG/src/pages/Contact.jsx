import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [emailAppOpened, setEmailAppOpened] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const company = formData.get('company') || '-';
    const email = formData.get('email');
    const details = formData.get('details') || '-';
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nProject details:\n${details}`,
    );

    window.location.href = `mailto:hello@bmg.co.id?subject=${subject}&body=${body}`;
    setEmailAppOpened(true);
  };

  return (
    <>
      <title>Contact Us | Berkah Media Gemilang</title>
      <meta
        name="description"
        content="Ready to disrupt the market? Drop us a line. We turn bold ideas into high-impact reality. No fluff, just results."
      />
      <section className="contact-page" aria-labelledby="contact-heading">
        <div className="contact-container">
          <header className="contact-header">
            <h1 id="contact-heading">
              Ready to disrupt
              <br />
              the market?
            </h1>
            <p className="contact-tagline">
              Drop us a line. We turn bold ideas into high-impact reality. No fluff, just results.
            </p>
          </header>

          <div className="contact-grid">
            <section className="contact-form-card" aria-labelledby="contact-form-heading">
              <h2 id="contact-form-heading">Send a message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
                    <input
                      autoComplete="name"
                      id="contact-name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-company">Company</label>
                    <input
                      autoComplete="organization"
                      id="contact-company"
                      name="company"
                      placeholder="Disruptor Inc."
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
                  <input
                    autoComplete="email"
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-details">Project details</label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows="4"
                    placeholder="Tell us about your bold idea..."
                  />
                </div>

                <button className="contact-submit" type="submit">
                  Submit <span aria-hidden="true">→</span>
                </button>
                {emailAppOpened && (
                  <p className="contact-form-status" role="status">
                    Aplikasi email Anda sedang dibuka. Kirim pesan dari aplikasi tersebut untuk
                    menyelesaikan pengiriman.
                  </p>
                )}
              </form>
            </section>

            <aside className="contact-details" aria-label="Contact information">
              <section className="contact-info-card">
                <span className="contact-info-icon contact-info-icon--blue material-symbols-outlined" aria-hidden="true">
                  mail
                </span>
                <div>
                  <h2>Email us</h2>
                  <a href="mailto:hello@bmg.co.id">hello@bmg.co.id</a>
                </div>
              </section>

              <section className="contact-info-card">
                <span className="contact-info-icon contact-info-icon--red material-symbols-outlined" aria-hidden="true">
                  chat
                </span>
                <div>
                  <h2>WhatsApp</h2>
                  <a href="https://wa.me/628110000000" target="_blank" rel="noopener noreferrer">
                    +62 811-0000-000
                  </a>
                </div>
              </section>

              <section className="contact-location-card" aria-labelledby="contact-location-heading">
                <div className="contact-location-header">
                  <h2 id="contact-location-heading">HQ location</h2>
                  <span>Jakarta, ID</span>
                </div>
                <div className="contact-map" aria-label="Map illustration showing the Jakarta office location">
                  <span className="contact-map-label" aria-hidden="true">Map data</span>
                  <span className="contact-map-pin" aria-hidden="true" />
                </div>
                <address>
                  Gedung Gemilang Tower Lt. 14
                  <br />
                  Jl. Jend. Sudirman Kav. 88
                  <br />
                  Jakarta Pusat, 10220
                </address>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
