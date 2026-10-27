import Link from 'next/link';

export const metadata = {
  title: 'Infrastructure Services & Turnkey EPC | Fuel Stations & RE Walls',
  description: 'Turnkey infrastructure engineering services: Fuel station (petrol pump) EPC construction, Reinforced Earth (RE) bridge retaining walls, road widening, automated Columbia manufacturing, and 6-test QA laboratory.',
  alternates: {
    canonical: 'https://navyuginfragen.com/services',
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://navyuginfragen.com/services',
        url: 'https://navyuginfragen.com/services',
        name: 'Infrastructure Services & Turnkey EPC | Navyug Infragen',
        description: 'Comprehensive turnkey civil infrastructure services including petrol pump construction, RE wall erection, and road paving.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://navyuginfragen.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services & Infrastructure', item: 'https://navyuginfragen.com/services' },
        ],
      },
      {
        '@type': 'Service',
        name: 'Fuel Station End-to-End Construction',
        provider: { '@type': 'Organization', name: 'Navyug Infragen Private Limited' },
        serviceType: 'Turnkey Fuel Station Civil Works',
      },
      {
        '@type': 'Service',
        name: 'Supply & Apply of RE Blocks for Bridge Retaining Walls',
        provider: { '@type': 'Organization', name: 'Navyug Infragen Private Limited' },
        serviceType: 'Bridge Retaining Wall Erection',
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
          <img src="/assets/images/retaining-wall/completed-re-wall.jpeg" alt="Infrastructure Services and Retaining Walls" />
        </div>
        <div className="page-hero-overlay"></div>

        <div className="container page-hero-content">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Services &amp; Infrastructure</span>
          </nav>
          <h1 className="page-hero-title">Turnkey Infrastructure Services &amp; Manufacturing Rigor</h1>
          <p className="page-hero-desc">
            Beyond precast manufacturing, Navyug Infragen delivers end-to-end civil contract services: turnkey fuel stations, multi-kilometer bridge retaining walls, heavy industrial plants, and in-house laboratory testing.
          </p>
          <div className="page-hero-badges">
            <span className="page-hero-pill highlight">Turnkey Fuel Stations</span>
            <span className="page-hero-pill">RE Retaining Walls Supply &amp; Apply</span>
            <span className="page-hero-pill">Highway Widening (Zero Penalty)</span>
            <span className="page-hero-pill">6-Test QA Laboratory</span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          1. CORE CONTRACT SERVICES OVERVIEW
          ====================================================================== */}
      <section className="section" id="contract-services">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">01 / EPC CAPABILITIES</div>
            <h2>Civil Contract-Based Project Services</h2>
            <p>Delivering comprehensive, single-point project accountability for national petroleum retailers, highway authorities, and industrial conglomerates.</p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-media" data-lightbox data-src="/assets/images/fuel-stations/bpcl-illuminated-evening.jpeg" data-caption="Fuel Station End-to-End Construction">
                <img src="/assets/images/fuel-stations/bpcl-illuminated-evening.jpeg" alt="Fuel Station End-to-End Construction" loading="lazy" />
                <span className="product-badge contract">Turnkey EPC Service</span>
              </div>
              <div className="product-info">
                <h3>Fuel Station End-to-End Construction</h3>
                <p>Complete civil engineering, grading, subgrade compaction, forecourt paving, curb boundaries, and canopy integration for major petroleum retailers.</p>
                <div className="product-meta-list">
                  <div className="product-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Approved by Reliance, BPCL, HPCL, IOCL &amp; Nayara</span>
                  </div>
                  <div className="product-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>30+ complete stations delivered turnkey</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-media" data-lightbox data-src="/assets/images/retaining-wall/completed-re-wall.jpeg" data-caption="Supply & Apply of RE Blocks for Bridge Retaining Walls">
                <img src="/assets/images/retaining-wall/completed-re-wall.jpeg" alt="Supply & Apply of RE Blocks" loading="lazy" />
                <span className="product-badge contract">Specialized Infrastructure</span>
              </div>
              <div className="product-info">
                <h3>Supply &amp; Apply of RE Blocks for Bridge Retaining Walls</h3>
                <p>Comprehensive supply and turnkey installation of Reinforced Earth block retaining walls for mega highway bridge approaches and flyovers.</p>
                <div className="product-meta-list">
                  <div className="product-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>8 bridges in Jalore (lengths 3–8 km each)</span>
                  </div>
                  <div className="product-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Certified NHAI bridge specifications</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-media" data-lightbox data-src="/assets/images/gallery/heavy-duty-street-cobbles.jpeg" data-caption="Developing Drive-Ways and Foot Paths">
                <img src="/assets/images/gallery/heavy-duty-street-cobbles.jpeg" alt="Developing Drive-Ways and Foot Paths" loading="lazy" />
                <span className="product-badge contract">Civil Execution</span>
              </div>
              <div className="product-info">
                <h3>Developing Drive-Ways and Foot Paths</h3>
                <p>Precision execution of commercial vehicular driveways, pedestrian walkways, hotel access ramps, and municipal promenades.</p>
                <div className="product-meta-list">
                  <div className="product-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Over 400+ commercial driveways completed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-media" data-lightbox data-src="/assets/images/retaining-wall/subgrade-compaction.jpeg" data-caption="Road Project Work & Multi-Lane Expansions">
                <img src="/assets/images/retaining-wall/subgrade-compaction.jpeg" alt="Road Project Work" loading="lazy" />
                <span className="product-badge contract">Highway Infrastructure</span>
              </div>
              <div className="product-info">
                <h3>Road Project Work &amp; Highway Widening</h3>
                <p>Large-scale national and state highway civil works including 2-lane to 6-lane road widening, side paving, and median curbstones.</p>
                <div className="product-meta-list">
                  <div className="product-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>1,18,500 sq.m Patna Ring Road completed</span>
                  </div>
                  <div className="product-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Zero penalty timely track record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. FUEL STATIONS EXECUTION (STAGES)
          ====================================================================== */}
      <section className="section bg-warm" id="fuel-stations">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">02 / TURNKEY SERVICES</div>
            <h2>Turnkey Fuel Station (Petrol Pump) Construction</h2>
            <p>Approved turnkey construction partner for India’s top petroleum retailers, delivering flawless forecourts under stringent safety protocols.</p>
          </div>

          <div className="fuel-stations-grid">
            <div className="fuel-stage-column">
              <div>
                <span className="stage-header-badge process">STAGE 01: IN PROCESS</span>
                <h3 style={{ marginTop: '0.75rem', fontSize: '1.35rem' }}>Site Development &amp; Paving Progress</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.35rem' }}>
                  Subgrade leveling, canopy structural framework, sand bed screeding, and high-precision pattern laying across BPCL, Reliance, and IOCL retail sites.
                </p>
              </div>

              <div className="stage-media-card" data-lightbox data-src="/assets/images/fuel-stations/reliance-canopy-night.jpeg" data-caption="Reliance Fuel Station - Canopy Framework & Night Execution">
                <img src="/assets/images/fuel-stations/reliance-canopy-night.jpeg" alt="Reliance Fuel Station In Process" loading="lazy" />
              </div>

              <div className="stage-media-card" data-lightbox data-src="/assets/images/fuel-stations/bpcl-illuminated-evening.jpeg" data-caption="Bharat Petroleum Outlet - Forecourt Interlocking Paving at Dusk">
                <img src="/assets/images/fuel-stations/bpcl-illuminated-evening.jpeg" alt="BPCL Outlet Paving In Process" loading="lazy" />
              </div>

              <div className="stage-media-card" data-lightbox data-src="/assets/images/fuel-stations/screeding-sand-base.jpeg" data-caption="Manual Screeding & Laser Bedding for Petrol Forecourts">
                <img src="/assets/images/fuel-stations/screeding-sand-base.jpeg" alt="Screeding Sand Base" loading="lazy" />
              </div>
            </div>

            <div className="fuel-stage-column">
              <div>
                <span className="stage-header-badge complete">STAGE 02: COMPLETION</span>
                <h3 style={{ marginTop: '0.75rem', fontSize: '1.35rem' }}>Finished Operational Retail Outlets</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.35rem' }}>
                  Turnkey handover featuring laser-aligned fuel dispenser islands, distinct dual-tone safety zebra stripes, and heavy-duty traffic resilience.
                </p>
              </div>

              <div className="stage-media-card" style={{ height: '480px' }} data-lightbox data-src="/assets/images/fuel-stations/completed-fuel-station.jpeg" data-caption="Completed Operational Fuel Station - Multi-Lane Forecourt Paving">
                <img src="/assets/images/fuel-stations/completed-fuel-station.jpeg" alt="Completed Operational Fuel Station" loading="lazy" />
              </div>

              <div className="stage-media-card" data-lightbox data-src="/assets/images/fuel-stations/driveway-laying-day.jpeg" data-caption="High-Speed Fuel Forecourt Laying & Boundary Curb Integration">
                <img src="/assets/images/fuel-stations/driveway-laying-day.jpeg" alt="Driveway Laying Completion" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. RETAINING WALL ERECTION PROGRESSION
          ====================================================================== */}
      <section className="section" id="retaining-wall">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">03 / SPECIALIZED RETAINING WALLS</div>
            <h2>RE Blocks Erection: Three-Phase Engineering Methodology</h2>
            <p>A proven, end-to-end execution methodology for Reinforced Earth retaining walls supporting multi-kilometer highway bridges and flyovers.</p>
          </div>

          <div className="progression-timeline">
            <div className="step-card">
              <div className="step-indicator">
                <span className="step-number">PHASE 01</span>
                <span className="step-title">COMMENCEMENT</span>
              </div>
              <div className="step-media" data-lightbox data-src="/assets/images/retaining-wall/commencement-earthwork.jpeg" data-caption="Retaining Wall Erection Commencement - Earthwork & Trenching">
                <img src="/assets/images/retaining-wall/commencement-earthwork.jpeg" alt="Retaining Wall Commencement" loading="lazy" />
              </div>
              <div className="step-info">
                Heavy earthmoving machinery, leveling, ground compaction, and establishing foundation alignment according to NHAI engineering levels.
              </div>
            </div>

            <div className="step-card">
              <div className="step-indicator">
                <span className="step-number">PHASE 02</span>
                <span className="step-title">RE BLOCKS WALL ERECTION</span>
              </div>
              <div className="step-media" data-lightbox data-src="/assets/images/retaining-wall/wall-erection-geogrid.jpeg" data-caption="RE Blocks Wall Erection - Interlocking Blocks & Geogrid Reinforcement">
                <img src="/assets/images/retaining-wall/wall-erection-geogrid.jpeg" alt="RE Blocks Wall Erection" loading="lazy" />
              </div>
              <div className="step-info">
                Precision vertical stacking of interlocking RE facing blocks, systematic geogrid tie-back layering, and vibratory soil roller compaction.
              </div>
            </div>

            <div className="step-card">
              <div className="step-indicator">
                <span className="step-number">PHASE 03</span>
                <span className="step-title">COMPLETION</span>
              </div>
              <div className="step-media" data-lightbox data-src="/assets/images/retaining-wall/completed-re-wall.jpeg" data-caption="Retaining Wall Erection Completion - Finished High-Strength Reinforced Earth Wall">
                <img src="/assets/images/retaining-wall/completed-re-wall.jpeg" alt="Retaining Wall Completion" loading="lazy" />
              </div>
              <div className="step-info">
                Finished monolithic retaining structure featuring clean coping parapets, durable slope stability, and zero maintenance life cycles.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. MANUFACTURING PLANTS (MORBI & AHMEDABAD)
          ====================================================================== */}
      <section className="section bg-warm" id="manufacturing">
        <div className="container">
          <div className="manufacturing-lead-grid">
            <div>
              <div className="section-tag">04 / PRODUCTION CAPABILITY</div>
              <h2>Advanced Manufacturing Units in Morbi &amp; Ahmedabad</h2>
              <p className="text-lead">
                Equipped with heavy industrial automated Columbia Machine Engineering plants, computerized batching systems, and multi-tier curing infrastructure.
              </p>
              <p>
                Holding the <strong>highest production capacity in West Gujarat</strong> (Saurashtra and Kutch), Navyug Infragen operates heavy-duty mechanized lines ensuring micron-level dimensional tolerances, consistent hydraulic vibration, and daily production volumes capable of fulfilling multi-lakh square meter national contracts without delivery delay.
              </p>
            </div>
            <div>
              <img
                src="/assets/images/manufacturing/columbia-machine.jpeg"
                alt="Columbia Machine Engineering Plant at Navyug"
                style={{ borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-card)' }}
                data-lightbox
                data-caption="Automated Columbia Machine Engineering Production Line"
              />
            </div>
          </div>

          <div className="mfg-gallery-grid">
            <div className="mfg-item" data-lightbox data-src="/assets/images/manufacturing/automated-paver-line.jpeg" data-caption="Continuous Automated Paver Molding Line">
              <img src="/assets/images/manufacturing/automated-paver-line.jpeg" alt="Continuous Automated Paver Line" loading="lazy" />
              <div className="mfg-caption-overlay">Automated Paver Molding Line</div>
            </div>

            <div className="mfg-item" data-lightbox data-src="/assets/images/manufacturing/curb-stone-curing.jpeg" data-caption="Curb Stone Hydraulic Press & Racking">
              <img src="/assets/images/manufacturing/curb-stone-curing.jpeg" alt="Curb Stone Hydraulic Press" loading="lazy" />
              <div className="mfg-caption-overlay">Curb Stone Hydraulic Racks</div>
            </div>

            <div className="mfg-item" data-lightbox data-src="/assets/images/manufacturing/dual-color-demolding.jpeg" data-caption="Dual-Color Precision Demolding Process">
              <img src="/assets/images/manufacturing/dual-color-demolding.jpeg" alt="Dual-Color Demolding Process" loading="lazy" />
              <div className="mfg-caption-overlay">Dual-Color Demolding Line</div>
            </div>

            <div className="mfg-item" data-lightbox data-src="/assets/images/manufacturing/stacked-pallets-yard.jpeg" data-caption="Finished Stock Stacking & Curing Yard">
              <img src="/assets/images/manufacturing/stacked-pallets-yard.jpeg" alt="Finished Stock Stacking Yard" loading="lazy" />
              <div className="mfg-caption-overlay">Finished Pallet Curing Yard</div>
            </div>

            <div className="mfg-item" data-lightbox data-src="/assets/images/manufacturing/crane-dispatch-loading.jpeg" data-caption="Heavy Mobile Crane Fleet Loading for Nationwide Dispatch">
              <img src="/assets/images/manufacturing/crane-dispatch-loading.jpeg" alt="Heavy Crane Fleet Loading" loading="lazy" />
              <div className="mfg-caption-overlay">Heavy Crane Logistics Dispatch</div>
            </div>

            <div className="mfg-item" data-lightbox data-src="/assets/images/manufacturing/plant-mixing-floor.jpeg" data-caption="Raw Material Batching & Mixing Floor">
              <img src="/assets/images/manufacturing/plant-mixing-floor.jpeg" alt="Mixing Floor" loading="lazy" />
              <div className="mfg-caption-overlay">Material Batching Floor</div>
            </div>

            <div className="mfg-item" data-lightbox data-src="/assets/images/manufacturing/rotary-casting-table.jpeg" data-caption="Rotary Vibro-Casting Station">
              <img src="/assets/images/manufacturing/rotary-casting-table.jpeg" alt="Rotary Casting Table" loading="lazy" />
              <div className="mfg-caption-overlay">Rotary Vibro-Casting Table</div>
            </div>

            <div className="mfg-item" data-lightbox data-src="/assets/images/manufacturing/conveyor-feed.jpeg" data-caption="High-Speed Conveyor Aggregate Feed System">
              <img src="/assets/images/manufacturing/conveyor-feed.jpeg" alt="Conveyor Aggregate Feed" loading="lazy" />
              <div className="mfg-caption-overlay">High-Speed Conveyor System</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. IN-HOUSE QUALITY LABORATORY (ALL 6 TESTS)
          ====================================================================== */}
      <section className="section bg-alt" id="laboratory">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">05 / QUALITY ASSURANCE</div>
            <h2>In-House Empirical Testing Laboratory</h2>
            <p>Every single batch produced at Navyug Infragen undergoes rigorous empirical testing to ensure full compliance with ISI (IS 15658) and ISO-9001 standards.</p>
          </div>

          <div className="lab-tests-grid">
            <div className="lab-card">
              <div className="lab-media" data-lightbox data-src="/assets/images/laboratory/compression-strength-testing.jpeg" data-caption="Compression Strength Testing - Compressive load verification">
                <img src="/assets/images/laboratory/compression-strength-testing.jpeg" alt="Compression Strength Testing" loading="lazy" />
              </div>
              <div className="lab-info">
                <h3>COMPRESSION STRENGTH TESTING</h3>
                <p>For testing compressive strength of paver blocks, solid blocks, and concrete elements up to M-55 and beyond.</p>
              </div>
            </div>

            <div className="lab-card">
              <div className="lab-media" data-lightbox data-src="/assets/images/laboratory/precision-lab-equipment.jpeg" data-caption="Lab Equipments - Precision chemicals and volumetric measurers">
                <img src="/assets/images/laboratory/precision-lab-equipment.jpeg" alt="Lab Equipments" loading="lazy" />
              </div>
              <div className="lab-info">
                <h3>LAB EQUIPMENTS</h3>
                <p>Chemicals &amp; measurer for precision &amp; accuracy in chemical mix designs, silt testing, and water-cement ratios.</p>
              </div>
            </div>

            <div className="lab-card">
              <div className="lab-media" data-lightbox data-src="/assets/images/laboratory/abrasion-testing.jpeg" data-caption="Abrasion Testing - Top-layer friction and wear resistance">
                <img src="/assets/images/laboratory/abrasion-testing.jpeg" alt="Abrasion Testing" loading="lazy" />
              </div>
              <div className="lab-info">
                <h3>ABRASION TESTING</h3>
                <p>For testing top layer surface strength and friction resistance against heavy vehicular tyre wear.</p>
              </div>
            </div>

            <div className="lab-card">
              <div className="lab-media" data-lightbox data-src="/assets/images/laboratory/heating-oven.jpeg" data-caption="Heating Oven - Water absorption and thermal drying tests">
                <img src="/assets/images/laboratory/heating-oven.jpeg" alt="Heating Oven" loading="lazy" />
              </div>
              <div className="lab-info">
                <h3>HEATING OVEN</h3>
                <p>For water absorption tests, verifying porosity and freeze-thaw durability under controlled thermal conditions.</p>
              </div>
            </div>

            <div className="lab-card">
              <div className="lab-media" data-lightbox data-src="/assets/images/laboratory/point-load-testing.jpeg" data-caption="Point Load Testing - Flexural break-even verification">
                <img src="/assets/images/laboratory/point-load-testing.jpeg" alt="Point Load Testing" loading="lazy" />
              </div>
              <div className="lab-info">
                <h3>POINT LOAD TESTING</h3>
                <p>For Point load break-even tests, simulating concentrated wheel stresses and flexural cracking thresholds.</p>
              </div>
            </div>

            <div className="lab-card">
              <div className="lab-media" data-lightbox data-src="/assets/images/laboratory/water-curing-chamber.jpeg" data-caption="Accelerated Water Curing Chamber - Controlled water temperature curing">
                <img src="/assets/images/laboratory/water-curing-chamber.jpeg" alt="Accelerated Water Curing Chamber" loading="lazy" />
              </div>
              <div className="lab-info">
                <h3>ACCELERATED WATER CURING CHAMBER</h3>
                <p>For temperature control water curing, enabling rapid and scientific assessment of 28-day concrete strength benchmarks.</p>
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
              <span className="section-tag" style={{ color: 'var(--color-primary-light)' }}>PROJECT TENDERS &amp; CONTRACT PROCUREMENT</span>
              <h2 style={{ color: '#FFFFFF', margin: '0.5rem 0 1rem' }}>Engage Our Turnkey Engineering Team</h2>
              <p style={{ color: 'var(--color-gray-300)', maxWidth: '650px', margin: 0 }}>
                Partner with Navyug Infragen for highway packages, flyover RE retaining walls, or fuel station rollouts with guaranteed timeline delivery.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/projects" className="btn btn-outline-white">View Projects</Link>
              <Link href="/contact" className="btn btn-primary">Submit RFP / Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
