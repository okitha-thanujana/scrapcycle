import { useState, useMemo } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = ['All', 'compost', 'kits', 'bins'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

export default function Shop() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let list = category === 'All' ? [...products] : products.filter(p => p.category === category);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, sort]);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 100, paddingBottom: 60, background: 'linear-gradient(135deg, #1B5E20, #2E7D32)', color: 'white', textAlign: 'center' }}>
        <Container>
          <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, display: 'inline-block', marginBottom: 20 }}>
            🛒 GreenGold Shop
          </span>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>
            Shop GreenGold Products
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: 520, margin: '0 auto' }}>
            100% organic, ITI-certified compost, garden kits and eco-friendly bins — delivered to your door.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          {/* Filter Bar */}
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-5 gap-3">
            <div className="d-flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  style={{
                    borderRadius: 50,
                    padding: '8px 20px',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    background: category === cat ? '#2E7D32' : 'transparent',
                    color: category === cat ? 'white' : '#374151',
                    border: `2px solid ${category === cat ? '#2E7D32' : '#E5E7EB'}`,
                    transition: 'all 0.2s'
                  }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              ))}
            </div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{ borderRadius: 10, border: '1px solid #E5E7EB', padding: '8px 16px', fontSize: '0.88rem', color: '#374151', background: 'white', cursor: 'pointer' }}
              aria-label="Sort products"
            >
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {/* Product Grid */}
          <Row className="gy-4">
            {filtered.map(p => (
              <Col key={p.id} sm={6} lg={4}>
                <ProductCard product={p} />
              </Col>
            ))}
          </Row>

          {/* Trust badges */}
          <div className="mt-5 p-4 text-center" style={{ background: '#E8F5E9', borderRadius: 20 }}>
            <Row className="gy-3 justify-content-center">
              {[
                { icon: 'bi-patch-check-fill', text: 'ITI Certified Compost' },
                { icon: 'bi-shield-fill-check', text: 'CEA Compliant' },
                { icon: 'bi-truck', text: 'Free delivery over LKR 3,000' },
                { icon: 'bi-arrow-counterclockwise', text: '7-day return policy' },
              ].map((b, i) => (
                <Col key={i} xs={6} md={3} className="d-flex align-items-center justify-content-center gap-2">
                  <i className={`bi ${b.icon}`} style={{ color: '#2E7D32', fontSize: 20 }}></i>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1B5E20' }}>{b.text}</span>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
