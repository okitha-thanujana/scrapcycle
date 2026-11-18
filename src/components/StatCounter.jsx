import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function StatCounter({ value, suffix = '', decimals = 0, label, icon, color = '#2E7D32' }) {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center px-2">
      <i className={`bi ${icon}`} style={{ fontSize: 36, color, marginBottom: 12, display: 'block' }}></i>
      <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2.6rem', color, lineHeight: 1 }}>
        {started ? (
          <CountUp end={value} duration={2.5} decimals={decimals} suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p style={{ fontSize: '0.88rem', color: '#374151', marginTop: 10, lineHeight: 1.5 }}>{label}</p>
    </div>
  );
}
