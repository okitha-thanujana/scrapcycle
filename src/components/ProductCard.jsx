import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function Stars({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1,2,3,4,5].map(n => (
        <i key={n} className={`bi bi-star${n <= Math.round(rating) ? '-fill' : ''}`} style={{ fontSize: 12 }}></i>
      ))}
    </span>
  );
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card className="product-card h-100 border-0 shadow-sm">
      <div className="product-img-wrapper">
        <Link to={`/shop/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Link>
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
        {product.certified && (
          <span className="certified-badge">
            <i className="bi bi-patch-check-fill me-1"></i>ITI Certified
          </span>
        )}
      </div>

      <Card.Body className="d-flex flex-column p-3">
        <Link to={`/shop/${product.slug}`} className="text-decoration-none">
          <h6 style={{ fontFamily: 'Poppins', fontWeight: 600, color: '#1F2937', marginBottom: 6 }}>
            {product.name}
          </h6>
        </Link>

        <div className="d-flex align-items-center gap-2 mb-2">
          <Stars rating={product.rating} />
          <span style={{ fontSize: 12, color: '#6B7280' }}>({product.reviews})</span>
        </div>

        <p style={{ fontSize: '0.82rem', color: '#6B7280', marginBottom: 12, lineHeight: 1.5 }}>
          {product.description.substring(0, 80)}...
        </p>

        <div className="mt-auto">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.1rem', color: '#2E7D32' }}>
              {product.quoteOnly ? 'LKR ' + product.price.toLocaleString() + '/ton' : `LKR ${product.price.toLocaleString()}`}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '0.88rem', color: '#9CA3AF', textDecoration: 'line-through' }}>
                LKR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {product.quoteOnly ? (
            <Link to="/contact" className="btn btn-outline-success w-100" style={{ borderRadius: 10, fontWeight: 600 }}>
              Request Quote
            </Link>
          ) : (
            <Button
              className="btn-green w-100"
              style={{ borderRadius: 10 }}
              onClick={() => addToCart(product)}
              aria-label={`Add ${product.name} to cart`}
            >
              <i className="bi bi-bag-plus me-2"></i>Add to Cart
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
