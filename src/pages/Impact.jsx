import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import SectionHeading from '../components/SectionHeading';

const monthlyData = [
  { month: 'Jan', tons: 60 }, { month: 'Feb', tons: 80 }, { month: 'Mar', tons: 100 },
  { month: 'Apr', tons: 120 }, { month: 'May', tons: 145 }, { month: 'Jun', tons: 155 },
  { month: 'Jul', tons: 170 }, { month: 'Aug', tons: 180 }, { month: 'Sep', tons: 190 },
  { month: 'Oct', tons: 200 }, { month: 'Nov', tons: 210 }, { month: 'Dec', tons: 220 }
];

const sourceData = [
  { name: 'Households', value: 40 },
  { name: 'Restaurants', value: 35 },
  { name: 'Hotels', value: 25 },
];
const PIE_COLORS = ['#2E7D32', '#6D4C41', '#81C784'];

const impactMetrics = [
  { value: 1830, suffix: ' kg', label: 'Waste Diverted This Month', icon: 'bi-trash3-fill', color: '#2E7D32' },
  { value: 1464, suffix: ' kg', label: 'CO₂e Emissions Prevented', icon: 'bi-cloud-fill', color: '#6D4C41' },
  { value: 912, suffix: ' kg', label: 'GreenGold Compost Produced', icon: 'bi-bag-fill', color: '#2E7D32' },
  { value: 12, suffix: '', label: 'Full-time Jobs Created', icon: 'bi-people-fill', color: '#6D4C41' },
];

const processSteps = [
  { icon: '🏠', step: '01', title: 'Kitchen Segregation', desc: 'You place food waste in your ScrapCycle bin at home — no contamination, no plastic.' },
  { icon: '🚛', step: '02', title: 'Doorstep Collection', desc: 'Our uniformed team collects on schedule with odor-sealed, GPS-tracked vehicles.' },
  { icon: '🏭', step: '03', title: 'Reception & Weighing', desc: 'Waste arrives at Kaduwela, is weighed, moisture-checked and mixed with carbon inputs.' },
  { icon: '🌡️', step: '04', title: 'Active Composting', desc: 'Windrow piles heat to 65°C+, eliminating all pathogens. Turned 4–6× for 6 weeks.' },
  { icon: '⏳', step: '05', title: 'Curing & Maturing', desc: 'Compost matures over 4–6 weeks. Beneficial fungi colonise. Earthy smell develops.' },
  { icon: '🌱', step: '06', title: 'Screening & Delivery', desc: 'Compost is screened, ITI-tested, bagged as GreenGold and delivered to farms.' },
];

const goals = [
  { icon: 'bi-recycle', title: 'Zero to Landfill', desc: '100% of collected food waste is composted. Nothing we collect ends up in a landfill. By 2028, we target zero residual waste.', color: '#E8F5E9', iconColor: '#2E7D32' },
  { icon: 'bi-currency-exchange', title: 'Carbon Credits', desc: 'Registering under VCS and Gold Standard frameworks to monetise our CO₂e reductions and generate a carbon credit revenue stream.', color: '#FFF8E1', iconColor: '#6D4C41' },
  { icon: 'bi-globe2', title: 'Sri Lanka NDC 3.0', desc: 'Directly aligned with Sri Lanka\'s waste sector NDC targets. Our activity contributes measurably to national climate commitments.', color: '#E8F5E9', iconColor: '#2E7D32' },
];

function CounterCard({ value, suffix, label, icon, color }) {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center p-4" style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.07)', height: '100%' }}>
      <i className={`bi ${icon}`} style={{ fontSize: 36, color, marginBottom: 12, display: 'block' }}></i>
      <div className="impact-number" style={{ color }}>
        {started ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
      </div>
      <p style={{ color: '#6B7280', fontSize: '0.88rem', marginTop: 10, marginBottom: 0 }}>{label}</p>
    </div>
  );
}

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 100, paddingBottom: 60, background: 'linear-gradient(135deg, #1B5E20, #2E7D32)', color: 'white', textAlign: 'center' }}>
        <Container>
          <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, display: 'inline-block', marginBottom: 20 }}>
            📊 Impact Dashboard
          </span>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>
            Real Numbers. Real Impact.
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: 560, margin: '0 auto' }}>
            Every pickup, every tonne composted, every farm served — tracked and transparent.
          </p>
        </Container>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <Container>
          <SectionHeading title="Live Impact Dashboard" subtitle="Cumulative figures since launch. Updated monthly." />
          <Row className="gy-4">
            {impactMetrics.map((m, i) => (
              <Col key={i} xs={6} lg={3}>
                <CounterCard {...m} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Charts */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Waste Diversion Analytics" />
          <Row className="gy-5">
            <Col lg={7}>
              <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.07)', padding: 28 }}>
                <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 20 }}>
                  Monthly Waste Diverted (2027 Projections) — Tonnes
                </h6>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={monthlyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: 13 }}
                      formatter={(v) => [`${v} tonnes`, 'Diverted']}
                    />
                    <Bar dataKey="tons" fill="#2E7D32" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Col>
            <Col lg={5}>
              <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.07)', padding: 28, height: '100%' }}>
                <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 20 }}>
                  Waste Sources Breakdown
                </h6>
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {sourceData.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => [`${v}%`, 'Share']} contentStyle={{ borderRadius: 12, border: 'none', fontSize: 13 }} />
                    <Legend iconType="circle" iconSize={10} formatter={(v) => <span style={{ fontSize: 13, color: '#374151' }}>{v}</span>} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <Container>
          <SectionHeading title="From Scrap to Soil" subtitle="6 stages that transform your kitchen waste into premium certified compost." />
          <Row className="gy-4">
            {processSteps.map((s, i) => (
              <Col key={i} sm={6} lg={4}>
                <div className="process-step">
                  <div className="process-step-icon" style={{ fontSize: 36 }}>{s.icon}</div>
                  <span style={{ display: 'inline-block', background: '#E8F5E9', color: '#2E7D32', fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.78rem', padding: '3px 12px', borderRadius: 50, marginBottom: 10 }}>
                    Step {s.step}
                  </span>
                  <h6 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 8 }}>{s.title}</h6>
                  <p style={{ color: '#6B7280', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Sustainability Goals */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Our Sustainability Goals" subtitle="Ambitious commitments that hold us accountable to Sri Lanka and the planet." />
          <Row className="gy-4">
            {goals.map((g, i) => (
              <Col key={i} md={4}>
                <Card className="card-hover border-0 h-100" style={{ borderRadius: 20, background: g.color }}>
                  <Card.Body className="p-4">
                    <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                      <i className={`bi ${g.icon} fs-3`} style={{ color: g.iconColor }}></i>
                    </div>
                    <h5 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 12 }}>{g.title}</h5>
                    <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{g.desc}</p>
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
