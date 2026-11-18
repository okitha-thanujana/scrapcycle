import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SectionHeading from '../components/SectionHeading';
import { blogPosts } from '../data/blog';

const categories = ['All', 'Environment', 'Tips & Guides', 'Agriculture', 'Urban Gardening', 'Process', 'Sustainability'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 100, paddingBottom: 60, background: 'linear-gradient(135deg, #1B5E20, #2E7D32)', color: 'white', textAlign: 'center' }}>
        <Container>
          <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, display: 'inline-block', marginBottom: 20 }}>
            📰 ScrapCycle Blog
          </span>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>
            Insights & Stories
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: 520, margin: '0 auto' }}>
            Expert tips on composting, sustainable living, Sri Lanka's food waste crisis, and more.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          {/* Category Filter */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            {categories.map(cat => (
              <Button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  borderRadius: 50,
                  padding: '8px 20px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  background: activeCategory === cat ? '#2E7D32' : 'transparent',
                  color: activeCategory === cat ? 'white' : '#374151',
                  border: `2px solid ${activeCategory === cat ? '#2E7D32' : '#E5E7EB'}`,
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <Row className="gy-4">
            {filtered.map((post, i) => (
              <Col key={post.id} md={6} lg={4}>
                <Card className="blog-card h-100">
                  <div style={{ overflow: 'hidden', height: 220 }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-img"
                      loading="lazy"
                      style={{ transition: 'transform 0.4s' }}
                    />
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="category-badge">{post.category}</span>
                      <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>{post.readTime}</span>
                    </div>
                    <h5 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1rem', lineHeight: 1.5, marginBottom: 10 }}>
                      <Link to={`/blog/${post.slug}`} style={{ color: '#1F2937', textDecoration: 'none' }}>
                        {post.title}
                      </Link>
                    </h5>
                    <p style={{ color: '#6B7280', fontSize: '0.88rem', lineHeight: 1.6, flexGrow: 1, marginBottom: 16 }}>
                      {post.excerpt}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div style={{ fontSize: '0.82rem', color: '#6B7280' }}>
                        <i className="bi bi-person-circle me-1"></i>{post.author}
                        <span className="ms-2">· {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} style={{ color: '#2E7D32', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
                        Read <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
