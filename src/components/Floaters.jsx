import React, { useState, useEffect } from 'react';

export default function Floaters() {
  const [visible, setVisible] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/971582652070"
        target="_blank" rel="noreferrer"
        title="Chat on WhatsApp"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position:'fixed', bottom:'30px', left:'30px', zIndex:999,
          width: hov ? '62px' : '56px',
          height: hov ? '62px' : '56px',
          background:'#25D366',
          borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'26px', textDecoration:'none',
          animation:'pring 2.5s ease infinite',
          boxShadow: hov
            ? '0 8px 40px rgba(37,211,102,0.7)'
            : '0 4px 24px rgba(37,211,102,0.5)',
          transition:'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >💬</a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
        style={{
          position:'fixed', bottom:'30px', right:'30px', zIndex:999,
          width:'46px', height:'46px',
          background:'linear-gradient(135deg,#1247cc,#06d6e3)',
          borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'18px', cursor:'pointer',
          border:'none', outline:'none',
          boxShadow:'0 4px 20px rgba(37,99,235,0.4)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
          pointerEvents: visible ? 'auto' : 'none',
          transition:'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px) scale(1.15)'; e.currentTarget.style.boxShadow='0 12px 36px rgba(37,99,235,0.6)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform='translateY(0) scale(1)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(37,99,235,0.4)'; }}
        aria-label="Scroll to top"
      >↑</button>
    </>
  );
}
