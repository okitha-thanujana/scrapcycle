import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SectionHeading from '../components/SectionHeading';
import StatCounter from '../components/StatCounter';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ProductCard from '../components/ProductCard';
import { stats } from '../data/stats';
import { testimonials } from '../data/testimonials';
import { products } from '../data/products';

const services = [
  {
    title: 'Households',
    icon: 'bi-house-heart-fill',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
    desc: 'Doorstep collection for families. Odor-seal bins, weekly pickup, and your personal impact dashboard.',
    link: '/services'
  },
  {
    title: 'Restaurants & Hotels',
    icon: 'bi-building-fill',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    desc: 'Enterprise food waste management with ESG reporting, analytics dashboard, and dedicated account managers.',
    link: '/services'
  },
  {
    title: 'Farmers & Gardeners',
    icon: 'bi-tree-fill',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    desc: 'Premium ITI-certified GreenGold Compost delivered to your farm or garden. Bulk orders available.',
    link: '/shop'
  }
];

const appFeatures = [
  { icon: 'bi-geo-alt-fill', title: 'GPS Pickup Tracking', desc: 'Live-track your collection vehicle in real time.' },
  { icon: 'bi-graph-up-arrow', title: 'Impact Dashboard', desc: 'See exactly how much waste you\'ve diverted and CO₂ prevented.' },
  { icon: 'bi-award-fill', title: 'GreenPoints Rewards', desc: 'Earn points every pickup, redeem for free compost.' },
  { icon: 'bi-credit-card-fill', title: 'PayHere Payments', desc: 'Seamless, secure monthly auto-payments.' },
  { icon: 'bi-whatsapp', title: '24/7 WhatsApp Support', desc: 'Real humans. Fast answers. Any time.' }
];

