import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function OrderSuccess() {
  const [orderRef] = useState(() => Math.floor(100000 + Math.random() * 900000));

  return (
    <section style={{ paddingTop: 120, paddingBottom: 100 }}>
      <Container className="text-center" style={{ maxWidth: 560 }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
          <i className="bi bi-check-lg" style={{ fontSize: 52, color: '#2E7D32' }}></i>
        </div>
        <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2.2rem', color: '#1F2937', marginBottom: 12 }}>
          Order Confirmed! 🎉
        </h1>
        <p style={{ color: '#6B7280', fontSize: '1.05rem', marginBottom: 8 }}>
          Thank you for shopping with ScrapCycle. Your order is on its way!
        </p>
        <div style={{ background: '#E8F5E9', borderRadius: 12, padding: '14px 24px', display: 'inline-block', margin: '20px 0 32px' }}>
          <span style={{ color: '#374151', fontSize: '0.9rem' }}>Order Reference: </span>
          <strong style={{ fontFamily: 'Poppins', color: '#2E7D32', fontSize: '1rem' }}>SC-{orderRef}</strong>
        </div>
        <div style={{ background: '#F9FAFB', borderRadius: 16, padding: 24, marginBottom: 32, textAlign: 'left' }}>
          <div className="d-flex gap-3 mb-3">
            <i className="bi bi-envelope-fill" style={{ color: '#2E7D32', fontSize: 20 }}></i>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Confirmation Email Sent</div>
              <div style={{ color: '#6B7280', fontSize: '0.84rem' }}>Check your inbox for order details.</div>
            </div>
          </div>
          <div className="d-flex gap-3 mb-3">
            <i className="bi bi-truck" style={{ color: '#2E7D32', fontSize: 20 }}></i>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Delivery in 2–4 Business Days</div>
              <div style={{ color: '#6B7280', fontSize: '0.84rem' }}>Track via the ScrapCycle app or WhatsApp.</div>
            </div>
          </div>
          <div className="d-flex gap-3">
            <i className="bi bi-whatsapp" style={{ color: '#25D366', fontSize: 20 }}></i>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>WhatsApp Support</div>
              <div style={{ color: '#6B7280', fontSize: '0.84rem' }}>Questions? Chat with us on <a href="https://wa.me/94112856700" style={{ color: '#2E7D32' }}>WhatsApp</a>.</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/" className="btn-green btn" style={{ padding: '12px 28px' }}>
            <i className="bi bi-house me-2"></i>Back to Home
          </Link>
          <Link to="/shop" className="btn-outline-green btn" style={{ padding: '12px 28px' }}>
            <i className="bi bi-bag me-2"></i>Continue Shopping
          </Link>
        </div>
      </Container>
    </section>
  );
}
