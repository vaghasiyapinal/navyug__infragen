'use client';

import { useState } from 'react';

export default function ProjectFilter({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'highways', label: 'Highways & Bridges' },
    { id: 'smart-cities', label: 'Smart Cities & Logistics' },
    { id: 'ports', label: 'Ports & Heavy-Duty' },
    { id: 'sustainable', label: 'Sustainable / Eco' },
    { id: 'public', label: 'Public & Institutional' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <div>
      {/* Filter Tabs */}
      <div className="filter-bar" role="tablist">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(tab.id)}
            role="tab"
            aria-selected={activeFilter === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <article className="project-card" key={idx} data-category={project.category}>
            <div
              className="project-media"
              data-lightbox
              data-src={project.image}
              data-caption={project.caption || project.title}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <span className="project-tag">{project.badge}</span>
            </div>
            <div className="project-info">
              <div className="project-location">{project.location}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-metric-box">{project.metric}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
