'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on navigation
  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMobile = () => {
    const nextState = !mobileOpen;
    setMobileOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services & Infra', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="top-header">
        <div className="container-wide header-inner">
          <Link href="/" className="brand-logo-wrap" aria-label="Navyug Infragen Home">
            <img 
              src="/assets/images/branding/navyug-logo-full.jpeg" 
              alt="Navyug Infragen Private Limited" 
              className="brand-logo" 
            />
          </Link>

          <nav className="nav-links" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/contact" className="btn btn-primary btn-sm">
              Get in Touch
            </Link>
            <button 
              className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
              onClick={toggleMobile}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} id="mobile-drawer">
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.label} <span>&rarr;</span>
            </Link>
          ))}
        </div>
        <div className="mobile-drawer-cta">
          <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            LET'S BUILD SOMETHING LASTING
          </Link>
        </div>
      </div>
    </>
  );
}
