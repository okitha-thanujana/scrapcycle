import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="19" fill="rgba(255,255,255,0.1)"/>
      <path d="M19 7C13.48 7 9 11.48 9 17c0 3.18 1.52 6.01 3.88 7.78L11.5 26.17c-.37.4-.1 1.03.44 1.03H19c.55 0 1-.45 1-1V19.5c0-.6-.68-.9-1.1-.49l-1.65 1.66C15.86 20.1 15 18.65 15 17c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.07-.42 2.03-1.1 2.74l1.52 1.52C24.37 20.21 25 18.68 25 17c0-5.52-4-10-6-10z" fill="#81C784"/>
      <rect x="21" y="26" width="2.4" height="6" rx="1.2" fill="#A5D6A7"/>
      <ellipse cx="22.2" cy="24.5" rx="4.2" ry="3" fill="#66BB6A"/>
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subDone, setSubDone] = useState(false);

  const handleSub = (e) => {
    e.preventDefault();
    if (email) { setSubDone(true); setEmail(''); }
  };

  return (
    <footer className="site-footer">
      <Container>
        <Row className="mb-5">
          {/* Brand */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Logo />
              <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>
                <span style={{ color: '#81C784' }}>Scrap</span>
                <span style={{ color: '#BCAAA4' }}>Cycle</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
              Food Waste Today • Healthy Tomorrow
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginTop: 8 }}>
              Sri Lanka's first subscription-based doorstep food waste collection and premium organic composting service.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com/ScrapCycleLK" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="https://wa.me/94112856700" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col sm={6} lg={2} className="mb-4 mb-lg-0">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/shop', 'Shop'], ['/impact', 'Our Impact'], ['/blog', 'Blog']].map(([p, l]) => (
                <li key={p} className="mb-2"><Link to={p}>{l}</Link></li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <h6 className="footer-heading">Services</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              <li className="mb-2"><Link to="/services">Household Plans</Link></li>
              <li className="mb-2"><Link to="/services">Restaurant & Hotel Plans</Link></li>
              <li className="mb-2"><Link to="/shop">GreenGold Compost</Link></li>
              <li className="mb-2"><Link to="/shop">Garden Kits</Link></li>
              <li className="mb-2"><Link to="/contact">Waste Audit</Link></li>
            </ul>
          </Col>

          {/* Contact & Newsletter */}
          <Col lg={3}>
            <h6 className="footer-heading">Get in Touch</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.88rem' }}>
              <li className="mb-2 d-flex gap-2">
                <i className="bi bi-geo-alt-fill" style={{ color: '#81C784', marginTop: 2 }}></i>
                <span>No. 1040, Thalangama North, Malabe, Sri Lanka</span>
              </li>
              <li className="mb-2 d-flex gap-2">
                <i className="bi bi-telephone-fill" style={{ color: '#81C784' }}></i>
                <a href="tel:+94112856700">+94 11 2 856 700</a>
              </li>
              <li className="mb-2 d-flex gap-2">
                <i className="bi bi-envelope-fill" style={{ color: '#81C784' }}></i>
                <a href="mailto:info@scrapcycle.lk">info@scrapcycle.lk</a>
              </li>
            </ul>
            <h6 className="footer-heading mt-4">Newsletter</h6>
            {subDone ? (
              <p style={{ color: '#81C784', fontSize: '0.9rem' }}>
                <i className="bi bi-check-circle me-2"></i>Thanks for subscribing!
              </p>
            ) : (
              <Form onSubmit={handleSub} className="d-flex gap-2">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '0.85rem', borderRadius: '8px' }}
                />
                <Button type="submit" className="btn-green" style={{ padding: '8px 16px', whiteSpace: 'nowrap', borderRadius: '8px', fontSize: '0.85rem' }}>
                  Join
                </Button>
              </Form>
            )}
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(255,255,255,0.15)' }} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-2" style={{ fontSize: '0.82rem' }}>
          <p className="mb-1 mb-md-0">© 2026 ScrapCycle (Pvt) Ltd. All rights reserved.</p>
          <p className="mb-0" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Made with ♻️ in Sri Lanka &nbsp;|&nbsp;
            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
