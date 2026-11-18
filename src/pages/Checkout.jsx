import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import SectionHeading from '../components/SectionHeading';

const deliveryAreas = ['Colombo', 'Dehiwala-Mount Lavinia', 'Sri Jayawardenepura Kotte', 'Nugegoda', 'Maharagama', 'Moratuwa', 'Gampaha', 'Negombo', 'Kalutara', 'Malabe', 'Battaramulla', 'Ragama'];

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const delivery = cartTotal >= 3000 ? 0 : 200;
  const total = cartTotal + delivery;

  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', address: '', area: '', notes: '', payment: 'payhere' });
  const [validated, setValidated] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setValidated(true);
    if (!form.phone.match(/^07[0-9]{8}$/)) {
      setPhoneError('Phone must start with 07 and be 10 digits');
      return;
    }
    if (e.currentTarget.checkValidity() && form.area) {
      clearCart();
      navigate('/order-success');
    }
  };

  if (items.length === 0) {
    navigate('/shop');
    return null;
  }

  return (
    <section style={{ paddingTop: 100, paddingBottom: 80 }}>
      <Container>
        <div className="pt-4 pb-2">
          <SectionHeading title="Checkout" center={false} />
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="gy-4">
            {/* Form */}
            <Col lg={7}>
              <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', padding: 32 }}>
                <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 20, color: '#2E7D32' }}>
                  <i className="bi bi-person-fill me-2"></i>Delivery Information
                </h6>
                <Row className="gy-3">
                  <Col sm={6}>
                    <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>First Name *</Form.Label>
                    <Form.Control name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Nimal" style={{ borderRadius: 10 }} />
                    <Form.Control.Feedback type="invalid">First name required.</Form.Control.Feedback>
                  </Col>
                  <Col sm={6}>
                    <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Last Name *</Form.Label>
                    <Form.Control name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Perera" style={{ borderRadius: 10 }} />
                    <Form.Control.Feedback type="invalid">Last name required.</Form.Control.Feedback>
                  </Col>
                  <Col sm={12}>
                    <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Phone Number *</Form.Label>
                    <Form.Control
                      name="phone"
                      value={form.phone}
                      onChange={e => { handleChange(e); setPhoneError(''); }}
                      required
                      placeholder="07XXXXXXXX"
                      maxLength={10}
                      isInvalid={!!phoneError}
                      style={{ borderRadius: 10 }}
                    />
                    <Form.Control.Feedback type="invalid">{phoneError || 'Phone number required.'}</Form.Control.Feedback>
                  </Col>
                  <Col sm={12}>
                    <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Delivery Address *</Form.Label>
                    <Form.Control name="address" value={form.address} onChange={handleChange} required as="textarea" rows={2} placeholder="No. 123, Main Street, Colombo" style={{ borderRadius: 10 }} />
                    <Form.Control.Feedback type="invalid">Address required.</Form.Control.Feedback>
                  </Col>
                  <Col sm={12}>
                    <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Delivery Area (Western Province) *</Form.Label>
                    <Form.Select name="area" value={form.area} onChange={handleChange} required isInvalid={validated && !form.area} style={{ borderRadius: 10 }}>
                      <option value="">Select area...</option>
                      {deliveryAreas.map(a => <option key={a}>{a}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select a delivery area.</Form.Control.Feedback>
                  </Col>
                  <Col sm={12}>
                    <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Special Instructions</Form.Label>
                    <Form.Control name="notes" value={form.notes} onChange={handleChange} as="textarea" rows={2} placeholder="Leave at the gate, ring bell twice, etc." style={{ borderRadius: 10 }} />
                  </Col>
                </Row>

                <hr className="my-4" />

                <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 20, color: '#2E7D32' }}>
                  <i className="bi bi-credit-card-fill me-2"></i>Payment Method
                </h6>
                <div className="d-flex flex-column gap-3">
                  {[
                    { id: 'payhere', icon: 'bi-credit-card', label: 'PayHere (Visa / Mastercard)', desc: 'Secure online payment' },
                    { id: 'card', icon: 'bi-bank', label: 'Direct Bank Transfer', desc: 'Pay directly to our account' },
                    { id: 'cod', icon: 'bi-cash-coin', label: 'Cash on Delivery', desc: 'Pay when you receive' }
                  ].map(opt => (
                    <label key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 12, border: `2px solid ${form.payment === opt.id ? '#2E7D32' : '#E5E7EB'}`, cursor: 'pointer', background: form.payment === opt.id ? '#E8F5E9' : 'white', transition: 'all 0.2s' }}>
                      <input type="radio" name="payment" value={opt.id} checked={form.payment === opt.id} onChange={handleChange} style={{ accentColor: '#2E7D32' }} />
                      <i className={`bi ${opt.icon} fs-4`} style={{ color: '#2E7D32' }}></i>
                      <div>
                        <div style={{ fontWeight: 600, fontFamily: 'Poppins', fontSize: '0.9rem' }}>{opt.label}</div>
                        <div style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>{opt.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </Col>

            {/* Summary */}
            <Col lg={5}>
              <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', padding: 28, position: 'sticky', top: 100 }}>
                <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 20 }}>Order Summary</h6>
                <div className="mb-4">
                  {items.map(item => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center mb-2 pb-2" style={{ borderBottom: '1px solid #F3F4F6' }}>
                      <div className="d-flex align-items-center gap-2">
                        <img src={item.image} alt={item.name} style={{ width: 48, height: 48, borderRadius: 8, objectFit: 'cover' }} />
                        <div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 600 }}>{item.name}</div>
                          <div style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>Qty: {item.quantity}</div>
                        </div>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#2E7D32' }}>LKR {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.9rem' }}>
                  <span style={{ color: '#6B7280' }}>Subtotal</span>
                  <span style={{ fontWeight: 600 }}>LKR {cartTotal.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-3" style={{ fontSize: '0.9rem' }}>
                  <span style={{ color: '#6B7280' }}>Delivery</span>
                  <span style={{ fontWeight: 600 }}>{delivery === 0 ? 'FREE' : `LKR ${delivery}`}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem' }}>Total</span>
                  <span style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '1.3rem', color: '#2E7D32' }}>LKR {total.toLocaleString()}</span>
                </div>
                <Button type="submit" className="btn-green w-100" style={{ padding: '14px', fontSize: '1rem' }}>
                  <i className="bi bi-lock-fill me-2"></i>Place Order
                </Button>
                <p style={{ fontSize: '0.78rem', color: '#9CA3AF', textAlign: 'center', marginTop: 12, marginBottom: 0 }}>
                  <i className="bi bi-shield-fill-check me-1"></i>Your information is secure & encrypted
                </p>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
}
