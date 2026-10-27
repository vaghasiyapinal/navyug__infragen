import Link from 'next/link';
import StatsCounter from '../../components/StatsCounter';

export const metadata = {
  title: 'About Us | 60+ Years Precast Engineering Heritage',
  description: 'Established in 1964, Navyug Infragen is a premier Indian manufacturer of precast concrete products, paver blocks, and curb stones with units in Morbi and Ahmedabad.',
  alternates: {
    canonical: 'https://navyuginfragen.com/about',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://navyuginfragen.com/about',
        url: 'https://navyuginfragen.com/about',
        name: 'About Us | Navyug Infragen Private Limited',
        description: 'Company history, mission, vision, core values, accreditations, and achievements of Navyug Infragen since 1964.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://navyuginfragen.com/' },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://navyuginfragen.com/about' },
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
          PAGE HERO / BREADCRUMB
          ====================================================================== */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/assets/images/about/factory-exterior.jpeg" alt="Navyug Infragen Manufacturing Heritage" />
        </div>
        <div className="page-hero-overlay"></div>

        <div className="container page-hero-content">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Us</span>
          </nav>
          <h1 className="page-hero-title">Six Decades of Engineering Rigor &amp; Concrete Leadership</h1>
          <p className="page-hero-desc">
            Founded in 1964, Navyug Infragen has built an indelible legacy of manufacturing precision, national infrastructure partnerships, and groundbreaking sustainable materials across India.
          </p>
          <div className="page-hero-badges">
            <span className="page-hero-pill highlight">Established 1964</span>
            <span className="page-hero-pill">Morbi &amp; Ahmedabad Plants</span>
            <span className="page-hero-pill">First ISO-9001 in Region</span>
            <span className="page-hero-pill">ISI Certified (IS 15658)</span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          1. DETAILED HERITAGE & STORY
          ====================================================================== */}
      <section className="section bg-warm" id="heritage">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-col">
              <div className="section-tag">01 / OUR STORY</div>
              <h2>Pioneering Precast Concrete &amp; Infrastructure Since 1964</h2>

              <div className="heritage-highlight">
                <div className="heritage-year">1964</div>
                <div className="heritage-caption">
                  Established six decades ago, leading the transformation of India’s built environment with uncompromising quality and engineering rigor.
                </div>
              </div>

              <p>
                Established in 1964, <strong>Navyug Infragen</strong> is a leading and trusted manufacturer of high-quality paver blocks, curb stones, and cement-concrete products with world-class manufacturing units strategically located in <strong>Morbi and Ahmedabad</strong>, Gujarat.
              </p>
              <p>
                Our products are renowned across India for superior durability, structural consistency, and on-schedule nationwide delivery. Both manufacturing units maintain the highest industrial standards, including <strong>fully equipped in-house testing laboratories</strong>, <strong>ISI certification (IS 15658)</strong>, and <strong>ISO-9001 certification</strong>, coupled with stringent safety protocols for our workforce.
              </p>
              <p>
                Building upon our precast manufacturing leadership, we have expanded extensively into <strong>civil contract-based project services</strong>. Today, our teams execute turnkey fuel station construction, highway widening, container freight station yards, and large-scale Reinforced Earth (RE) retaining wall installations for India’s top infrastructure developers and petroleum corporations.
              </p>
              <p>
                We remain deeply committed to sustainability, pioneering <strong>Zero Cement Uncarbon Pavers recognized by Startup India</strong>, eco-friendly red clay formulations, and permeable grass pavers to build resilient, climate-conscious cities.
              </p>

              <div className="group-companies-bar">
                <div className="group-companies-label">Our Group of Companies</div>
                <div className="group-companies-names">Hi Tech Engineers &amp; Navyug Tiles</div>
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
          2. PURPOSE & PRINCIPLES
          ====================================================================== */}
      <section className="section" id="mission-vision">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">02 / PURPOSE &amp; PRINCIPLES</div>
            <h2>Guided by Purpose, Driven by Values</h2>
            <p>The foundational principles and guiding aspirations that inspire every block, retaining wall, and turnkey civil solution we engineer.</p>
          </div>

          <div className="mvv-layout">
            <div className="mv-cards-grid">
              <div className="mv-card">
                <div className="mv-tag">OUR VISION</div>
                <p className="mv-statement">
                  &ldquo;To be India's leading provider of innovative and sustainable infrastructure solutions, transforming the nation's built environment while preserving its natural resources for future generations.&rdquo;
                </p>
              </div>

              <div className="mv-card mission">
                <div className="mv-tag">OUR MISSION</div>
                <p className="mv-statement">
                  &ldquo;To expand our expertise into comprehensive infrastructure development, including highway construction, bridge building, and pioneering the development of environmentally responsible construction materials.&rdquo;
                </p>
              </div>
            </div>

            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.15rem', color: 'var(--color-text-muted)' }}>
                  Our Core Values
                </h3>
              </div>

              <div className="values-grid">
                <div className="value-card">
                  <div className="value-num">VALUE / 01</div>
                  <h4>EXCELLENCE</h4>
                  <p>Unrelenting commitment to engineering excellence and dimensional perfection in every aspect of our manufacturing operations.</p>
                </div>

                <div className="value-card">
                  <div className="value-num">VALUE / 02</div>
                  <h4>INNOVATION</h4>
                  <p>Continuously pushing material science forward through zero-cement geopolymer mixes and heavy-duty industrial machinery.</p>
                </div>

                <div className="value-card">
                  <div className="value-num">VALUE / 03</div>
                  <h4>SUSTAINABILITY</h4>
                  <p>Dedicated to developing low-carbon paving formulations that eliminate Portland cement and preserve precious natural resources.</p>
                </div>

                <div className="value-card">
                  <div className="value-num">VALUE / 04</div>
                  <h4>INTEGRITY</h4>
                  <p>Conducting business with total transparency, ethical commitments, lab-tested compliance, and zero project penalty delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. AWARDS & ACCREDITATIONS
          ====================================================================== */}
      <section className="section cert-section" id="certifications">
        <div className="container">
          <div className="cert-grid">
            <div>
              <div className="section-tag">03 / CREDIBILITY &amp; ACCREDITATION</div>
              <h2>Accreditations &amp; National Recognition</h2>
              <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
                We are proudly the <strong>first ISO-9001 as well as ISI certified</strong> pre-cast concrete manufacturer in the Saurashtra and Kutch region.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We have also been proud recipients of the prestigious <strong>Udyog Bharati Award</strong>, acknowledging our contributions to industrial development and rural employment.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Our products are trusted across premier civil contracts, highways, ports, and public infrastructure in India as well as select international projects. With one of the <strong>largest production capacities in West Gujarat</strong>, we stand at the forefront of the national <strong>Make in India</strong> mission.
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
                  alt="Startup India Certificate of Recognition for Uncarbon Pavers"
                />
                <div className="cert-view-hint">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Click to View Official Startup India Certificate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. PROUD ACHIEVEMENTS
          ====================================================================== */}
      <section className="section bg-dark" id="achievements">
        <div className="container">
          <div className="section-header">
            <div className="section-tag inverse">04 / PROUD ACHIEVEMENTS</div>
            <h2 style={{ color: '#FFFFFF' }}>Milestones of Engineering Leadership</h2>
            <p style={{ color: 'var(--color-gray-300)' }}>Proven capability across public tender compliance, massive daily production volumes, and flawless execution records.</p>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-badge">ACHIEVEMENT / 01</div>
              <h3>REGISTERED WITH ALL PETROLEUM GIANTS</h3>
              <p>
                Recognized as one of the elite precast concrete and civil engineering companies approved across IndianOil, Bharat Petroleum, HPCL, Jio-bp, and Nayara Energy for retail outlet forecourts and depot developments.
              </p>
            </div>

            <div className="achievement-card">
              <div className="achievement-badge">ACHIEVEMENT / 02</div>
              <h3>HIGHEST PRODUCTION CAPACITY IN WEST GUJARAT</h3>
              <p>
                Leading Saurashtra and Kutch with mechanized Columbia Machine plants, ensuring high-frequency automated output capable of fulfilling lakh-sq.ft. infrastructure orders on guaranteed schedules.
              </p>
            </div>

            <div className="achievement-card">
              <div className="achievement-badge">ACHIEVEMENT / 03</div>
              <h3>INNOVATION IN SUSTAINABILITY</h3>
              <p>
                Pioneered &ldquo;Zero Cement Paver Blocks&rdquo; (Uncarbon Pavers), drastically mitigating embodied carbon. Recognized officially by Startup India under the Ministry of Commerce and Industry.
              </p>
            </div>

            <div className="achievement-card">
              <div className="achievement-badge">ACHIEVEMENT / 04</div>
              <h3>TIMELY COMPLETION, ZERO PENALTY</h3>
              <p>
                Flawless completion track record on mega contracts like the 1,18,500 sq.m Patna Ring Road highway widening within 12 months, and 50,000 sq.ft. in 5 days at Morbi Police Station with zero liquidated damages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. NATIONWIDE SPREAD & FOOTPRINT
          ====================================================================== */}
      <section className="stats-section" id="stats">
        <div className="container">
          <div className="section-tag inverse">05 / PAN-INDIA FOOTPRINT</div>
          <h2 style={{ color: '#FFFFFF', marginBottom: '2.5rem', textAlign: 'center' }}>Infrastructure Impact in Numbers</h2>
          
          <StatsCounter />

          <div className="stats-national-footer">
            <div className="national-spread-badge">
              <span className="spread-tag">National Presence</span>
              <p style={{ color: 'var(--color-gray-200)', fontSize: '0.95rem', margin: 0 }}>
                Execution footprint spanning Gujarat, Maharashtra, Rajasthan, Bihar, and major industrial hubs across India.
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
          6. CALL TO ACTION BANNER
          ====================================================================== */}
      <section className="section">
        <div className="container">
          <div className="cta-banner-box">
            <div>
              <span className="section-tag" style={{ color: 'var(--color-primary-light)' }}>PARTNER WITH NAVYUG INFRAGEN</span>
              <h2 style={{ color: '#FFFFFF', margin: '0.5rem 0 1rem' }}>Ready to Discuss Your Next Infrastructure Project?</h2>
              <p style={{ color: 'var(--color-gray-300)', maxWidth: '650px', margin: 0 }}>
                From high-strength M-55 paver blocks and RE bridge retaining walls to turnkey fuel retail construction, our engineers deliver lab-certified results on time.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/products" className="btn btn-outline-white">Explore Products</Link>
              <Link href="/contact" className="btn btn-primary">Request Quotation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
