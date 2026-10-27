'use client';

import { useState, useEffect } from 'react';

export default function LightboxModal() {
  const [active, setActive] = useState(false);
  const [src, setSrc] = useState('');
  const [caption, setCaption] = useState('');

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('[data-lightbox]');
      if (!target) return;

      e.preventDefault();
      const imageSrc = target.getAttribute('data-src') || target.querySelector('img')?.src || target.src;
      const imageCaption = target.getAttribute('data-caption') || target.querySelector('img')?.alt || target.alt || '';

      if (imageSrc) {
        setSrc(imageSrc);
        setCaption(imageCaption);
        setActive(true);
        document.body.style.overflow = 'hidden';
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && active) {
        closeModal();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  const closeModal = () => {
    setActive(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      setSrc('');
      setCaption('');
    }, 200);
  };

  return (
    <>
      <div 
        className={`lightbox-modal ${active ? 'active' : ''}`}
        id="lightbox-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Image Preview Modal"
        onClick={(e) => {
          if (e.target.id === 'lightbox-modal') closeModal();
        }}
      >
        <div className="lightbox-content">
          <button className="lightbox-close" aria-label="Close modal" onClick={closeModal}>
            &times;
          </button>
          {src && (
            <img 
              src={src} 
              alt={caption || 'Navyug Infragen High-Resolution Preview'} 
              className="lightbox-img" 
            />
          )}
          {caption && <div className="lightbox-caption">{caption}</div>}
        </div>
      </div>
    </>
  );
}
