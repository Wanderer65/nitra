import React, { useEffect, useState, useRef } from 'react';

const STATS = [
  { target:10, suffix:'+', label:'Years of Experience', icon:'🏆' },
  { target:75, suffix:'+', label:'Satisfied Clients',   icon:'🤝' },
  { target:40, suffix:'+', label:'Brands Available',    icon:'🏷️' },
  { target:60, suffix:'+', label:'Projects Completed',  icon:'✅' },
];

function CounterItem({ stat }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || animated.current) return;
    animated.current = true;
    const duration = 1800;
    const fps = 60;
    const total = Math.round(duration / (1000/fps));
    let frame = 0;
    const t = setInterval(() => {
      frame++;
      const ease = 1 - Math.pow(1 - frame/total, 3); // ease-out-cubic
      setCount(Math.round(stat.target * ease));
      if (frame >= total) { setCount(stat.target); clearInterval(t); }
    }, 1000/fps);
    return () => clearInterval(t);
  }, [visible, stat.target]);

  return (
    <div ref={ref}
      className="text-center p-6 relative group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
      }}>
      {/* Divider — hide on last */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10 last:hidden" />

      {/* Icon */}
      <div style={{
        fontSize:'28px', marginBottom:'12px',
        filter:'drop-shadow(0 0 12px rgba(6,214,227,0.4))',
        transform: visible ? 'scale(1)' : 'scale(0)',
        transition:'transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s',
      }}>{stat.icon}</div>

      {/* Number */}
      <div className="font-['Syne',sans-serif] font-extrabold text-white leading-none mb-2"
        style={{ fontSize:'clamp(40px,5vw,64px)' }}>
        {count}
        <span style={{
          fontSize:'0.45em', color:'#06d6e3',
          verticalAlign:'super', marginLeft:'2px',
          textShadow:'0 0 20px rgba(6,214,227,0.6)',
        }}>{stat.suffix}</span>
      </div>

      <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.65)', letterSpacing:'0.3px' }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats relative overflow-hidden z-10" style={{ padding:'70px 5%' }}>
      {/* Background */}
      <div className="absolute inset-0" style={{
        background:'linear-gradient(135deg,#0f2d7a,#1247cc 50%,#0891b2)',
      }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(6,214,227,0.15) 0%,transparent 65%)', filter:'blur(40px)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(18,71,204,0.25) 0%,transparent 65%)', filter:'blur(40px)' }} />

      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto"
        style={{
          background:'rgba(255,255,255,0.05)',
          borderRadius:'24px',
          border:'1px solid rgba(255,255,255,0.1)',
          backdropFilter:'blur(10px)',
          overflow:'hidden',
        }}>
        {STATS.map((stat,i) => <CounterItem key={i} stat={stat} />)}
      </div>
    </div>
  );
}
