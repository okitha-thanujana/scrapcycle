import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { blogPosts } from '../data/blog';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return (
    <Container className="text-center" style={{ paddingTop: 140, paddingBottom: 80 }}>
      <i className="bi bi-file-earmark-x" style={{ fontSize: 64, color: '#D1D5DB' }}></i>
      <h3 className="mt-4" style={{ fontFamily: 'Poppins' }}>Article not found</h3>
      <Link to="/blog" className="btn-green btn mt-4">Back to Blog</Link>
    </Container>
  );

  const related = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  const paragraphs = post.content.split('\n\n').filter(p => p.trim());

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(post.title);

  return (
    <article style={{ paddingTop: 80 }}>
      {/* Hero Image */}
      <div style={{ height: 'clamp(280px, 50vw, 500px)', overflow: 'hidden', position: 'relative' }}>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 24px', color: 'white', maxWidth: 900, margin: '0 auto' }}>
          <span style={{ background: '#2E7D32', padding: '4px 14px', borderRadius: 50, fontSize: '0.78rem', fontWeight: 700, marginBottom: 12, display: 'inline-block' }}>
            {post.category}
          </span>
        </div>
      </div>

      <Container style={{ maxWidth: 800, paddingTop: 48, paddingBottom: 80 }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: 24 }}>
          <ol className="breadcrumb" style={{ fontSize: '0.85rem' }}>
            <li className="breadcrumb-item"><Link to="/" style={{ color: '#2E7D32' }}>Home</Link></li>
            <li className="breadcrumb-item"><Link to="/blog" style={{ color: '#2E7D32' }}>Blog</Link></li>
            <li className="breadcrumb-item active" style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</li>
          </ol>
        </nav>

        <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.3, marginBottom: 20 }}>
          {post.title}
        </h1>

        {/* Meta */}
        <div className="d-flex flex-wrap align-items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid #E5E7EB' }}>
          <div className="d-flex align-items-center gap-2">
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="bi bi-person-fill" style={{ color: '#2E7D32' }}></i>
            </div>
            <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{post.author}</span>
          </div>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>
            <i className="bi bi-calendar3 me-1"></i>
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>
            <i className="bi bi-clock me-1"></i>{post.readTime}
          </span>
        </div>

        {/* Content */}
        <div style={{ lineHeight: 1.9, fontSize: '1.02rem', color: '#374151' }}>
          {paragraphs.map((para, i) => (
            <p key={i} style={{ marginBottom: '1.4em' }}>{para}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-5 mb-4 d-flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} style={{ background: '#E8F5E9', color: '#2E7D32', padding: '4px 14px', borderRadius: 50, fontSize: '0.82rem', fontWeight: 600 }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="d-flex align-items-center gap-3 mt-4 pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#374151' }}>Share:</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
            style={{ width: 38, height: 38, borderRadius: '50%', background: '#3B5998', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
            <i className="bi bi-facebook"></i>
          </a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
            style={{ width: 38, height: 38, borderRadius: '50%', background: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"
            style={{ width: 38, height: 38, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-5 pt-5" style={{ borderTop: '1px solid #E5E7EB' }}>
            <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 24 }}>Related Articles</h4>
            <Row className="gy-4">
              {related.map(rp => (
                <Col key={rp.id} sm={6}>
                  <Link to={`/blog/${rp.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="card-hover" style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}>
                      <img src={rp.image} alt={rp.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                      <div style={{ padding: '16px' }}>
                        <span className="category-badge">{rp.category}</span>
                        <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#1F2937', lineHeight: 1.5, fontSize: '0.9rem' }}>{rp.title}</h6>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </article>
  );
}
