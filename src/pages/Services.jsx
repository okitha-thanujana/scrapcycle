import { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Accordion, Table, Form, Button, Alert } from 'react-bootstrap';
import SectionHeading from '../components/SectionHeading';
import PlanCard from '../components/PlanCard';
import { householdPlans, businessPlans } from '../data/plans';
import { faqs } from '../data/faqs';

const comparisonData = [
  { feature: 'Monthly Cost (est.)', scrapcycle: 'LKR 1,500–3,000', municipal: 'LKR 0 (tax-funded)', private: 'LKR 3,000–8,000' },
  { feature: 'Reliability', scrapcycle: '✅ Scheduled, guaranteed', municipal: '❌ Irregular', private: '⚠️ Variable' },
  { feature: 'Compost Output', scrapcycle: '✅ GreenGold Compost', municipal: '❌ Landfill only', private: '❌ Landfill only' },
  { feature: 'Bin Provided', scrapcycle: '✅ Yes (odor-seal)', municipal: '❌ No', private: '⚠️ Sometimes' },
  { feature: 'App & GPS Tracking', scrapcycle: '✅ Full app', municipal: '❌ No', private: '❌ No' },
  { feature: 'ESG Reporting', scrapcycle: '✅ Full reports', municipal: '❌ No', private: '❌ No' },
  { feature: 'Impact Dashboard', scrapcycle: '✅ Real-time data', municipal: '❌ No', private: '❌ No' },
  { feature: 'CEA / ITI Certified', scrapcycle: '✅ Yes', municipal: '❌ No', private: '❌ No' },
];

