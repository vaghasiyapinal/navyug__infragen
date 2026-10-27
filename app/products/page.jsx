import Link from 'next/link';
import ProductFilter from '../../components/ProductFilter';

export const metadata = {
  title: 'Precast Concrete Products & Paver Blocks | ISI Certified (IS 15658)',
  description: 'Explore Navyug Infragen\'s certified precast concrete products: heavy-duty paver blocks (M-30 to M-55), curb stones, RE retaining wall blocks, tactile checkered tiles, and zero-cement uncarbon pavers.',
  alternates: {
    canonical: 'https://navyuginfragen.com/products',
  },
};

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://navyuginfragen.com/products',
        url: 'https://navyuginfragen.com/products',
        name: 'Precast Concrete Products Portfolio | Navyug Infragen',
        description: 'Comprehensive precast concrete and zero-cement sustainable paving solutions.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://navyuginfragen.com/' },
          { '@type': 'ListItem', position: 2, name: 'Products & Solutions', item: 'https://navyuginfragen.com/products' },
        ],
      },
    ],
  };

  const cementProducts = (
    <>
      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/about/paver-pattern-1.jpeg" data-caption="Paver Blocks - Heavy Duty & Architectural">
          <img src="/assets/images/about/paver-pattern-1.jpeg" alt="Interlocking Precast Paver Blocks" loading="lazy" />
          <span className="product-badge">Precast Cement</span>
        </div>
        <div className="product-info">
          <h3>Paver Blocks</h3>
          <p>High-density, precision-molded interlocking concrete paver blocks engineered for high-traffic driveways, container depots, and urban walkways.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>High abrasion resistance &amp; M-50/M-55 options</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>ISI Certified (IS 15658, CM/L - 7900132116)</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Thicknesses: 60mm, 80mm, 100mm, 120mm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/gallery/grid-tree-basin-paving.jpeg" data-caption="Checkered Tiles - Commercial & Public Sidewalks">
          <img src="/assets/images/gallery/grid-tree-basin-paving.jpeg" alt="Checkered & Tactile Concrete Tiles" loading="lazy" />
          <span className="product-badge">Precast Cement</span>
        </div>
        <div className="product-info">
          <h3>Checkered Tiles &amp; Tactile Paving</h3>
          <p>Textured, anti-slip cement tiles supplied extensively for railway platforms, Dholera Smart City promenades, and commercial footpaths.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Customized non-standard dimensions for L&amp;T</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Tactile blister &amp; directional paving for visually impaired</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Supplied to 31+ Indian Railway Stations</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/manufacturing/curb-stone-curing.jpeg" data-caption="Curb Stones - Road Borders & Channel Elements">
          <img src="/assets/images/manufacturing/curb-stone-curing.jpeg" alt="Highway Curb Stones" loading="lazy" />
          <span className="product-badge">Precast Cement</span>
        </div>
        <div className="product-info">
          <h3>Curb Stones &amp; Road Barriers</h3>
          <p>Heavy-duty edging elements for national highways, urban arterial roadways, flyover medians, and petrol retail outlet boundary demarcations.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>High compressive strength &amp; vehicular impact tolerance</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Engineered drainage, bullnose, and chamfered profiles</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/retaining-wall/re-blocks-conveyor.jpeg" data-caption="RE Blocks - Reinforced Earth Retaining Walls">
          <img src="/assets/images/retaining-wall/re-blocks-conveyor.jpeg" alt="RE Blocks Reinforced Earth" loading="lazy" />
          <span className="product-badge">Precast Cement</span>
        </div>
        <div className="product-info">
          <h3>RE Blocks (Reinforced Earth)</h3>
          <p>Specialized interlocking facing blocks engineered specifically for highway bridge approaches, flyovers, and elevated grade separators.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>NHAI compliant retaining wall systems</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Integrated geogrid anchor loop geometry</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Supplied for 8 bridges in Jalore (3–8 km lengths)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/manufacturing/solid-block-press.jpeg" data-caption="Pre-Cast Blocks & Structural Components">
          <img src="/assets/images/manufacturing/solid-block-press.jpeg" alt="Pre-Cast Concrete Blocks" loading="lazy" />
          <span className="product-badge">Precast Cement</span>
        </div>
        <div className="product-info">
          <h3>Pre-Cast Blocks</h3>
          <p>Factory-controlled precast modular units manufactured with uniform concrete density for high-speed construction cycles.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Rigid dimensional consistency &amp; square edges</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Rapid erection speed for boundary &amp; partition walls</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/manufacturing/columbia-machine.jpeg" data-caption="Construction Solid Blocks - High Volume Plant Production">
          <img src="/assets/images/manufacturing/columbia-machine.jpeg" alt="Construction Solid Blocks" loading="lazy" />
          <span className="product-badge">Precast Cement</span>
        </div>
        <div className="product-info">
          <h3>Construction Solid Blocks</h3>
          <p>Precision-pressed solid masonry units produced on heavy industrial Columbia machine lines for boundary walls and load-bearing structures.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Zero hollow voids, superior load bearing capacity</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Thermal resistance &amp; low mortar consumption</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/gallery/circular-garden-cobbles.jpeg" data-caption="Flag Stones & Cobble Stones - Architectural Plazas">
          <img src="/assets/images/gallery/circular-garden-cobbles.jpeg" alt="Flag Stones & Cobble Stones" loading="lazy" />
          <span className="product-badge">Precast Cement</span>
        </div>
        <div className="product-info">
          <h3>Flag Stones &amp; Cobble Stones</h3>
          <p>Architectural surface pavers tailored for heritage pathways, public plazas, cultural centers, religious Jain Tirths, and luxury driveway landscapes.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Radial fan and rectilinear paving formats</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Multi-color natural stone textures</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const sustainableProducts = (
    <>
      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/projects/matheran-red-clay-pathway.jpeg" data-caption="Green Pavers (Zero Cement / Uncarbon Pavers)">
          <img src="/assets/images/projects/matheran-red-clay-pathway.jpeg" alt="Zero Cement Green Pavers" loading="lazy" />
          <span className="product-badge eco">Zero Cement Made</span>
        </div>
        <div className="product-info">
          <h3>Green Pavers (Uncarbon Pavers)</h3>
          <p>Groundbreaking low-carbon pavers developed to eliminate traditional Portland cement, drastically reducing embodied carbon footprint in paving projects.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Startup India Recognized Innovation</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Known officially as &ldquo;Uncarbon Pavers&rdquo;</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Substantially lowers embodied CO2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/projects/matheran-red-clay-overlook.jpeg" data-caption="Red Clay Pavers (Zero Cement) - Eco-Friendly Supply to Matheran">
          <img src="/assets/images/projects/matheran-red-clay-overlook.jpeg" alt="Red Clay Pavers Zero Cement" loading="lazy" />
          <span className="product-badge eco">Zero Cement Made</span>
        </div>
        <div className="product-info">
          <h3>Red Clay Pavers (Cement-Free)</h3>
          <p>Natural red clay formulation manufactured without cement, supplied to preserve the eco-sensitive hill region of Matheran, Maharashtra.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>100% Cement-Free Material Composition</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Preserves natural soil ecology in forest zones</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Supplied for entire Matheran hill station trails</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/products/grass-pavers-hero.jpeg" data-caption="Grass Pavers - Permeable Green Ground Stabilizers">
          <img src="/assets/images/products/grass-pavers-hero.jpeg" alt="Grass Pavers Permeable" loading="lazy" />
          <span className="product-badge eco">Eco-Friendly</span>
        </div>
        <div className="product-info">
          <h3>Permeable Grass Pavers</h3>
          <p>Perforated paver grid design allowing natural grass vegetation growth and unhindered rainwater ground recharge for parking areas and civic gardens.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Permeable stormwater absorption &amp; groundwater recharge</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Prevents urban heat island effects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/manufacturing/stacked-pallets-yard.jpeg" data-caption="Fly Ash Bricks & Blocks - Industrial Waste Valorization">
          <img src="/assets/images/manufacturing/stacked-pallets-yard.jpeg" alt="Fly Ash Bricks" loading="lazy" />
          <span className="product-badge eco">Circular Economy</span>
        </div>
        <div className="product-info">
          <h3>Fly Ash Bricks</h3>
          <p>Manufactured using high-grade industrial fly ash, eliminating agricultural topsoil excavation while providing superior thermal insulation and uniform density.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Zero topsoil consumption</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>High compressive strength &amp; sharp edges</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/manufacturing/curb-stone-curing.jpeg" data-caption="Fly Ash Blocks - Lightweight Masonry Units">
          <img src="/assets/images/manufacturing/curb-stone-curing.jpeg" alt="Fly Ash Blocks" loading="lazy" />
          <span className="product-badge eco">Circular Economy</span>
        </div>
        <div className="product-info">
          <h3>Fly Ash Blocks</h3>
          <p>Engineered fly ash concrete blocks offering dimensional precision, reduced mortar consumption, and enhanced fire resistance for commercial structures.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Precision dimensions reduce plastering costs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-media" data-lightbox data-src="/assets/images/about/paver-pattern-2.jpeg" data-caption="Cool Roof Tiles - Solar Reflective Paving">
          <img src="/assets/images/about/paver-pattern-2.jpeg" alt="Cool Roof Tiles" loading="lazy" />
          <span className="product-badge eco">Thermal Efficiency</span>
        </div>
        <div className="product-info">
          <h3>Cool Roof Tiles</h3>
          <p>High solar-reflective tiles designed for building rooftops to combat urban heat island effects and significantly lower indoor building temperatures.</p>
          <div className="product-meta-list">
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>High Solar Reflective Index (SRI)</span>
            </div>
            <div className="product-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Reduces HVAC cooling energy expenses</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

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
          <img src="/assets/images/about/paver-pattern-1.jpeg" alt="Precast Concrete Paver Blocks Portfolio" />
        </div>
        <div className="page-hero-overlay"></div>

        <div className="container page-hero-content">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Products &amp; Solutions</span>
          </nav>
          <h1 className="page-hero-title">High-Strength Precast &amp; Sustainable Paving Solutions</h1>
          <p className="page-hero-desc">
            Precision-molded precast concrete products manufactured with computerized hydraulic automation, lab-tested compressive strength up to M-55, and revolutionary cement-free green formulations.
          </p>
          <div className="page-hero-badges">
            <span className="page-hero-pill highlight">ISI Certified (IS 15658)</span>
            <span className="page-hero-pill">M-30 to M-55 Heavy Duty</span>
            <span className="page-hero-pill">60mm, 80mm, 100mm, 120mm</span>
            <span className="page-hero-pill">Zero Cement Uncarbon Pavers</span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          PRODUCTS CATALOG & CATEGORIES (INTERACTIVE TABS)
          ====================================================================== */}
      <section className="section" id="products-catalog">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">CATALOG / CERTIFIED PRECAST</div>
            <h2>Explore By Product Category</h2>
            <p>Switch between our traditional ISI-certified precast concrete lines and our cutting-edge zero-cement sustainable formulations.</p>
          </div>

          <ProductFilter cementProducts={cementProducts} sustainableProducts={sustainableProducts} />
        </div>
      </section>

      {/* ======================================================================
          TECHNICAL SPECIFICATIONS & QUALITY COMPLIANCE
          ====================================================================== */}
      <section className="section bg-warm" id="specifications">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">ENGINEERING STANDARDS / IS 15658</div>
            <h2>Technical Grading &amp; Performance Parameters</h2>
            <p>Navyug Infragen precast products conform strictly to Bureau of Indian Standards specifications, ensuring certified longevity under extreme axle loadings.</p>
          </div>

          <div style={{ overflowX: 'auto', background: '#FFFFFF', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-card)', border: '1px solid var(--color-gray-200)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-dark-900)', color: '#FFFFFF' }}>
                  <th style={{ padding: '1.15rem 1.5rem', fontWeight: 700 }}>Grade / Application</th>
                  <th style={{ padding: '1.15rem 1.5rem', fontWeight: 700 }}>Standard Thickness</th>
                  <th style={{ padding: '1.15rem 1.5rem', fontWeight: 700 }}>28-Day Compressive Strength</th>
                  <th style={{ padding: '1.15rem 1.5rem', fontWeight: 700 }}>Recommended Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                  <td style={{ padding: '1.15rem 1.5rem', fontWeight: 600, color: 'var(--color-dark-900)' }}>M-30 / M-35 Grade</td>
                  <td style={{ padding: '1.15rem 1.5rem' }}>60 mm</td>
                  <td style={{ padding: '1.15rem 1.5rem' }}>&ge; 30 - 35 N/mm&sup2;</td>
                  <td style={{ padding: '1.15rem 1.5rem', color: 'var(--color-text-muted)' }}>Residential driveways, pedestrian promenades, cycle tracks, and public park walkways.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)', backgroundColor: 'var(--color-bg-alt)' }}>
                  <td style={{ padding: '1.15rem 1.5rem', fontWeight: 600, color: 'var(--color-dark-900)' }}>M-40 Grade</td>
                  <td style={{ padding: '1.15rem 1.5rem' }}>80 mm</td>
                  <td style={{ padding: '1.15rem 1.5rem' }}>&ge; 40 N/mm&sup2;</td>
                  <td style={{ padding: '1.15rem 1.5rem', color: 'var(--color-text-muted)' }}>Commercial vehicular areas, city streets, retail parking lots, and municipal arterial roads.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                  <td style={{ padding: '1.15rem 1.5rem', fontWeight: 600, color: 'var(--color-dark-900)' }}>M-50 Grade (ISI Marked)</td>
                  <td style={{ padding: '1.15rem 1.5rem' }}>80 mm / 100 mm</td>
                  <td style={{ padding: '1.15rem 1.5rem' }}>&ge; 50 N/mm&sup2;</td>
                  <td style={{ padding: '1.15rem 1.5rem', color: 'var(--color-text-muted)' }}>Petroleum retail forecourts, CONCOR logistics hubs, freight terminals, and highway service lanes.</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                  <td style={{ padding: '1.15rem 1.5rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>M-55 Heavy Industrial</td>
                  <td style={{ padding: '1.15rem 1.5rem' }}>120 mm</td>
                  <td style={{ padding: '1.15rem 1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>&ge; 55 N/mm&sup2;</td>
                  <td style={{ padding: '1.15rem 1.5rem', color: 'var(--color-text-muted)' }}>Deepwater sea ports (Mundra, Bedi, Navlakhi), container stacking depots, reach stacker corridors.</td>
                </tr>
              </tbody>
            </table>
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
              <span className="section-tag" style={{ color: 'var(--color-primary-light)' }}>CUSTOM SIZES &amp; BULK PROCUREMENT</span>
              <h2 style={{ color: '#FFFFFF', margin: '0.5rem 0 1rem' }}>Looking for Custom Dimensions or Project Quotes?</h2>
              <p style={{ color: 'var(--color-gray-300)', maxWidth: '650px', margin: 0 }}>
                Our manufacturing facilities in Morbi and Ahmedabad can produce custom molds, special textures, non-standard thicknesses, and high volumes for public tenders.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/services" className="btn btn-outline-white">Turnkey Services</Link>
              <Link href="/contact" className="btn btn-primary">Submit Tender Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
