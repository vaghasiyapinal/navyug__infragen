import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand">
            <img 
              src="/assets/images/branding/navyug-logo-full.jpeg" 
              alt="Navyug Infragen" 
              style={{ height: '48px', width: 'auto', backgroundColor: '#FFFFFF', padding: '4px 8px', borderRadius: '4px' }} 
            />
            <p>
              <strong>Navyug Infragen Private Limited</strong><br />
              Established in 1964. Manufacturer of high-quality paver blocks, curb stones, and precast concrete infrastructure solutions.
            </p>
            <p style={{ color: 'var(--color-primary-light)', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.75rem' }}>
              INNOVATING CONCRETE. SUSTAINING FUTURES.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/products" className="footer-link">Products &amp; Solutions</Link>
              <Link href="/services" className="footer-link">Services &amp; Turnkey Infra</Link>
              <Link href="/projects" className="footer-link">Notable Projects</Link>
              <Link href="/sustainability" className="footer-link">Sustainability</Link>
              <Link href="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Operations &amp; QA</div>
            <div className="footer-links">
              <Link href="/services#manufacturing" className="footer-link">Manufacturing Units</Link>
              <Link href="/services#laboratory" className="footer-link">In-House Laboratory</Link>
              <Link href="/services#retaining-wall" className="footer-link">Retaining Wall Erection</Link>
              <Link href="/services#fuel-stations" className="footer-link">Fuel Stations</Link>
              <Link href="/about#certifications" className="footer-link">Certifications &amp; ISI</Link>
              <Link href="/projects#clientele" className="footer-link">Prestigious Clientele</Link>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Group &amp; Compliance</div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-300)', marginBottom: '0.75rem' }}>
              <strong>Group of Companies:</strong><br />
              Hi Tech Engineers &amp; Navyug Tiles
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-gray-400)', marginBottom: '0.5rem' }}>
              <strong>Certifications:</strong><br />
              First ISO-9001 in Saurashtra Kutch<br />
              ISI Certified (IS 15658, CM/L - 7900132116)<br />
              Startup India Recognized (Uncarbon Pavers)<br />
              Udyog Bharati Award Winner
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 1964 &ndash; {new Date().getFullYear()} Navyug Infragen Private Limited. All Rights Reserved.
          </div>
          <div>
            Precast Concrete Products &amp; Infrastructure Solutions across India.
          </div>
        </div>
      </div>
    </footer>
  );
}