export default function Services() {
  const [auditSent, setAuditSent] = useState(false);
  const [auditForm, setAuditForm] = useState({ name: '', company: '', phone: '', email: '', type: '', message: '' });

  const handleAudit = (e) => {
    e.preventDefault();
    setAuditSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 100, paddingBottom: 60, background: 'linear-gradient(135deg, #1B5E20, #2E7D32)', color: 'white' }}>
        <Container className="text-center">
          <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, display: 'inline-block', marginBottom: 20 }}>
            💼 Plans & Pricing
          </span>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: 560, margin: '0 auto' }}>
            Whether you're a family in Colombo or a 5-star hotel, ScrapCycle has a plan designed for your needs.
          </p>
        </Container>
      </section>

      {/* Plans Tabs */}
      <section className="section-padding">
        <Container>
          <Tab.Container defaultActiveKey="household">
            <div className="text-center mb-5">
              <Nav variant="pills" className="d-inline-flex gap-2" style={{ background: '#F3F4F6', padding: 6, borderRadius: 50 }}>
                <Nav.Item>
                  <Nav.Link eventKey="household" style={{ borderRadius: 50, fontFamily: 'Poppins', fontWeight: 600 }}>
                    <i className="bi bi-house-heart me-2"></i>Households
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="business" style={{ borderRadius: 50, fontFamily: 'Poppins', fontWeight: 600 }}>
                    <i className="bi bi-building me-2"></i>Business
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="household">
                <Row className="justify-content-center gy-4">
                  {householdPlans.map(plan => (
                    <Col key={plan.id} md={5}>
                      <PlanCard plan={plan} type="household" />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="business">
                <Row className="justify-content-center gy-4 mb-5">
                  {businessPlans.map(plan => (
                    <Col key={plan.id} md={5}>
                      <PlanCard plan={plan} type="business" />
                    </Col>
                  ))}
                </Row>

                {/* Waste Audit Form */}
                <div style={{ background: '#E8F5E9', borderRadius: 24, padding: '40px 32px', maxWidth: 700, margin: '40px auto 0' }}>
                  <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 8, color: '#1B5E20' }}>
                    <i className="bi bi-clipboard2-data-fill me-2"></i>Request a Free Waste Audit
                  </h4>
                  <p style={{ color: '#374151', marginBottom: 24, fontSize: '0.95rem' }}>
                    Not sure which plan fits? Our team will assess your waste volume and recommend the right solution — free of charge.
                  </p>
                  {auditSent ? (
                    <Alert variant="success">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Thank you! Our team will contact you within 24 hours to schedule your audit.
                    </Alert>
                  ) : (
                    <Form onSubmit={handleAudit}>
                      <Row className="gy-3">
                        <Col sm={6}>
                          <Form.Control placeholder="Your Name *" required value={auditForm.name} onChange={e => setAuditForm({ ...auditForm, name: e.target.value })} style={{ borderRadius: 10 }} />
                        </Col>
                        <Col sm={6}>
                          <Form.Control placeholder="Company Name *" required value={auditForm.company} onChange={e => setAuditForm({ ...auditForm, company: e.target.value })} style={{ borderRadius: 10 }} />
                        </Col>
                        <Col sm={6}>
                          <Form.Control placeholder="Phone Number *" required value={auditForm.phone} onChange={e => setAuditForm({ ...auditForm, phone: e.target.value })} style={{ borderRadius: 10 }} />
                        </Col>
                        <Col sm={6}>
                          <Form.Control type="email" placeholder="Email *" required value={auditForm.email} onChange={e => setAuditForm({ ...auditForm, email: e.target.value })} style={{ borderRadius: 10 }} />
                        </Col>
                        <Col sm={12}>
                          <Form.Select required value={auditForm.type} onChange={e => setAuditForm({ ...auditForm, type: e.target.value })} style={{ borderRadius: 10 }}>
                            <option value="">Business Type *</option>
                            <option>Restaurant / Café</option>
                            <option>Hotel / Resort</option>
                            <option>Hospital / Institution</option>
                            <option>Supermarket / Retail</option>
                            <option>Other</option>
                          </Form.Select>
                        </Col>
                        <Col sm={12}>
                          <Form.Control as="textarea" rows={3} placeholder="Estimated daily food waste volume (optional)" value={auditForm.message} onChange={e => setAuditForm({ ...auditForm, message: e.target.value })} style={{ borderRadius: 10 }} />
                        </Col>
                        <Col sm={12}>
                          <Button type="submit" className="btn-green" style={{ padding: '12px 32px' }}>
                            <i className="bi bi-send me-2"></i>Request Audit
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <Container>
          <SectionHeading title="ScrapCycle vs The Alternatives" subtitle="See why switching to ScrapCycle is the smartest choice for Sri Lankan households and businesses." />
          <div className="table-responsive">
            <Table className="comparison-table shadow-sm" style={{ borderRadius: 16, overflow: 'hidden' }}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Feature</th>
                  <th className="text-center" style={{ color: '#2E7D32' }}>
                    <i className="bi bi-recycle me-2"></i>ScrapCycle
                  </th>
                  <th className="text-center">Municipal Council</th>
                  <th className="text-center">Private Lorry</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, fontSize: '0.9rem' }}>{row.feature}</td>
                    <td className="text-center" style={{ fontSize: '0.88rem', color: '#374151' }}>
                      {row.scrapcycle.startsWith('✅') ? (
                        <span><i className="bi bi-check-circle-fill check me-1"></i>{row.scrapcycle.substring(2)}</span>
                      ) : row.scrapcycle}
                    </td>
                    <td className="text-center" style={{ fontSize: '0.88rem', color: '#374151' }}>
                      {row.municipal.startsWith('❌') ? (
                        <span><i className="bi bi-x-circle-fill cross me-1"></i>{row.municipal.substring(2)}</span>
                      ) : row.municipal}
                    </td>
                    <td className="text-center" style={{ fontSize: '0.88rem', color: '#374151' }}>{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <Container style={{ maxWidth: 800 }}>
          <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know before you subscribe." />
          <Accordion className="faq-accordion" alwaysOpen={false}>
            {faqs.map((faq, i) => (
              <Accordion.Item key={faq.id} eventKey={String(i)} style={{ borderRadius: '12px !important', marginBottom: 12, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body style={{ color: '#6B7280', lineHeight: 1.7 }}>
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>
    </>
  );
}
