import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { team } from '../data/team';

const values = [
  { icon: 'bi-globe2', title: 'Environmental Stewardship', desc: 'Every decision we make considers its impact on Sri Lanka\'s ecosystems and future generations.' },
  { icon: 'bi-lightbulb-fill', title: 'Radical Innovation', desc: 'We challenge conventional waste management with technology, design and circular thinking.' },
  { icon: 'bi-shield-check', title: 'Absolute Reliability', desc: 'Our subscribers trust us. We show up — on time, every time — rain or shine.' },
  { icon: 'bi-people-fill', title: 'Community Empowerment', desc: 'We\'re building a movement. Every subscriber, farmer and partner is a co-creator of change.' },
  { icon: 'bi-award-fill', title: 'Uncompromising Quality', desc: 'From composting standards to customer service, we refuse to cut corners. ITI-certified, always.' }
];

const timeline = [
  { year: '2026', title: 'Company Registration', desc: 'ScrapCycle (Pvt) Ltd incorporated in Sri Lanka. Team assembled, composting facility secured in Kaduwela.' },
  { year: '2027', title: 'Service Launch', desc: 'Pilot launch in Colombo 7 & Nugegoda. 100 household subscribers and 5 restaurant clients in Month 1. App goes live.' },
  { year: '2028', title: 'Scale-Up', desc: '500+ subscribers, B2B hotel partnerships, GreenGold Compost in farm cooperatives across Western Province.' },
  { year: '2029', title: 'Provincial Expansion', desc: 'Operations expand to Kandy and Galle. 1,500+ subscribers. Carbon credit program initiated.' },
  { year: '2031', title: '2031 Vision', desc: '5,000+ subscribers island-wide. 1,800 tons diverted annually. Market leader in organic compost. Profitable and impact-positive.' }
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 100, paddingBottom: 80, background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #388E3C 100%)', color: 'white' }}>
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, marginBottom: 20, display: 'inline-block' }}>
                🌱 Our Story
              </span>
              <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.2, marginBottom: 24 }}>
                Born From Sri Lanka's Waste Crisis
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.88)', marginBottom: 20 }}>
                Sri Lanka generates over <strong>4,000 tonnes of food waste every day</strong>. Most of it ends up in landfills like Meethotamulla — the same landfill whose collapse in 2017 killed 32 people and displaced thousands.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.88)' }}>
                ScrapCycle was founded to intercept this waste, transform it into premium organic compost, and return it to Sri Lanka's farmlands — closing the loop between city kitchens and rural soil.
              </p>
            </Col>
            <Col lg={6}>
              <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80"
                  alt="Aerobic windrow compost piles at the ScrapCycle facility"
                  loading="lazy"
                  style={{ width: '100%', height: 380, objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Vision & Mission" />
          <Row className="gy-4">
            <Col md={6}>
              <Card className="card-hover border-0 h-100" style={{ background: '#E8F5E9', borderRadius: 20, padding: 8 }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-eye-fill text-white fs-4"></i>
                    </div>
                    <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, margin: 0, color: '#1B5E20' }}>Our Vision</h4>
                  </div>
                  <p style={{ color: '#374151', fontSize: '1rem', lineHeight: 1.8 }}>
                    To be South Asia's most trusted circular economy company — where every tonne of food waste becomes a resource, every farmer gets affordable compost, and every Sri Lankan family contributes to a healthier planet.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card-hover border-0 h-100" style={{ background: '#FFF8E1', borderRadius: 20, padding: 8 }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#6D4C41', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-bullseye text-white fs-4"></i>
                    </div>
                    <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, margin: 0, color: '#4E342E' }}>Our Mission</h4>
                  </div>
                  <p style={{ color: '#374151', fontSize: '1rem', lineHeight: 1.8 }}>
                    To provide reliable, tech-enabled doorstep food waste collection and convert it into premium ITI-certified organic compost — creating economic value for farmers, environmental value for Sri Lanka, and social value for our communities.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <Container>
          <SectionHeading title="Our Core Values" subtitle="The principles that guide every pickup, every compost bag, every decision." />
          <Row className="gy-4 justify-content-center">
            {values.map((v, i) => (
              <Col key={i} sm={6} lg={4}>
                <div className="value-card">
                  <div className="value-icon">
                    <i className={`bi ${v.icon}`}></i>
                  </div>
                  <h5 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 12 }}>{v.title}</h5>
                  <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <SectionHeading title="Our 5-Year Journey" subtitle="From a bold idea to Sri Lanka's leading food waste solution." center={false} />
              <p style={{ color: '#6B7280', lineHeight: 1.8 }}>
                Every great company starts with a problem worth solving. ScrapCycle's roadmap is ambitious, grounded in reality, and driven by impact — not just profit.
              </p>
              <Link to="/contact" className="btn-green btn mt-4">Partner With Us</Link>
            </Col>
            <Col lg={7}>
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div style={{ background: '#F9FAFB', borderRadius: 16, padding: '20px 24px' }}>
                    <span style={{ display: 'inline-block', background: '#E8F5E9', color: '#2E7D32', fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.85rem', padding: '4px 14px', borderRadius: 50, marginBottom: 10 }}>
                      {item.year}
                    </span>
                    <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 8 }}>{item.title}</h6>
                    <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <Container>
          <SectionHeading title="Meet the Founders" subtitle="Four passionate Sri Lankans on a mission to transform how the island handles food waste." />
          <Row className="gy-4 justify-content-center">
            {team.map(member => (
              <Col key={member.id} sm={6} lg={3}>
                <Card className="card-hover border-0 shadow-sm text-center h-100" style={{ borderRadius: 20, overflow: 'hidden' }}>
                  {/* Photo wrapper — taller to show full face for portrait shots */}
                  <div style={{ height: 280, overflow: 'hidden', position: 'relative', background: '#E8F5E9' }}>
                    <img
                      src={member.avatar}
                      alt={`${member.name}, ${member.role}`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block'
                      }}
                    />
                    {/* Subtle bottom fade so name text blends cleanly */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: 48,
                      background: 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)'
                    }} />
                  </div>
                  <Card.Body className="p-4">
                    <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 4 }}>{member.name}</h6>
                    <p style={{ color: '#2E7D32', fontWeight: 600, fontSize: '0.85rem', marginBottom: 12 }}>{member.role}</p>
                    <p style={{ color: '#6B7280', fontSize: '0.84rem', lineHeight: 1.6, marginBottom: 16 }}>{member.bio}</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href={member.linkedin} aria-label={`${member.name} LinkedIn`} style={{ color: '#2E7D32' }}>
                        <i className="bi bi-linkedin fs-5"></i>
                      </a>
                      <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} style={{ color: '#2E7D32' }}>
                        <i className="bi bi-envelope-fill fs-5"></i>
                      </a>
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
