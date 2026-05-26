import React, { useState } from 'react';
import { Reveal } from './Reveal';

const TESTIMONIALS = [
  { initials:"TJ", name:"Tony Jason", role:"Corporate Client", color:"from-[#1247cc] to-[#3b82f6]",
    text:"Working with Nitra Technology has been an absolute pleasure! Their range of IT products is impressive, and the quality is unmatched. As a corporate client, we have found their solutions to be reliable and efficient, helping us streamline operations and boost productivity." },
  { initials:"JS", name:"Jane Sarah", role:"Business Owner", color:"from-[#0891b2] to-[#06d6e3]",
    text:"Nitra Technology has been our trusted IT partner for networking, CCTV, and server implementation, and they consistently deliver reliable, high-quality results that keep our operations running smoothly. Their team is responsive, professional, and always willing to tailor solutions." },
  { initials:"MA", name:"Mohammed Abdul", role:"Enterprise Client", color:"from-[#1247cc] to-[#06d6e3]",
    text:"We chose Nitra Technology for our IT infrastructure and ongoing support, and their tailored solutions have significantly improved our efficiency and system reliability. From networking to security, their attention to detail and customer support have consistently exceeded our expectations." },
];

function TestimonialCard({ t, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay} direction="scale">
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          borderRadius:'24px',
          padding:'32px',
          height:'100%',
          display:'flex', flexDirection:'column', justifyContent:'space-between',
          position:'relative', overflow:'hidden',
          background: hov ? 'rgba(11,31,74,0.6)' : 'rgba(255,255,255,0.06)',
          border:`1px solid ${hov ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`,
          backdropFilter:'blur(20px)',
          transition:'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          transform: hov ? 'translateY(-10px) scale(1.01)' : 'translateY(0) scale(1)',
          boxShadow: hov ? '0 40px 100px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.2)',
        }}
      >
        {/* Gradient glow on hover */}
        <div style={{
          position:'absolute', top:0, left:0, right:0, height:'3px',
          background:'linear-gradient(90deg,#1247cc,#06d6e3)',
          opacity: hov ? 1 : 0,
          transition:'opacity 0.3s',
        }} />

        {/* Background quote */}
        <div style={{
          position:'absolute', top:'16px', right:'20px',
          fontFamily:'Georgia,serif', fontSize:'120px', color:'rgba(6,214,227,0.06)',
          lineHeight:1, pointerEvents:'none', userSelect:'none',
          transform: hov ? 'scale(1.1)' : 'scale(1)',
          transition:'transform 0.4s',
        }}>"</div>

        <div>
          {/* Stars */}
          <div style={{ display:'flex', gap:'4px', marginBottom:'16px' }}>
            {[...Array(5)].map((_,i) => (
              <span key={i} style={{
                color:'#fbbf24', fontSize:'14px',
                textShadow: hov ? '0 0 12px rgba(251,191,36,0.6)' : 'none',
                transition:`all 0.2s ${i*0.06}s`,
                transform: hov ? 'scale(1.2)' : 'scale(1)',
                display:'inline-block',
              }}>★</span>
            ))}
          </div>

          <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.75)', lineHeight:1.75, margin:0 }}>
            {t.text}
          </p>
        </div>

        <div style={{ display:'flex', alignItems:'center', gap:'14px', marginTop:'24px', paddingTop:'20px',
          borderTop:'1px solid rgba(255,255,255,0.08)' }}>
          <div style={{
            width:'46px', height:'46px', borderRadius:'50%', flexShrink:0,
            background:`linear-gradient(135deg,${t.color.replace('from-[','').replace('] to-[',',').replace(']','')})`,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', color:'#fff',
            boxShadow: hov ? '0 0 20px rgba(37,99,235,0.5)' : 'none',
            transition:'box-shadow 0.3s',
          }}>{t.initials}</div>
          <div>
            <strong style={{ color:'#fff', fontSize:'14px', display:'block', fontFamily:"'Syne',sans-serif" }}>{t.name}</strong>
            <span style={{ color:'rgba(255,255,255,0.45)', fontSize:'12px' }}>{t.role}</span>
          </div>
          <div style={{ marginLeft:'auto', fontSize:'18px', opacity: hov ? 0.8 : 0.3, transition:'opacity 0.3s' }}>✦</div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section className="px-[5%] py-[110px] relative overflow-hidden z-10"
      style={{ background:'linear-gradient(135deg,#0b2060,#1247cc 50%,rgba(8,145,178,0.8))' }}>

      {/* Decorative glows */}
      <div className="absolute top-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(6,214,227,0.12) 0%,transparent 65%)' }} />
      <div className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(18,71,204,0.2) 0%,transparent 65%)' }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E\")" }} />

      <Reveal>
        <div className="text-center flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <span className="inline-block w-[22px] h-[1.5px]" style={{ background:'#06d6e3' }} />
            <span style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'2.5px', color:'#06d6e3', fontWeight:600 }}>Testimonials</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight text-white">
            What Our{' '}
            <span style={{
              background:'linear-gradient(120deg,#06d6e3,#fff)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>Clients Say</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t,i) => <TestimonialCard key={t.name} t={t} delay={i*0.1} />)}
      </div>
    </section>
  );
}
