export default function SectionHeading({ title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-5 ${center ? 'text-center' : ''}`}>
      <h2 style={{
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
        color: light ? 'white' : '#1F2937',
        marginBottom: 0
      }}>
        {title}
      </h2>
      <div className="section-divider" style={{ margin: center ? '12px auto 0' : '12px 0 0' }}></div>
      {subtitle && (
        <p style={{
          marginTop: 20,
          color: light ? 'rgba(255,255,255,0.8)' : '#6B7280',
          fontSize: '1.05rem',
          maxWidth: 640,
          margin: `20px ${center ? 'auto' : '0'} 0`,
          lineHeight: 1.7
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
