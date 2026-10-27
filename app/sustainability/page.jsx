import Link from 'next/link';

export const metadata = {
  title: 'Sustainability & Zero Cement Uncarbon Pavers | Green Infrastructure',
  description: 'Pioneering green precast concrete: Startup India recognized Zero-Cement Uncarbon Pavers, Matheran eco-sensitive red clay pavers, industrial fly ash recycling, and stormwater permeable grass pavers.',
  alternates: {
    canonical: 'https://navyuginfragen.com/sustainability',
  },
};

export default function SustainabilityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://navyuginfragen.com/sustainability',
        url: 'https://navyuginfragen.com/sustainability',
        name: 'Sustainability & Green Concrete Innovation | Navyug Infragen',
        description: 'Zero Cement Uncarbon Pavers, circular economy materials, and eco-sensitive infrastructure.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://navyuginfragen.com/' },
          { '@type': 'ListItem', position: 2, name: 'Sustainability', item: 'https://navyuginfragen.com/sustainability' },
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
          <img src="/assets/images/projects/matheran-red-clay-terrace.jpeg" alt="Green Precast Concrete Sustainability" />
        </div>
        <div className="page-hero-overlay"></div>

        <div className="container page-hero-content">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Sustainability</span>
          </nav>
          <h1 className="page-hero-title">Building Today. Thinking Beyond Tomorrow.</h1>
          <p className="page-hero-desc">
            Concrete accounts for approximately 8% of global carbon emissions. Navyug Infragen is pioneering zero-cement formulations and circular materials to decouple infrastructure growth from carbon intensity.
          </p>
          <div className="page-hero-badges">
            <span className="page-hero-pill highlight">Zero-Cement Uncarbon Pavers</span>
            <span className="page-hero-pill">Startup India Recognized</span>
            <span className="page-hero-pill">Matheran Eco-Zone Supply</span>
            <span className="page-hero-pill">Thermal Fly Ash Valorization</span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          1. SUSTAINABILITY PILLARS
          ====================================================================== */}
      <section className="section" id="sustainability-core">
        <div className="container">
          <div className="sustainability-banner">
            <div className="sustainability-grid">
              <div className="sustainability-content">
                <div className="section-tag" style={{ color: '#8CE893' }}>01 / SUSTAINABLE MANUFACTURING</div>
                <h2>RADICAL CARBON REDUCTION IN PRECAST INFRASTRUCTURE</h2>
                <p>
                  Navyug Infragen is actively pioneering environmentally responsible construction materials to lower the carbon footprint of India’s growing infrastructure. Our breakthroughs in zero-cement formulations and circular materials directly address climate sustainability.
                </p>

                <div className="sustainability-pillars">
                  <div className="pillar-item">
                    <div className="pillar-title">Zero Cement Paver Blocks</div>
                    <div className="pillar-desc">
                      Also known as <strong>&ldquo;Uncarbon Pavers&rdquo;</strong>, engineered without Portland cement, earning official Startup Certificate recognition from <strong>Startup India (Ministry of Commerce and Industry)</strong>.
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-title">Red Clay Pavers Innovation</div>
                    <div className="pillar-desc">
                      Supplied eco-friendly, cement-free red clay blocks for the entire eco-sensitive <strong>Matheran region</strong>, preserving natural ecosystems under the Make in India initiative.
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-title">Fly Ash Valorization</div>
                    <div className="pillar-desc">
                      High-volume utilization of thermal power station fly ash in bricks and blocks, preventing virgin topsoil depletion and conserving raw aggregates.
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-title">Permeable Water Infiltration</div>
                    <div className="pillar-desc">
                      Grass pavers designed to restore groundwater tables, mitigate urban flooding, and create green urban open spaces.
                    </div>
                  </div>
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
          2. MATHERAN CASE STUDY
          ====================================================================== */}
      <section className="section bg-warm" id="matheran-case-study">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-col">
              <div className="section-tag">02 / ECOLOGICAL CASE STUDY</div>
              <h2>Preserving Matheran’s Eco-Sensitive Mountain Ecosystem</h2>
              <p className="text-lead">
                Matheran, Maharashtra is Asia's only automobile-free hill station and an officially declared Eco-Sensitive Zone. Standard cement concrete poses severe ecological risks to its unpaved forest trails.
              </p>
              <p>
                Navyug Infragen was entrusted with formulating, manufacturing, and supplying <strong>100% cement-free red clay pavers</strong> across the entire scenic walking trails and viewpoints of Matheran.
              </p>
              <p>
                By eliminating Portland cement completely from the formulation, the red clay blocks blend seamlessly with the natural laterite soil of the Western Ghats, eliminate chemical runoff into pristine hill aquifers, and preserve the fragile forest flora for future generations.
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ background: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-200)', boxShadow: 'var(--shadow-sm)', flex: 1, minWidth: '200px' }}>
                  <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-family-display)' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Cement-Free</div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-200)', boxShadow: 'var(--shadow-sm)', flex: 1, minWidth: '200px' }}>
                  <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-family-display)' }}>Zero</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Chemical Leaching</div>
                </div>
              </div>
            </div>

            <div className="about-visual-col">
              <figure>
                <img
                  src="/assets/images/projects/matheran-red-clay-pathway.jpeg"
                  alt="Matheran Eco-Friendly Red Clay Pathways"
                  className="about-img-main"
                  data-lightbox
                  data-caption="Matheran Forest Walking Trails Paved with Navyug Cement-Free Red Clay Pavers"
                />
              </figure>
              <div className="about-img-subgrid">
                <img
                  src="/assets/images/projects/matheran-red-clay-overlook.jpeg"
                  alt="Scenic Trail Overlook"
                  data-lightbox
                  data-caption="Scenic Mountain Overlook Paving in Matheran"
                />
                <img
                  src="/assets/images/products/grass-pavers-hero.jpeg"
                  alt="Permeable Grass Pavers"
                  data-lightbox
                  data-caption="Permeable Grass Pavers for Stormwater Infiltration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. STARTUP INDIA CERTIFICATE
          ====================================================================== */}
      <section className="section" id="startup-recognition">
        <div className="container">
          <div className="cert-grid">
            <div>
              <div className="section-tag">03 / GOVERNMENT RECOGNITION</div>
              <h2>Recognized by Startup India (Ministry of Commerce &amp; Industry)</h2>
              <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
                Our scientific breakthrough in <strong>&ldquo;Zero Cement Paver Blocks&rdquo; (Uncarbon Pavers)</strong> received official recognition from the <strong>Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Government of India</strong>.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                By substituting industrial byproducts and activating geopolymer binders, our Uncarbon Pavers deliver compressive strength matching standard M-40 / M-50 concrete while drastically reducing embodied carbon.
              </p>
              <p>
                This technology is now being specified by green building councils, ESG-compliant corporate campuses, and municipal bodies striving toward net-zero targets.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn btn-primary">
                  Inquire for Green Building Projects
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div>
              <div className="startup-cert-preview" data-lightbox data-src="/assets/images/certifications/startup-india.jpeg" data-caption="Certificate of Recognition - Startup India (Ministry of Commerce and Industry)">
                <img src="/assets/images/certifications/startup-india.jpeg" alt="Startup India Certificate of Recognition for Uncarbon Pavers" />
                <div className="cert-view-hint">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  Click to View Official Startup India Certificate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          CTA BANNER
          ====================================================================== */}
      <section className="section">
        <div className="container">
          <div className="cta-banner-box">
            <div>
              <span className="section-tag" style={{ color: '#8CE893' }}>SUSTAINABLE PROCUREMENT</span>
              <h2 style={{ color: '#FFFFFF', margin: '0.5rem 0 1rem' }}>Looking to Reduce Your Project's Embodied Carbon?</h2>
              <p style={{ color: 'var(--color-gray-300)', maxWidth: '650px', margin: 0 }}>
                Incorporate Navyug Infragen's Uncarbon Pavers, permeable grass blocks, or fly ash masonry units into your ESG specifications.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/products" className="btn btn-outline-white">View Green Products</Link>
              <Link href="/contact" className="btn btn-primary">Contact Sustainability Desk</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
