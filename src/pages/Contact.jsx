import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import SectionHeading from '../components/SectionHeading';

const contactInfo = [
  { icon: 'bi-geo-alt-fill', label: 'Address', value: 'No. 1040, Thalangama North, Malabe, Sri Lanka', link: null },
  { icon: 'bi-telephone-fill', label: 'Phone', value: '+94 11 2 856 700', link: 'tel:+94112856700' },
  { icon: 'bi-envelope-fill', label: 'Email', value: 'info@scrapcycle.lk', link: 'mailto:info@scrapcycle.lk' },
  { icon: 'bi-globe', label: 'Website', value: 'www.scrapcycle.lk', link: 'https://www.scrapcycle.lk' },
];

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 1:00 PM' },
  { day: 'Sunday & Holidays', time: 'Closed (WhatsApp support available)' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setValidated(true);
    if (e.currentTarget.checkValidity()) {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setValidated(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 100, paddingBottom: 60, background: 'linear-gradient(135deg, #1B5E20, #2E7D32)', color: 'white', textAlign: 'center' }}>
        <Container>
          <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, display: 'inline-block', marginBottom: 20 }}>
            💬 Get in Touch
          </span>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>
            We'd Love to Hear from You
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: 520, margin: '0 auto' }}>
            Questions about our service, a business enquiry, or just want to say hello — we're here.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="gy-5">
            {/* Contact Form */}
            <Col lg={7}>
              <div style={{ background: 'white', borderRadius: 24, boxShadow: '0 8px 30px rgba(0,0,0,0.08)', padding: '36px 32px' }}>
                <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 24 }}>Send Us a Message</h4>

                {submitted && (
                  <Alert variant="success" className="d-flex align-items-center gap-2 mb-4" style={{ borderRadius: 12 }}>
                    <i className="bi bi-check-circle-fill fs-5"></i>
                    <div>
                      <strong>Message sent!</strong> We'll get back to you within 24 hours.
                    </div>
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="gy-3">
                    <Col sm={6}>
                      <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Full Name *</Form.Label>
                      <Form.Control
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Nimal Perera"
                        style={{ borderRadius: 10 }}
                      />
                      <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
                    </Col>
                    <Col sm={6}>
                      <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="nimal@example.com"
                        style={{ borderRadius: 10 }}
                      />
                      <Form.Control.Feedback type="invalid">Valid email required.</Form.Control.Feedback>
                    </Col>
                    <Col sm={6}>
                      <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Phone (optional)</Form.Label>
                      <Form.Control
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+94 71 XXX XXXX"
                        style={{ borderRadius: 10 }}
                      />
                    </Col>
                    <Col sm={6}>
                      <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Subject *</Form.Label>
                      <Form.Select name="subject" value={form.subject} onChange={handleChange} required isInvalid={validated && !form.subject} style={{ borderRadius: 10 }}>
                        <option value="">Select a subject...</option>
                        <option>Household Subscription Enquiry</option>
                        <option>Business / Hotel Plan</option>
                        <option>Waste Audit Request</option>
                        <option>Compost / Product Order</option>
                        <option>Partnership / Investment</option>
                        <option>Media / Press</option>
                        <option>General Enquiry</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">Please select a subject.</Form.Control.Feedback>
                    </Col>
                    <Col sm={12}>
                      <Form.Label style={{ fontWeight: 600, fontSize: '0.88rem' }}>Message * <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(min. 20 characters)</span></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        minLength={20}
                        placeholder="Tell us how we can help..."
                        style={{ borderRadius: 10 }}
                      />
                      <Form.Control.Feedback type="invalid">Message must be at least 20 characters.</Form.Control.Feedback>
                      <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginTop: 4 }}>{form.message.length}/20 min</div>
                    </Col>
                    <Col sm={12}>
                      <Button type="submit" className="btn-green" style={{ padding: '12px 36px' }}>
                        <i className="bi bi-send me-2"></i>Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            {/* Contact Info */}
            <Col lg={5}>
              {/* Info Cards */}
              <div className="mb-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="d-flex align-items-start gap-3 mb-3 p-3" style={{ background: '#F9FAFB', borderRadius: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`bi ${info.icon}`} style={{ color: '#2E7D32', fontSize: 18 }}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#9CA3AF', fontWeight: 600, marginBottom: 2 }}>{info.label}</div>
                      {info.link ? (
                        <a href={info.link} style={{ color: '#1F2937', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>{info.value}</a>
                      ) : (
                        <div style={{ color: '#1F2937', fontWeight: 600, fontSize: '0.9rem' }}>{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mb-4" style={{ background: '#E8F5E9', borderRadius: 16, padding: 24 }}>
                <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#1B5E20', marginBottom: 16 }}>
                  <i className="bi bi-clock-fill me-2"></i>Business Hours
                </h6>
                {hours.map((h, i) => (
                  <div key={i} className="d-flex justify-content-between mb-2" style={{ fontSize: '0.88rem' }}>
                    <span style={{ color: '#374151' }}>{h.day}</span>
                    <span style={{ fontWeight: 600, color: '#1B5E20' }}>{h.time}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a href="https://wa.me/94112856700" target="_blank" rel="noopener noreferrer" className="whatsapp-btn w-100 justify-content-center mb-4" aria-label="Chat on WhatsApp">
                <i className="bi bi-whatsapp fs-5"></i>
                Chat on WhatsApp Now
              </a>

              {/* Social Links */}
              <div className="d-flex gap-3 justify-content-center">
                <a href="https://facebook.com/ScrapCycleLK" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  style={{ width: 44, height: 44, borderRadius: '50%', background: '#3B5998', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" aria-label="Instagram"
                  style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" aria-label="LinkedIn"
                  style={{ width: 44, height: 44, borderRadius: '50%', background: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              </div>
            </Col>
          </Row>

          {/* Google Map */}
          <div className="mt-5" style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1504944788296!2d79.97361831477364!3d6.916499695004098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256b854b8ad79%3A0x5a4a6f84ff5de1b1!2sMalabe%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1699900000000!5m2!1sen!2slk"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ScrapCycle Office Location — Malabe, Sri Lanka"
            ></iframe>
          </div>
        </Container>
      </section>
    </>
  );
}
