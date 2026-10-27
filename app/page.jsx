import Link from 'next/link';
import StatsCounter from '../components/StatsCounter';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Home | Navyug Infragen - Precast Concrete Products & Infrastructure Solutions',
  description: 'Navyug Infragen is an established Indian manufacturer of high-strength paver blocks, curb stones, RE retaining wall blocks, and turnkey civil infrastructure solutions since 1964.',
  alternates: {
    canonical: 'https://navyuginfragen.com/',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://navyuginfragen.com/#website',
        url: 'https://navyuginfragen.com/',
        name: 'Navyug Infragen Private Limited',
        description: 'Precast Concrete Products & Infrastructure Solutions Since 1964',
        publisher: { '@id': 'https://navyuginfragen.com/#organization' },
      },
      {
        '@type': 'Organization',
        '@id': 'https://navyuginfragen.com/#organization',
        name: 'Navyug Infragen Private Limited',
        url: 'https://navyuginfragen.com/',
        logo: 'https://navyuginfragen.com/assets/images/branding/navyug-logo-full.jpeg',
        foundingDate: '1964',
        award: [
          'First ISO-9001 in Saurashtra Kutch',
          'ISI Certified (IS 15658, CM/L - 7900132116)',
          'Udyog Bharati Award Winner',
          'Startup India Recognized Innovation (Uncarbon Pavers)',
        ],
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
          1. HERO SECTION
          ====================================================================== */}
      <section className="hero-section" id="hero">
        <div className="hero-bg">
          <img
            src="/assets/images/retaining-wall/tiered-highway-wall.jpeg"
            alt="Navyug Infragen Infrastructure Construction"
          />
        </div>
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-badge">
            <span>SINCE 1964</span> &bull; <span>PRECAST &amp; INFRASTRUCTURE EXCELLENCE</span>
          </div>
          <h1 className="hero-title">
            Innovating Concrete.<br />
            <span className="text-highlight">Sustaining Futures.</span>
          </h1>
          <p className="hero-desc">
            An established Indian manufacturer of high-strength precast concrete products and infrastructure solutions with state-of-the-art manufacturing units in Morbi and Ahmedabad.
          </p>
          <div className="hero-ctas">
            <Link href="/products" className="btn btn-primary">
              Explore Products
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/projects" className="btn btn-outline-white">
              View Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <a href="#stats" className="hero-scroll" aria-label="Scroll to statistics">
          <div className="hero-scroll-indicator"></div>
          <span>Scroll</span>
        </a>
      </section>

      {/* ======================================================================
          2. TRUST / NUMBERS SECTION
          ====================================================================== */}
      <section className="stats-section" id="stats">
        <div className="container">
          <div className="section-tag inverse">SPREAD ACROSS INDIA</div>
          
          <StatsCounter />

          <div className="stats-national-footer">
            <div className="national-spread-badge">
              <span className="spread-tag">Nationwide Footprint</span>
              <p style={{ color: 'var(--color-gray-200)', fontSize: '0.95rem', margin: 0 }}>
                Active project execution footprint spanning Gujarat, Maharashtra, Rajasthan, Bihar, and major infrastructure hubs across India.
              </p>
            </div>
            <a
              href="#spread-map"
              className="btn btn-outline-white btn-sm"
              data-lightbox
              data-src="/assets/images/about/india-spread-map.jpeg"
              data-caption="Navyug Infragen National Presence Map"
            >
              View Spread Map
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. ABOUT US TEASER
          ====================================================================== */}
      <section className="section bg-warm" id="about-teaser">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-col">
              <div className="section-tag">01 / HERITAGE &amp; VISION</div>
              <h2>Pioneering Precast Concrete &amp; Infrastructure Since 1964</h2>

              <div className="heritage-highlight">
                <div className="heritage-year">1964</div>
                <div className="heritage-caption">
                  Established six decades ago, leading the transformation of India’s built environment with uncompromising quality and engineering rigor.
                </div>
              </div>

              <p>
                Established in 1964, <strong>Navyug Infragen</strong> is a leading &amp; trusted manufacturer of high-quality paver blocks, curb stones, and cement-concrete products with manufacturing units in <strong>Morbi &amp; Ahmedabad</strong>.
              </p>
              <p>
                Our manufacturing facilities maintain strict quality benchmarks, including <strong>in-house laboratories for 6-point product testing</strong>, <strong>ISI certification (IS 15658)</strong>, and the <strong>first ISO-9001 certification in Saurashtra Kutch</strong>.
              </p>

              <div className="group-companies-bar">
                <div className="group-companies-label">Our Group of Companies</div>
                <div className="group-companies-names">Hi Tech Engineers &amp; Navyug Tiles</div>
              </div>

              <div style={{ marginTop: '1.75rem' }}>
                <Link href="/about" className="btn btn-secondary">
                  Read Full Story &amp; Credentials
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="about-visual-col">
              <figure>
                <img
                  src="/assets/images/about/factory-exterior.jpeg"
                  alt="Navyug Infragen Manufacturing Unit & Dispatch Yard"
                  className="about-img-main"
                  data-lightbox
                  data-caption="Navyug Infragen Manufacturing Unit & Transport Fleet"
                />
              </figure>
              <div className="about-img-subgrid">
                <img
                  src="/assets/images/about/paver-pattern-1.jpeg"
                  alt="Precision Manufactured Pavers"
                  data-lightbox
                  data-caption="Engineered Paver Patterns & Surface Integrity"
                />
                <img
                  src="/assets/images/about/paver-pattern-2.jpeg"
                  alt="Heavy-duty Interlocking Paver Blocks"
                  data-lightbox
                  data-caption="Heavy-Duty Interlocking Paver Blocks"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. CORE CAPABILITIES / SOLUTIONS PREVIEW
          ====================================================================== */}
      <section className="section" id="solutions-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">02 / CORE OFFERINGS</div>
            <h2>A Comprehensive Infrastructure Portfolio</h2>
            <p>Explore our specialized divisions covering certified precast products, sustainable geopolymer paving, and turnkey civil infrastructure execution.</p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-media" data-lightbox data-src="/assets/images/about/paver-pattern-1.jpeg" data-caption="Precast Concrete Paver Blocks">
                <img src="/assets/images/about/paver-pattern-1.jpeg" alt="Precast Concrete Paver Blocks" loading="lazy" />
                <span className="product-badge">Precast Cement</span>
              </div>
              <div className="product-info">
                <h3>High-Strength Paver Blocks</h3>
                <p>ISI certified (IS 15658) interlocking pavers engineered from M-30 to M-55 grade for heavy vehicular and industrial traffic.</p>
                <div style={{ marginTop: '1rem' }}>
                  <Link href="/products" className="btn btn-sm btn-secondary">View Product Line &rarr;</Link>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-media" data-lightbox data-src="/assets/images/projects/matheran-red-clay-pathway.jpeg" data-caption="Zero-Cement Green Pavers">
                <img src="/assets/images/projects/matheran-red-clay-pathway.jpeg" alt="Zero Cement Green Pavers" loading="lazy" />
                <span className="product-badge eco">Zero Cement Made</span>
              </div>
              <div className="product-info">
                <h3>Zero-Cement Uncarbon Pavers</h3>
                <p>Startup India recognized cement-free pavers drastically mitigating embodied carbon footprint in sustainable developments.</p>
                <div style={{ marginTop: '1rem' }}>
                  <Link href="/sustainability" className="btn btn-sm btn-secondary">Explore Sustainability &rarr;</Link>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-media" data-lightbox data-src="/assets/images/fuel-stations/bpcl-illuminated-evening.jpeg" data-caption="Turnkey Fuel Station EPC">
                <img src="/assets/images/fuel-stations/bpcl-illuminated-evening.jpeg" alt="Fuel Station Construction" loading="lazy" />
                <span className="product-badge contract">Turnkey EPC</span>
              </div>
              <div className="product-info">
                <h3>Turnkey Fuel Station Construction</h3>
                <p>Complete forecourt civil construction and paving approved by Reliance, IOCL, BPCL, HPCL, and Nayara Energy.</p>
                <div style={{ marginTop: '1rem' }}>
                  <Link href="/services" className="btn btn-sm btn-secondary">Explore Turnkey Services &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. SUSTAINABILITY SPOTLIGHT BANNER
          ====================================================================== */}
      <section className="section" id="sustainability-spotlight">
        <div className="container">
          <div className="sustainability-banner">
            <div className="sustainability-grid">
              <div className="sustainability-content">
                <div className="section-tag" style={{ color: '#8CE893' }}>03 / CLIMATE INNOVATION</div>
                <h2>BUILDING TODAY.<br />THINKING BEYOND TOMORROW.</h2>
                <p>
                  Navyug Infragen is actively pioneering environmentally responsible construction materials to lower the carbon footprint of India’s growing infrastructure. Our breakthroughs in zero-cement formulations and circular materials directly address climate sustainability.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Link href="/sustainability" className="btn btn-outline-white">
                    Learn About Uncarbon Pavers
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="sustainability-media">
                <img
                  src="/assets/images/projects/matheran-red-clay-terrace.jpeg"
                  alt="Zero Cement Red Clay Pavers in Matheran"
                  data-lightbox
                  data-caption="Matheran Eco-Friendly Supply - Zero Cement Red Clay Pavers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. ACCREDITATIONS & ISI MARK
          ====================================================================== */}
      <section className="section cert-section" id="certifications">
        <div className="container">
          <div className="cert-grid">
            <div>
              <div className="section-tag">04 / CREDIBILITY &amp; ACCREDITATION</div>
              <h2>Awards &amp; Accreditations</h2>
              <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
                We are proudly the <strong>first ISO-9001 as well as ISI certified</strong> pre-cast concrete in Saurashtra Kutch region.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Recipients of the prestigious <strong>Udyog Bharati Award</strong>, operating with one of the <strong>largest production capacities in West Gujarat</strong>.
              </p>

              <div className="cert-badges-grid">
                <div className="cert-badge-card">
                  <img
                    src="/assets/images/certifications/isi-mark.jpeg"
                    alt="ISI Mark IS 15658"
                    data-lightbox
                    data-caption="ISI Mark Certification (IS 15658, CM/L - 7900132116)"
                  />
                  <h4>ISI CERTIFIED</h4>
                  <p>IS 15658</p>
                  <span className="text-xs" style={{ color: 'var(--color-primary)', fontWeight: 700, marginTop: '0.25rem' }}>
                    CM/L - 7900132116
                  </span>
                </div>

                <div className="cert-badge-card">
                  <img
                    src="/assets/images/certifications/iso-9000.png"
                    alt="ISO 9000 Quality Management"
                    data-lightbox
                    data-caption="ISO-9001 Quality Management Certification"
                  />
                  <h4>ISO-9001</h4>
                  <p>Quality Management</p>
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                    First in Saurashtra Kutch
                  </span>
                </div>

                <div className="cert-badge-card">
                  <img
                    src="/assets/images/certifications/laghu-udyog-bharati.png"
                    alt="Laghu Udyog Bharati"
                    data-lightbox
                    data-caption="Laghu Udyog Bharati Award Recipient"
                  />
                  <h4>UDYOG BHARATI</h4>
                  <p>Award Recipient</p>
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                    Industrial Excellence
                  </span>
                </div>

                <div className="cert-badge-card">
                  <img
                    src="/assets/images/branding/navyug-logo-mark.png"
                    alt="Make in India Vision"
                    style={{ maxHeight: '50px', marginTop: '1rem' }}
                  />
                  <h4>MAKE IN INDIA</h4>
                  <p>Saurashtra &amp; Kutch</p>
                  <span className="text-xs" style={{ color: 'var(--color-primary)', fontWeight: 700, marginTop: '0.25rem' }}>
                    Largest Regional Capacity
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div
                className="startup-cert-preview"
                data-lightbox
                data-src="/assets/images/certifications/startup-india.jpeg"
                data-caption="Certificate of Recognition - Startup India (Ministry of Commerce and Industry)"
              >
                <img
                  src="/assets/images/certifications/startup-india.jpeg"
                  alt="Startup India Certificate of Recognition"
                />
                <div className="cert-view-hint">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Click to View Official Recognition Certificate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. FEATURED PROJECTS TEASER
          ====================================================================== */}
      <section className="section" id="featured-projects">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">05 / LANDMARK PROJECTS</div>
            <h2>Proven National Track Record</h2>
            <p>From deepwater container yards to NHAI highway expansions, explore our signature infrastructure deliveries.</p>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-media" data-lightbox data-src="/assets/images/projects/container-yard-expansive-1.jpeg" data-caption="CONCOR Logistics Hub, Vadodara">
                <img src="/assets/images/projects/container-yard-expansive-1.jpeg" alt="CONCOR Logistics Hub Vadodara" loading="lazy" />
                <span className="project-tag">Logistics &amp; Cargo</span>
              </div>
              <div className="project-info">
                <div className="project-location">Vadodara, Gujarat</div>
                <h3 className="project-title">CONCOR LOGISTICS HUB, VADODARA</h3>
                <p className="project-desc">
                  Executed manufacturing, supply, and laying of M-50 CC paver blocks across 2,75,000 sq.m. for Container Corporation of India Ltd.
                </p>
                <div className="project-metric-box">
                  2,75,000 sq.m. &bull; M-50 CC Grade
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-media" data-lightbox data-src="/assets/images/retaining-wall/subgrade-compaction.jpeg" data-caption="Patna Ring Road Expansion">
                <img src="/assets/images/retaining-wall/subgrade-compaction.jpeg" alt="Patna Ring Road Expansion" loading="lazy" />
                <span className="project-tag">National Highway</span>
              </div>
              <div className="project-info">
                <div className="project-location">Kanhauli to Ramnagar, Bihar</div>
                <h3 className="project-title">PATNA RING ROAD EXPANSION</h3>
                <p className="project-desc">
                  Supplied and installed 1,18,500 sq.m. for highway widening from 2-lane to 6-lane, completed within 12 months with zero penalty.
                </p>
                <div className="project-metric-box">
                  1,18,500 sq.m. &bull; Zero Penalty Completion
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-media" data-lightbox data-src="/assets/images/gallery/grid-tree-basin-paving.jpeg" data-caption="Dholera Smart City - Gujarat">
                <img src="/assets/images/gallery/grid-tree-basin-paving.jpeg" alt="Dholera Smart City Gujarat" loading="lazy" />
                <span className="project-tag">Smart City</span>
              </div>
              <div className="project-info">
                <div className="project-location">Dholera, Gujarat</div>
                <h3 className="project-title">DHOLERA SMART CITY</h3>
                <p className="project-desc">
                  Supplied customised, non-standard chequered tiles for L&amp;T for Honorable PM Modi’s visionary Dholera Smart City project.
                </p>
                <div className="project-metric-box">
                  Custom Chequered Tiles for L&amp;T
                </div>
              </div>
            </article>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/projects" className="btn btn-secondary">
              View All 10 Landmark Projects &amp; Galleries
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================================
          8. CLIENTELE
          ====================================================================== */}
      <section className="section bg-warm" id="clientele">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">06 / TRUSTED BY INDUSTRY LEADERS</div>
            <h2>Our Prestigious Clientele</h2>
            <p>Registered and approved supplier to India’s premier national petroleum giants, infrastructure conglomerates, and defense authorities.</p>
          </div>

          <div className="client-logos-grid">
            <div className="client-logo-card">
              <img src="/assets/images/clientele/bharat-petroleum.png" alt="Bharat Petroleum" />
              <span className="client-name-caption">Bharat Petroleum</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/indianoil.jpeg" alt="IndianOil" />
              <span className="client-name-caption">IndianOil</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/hp.png" alt="HP Petroleum" />
              <span className="client-name-caption">HP Petroleum</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/jio-bp.png" alt="Jio-bp" />
              <span className="client-name-caption">Jio-bp</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/nayara-energy.jpeg" alt="Nayara Energy" />
              <span className="client-name-caption">Nayara Energy</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/essar-oil-gas.jpeg" alt="Essar Oil & Gas" />
              <span className="client-name-caption">Essar Oil &amp; Gas</span>
            </div>

            <div className="client-logo-card">
              <img src="/assets/images/clientele/adani-gas.png" alt="Adani Gas" />
              <span className="client-name-caption">Adani Gas</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/adani-ports-logistics.png" alt="Adani Ports and Logistics" />
              <span className="client-name-caption">Adani Ports &amp; Logistics</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/larsen-toubro.png" alt="Larsen & Toubro" />
              <span className="client-name-caption">Larsen &amp; Toubro</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/indian-air-force.jpeg" alt="Indian Air Force" />
              <span className="client-name-caption">Indian Air Force</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/nhai-irb.png" alt="NHAI / IRB" />
              <span className="client-name-caption">NHAI / IRB</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/ashoka-buildcon.png" alt="Ashoka Buildcon Ltd." />
              <span className="client-name-caption">Ashoka Buildcon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          9. CLOSING BRAND STATEMENT
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

      {/* ======================================================================
          10. CONTACT TEASER & RFQ FORM
          ====================================================================== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-col">
              <div>
                <div className="section-tag">07 / GET IN TOUCH</div>
                <h2>Let's Build Something Lasting</h2>
                <p>
                  Connect with our engineering and project teams for precast product procurement, custom chequered tile specifications, RE wall retaining systems, or turnkey contract infrastructure works across India.
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
                  <strong>Morbi Unit:</strong> State-of-the-art automated block and Columbia machine lines.<br />
                  <strong>Ahmedabad Unit:</strong> High-capacity precast and central distribution facilities.
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
                  <strong>ISI Certification:</strong> CM/L - 7900132116 (IS 15658)
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
