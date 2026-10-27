import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us & Tender Inquiries | Morbi & Ahmedabad Facilities',
  description: 'Connect with Navyug Infragen for precast concrete procurement, RE retaining walls, fuel station turnkey construction, and commercial quotes across India. Delivered directly to ruchibudhelia1@gmail.com.',
  alternates: {
    canonical: 'https://navyuginfragen.com/contact',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://navyuginfragen.com/contact',
        url: 'https://navyuginfragen.com/contact',
        name: 'Contact Navyug Infragen Private Limited',
        description: 'Corporate headquarters and manufacturing plant contact points in Morbi and Ahmedabad, Gujarat.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://navyuginfragen.com/' },
          { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://navyuginfragen.com/contact' },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: 'Navyug Infragen Private Limited',
        image: 'https://navyuginfragen.com/assets/images/branding/navyug-logo-full.jpeg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Morbi',
          addressRegion: 'Gujarat',
          addressCountry: 'IN',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ======================================================================
          PAGE HERO / BREADCRUMB
          ====================================================================== */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/assets/images/about/factory-exterior.jpeg" alt="Contact Navyug Infragen" />
        </div>
        <div className="page-hero-overlay"></div>

        <div className="container page-hero-content">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact Us</span>
          </nav>
          <h1 className="page-hero-title">Let's Build Something Lasting Together</h1>
          <p className="page-hero-desc">
            Connect with our engineering and project teams for technical bill-of-quantities, custom mold specifications, certified lab reports, or tender procurement across India.
          </p>
          <div className="page-hero-badges">
            <span className="page-hero-pill highlight">Morbi Plant</span>
            <span className="page-hero-pill">Ahmedabad Facility</span>
            <span className="page-hero-pill">Rapid Turnaround</span>
            <span className="page-hero-pill">Pan-India Dispatch</span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          CONTACT DETAILS & FORM
          ====================================================================== */}
      <section className="section" id="contact-details">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-col">
              <div>
                <div className="section-tag">GET IN TOUCH / PROCUREMENT</div>
                <h2>Direct Factory &amp; Corporate Access</h2>
                <p>
                  Connect directly with our corporate engineering desk for precast product procurement, custom chequered tile specifications, RE wall retaining systems, or turnkey contract infrastructure works across India.
                </p>
              </div>

              <div className="contact-card">
                <h4>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Manufacturing Facilities
                </h4>
                <p>
                  <strong>Morbi Unit:</strong> State-of-the-art automated block plants and heavy Columbia machine lines.<br />
                  <strong>Ahmedabad Unit:</strong> High-capacity precast and central regional distribution facilities.
                </p>
              </div>

              <div className="contact-card">
                <h4>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Company Credentials
                </h4>
                <p>
                  <strong>Corporate Identity:</strong> Navyug Infragen Private Limited<br />
                  <strong>Group of Companies:</strong> Hi Tech Engineers &amp; Navyug Tiles<br />
                  <strong>Establishment:</strong> 1964 (64 Years of Expertise)<br />
                  <strong>ISI Certification:</strong> CM/L - 7900132116 (IS 15658)<br />
                  <strong>Quality Standard:</strong> First ISO-9001 in Saurashtra Kutch
                </p>
              </div>

              <div className="contact-card">
                <h4>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Corporate Communications
                </h4>
                <p>
                  <strong>Inquiry Routing:</strong> ruchibudhelia1@gmail.com<br />
                  <strong>Response Window:</strong> Within 24 Business Hours<br />
                  <strong>Project Dispatch:</strong> Pan-India Freight Support
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ======================================================================
          FINAL BRAND STATEMENT
          ====================================================================== */}
      <section className="closing-statement-section" id="brand-statement">
        <div className="container-narrow">
          <img src="/assets/images/branding/navyug-logo-closing.png" alt="Navyug Infragen Emblem" className="closing-logo" />
          <blockquote className="closing-quote">
            &ldquo;We turn creative ideas into reality, bringing innovation, precision, and commitment to every project we take on.
            With 64 years of expertise, we create concrete products that are market-ready and future-responsible, ensuring every solution we deliver supports a sustainable tomorrow.&rdquo;
          </blockquote>
          <div className="closing-tagline">
            INNOVATING CONCRETE. SUSTAINING FUTURES.
          </div>
        </div>
      </section>
    </>
  );
}
