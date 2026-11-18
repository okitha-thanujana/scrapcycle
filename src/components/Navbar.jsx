import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function Logo() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="19" fill="#E8F5E9"/>
      <path d="M19 7C13.48 7 9 11.48 9 17c0 3.18 1.52 6.01 3.88 7.78L11.5 26.17c-.37.4-.1 1.03.44 1.03H19c.55 0 1-.45 1-1V19.5c0-.6-.68-.9-1.1-.49l-1.65 1.66C15.86 20.1 15 18.65 15 17c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.07-.42 2.03-1.1 2.74l1.52 1.52C24.37 20.21 25 18.68 25 17c0-5.52-4-10-6-10z" fill="#2E7D32"/>
      <rect x="21" y="26" width="2.4" height="6" rx="1.2" fill="#6D4C41"/>
      <ellipse cx="22.2" cy="24.5" rx="4.2" ry="3" fill="#4CAF50"/>
    </svg>
  );
}

export default function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`scrapcycle-navbar ${scrolled ? 'scrolled' : ''}`}
      style={{ background: scrolled ? undefined : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <Logo />
          <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.1rem' }}>
            <span style={{ color: '#2E7D32' }}>Scrap</span>
            <span style={{ color: '#6D4C41' }}>Cycle</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-1">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/services', 'Services'],
              ['/shop', 'Shop'],
              ['/impact', 'Our Impact'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact'],
            ].map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) => `nav-link nav-link-custom${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </Nav>

          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
            <Link to="/cart" className="position-relative text-decoration-none" aria-label="Cart">
              <i className="bi bi-bag fs-5" style={{ color: '#2E7D32' }}></i>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{ background: '#2E7D32', fontSize: '10px' }}
                >
                  {cartCount}
                </span>
              )}
            </Link>
            <Button
              as={Link}
              to="/services"
              className="btn-green"
              style={{ fontSize: '0.9rem', padding: '8px 20px' }}
            >
              Subscribe
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
