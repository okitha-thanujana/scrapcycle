import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function NotFound() {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 100 }}>
      <Container className="text-center" style={{ maxWidth: 500 }}>
        <div style={{ fontSize: 80, marginBottom: 24 }}>🌿</div>
        <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '5rem', color: '#E5E7EB', lineHeight: 1 }}>404</h1>
        <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#1F2937', marginBottom: 12, marginTop: 8 }}>Page Not Found</h3>
        <p style={{ color: '#6B7280', marginBottom: 36, lineHeight: 1.7 }}>
          Looks like this page went to compost. Let's get you back to something green.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/" className="btn-green btn" style={{ padding: '12px 28px' }}>
            <i className="bi bi-house me-2"></i>Go Home
          </Link>
          <Link to="/shop" className="btn-outline-green btn" style={{ padding: '12px 28px' }}>
            <i className="bi bi-bag me-2"></i>Shop Products
          </Link>
        </div>
      </Container>
    </section>
  );
}
