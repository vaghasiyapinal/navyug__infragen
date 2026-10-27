'use client';

import { useState } from 'react';

export default function ProductFilter({ cementProducts, sustainableProducts }) {
  const [activeTab, setActiveTab] = useState('cat-cement');

  return (
    <div>
      {/* Filter Tabs */}
      <div className="filter-bar" role="tablist">
        <button
          className={`filter-btn ${activeTab === 'cat-cement' ? 'active' : ''}`}
          onClick={() => setActiveTab('cat-cement')}
          role="tab"
          aria-selected={activeTab === 'cat-cement'}
        >
          Precast Cement Products
        </button>
        <button
          className={`filter-btn ${activeTab === 'cat-sustainable' ? 'active' : ''}`}
          onClick={() => setActiveTab('cat-sustainable')}
          role="tab"
          aria-selected={activeTab === 'cat-sustainable'}
        >
          Sustainable Products (Zero-Cement)
        </button>
      </div>

      {/* Category 1: Cement Products */}
      <div
        className={`product-category-view ${activeTab === 'cat-cement' ? 'active' : ''}`}
        id="cat-cement"
        role="tabpanel"
      >
        <div className="products-grid">
          {cementProducts}
        </div>
      </div>

      {/* Category 2: Sustainable Products */}
      <div
        className={`product-category-view ${activeTab === 'cat-sustainable' ? 'active' : ''}`}
        id="cat-sustainable"
        role="tabpanel"
      >
        <div className="products-grid">
          {sustainableProducts}
        </div>
      </div>
    </div>
  );
}
