import { ArrowRight, Mail } from 'lucide-react';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';
import { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [emailAppOpened, setEmailAppOpened] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const company = formData.get('company') || '-';
    const email = formData.get('email');
    const phone = formData.get('phone');
    const collaborationType = formData.get('collaborationType') || '-';
    const timeline = formData.get('timeline') || '-';
    const details = formData.get('details') || '-';
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nWhatsApp / Phone: ${phone}\nService / Collaboration Type: ${collaborationType}\nEvent Date / Project Timeline: ${timeline}\n\nProject details:\n${details}`,
    );

    window.location.href = `mailto:hello@bmg.co.id?subject=${subject}&body=${body}`;
    setEmailAppOpened(true);
  };

  return (
    <>
      <title>{c.pageTitle}</title>
      <meta name="description" content={c.pageDescription} />
      <section className="contact-page" aria-labelledby="contact-heading">
        <div className="contact-container">
          <header className="contact-header" data-page-reveal>
            <h1 id="contact-heading">
              {c.heading1}
              <br />
              {c.heading2}
            </h1>
            <p className="contact-tagline">{c.tagline}</p>
          </header>

          <div className="contact-grid">
            <section className="contact-form-card" aria-labelledby="contact-form-heading" data-page-reveal>
              <h2 id="contact-form-heading">{c.formHeading}</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">{c.labelName} <span aria-hidden="true">*</span></label>
                    <input
                      autoComplete="name"
                      id="contact-name"
                      name="name"
                      placeholder={c.placeholderName}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-company">{c.labelCompany}</label>
                    <input
                      autoComplete="organization"
                      id="contact-company"
                      name="company"
                      placeholder={c.placeholderCompany}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">{c.labelEmail} <span aria-hidden="true">*</span></label>
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
                  <label htmlFor="contact-phone">{c.labelPhone} <span aria-hidden="true">*</span></label>
                  <input
                    autoComplete="tel"
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder={c.placeholderPhone}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-collaboration-type">{c.labelCollaborationType}</label>
                  <select id="contact-collaboration-type" name="collaborationType" defaultValue="">
                    <option value="">{c.placeholderCollaborationType}</option>
                    {c.collaborationOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-timeline">{c.labelTimeline}</label>
                  <input
                    id="contact-timeline"
                    name="timeline"
                    type="text"
                    placeholder={c.placeholderTimeline}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-details">{c.labelDetails}</label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows="4"
                    placeholder={c.placeholderDetails}
                  />
                </div>

                <button className="contact-submit" type="submit">
                  {c.submit} <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </button>
                {emailAppOpened && (
                  <p className="contact-form-status" role="status">
                    {c.statusMessage}
                  </p>
                )}
              </form>
            </section>

            <aside className="contact-details" aria-label={c.hqTitle}>
              <section className="contact-info-card" data-page-reveal>
                <span className="contact-info-icon contact-info-icon--blue" aria-hidden="true">
                  <Mail size={16} strokeWidth={1.75} />
                </span>
                <div>
                  <h2>{c.emailTitle}</h2>
                  <a href="mailto:hello@bmg.co.id">hello@bmg.co.id</a>
                </div>
              </section>

              <section className="contact-info-card" data-page-reveal>
                <span className="contact-info-icon contact-info-icon--red" aria-hidden="true">
                  <SiWhatsapp size={16} />
                </span>
                <div>
                  <h2>WhatsApp</h2>
                  <a href="https://wa.me/628112144113" target="_blank" rel="noopener noreferrer">
                    +62 811-2144-113
                  </a>
                </div>
              </section>

              <section className="contact-location-card" aria-labelledby="contact-location-heading" data-page-reveal>
                <div className="contact-location-header">
                  <h2 id="contact-location-heading">{c.hqTitle}</h2>
                  <span>Bandung, ID</span>
                </div>
                <div className="contact-map" aria-label={c.mapAriaLabel}>
                  <span className="contact-map-label" aria-hidden="true">{c.mapData}</span>
                  <span className="contact-map-pin" aria-hidden="true" />
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=Jl.%20Tamblong%20No.46%2C%20Kb.%20Pisang%2C%20Kec.%20Sumur%20Bandung%2C%20Bandung%2040112" target="_blank" rel="noopener noreferrer">
                  <address>
                    Jl. Tamblong No.46
                    <br />
                    Kb. Pisang, Kec. Sumur Bandung
                    <br />
                    Bandung 40112
                  </address>
                </a>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
