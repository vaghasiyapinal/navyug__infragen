import Link from 'next/link';
import ProjectFilter from '../../components/ProjectFilter';

export const metadata = {
  title: 'Notable Infrastructure Projects & Clientele | Pan-India Portfolio',
  description: 'Discover Navyug Infragen\'s landmark civil projects across India: NHAI Patna Ring Road, Dholera Smart City for L&T, CONCOR Vadodara, Mundra Adani Port, Jalore Bridges, and 400+ petroleum outlets.',
  alternates: {
    canonical: 'https://navyuginfragen.com/projects',
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://navyuginfragen.com/projects',
        url: 'https://navyuginfragen.com/projects',
        name: 'Notable Infrastructure Landmark Projects | Navyug Infragen',
        description: 'Portfolio of major landmark civil engineering and precast concrete installations across India.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://navyuginfragen.com/' },
          { '@type': 'ListItem', position: 2, name: 'Notable Projects', item: 'https://navyuginfragen.com/projects' },
        ],
      },
    ],
  };

  const projectsData = [
    {
      category: 'sustainable',
      image: '/assets/images/projects/matheran-red-clay-terrace.jpeg',
      badge: 'Sustainable / Eco',
      location: 'Matheran, Maharashtra',
      title: 'ECO-FRIENDLY SUPPLY TO MATHERAN',
      description: 'Supplied eco-friendly red clay blocks for the entire Matheran region, supporting sustainable, low-carbon construction under the Make in India initiative.',
      metric: 'Zero Cement Made • Low Carbon Footprint',
    },
    {
      category: 'smart-cities',
      image: '/assets/images/manufacturing/stacked-pallets-yard.jpeg',
      badge: 'Industrial Mega-Project',
      location: 'Kutch, Gujarat • 2015',
      title: 'RENUKA SUGAR - KUTCH (LANDMARK PROJECT)',
      description: 'Completed 5 lakh sq.ft. of paver blocks within 70 days, covering production and installation with 400 skilled workers, showcasing our execution strength and adherence to lab-tested quality standards.',
      metric: '5,00,000 sq.ft. in 70 Days • 400 Skilled Workers',
    },
    {
      category: 'smart-cities',
      image: '/assets/images/gallery/grid-tree-basin-paving.jpeg',
      badge: 'Smart City',
      location: 'Dholera, Gujarat',
      title: 'DHOLERA SMART CITY',
      description: 'Contributed to Honorable PM Modi’s Dholera Smart City dream project by supplying customised, non-standard chequered tiles for L&T, aligning with advanced urban development under Make in India.',
      metric: 'Custom Non-Standard Chequered Tiles for L&T',
    },
    {
      category: 'ports smart-cities',
      image: '/assets/images/projects/container-yard-expansive-1.jpeg',
      badge: 'Logistics & Cargo',
      location: 'Vadodara, Gujarat',
      title: 'CONCOR LOGISTICS HUB, VADODARA',
      description: 'Executed manufacturing, supply, and laying of M-50 CC paver blocks across 2,75,000 sq.m. for Container Corporation of India Ltd. (CONCOR), using ISI-marked, lab-tested materials to ensure durable, high-quality results.',
      metric: '2,75,000 sq.m. • M-50 CC Grade Paver Blocks',
    },
    {
      category: 'highways',
      image: '/assets/images/retaining-wall/subgrade-compaction.jpeg',
      badge: 'National Highway',
      location: 'Kanhauli to Ramnagar, Bihar',
      title: 'PATNA RING ROAD EXPANSION',
      description: 'Supplied and installed 1,18,500 sq.m. (approx.) of paver blocks for the construction and widening of Patna Ring Road (Kanhauli to Ramnagar) from 2-lane to 6-lane, completed within 12 months with zero penalty, demonstrating timely, large-scale execution capabilities.',
      metric: '1,18,500 sq.m. • 12 Months • Zero Penalty',
    },
    {
      category: 'highways',
      image: '/assets/images/retaining-wall/completed-re-wall.jpeg',
      badge: 'Bridges & Flyovers',
      location: 'Jalore, Rajasthan',
      title: 'BRIDGE PROJECTS IN RAJASTHAN',
      description: 'Supplied and applied RE blocks for 8 bridges spanning lengths of 3–8 km each in Jalore, Rajasthan, demonstrating our capability to deliver high-quality, large-scale infrastructure solutions for critical public works.',
      metric: '8 Bridges • Lengths 3–8 km Each • RE Wall Supply & Apply',
    },
    {
      category: 'public',
      image: '/assets/images/gallery/multi-color-promenade.jpeg',
      badge: 'High-Speed Execution',
      location: 'Morbi, Gujarat',
      title: 'MORBI POLICE STATION',
      description: 'Completed 50,000 sq.ft. of paver block installation within just 5 days, demonstrating unmatched speed and execution capacity.',
      metric: '50,000 sq.ft. in 5 Days • Record Speed',
    },
    {
      category: 'ports',
      image: '/assets/images/projects/container-yard-texture-2.jpeg',
      badge: 'Maritime & Ports',
      location: 'Bedi Bunder, Rosy Port, Mundra Adani Port & Navlakhi Port',
      title: 'PORTS & HEAVY-DUTY APPLICATIONS',
      description: 'Supplied 120mm thick, M55 grade high-strength paver blocks for Bedi Bunder, Rosy Port, Jamnagar, Mundra Adani Port, and Navlakhi Port, using hi-tech machinery and precision mix designs that only a few factories can achieve.',
      metric: '120mm Thickness • M55 High-Strength Grade',
    },
    {
      category: 'public',
      image: '/assets/images/gallery/star-gateway-entrance.jpeg',
      badge: 'Indian Railways',
      location: '31 Railway Stations Across India',
      title: 'RAILWAY STATIONS (INCLUSIVE INFRASTRUCTURE)',
      description: 'Supplied chequered tiles and tactile tiles for the visually impaired to 31 railway stations across India within 3 years, contributing to inclusive infrastructure development.',
      metric: '31 Railway Stations in 3 Years • Tactile Safety Tiles',
    },
    {
      category: 'public',
      image: '/assets/images/gallery/circular-garden-cobbles.jpeg',
      badge: 'Cultural Heritage',
      location: 'Pan-India Pilgrimage Hubs & Institutions',
      title: 'RELIGIOUS AND PUBLIC INSTITUTIONS',
      description: 'Supplied paver blocks for numerous large religious and public institutions, especially Jain Tirths, supporting cultural and community spaces with durable, aesthetic solutions.',
      metric: '40+ Public & Sacred Institutions Served',
    },
  ];

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
          <img src="/assets/images/projects/container-yard-expansive-1.jpeg" alt="Landmark Infrastructure Projects" />
        </div>
        <div className="page-hero-overlay"></div>

        <div className="container page-hero-content">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Notable Projects &amp; Clientele</span>
          </nav>
          <h1 className="page-hero-title">Engineering Landmarks Across the Nation</h1>
          <p className="page-hero-desc">
            Execution capability proven across mega highway expansions, smart cities, high-capacity deepwater ports, 400+ petroleum retail forecourts, and critical railway hubs with zero penalties.
          </p>
          <div className="page-hero-badges">
            <span className="page-hero-pill highlight">2,75,000 sq.m CONCOR Hub</span>
            <span className="page-hero-pill">1,18,500 sq.m Patna Ring Road</span>
            <span className="page-hero-pill">8 Bridges in Jalore</span>
            <span className="page-hero-pill">31 Railway Stations</span>
          </div>
        </div>
      </section>

      {/* ======================================================================
          1. NOTABLE PROJECTS WITH INTERACTIVE FILTER
          ====================================================================== */}
      <section className="section" id="projects-grid-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">01 / PROJECT PORTFOLIO</div>
            <h2>Notable Infrastructure Landmark Projects</h2>
            <p>Filter our portfolio by sector to explore verified project specifications, surface areas, execution timelines, and engineering grades.</p>
          </div>

          <ProjectFilter projects={projectsData} />
        </div>
      </section>

      {/* ======================================================================
          2. PRESTIGIOUS CLIENTELE (ALL 18 CLIENT LOGOS)
          ====================================================================== */}
      <section className="section bg-warm" id="clientele">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">02 / TRUSTED BY INDUSTRY LEADERS</div>
            <h2>Our Prestigious Clientele</h2>
            <p>Registered and approved supplier to India’s premier national petroleum giants, infrastructure conglomerates, defense authorities, and smart city developers.</p>
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

            <div className="client-logo-card">
              <img src="/assets/images/clientele/strata.png" alt="Strata Geosystems" />
              <span className="client-name-caption">Strata</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/dra-infracon.jpeg" alt="DRA Infracon Pvt. Ltd." />
              <span className="client-name-caption">DRA Infracon</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/jindal-steel-power.png" alt="Jindal Steel & Power" />
              <span className="client-name-caption">Jindal Steel &amp; Power</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/g-ride-railways.png" alt="G-RIDE (Govt. of Gujarat & Ministry of Railways)" />
              <span className="client-name-caption">G-RIDE (Railways)</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/jm-baxi-ports.png" alt="JM BAXI The Port Specialist" />
              <span className="client-name-caption">JM BAXI Ports</span>
            </div>
            <div className="client-logo-card">
              <img src="/assets/images/clientele/radisson-hotel-kandla.jpeg" alt="Radisson Hotel Kandla" />
              <span className="client-name-caption">Radisson Hotel Kandla</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. INSTALLATION & ARCHITECTURAL GALLERY
          ====================================================================== */}
      <section className="section" id="gallery">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">03 / APPLICATION GALLERY</div>
            <h2>Specialized Project Applications &amp; Finishes</h2>
            <p>Highlighting specialized architectural pavers, curvilinear cobblestone courtyards, zero-cement red clay ecological trails, and expansive container ports.</p>
          </div>

          <div className="gallery-masonry">
            <div className="gallery-item span-2" data-lightbox data-src="/assets/images/gallery/circular-garden-cobbles.jpeg" data-caption="COBBLES - Radial Fan Garden & Plaza Paving">
              <img src="/assets/images/gallery/circular-garden-cobbles.jpeg" alt="Cobbles Garden Paving" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">COBBLES</div>
                  <div className="gallery-caption-sub">Curved fan cobblestone designs for public squares, gardens, and heritage spaces</div>
                </div>
              </div>
            </div>

            <div className="gallery-item" data-lightbox data-src="/assets/images/gallery/heavy-duty-street-cobbles.jpeg" data-caption="Heavy-Duty Commercial Street Cobblestones">
              <img src="/assets/images/gallery/heavy-duty-street-cobbles.jpeg" alt="Street Cobbles" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">URBAN COBBLESTONES</div>
                  <div className="gallery-caption-sub">Long-wearing linear street paving for civic roads</div>
                </div>
              </div>
            </div>

            <div className="gallery-item" data-lightbox data-src="/assets/images/projects/matheran-red-clay-overlook.jpeg" data-caption="RED CLAY PAVERS (WITHOUT CEMENT MADE) - Scenic Trail Overlook">
              <img src="/assets/images/projects/matheran-red-clay-overlook.jpeg" alt="Red Clay Pavers Overlook" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">RED CLAY PAVERS (WITHOUT CEMENT MADE)</div>
                  <div className="gallery-caption-sub">100% Cement-free natural clay formulation for eco-sensitive terrain</div>
                </div>
              </div>
            </div>

            <div className="gallery-item span-2" data-lightbox data-src="/assets/images/projects/matheran-red-clay-pathway.jpeg" data-caption="RED CLAY PAVERS (WITHOUT CEMENT MADE) - Matheran Forest Trails">
              <img src="/assets/images/projects/matheran-red-clay-pathway.jpeg" alt="Red Clay Pavers Trail" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">ECOLOGICAL FOREST PATHWAYS</div>
                  <div className="gallery-caption-sub">Sustainable, low-carbon red clay paving under the Make in India mission</div>
                </div>
              </div>
            </div>

            <div className="gallery-item span-2" data-lightbox data-src="/assets/images/projects/container-yard-expansive-1.jpeg" data-caption="CONTAINER YARD PROJECTS - Vast M-50 Heavy Duty Interlocking Pavers">
              <img src="/assets/images/projects/container-yard-expansive-1.jpeg" alt="Container Yard Projects" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">CONTAINER YARD PROJECTS</div>
                  <div className="gallery-caption-sub">Engineered to support heavy reach stackers, laden containers, and industrial axle loads</div>
                </div>
              </div>
            </div>

            <div className="gallery-item" data-lightbox data-src="/assets/images/projects/container-yard-horizon-3.jpeg" data-caption="Container Yard Port Paving Horizon">
              <img src="/assets/images/projects/container-yard-horizon-3.jpeg" alt="Container Yard Paving Horizon" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">PORT &amp; LOGISTICS PAVING</div>
                  <div className="gallery-caption-sub">M-50 / M-55 high-strength interlocking pavement systems</div>
                </div>
              </div>
            </div>

            <div className="gallery-item" data-lightbox data-src="/assets/images/gallery/3d-rhombus-pavers.jpeg" data-caption="3D Rhombus Optical Illusion Paving">
              <img src="/assets/images/gallery/3d-rhombus-pavers.jpeg" alt="3D Rhombus Pavers" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">3D GEOMETRIC PAVERS</div>
                  <div className="gallery-caption-sub">Three-dimensional optical diamond patterns for luxury commercial foyers</div>
                </div>
              </div>
            </div>

            <div className="gallery-item" data-lightbox data-src="/assets/images/gallery/star-gateway-entrance.jpeg" data-caption="Star-Patterned Gateway Entrance Paving">
              <img src="/assets/images/gallery/star-gateway-entrance.jpeg" alt="Star Gateway Paving" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">ARCHITECTURAL GATEWAY MOTIFS</div>
                  <div className="gallery-caption-sub">Contrasting two-tone paver designs for estate driveways</div>
                </div>
              </div>
            </div>

            <div className="gallery-item" data-lightbox data-src="/assets/images/gallery/residential-complex-lanes.jpeg" data-caption="High-End Residential Complex Interlocking Driveways">
              <img src="/assets/images/gallery/residential-complex-lanes.jpeg" alt="Residential Complex Lanes" loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-caption-title">RESIDENTIAL COMMUNITIES</div>
                  <div className="gallery-caption-sub">Clean, dust-free permeable driving lanes for residential townships</div>
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
              <span className="section-tag" style={{ color: 'var(--color-primary-light)' }}>PROJECT EXECUTION EXCELLENCE</span>
              <h2 style={{ color: '#FFFFFF', margin: '0.5rem 0 1rem' }}>Have an Infrastructure Tender or RFQ?</h2>
              <p style={{ color: 'var(--color-gray-300)', maxWidth: '650px', margin: 0 }}>
                Our corporate engineering desk provides comprehensive technical bill-of-quantities (BOQ), mix design certifications, and competitive supply &amp; apply commercial rates.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/products" className="btn btn-outline-white">Explore Products</Link>
              <Link href="/contact" className="btn btn-primary">Submit Project Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
