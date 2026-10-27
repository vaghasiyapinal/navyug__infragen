'use client';

import { useState, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    needsActivation: false,
    error: '',
    message: '',
  });

  const alertRef = useRef(null);

  const handleChange = (e) => {
    const key = e.target.name || e.target.id.replace('contact-', '').replace('project-', '');
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.name.trim()) return { field: 'name', message: 'Please enter your Full Name.' };
    if (!formData.email || !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) return { field: 'email', message: 'Please enter a valid Work Email Address.' };
    if (!formData.phone || !formData.phone.trim()) return { field: 'phone', message: 'Please enter your Phone Number.' };
    if (!formData.category || !formData.category.trim()) return { field: 'category', message: 'Please select a Project Requirement category.' };
    return null;
  };

  const handleSubmit = async (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      e.stopPropagation();
    }

    const validation = validateForm();
    if (validation) {
      setStatus({
        loading: false,
        success: false,
        needsActivation: false,
        error: validation.message,
        message: '',
      });
      return;
    }

    setStatus({
      loading: true,
      success: false,
      needsActivation: false,
      error: '',
      message: '',
    });

    const payload = {
      ...formData,
      message: formData.message && formData.message.trim() ? formData.message.trim() : 'General Project & Procurement Inquiry via Website',
    };

    const startTime = Date.now();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      // Ensure loading state is visible for at least 800ms
      const elapsed = Date.now() - startTime;
      if (elapsed < 800) {
        await new Promise((resolve) => setTimeout(resolve, 800 - elapsed));
      }

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setStatus({
        loading: false,
        success: true,
        needsActivation: false,
        error: '',
        message: data.message || 'Thank you! Your inquiry has been sent to ruchibudhelia1@gmail.com.',
      });

      // Clear inputs upon success
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        category: '',
        message: '',
      });

      // Scroll message into view
      setTimeout(() => {
        alertRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    } catch (err) {
      const elapsed = Date.now() - startTime;
      if (elapsed < 600) {
        await new Promise((resolve) => setTimeout(resolve, 600 - elapsed));
      }

      setStatus({
        loading: false,
        success: false,
        needsActivation: false,
        error: err.message || 'An error occurred while submitting. Please try again.',
        message: '',
      });
    }
  };

  return (
    <div className="contact-form-wrap">
      <h3 style={{ marginBottom: '0.5rem' }}>Corporate Project Inquiry &amp; Tender RFQ</h3>
      <p className="text-sm" style={{ marginBottom: '2rem' }}>
        Inquiries are delivered directly to <strong>ruchibudhelia1@gmail.com</strong>.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit(e);
        }}
        id="inquiry-form"
        noValidate
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">Full Name *</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              disabled={status.loading}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-company" className="form-label">Company / EPC Firm</label>
            <input
              type="text"
              id="contact-company"
              name="company"
              className="form-control"
              placeholder="Company or EPC contractor"
              value={formData.company}
              onChange={handleChange}
              disabled={status.loading}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">Work Email Address *</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              className="form-control"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              disabled={status.loading}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-phone" className="form-label">Phone Number *</label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              className="form-control"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              disabled={status.loading}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="project-category" className="form-label">Project Requirement *</label>
          <select
            id="project-category"
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
            disabled={status.loading}
            required
          >
            <option value="" disabled>Select Requirement Category</option>
            <option value="Paver Blocks (M-30 to M-55 Grade Heavy Duty)">Paver Blocks (M-30 to M-55 Grade Heavy Duty)</option>
            <option value="Curb Stones & Highway Border Elements">Curb Stones & Highway Border Elements</option>
            <option value="RE Blocks (Bridge Retaining Walls Supply & Apply)">RE Blocks (Bridge Retaining Walls Supply & Apply)</option>
            <option value="Fuel Station End-to-End Turnkey Construction">Fuel Station End-to-End Turnkey Construction</option>
            <option value="Zero Cement / Uncarbon Pavers (Sustainable)">Zero Cement / Uncarbon Pavers (Sustainable)</option>
            <option value="Red Clay Pavers (Eco-Sensitive Zones)">Red Clay Pavers (Eco-Sensitive Zones)</option>
            <option value="Chequered & Tactile Tiles (Railway / Smart City)">Chequered & Tactile Tiles (Railway / Smart City)</option>
            <option value="Ports & Container Yard Heavy-Duty Paving">Ports & Container Yard Heavy-Duty Paving</option>
            <option value="General Procurement / Tender Inquiry">General Procurement / Tender Inquiry</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">Message / Quantity &amp; Location Details *</label>
          <textarea
            id="contact-message"
            name="message"
            className="form-control"
            placeholder="Provide estimated square feet/meters, delivery site location, and project schedule..."
            value={formData.message}
            onChange={handleChange}
            disabled={status.loading}
            required
          />
        </div>

        {status.error && (
          <div
            style={{
              display: 'block',
              marginBottom: '1rem',
              padding: '0.85rem 1rem',
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #EF4444',
              color: '#991B1B',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
              lineHeight: 1.4,
              animation: 'fadeIn 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1rem', color: '#DC2626', fontWeight: 'bold' }}>&#9888;</span>
              <strong>{status.error}</strong>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
          style={{ width: '100%' }}
          disabled={status.loading}
        >
          {status.loading ? (
            <>
              <span className="btn-spinner" aria-hidden="true"></span>
              Submitting Inquiry...
            </>
          ) : (
            <>
              LET'S BUILD SOMETHING LASTING
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        <div ref={alertRef}>
          {status.success && !status.needsActivation && (
            <div
              id="form-success-msg"
              style={{
                display: 'block',
                marginTop: '1.5rem',
                padding: '1.25rem 1.5rem',
                backgroundColor: '#ECFDF5',
                border: '1.5px solid #10B981',
                color: '#065F46',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.15)',
                animation: 'fadeIn 0.4s ease-in-out',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    backgroundColor: '#10B981',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  ✓
                </span>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#065F46', fontSize: '1.1rem', fontWeight: 700 }}>
                    Thank You! Your inquiry has been received.
                  </h4>
                  <p style={{ margin: 0, color: '#047857' }}>
                    {status.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {status.success && status.needsActivation && (
            <div
              style={{
                display: 'block',
                marginTop: '1.25rem',
                padding: '1.15rem 1.25rem',
                backgroundColor: '#EFF6FF',
                border: '1px solid #3B82F6',
                color: '#1E40AF',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', color: '#2563EB' }}>✉</span>
                <div>
                  <strong>First-Time Inbox Verification Required:</strong>
                  <p style={{ margin: '0.35rem 0 0 0', color: '#1E3A8A' }}>
                    FormSubmit has sent a 1-click verification email to <strong>ruchibudhelia1@gmail.com</strong> with the subject <em>&ldquo;FormSubmit: Please activate your form&rdquo;</em>.
                  </p>
                  <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.86rem', color: '#3B82F6' }}>
                    Please open your email (check Spam / Updates if not in Primary inbox) and click <strong>&ldquo;Activate Form&rdquo;</strong> once. Subsequent submissions will arrive directly in your inbox with no action required!
                  </p>
                </div>
              </div>
            </div>
          )}

          {status.error && (
            <div
              style={{
                display: 'block',
                marginTop: '1.25rem',
                padding: '1.15rem 1.25rem',
                backgroundColor: '#FEF2F2',
                border: '1px solid #EF4444',
                color: '#991B1B',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.92rem',
                lineHeight: 1.5,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.1rem', color: '#DC2626' }}>&#9888;</span>
                <div>
                  <strong>Submission Error:</strong>
                  <p style={{ margin: '0.25rem 0 0 0' }}>{status.error}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
