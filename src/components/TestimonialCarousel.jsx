import { useState } from 'react';

function Stars({ n }) {
  return <span className="stars">{Array.from({ length: n }, (_, i) => <i key={i} className="bi bi-star-fill" style={{ fontSize: 14 }}></i>)}</span>;
}

export default function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <div className="position-relative" style={{ maxWidth: 760, margin: '0 auto' }}>
      <div className="testimonial-card text-center">
        <div className="mb-3">
          <Stars n={t.rating} />
        </div>
        <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: '#374151', fontStyle: 'italic', marginBottom: 28 }}>
          "{t.text}"
        </p>
        <img
          src={t.avatar}
          alt={t.name}
          className="testimonial-avatar mb-3"
          loading="lazy"
        />
        <div>
          <strong style={{ fontFamily: 'Poppins', color: '#1F2937' }}>{t.name}</strong>
          <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: 0 }}>{t.role}</p>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        style={{ position: 'absolute', top: '50%', left: -20, transform: 'translateY(-50%)', background: '#2E7D32', color: 'white', border: 'none', borderRadius: '50%', width: 42, height: 42, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        style={{ position: 'absolute', top: '50%', right: -20, transform: 'translateY(-50%)', background: '#2E7D32', color: 'white', border: 'none', borderRadius: '50%', width: 42, height: 42, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className="bi bi-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="d-flex justify-content-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Testimonial ${i + 1}`}
            style={{ width: i === active ? 24 : 10, height: 10, borderRadius: 5, background: i === active ? '#2E7D32' : '#D1D5DB', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
          />
        ))}
      </div>
    </div>
  );
}
