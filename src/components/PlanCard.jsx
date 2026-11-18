import { Link } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';

export default function PlanCard({ plan, type = 'household' }) {
  return (
    <Card className={`plan-card shadow${plan.popular ? ' popular' : ''} border-0 h-100`}>
      {plan.popular && (
        <div className="text-center py-2" style={{ background: '#2E7D32', color: 'white', fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.5px' }}>
          ⭐ MOST POPULAR
        </div>
      )}
      <Card.Body className="p-4">
        <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#1F2937' }}>{plan.name}</h4>
        <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: 20 }}>{plan.description}</p>

        <div className="mb-4">
          <span style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2.4rem', color: '#2E7D32' }}>
            LKR {plan.price.toLocaleString()}
          </span>
          <span style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>/{plan.period}</span>
          {plan.minPrice && (
            <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginTop: 2 }}>Starting from</div>
          )}
        </div>

        <ul className="list-unstyled mb-4">
          {plan.features.map((f, i) => (
            <li key={i} className="d-flex align-items-start gap-2 mb-2">
              <i className="bi bi-check-circle-fill" style={{ color: '#2E7D32', marginTop: 2, flexShrink: 0 }}></i>
              <span style={{ fontSize: '0.9rem' }}>{f}</span>
            </li>
          ))}
          {plan.notIncluded && plan.notIncluded.map((f, i) => (
            <li key={`not-${i}`} className="d-flex align-items-start gap-2 mb-2">
              <i className="bi bi-x-circle" style={{ color: '#D1D5DB', marginTop: 2, flexShrink: 0 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>{f}</span>
            </li>
          ))}
        </ul>

        <Button
          as={Link}
          to="/contact"
          className={plan.popular ? 'btn-green w-100' : 'btn-outline-green w-100'}
          style={{ borderRadius: 50 }}
        >
          {plan.cta}
        </Button>
      </Card.Body>
    </Card>
  );
}