export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setBgLoaded(true);
    img.src = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80';
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" style={{ paddingTop: 72 }}>
        <div
          className={`hero-bg ${bgLoaded ? 'loaded' : ''}`}
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80')` }}
          role="img"
          aria-label="Hands holding rich dark compost soil"
        />
        <Container>
          <div className="hero-content" style={{ maxWidth: 700 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#E8F5E9', padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, marginBottom: 20, border: '1px solid rgba(255,255,255,0.3)' }}>
              🌿 Sri Lanka's #1 Food Waste Solution
            </span>
            <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Your Waste,{' '}
              <span style={{ color: '#81C784' }}>Reborn.</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, marginBottom: 36, color: 'rgba(255,255,255,0.88)' }}>
              Doorstep food waste pickup. Premium organic compost. One simple app.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/services" className="btn-green btn" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
                Start Subscription
              </Link>
              <Link to="/shop" className="btn btn-outline-light" style={{ borderRadius: 50, padding: '14px 32px', fontWeight: 600, fontSize: '1.05rem' }}>
                Shop GreenGold Compost
              </Link>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>Scroll</div>
          <i className="bi bi-chevron-double-down fs-5"></i>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <Container>
          <Row className="justify-content-center align-items-center gy-3">
            {[
              { icon: 'bi-patch-check-fill', label: 'ITI Certified Compost' },
              { icon: 'bi-shield-fill-check', label: 'CEA Compliant' },
              { icon: 'bi-lock-fill', label: 'PayHere Secure Payments' },
              { icon: 'bi-award-fill', label: 'ISO 14001 Aligned' },
            ].map((b, i) => (
              <Col key={i} xs={6} md={3} className="d-flex justify-content-center">
                <div className="trust-badge">
                  <i className={`bi ${b.icon} fs-5`} style={{ color: '#2E7D32' }}></i>
                  <span style={{ fontSize: '0.9rem' }}>{b.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ── STATS ── */}
      <section className="stats-strip">
        <Container>
          <SectionHeading
            title="The Food Waste Crisis Is Real"
            subtitle="Sri Lanka's food waste problem demands bold action. ScrapCycle is the answer."
          />
          <Row className="gy-4">
            {stats.map(s => (
              <Col key={s.id} xs={6} md={3}>
                <StatCounter {...s} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="How ScrapCycle Works" subtitle="Three simple steps from your kitchen to Sri Lanka's farmlands." />
          <Row className="gy-4">
            {[
              {
                num: '01', icon: 'bi-truck', color: '#E8F5E9', iconColor: '#2E7D32',
                title: 'Collect',
                desc: 'We place odor-sealing bins at your doorstep. Our uniformed team picks up on schedule — you don\'t lift a finger.',
                image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500&q=80'
              },
              {
                num: '02', icon: 'bi-recycle', color: '#FFF8E1', iconColor: '#6D4C41',
                title: 'Convert',
                desc: 'Waste goes to our Kaduwela composting facility where aerobic windrow composting transforms it into premium compost in 8–12 weeks.',
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80'
              },
              {
                num: '03', icon: 'bi-shop', color: '#E8F5E9', iconColor: '#2E7D32',
                title: 'Commerce',
                desc: 'GreenGold Compost — ITI-certified, nutrient-rich — is delivered to farms, gardeners and garden centres across Sri Lanka.',
                image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=80'
              }
            ].map((step, i) => (
              <Col key={i} md={4}>
                <Card className="card-hover border-0 shadow-sm h-100 overflow-hidden">
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img src={step.image} alt={step.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <Card.Body className="p-4">
                    <div className="how-step-num mb-3">{step.num}</div>
                    <div className="step-icon mb-3" style={{ background: step.color }}>
                      <i className={`bi ${step.icon}`} style={{ color: step.iconColor, fontSize: 28 }}></i>
                    </div>
                    <h5 style={{ fontFamily: 'Poppins', fontWeight: 700 }}>{step.title}</h5>
                    <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.7 }}>{step.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <Container>
          <SectionHeading title="Who We Serve" subtitle="From households to hotels to farms — ScrapCycle works for everyone." />
          <Row className="gy-4">
            {services.map((s, i) => (
              <Col key={i} md={4}>
                <Card className="card-hover border-0 shadow-sm h-100 overflow-hidden">
                  <div style={{ height: 220, overflow: 'hidden' }}>
                    <img src={s.image} alt={s.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                  </div>
                  <Card.Body className="p-4">
                    <i className={`bi ${s.icon} fs-3 mb-3 d-block`} style={{ color: '#2E7D32' }}></i>
                    <h5 style={{ fontFamily: 'Poppins', fontWeight: 700 }}>{s.title}</h5>
                    <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.desc}</p>
                    <Link to={s.link} className="text-decoration-none fw-600" style={{ color: '#2E7D32', fontWeight: 600, fontSize: '0.9rem' }}>
                      Learn more <i className="bi bi-arrow-right"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section-padding">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
            <div>
              <h2 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 0 }}>Featured Products</h2>
              <div className="section-divider" style={{ margin: '12px 0 0' }}></div>
            </div>
            <Link to="/shop" className="btn-outline-green btn" style={{ padding: '10px 24px' }}>View All Products</Link>
          </div>
          <Row className="gy-4">
            {products.slice(0, 3).map(p => (
              <Col key={p.id} sm={6} md={4}>
                <ProductCard product={p} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── APP SHOWCASE ── */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)' }}>
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6} className="text-white">
              <SectionHeading title="One App. Total Control." subtitle="Track pickups, measure impact, earn rewards, and pay seamlessly — all from the ScrapCycle app." light />
              <div className="mt-4">
                {appFeatures.map((f, i) => (
                  <div key={i} className="app-feature-item">
                    <div className="app-feature-icon">
                      <i className={`bi ${f.icon}`}></i>
                    </div>
                    <div>
                      <h6 style={{ fontFamily: 'Poppins', fontWeight: 600, color: 'white', marginBottom: 2 }}>{f.title}</h6>
                      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', margin: 0 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-3 mt-4 flex-wrap">
                <a href="#" className="d-flex align-items-center gap-2 px-4 py-2" style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
                  <i className="bi bi-apple fs-4"></i>
                  <div><div style={{ fontSize: '0.7rem' }}>Download on the</div><div style={{ fontWeight: 700, fontFamily: 'Poppins' }}>App Store</div></div>
                </a>
                <a href="#" className="d-flex align-items-center gap-2 px-4 py-2" style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
                  <i className="bi bi-google-play fs-4"></i>
                  <div><div style={{ fontSize: '0.7rem' }}>Get it on</div><div style={{ fontWeight: 700, fontFamily: 'Poppins' }}>Google Play</div></div>
                </a>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 32, padding: 32, display: 'inline-block' }}>
                <div style={{ width: 260, height: 500, background: 'rgba(255,255,255,0.08)', borderRadius: 40, border: '2px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                  <i className="bi bi-phone" style={{ fontSize: 48, color: '#81C784', marginBottom: 16 }}></i>
                  <div style={{ color: 'white', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>ScrapCycle App</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: 24 }}>Coming Soon</div>
                    <div style={{ background: '#E8F5E9', borderRadius: 12, padding: '12px 20px', color: '#2E7D32', fontSize: '0.82rem', fontWeight: 600 }}>
                      <i className="bi bi-bell-fill me-2"></i>Notify Me
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <Container>
          <SectionHeading title="What Our Community Says" subtitle="From Colombo kitchens to Dambulla farms — real people, real results." />
          <TestimonialCarousel testimonials={testimonials} />
        </Container>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-padding">
        <Container>
          <div className="cta-banner">
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, marginBottom: 20, display: 'inline-block' }}>
              🎉 Limited Time Offer
            </span>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', marginBottom: 16 }}>
              First Month FREE for the First 100 Households!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: 36, maxWidth: 540, margin: '0 auto 36px' }}>
              Join Sri Lanka's eco-revolution. Zero risk, full impact. Cancel anytime.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/services" className="btn" style={{ background: 'white', color: '#2E7D32', borderRadius: 50, padding: '14px 36px', fontWeight: 700, fontFamily: 'Poppins', fontSize: '1.05rem' }}>
                Claim Free Month
              </Link>
              <Link to="/contact" className="btn btn-outline-light" style={{ borderRadius: 50, padding: '14px 36px', fontWeight: 600 }}>
                Talk to Us First
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
