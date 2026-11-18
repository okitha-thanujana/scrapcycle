import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import SectionHeading from '../components/SectionHeading';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const delivery = items.length > 0 ? 200 : 0;

  if (items.length === 0) {
    return (
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <Container className="text-center" style={{ maxWidth: 500 }}>
          <i className="bi bi-bag-x" style={{ fontSize: 80, color: '#D1D5DB' }}></i>
          <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, marginTop: 24, marginBottom: 12 }}>Your cart is empty</h3>
          <p style={{ color: '#6B7280', marginBottom: 32 }}>Looks like you haven't added anything yet. Explore our GreenGold products!</p>
          <Link to="/shop" className="btn-green btn" style={{ padding: '12px 32px' }}>
            <i className="bi bi-shop me-2"></i>Browse Products
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section style={{ paddingTop: 100, paddingBottom: 80 }}>
      <Container>
        <div className="pt-4 pb-2">
          <SectionHeading title="Your Cart" subtitle={`${items.length} item${items.length > 1 ? 's' : ''} in your cart`} center={false} />
        </div>

        <Row className="gy-4">
          {/* Items */}
          <Col lg={8}>
            <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
              <div className="table-responsive">
                <Table className="mb-0 align-middle">
                  <thead style={{ background: '#F9FAFB' }}>
                    <tr>
                      <th style={{ fontFamily: 'Poppins', fontSize: '0.85rem', padding: '16px 20px', border: 'none' }}>Product</th>
                      <th style={{ fontFamily: 'Poppins', fontSize: '0.85rem', padding: '16px 20px', border: 'none', textAlign: 'center' }}>Qty</th>
                      <th style={{ fontFamily: 'Poppins', fontSize: '0.85rem', padding: '16px 20px', border: 'none', textAlign: 'right' }}>Total</th>
                      <th style={{ border: 'none', padding: '16px 20px' }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr key={item.id} style={{ borderTop: '1px solid #F3F4F6' }}>
                        <td style={{ padding: '16px 20px' }}>
                          <div className="d-flex align-items-center gap-3">
                            <img src={item.image} alt={item.name} className="cart-item-img" loading="lazy" />
                            <div>
                              <Link to={`/shop/${item.slug}`} style={{ fontFamily: 'Poppins', fontWeight: 600, color: '#1F2937', textDecoration: 'none', fontSize: '0.95rem' }}>
                                {item.name}
                              </Link>
                              <div style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: 2 }}>LKR {item.price.toLocaleString()} each</div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                          <div className="d-flex align-items-center justify-content-center" style={{ border: '1px solid #E5E7EB', borderRadius: 50, width: 110, margin: '0 auto' }}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ width: 36, height: 36, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18 }}>−</button>
                            <span style={{ width: 32, textAlign: 'center', fontWeight: 700 }}>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ width: 36, height: 36, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18 }}>+</button>
                          </div>
                        </td>
                        <td style={{ padding: '16px 20px', textAlign: 'right', fontFamily: 'Poppins', fontWeight: 700, color: '#2E7D32' }}>
                          LKR {(item.price * item.quantity).toLocaleString()}
                        </td>
                        <td style={{ padding: '16px 20px' }}>
                          <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`} style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', fontSize: 18 }}>
                            <i className="bi bi-trash3"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="mt-3">
              <Link to="/shop" style={{ color: '#2E7D32', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>
                <i className="bi bi-arrow-left me-2"></i>Continue Shopping
              </Link>
            </div>
          </Col>

          {/* Summary */}
          <Col lg={4}>
            <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', padding: 28, position: 'sticky', top: 100 }}>
              <h5 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 20 }}>Order Summary</h5>

              <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.92rem' }}>
                <span style={{ color: '#6B7280' }}>Subtotal</span>
                <span style={{ fontWeight: 600 }}>LKR {cartTotal.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-3" style={{ fontSize: '0.92rem' }}>
                <span style={{ color: '#6B7280' }}>Delivery</span>
                <span style={{ fontWeight: 600 }}>LKR {delivery.toLocaleString()}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#10B981', marginBottom: 16 }}>
                {cartTotal >= 3000 ? '🎉 You qualify for free delivery!' : `Add LKR ${(3000 - cartTotal).toLocaleString()} more for free delivery`}
              </div>

              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem' }}>Total</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '1.2rem', color: '#2E7D32' }}>
                  LKR {(cartTotal + (cartTotal >= 3000 ? 0 : delivery)).toLocaleString()}
                </span>
              </div>

              <Link to="/checkout" className="btn-green btn w-100 mb-3" style={{ padding: '14px', fontSize: '1rem' }}>
                <i className="bi bi-lock-fill me-2"></i>Proceed to Checkout
              </Link>

              <div className="d-flex justify-content-center gap-3 mt-3" style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>
                <span><i className="bi bi-lock me-1"></i>Secure Checkout</span>
                <span><i className="bi bi-credit-card me-1"></i>PayHere</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
