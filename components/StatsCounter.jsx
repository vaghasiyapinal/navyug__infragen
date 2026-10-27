'use client';

import { useEffect, useRef, useState } from 'react';

function StatItem({ target, suffix = '+', label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, target]);

  const animateCount = () => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 4);
      const current = Math.round(target * progress);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(target);
      }
    }, frameRate);
  };

  return (
    <div className="stat-item" ref={elementRef}>
      <div className="stat-number">
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { target: 400, suffix: '+', label: 'Petroleum Retail Outlets Driveway' },
    { target: 100, suffix: '+', label: 'Clients Served Across India' },
    { target: 40, suffix: '+', label: 'Public & Cultural Institutions' },
    { target: 35, suffix: '+', label: 'Railway Stations Supplied' },
    { target: 30, suffix: '+', label: 'Petroleum Retail Outlets Construction' },
    { target: 10, suffix: '+', label: 'Ports & Container Yards Executed' },
    { target: 7, suffix: '+', label: 'Large-Scale Warehouses' },
    { target: 5, suffix: '+', label: 'NHAI Road Project Work (RE Block)' },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, idx) => (
        <StatItem key={idx} {...stat} />
      ))}
    </div>
  );
}
