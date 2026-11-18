import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

function Stars({ rating }) {
  return (
    <span className="stars">
      {[1,2,3,4,5].map(n => (
        <i key={n} className={`bi bi-star${n <= Math.round(rating) ? '-fill' : ''}`} style={{ fontSize: 16 }}></i>
      ))}
      <span style={{ color: '#6B7280', fontSize: '0.9rem', marginLeft: 6 }}>({rating} · {Math.floor(Math.random() * 100 + 20)} reviews)</span>
    </span>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return (
    <Container className="text-center" style={{ paddingTop: 140, paddingBottom: 80 }}>
      <i className="bi bi-emoji-frown" style={{ fontSize: 64, color: '#D1D5DB' }}></i>
      <h3 className="mt-4" style={{ fontFamily: 'Poppins' }}>Product not found</h3>
      <Link to="/shop" className="btn-green btn mt-4">Back to Shop</Link>
    </Container>
  );

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section style={{ paddingTop: 100 }}>
      <Container className="py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: 32 }}>
          <ol className="breadcrumb" style={{ fontSize: '0.88rem' }}>
            <li className="breadcrumb-item"><Link to="/" style={{ color: '#2E7D32' }}>Home</Link></li>
            <li className="breadcrumb-item"><Link to="/shop" style={{ color: '#2E7D32' }}>Shop</Link></li>
            <li className="breadcrumb-item active">{product.name}</li>
          </ol>
        </nav>

        <Row className="gy-5">
          {/* Images */}
          <Col lg={6}>
            <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 12 }}>
              <img src={product.images[activeImg]} alt={product.name} style={{ width: '100%', height: 420, objectFit: 'cover' }} />
            </div>
            {product.images.length > 1 && (
              <div className="d-flex gap-2">
                {product.images.map((img, i) => (
                  <div key={i} onClick={() => setActiveImg(i)} style={{ width: 80, height: 80, borderRadius: 10, overflow: 'hidden', cursor: 'pointer', border: i === activeImg ? '2px solid #2E7D32' : '2px solid transparent', transition: 'border 0.2s' }}>
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </Col>

          {/* Details */}
          <Col lg={6}>
            {product.badge && (
              <span style={{ display: 'inline-block', background: '#2E7D32', color: 'white', fontSize: '0.78rem', fontWeight: 700, padding: '4px 12px', borderRadius: 50, marginBottom: 12 }}>{product.badge}</span>
            )}
            {product.certified && (
              <span style={{ display: 'inline-block', background: '#6D4C41', color: 'white', fontSize: '0.78rem', fontWeight: 700, padding: '4px 12px', borderRadius: 50, marginBottom: 12, marginLeft: 8 }}>
                <i className="bi bi-patch-check-fill me-1"></i>ITI Certified
              </span>
            )}
            <h1 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 12 }}>{product.name}</h1>

            <div className="mb-4"><Stars rating={product.rating} /></div>

            <div className="mb-4 d-flex align-items-baseline gap-3">
              <span style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: '#2E7D32' }}>
                LKR {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span style={{ color: '#9CA3AF', textDecoration: 'line-through', fontSize: '1.1rem' }}>
                  LKR {product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.originalPrice && (
                <span style={{ background: '#E8F5E9', color: '#2E7D32', fontWeight: 700, fontSize: '0.85rem', padding: '4px 10px', borderRadius: 50 }}>
                  Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: 24 }}>{product.description}</p>

            {/* Nutrients */}
            {product.nutrients && (
              <div className="mb-4" style={{ background: '#E8F5E9', borderRadius: 16, padding: '16px 20px' }}>
                <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#1B5E20', marginBottom: 12 }}>
                  <i className="bi bi-eyedropper me-2"></i>Nutrient Profile
                </h6>
                <Row className="gy-2">
                  {Object.entries(product.nutrients).map(([k, v]) => (
                    <Col xs={6} key={k}>
                      <div style={{ fontSize: '0.88rem' }}>
                        <span style={{ color: '#6B7280' }}>{k}: </span>
                        <strong style={{ color: '#1B5E20' }}>{v}</strong>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            )}

            {/* Usage Guide */}
            <div className="mb-4" style={{ background: '#FFF8E1', borderRadius: 16, padding: '16px 20px' }}>
              <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#4E342E', marginBottom: 8 }}>
                <i className="bi bi-info-circle-fill me-2"></i>Usage Guide
              </h6>
              <p style={{ color: '#374151', fontSize: '0.9rem', margin: 0 }}>{product.usageGuide}</p>
            </div>

            {/* Add to cart */}
            {!product.quoteOnly ? (
              <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="d-flex align-items-center" style={{ border: '1px solid #E5E7EB', borderRadius: 50, overflow: 'hidden' }}>
                    <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 42, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18 }}>−</button>
                    <span style={{ width: 40, textAlign: 'center', fontFamily: 'Poppins', fontWeight: 700 }}>{qty}</span>
                    <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 42, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18 }}>+</button>
                  </div>
                  <Button className="btn-green flex-grow-1" onClick={handleAdd} style={{ borderRadius: 50, padding: '12px' }}>
                    {added ? <><i className="bi bi-check-lg me-2"></i>Added!</> : <><i className="bi bi-bag-plus me-2"></i>Add to Cart</>}
                  </Button>
                </div>
                <Link to="/cart" className="btn btn-outline-success w-100" style={{ borderRadius: 50, fontWeight: 600, padding: '12px' }}>
                  <i className="bi bi-bag me-2"></i>View Cart & Checkout
                </Link>
              </div>
            ) : (
              <Link to="/contact" className="btn-green btn w-100" style={{ borderRadius: 50, padding: '14px', fontSize: '1rem' }}>
                <i className="bi bi-envelope me-2"></i>Request a Quote
              </Link>
            )}
          </Col>
        </Row>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-5 pt-5 border-top">
            <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 32 }}>Related Products</h4>
            <Row className="gy-4">
              {related.map(p => (
                <Col key={p.id} sm={6} md={4}>
                  <ProductCard product={p} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
}
