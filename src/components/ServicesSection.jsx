import React, { useState, useRef } from "react";
import { Reveal } from "./Reveal";

const SERVICES = [
  { icon:"🌐", title:"Networking",              img:"/img/services/product1.jpg",       desc:"Complete network infrastructure design, installation and management solutions for modern enterprises." },
  { icon:"🖥️", title:"Server Implementation",   img:"/img/services/product7.jpg",       desc:"Enterprise-grade server setup, configuration and ongoing maintenance tailored to your scale." },
  { icon:"🔒", title:"Security Systems",         img:"/img/services/access_control.jpg", desc:"CCTV, access control and comprehensive surveillance system solutions for complete peace of mind." },
  { icon:"💻", title:"Web / Software",           img:"/img/services/product8.jpg",       desc:"Custom web applications, portals and software development that drives real business results." },
  { icon:"🛠️", title:"IT Support Services",     img:"/img/services/product3.jpg",       desc:"Responsive technical support and fully managed IT services, available 24/7 for your business." },
  { icon:"⚙️", title:"IT Solutions",            img:"/img/services/product4.jpg",       desc:"End-to-end IT solutions that empower businesses to thrive and scale in the digital age." },
  { icon:"🖨️", title:"Printer & Scanner",       img:"/img/services/product5.jpg",       desc:"Supply, maintenance and repair of printers, scanners and related devices across all major brands." },
  { icon:"📣", title:"Social Media Influencer",  img:"/img/services/socialmedia.jpg",   desc:"Premium influencer gear and digital marketing tools to skyrocket your brand presence online." },
  { icon:"📱", title:"Mobile & Accessories",     img:"/img/services/product6.jpg",       desc:"Latest mobile phones and accessories from top brands at the best prices in the UAE." },
];

function ServiceCard({ s, delay }) {
  const [hov, setHov] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => { setTilt({ x:0, y:0 }); setHov(false); };

  return (
    <Reveal delay={delay} direction="scale">
      <div
        ref={cardRef}
        onMouseEnter={() => setHov(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          borderRadius:'22px',
          overflow:'hidden',
          position:'relative',
          background:'rgba(11,31,74,0.5)',
          border:`1px solid ${hov ? 'rgba(59,130,246,0.6)' : 'rgba(59,130,246,0.18)'}`,
          backdropFilter:'blur(16px)',
          transition:'border-color 0.3s, box-shadow 0.4s',
          boxShadow: hov ? '0 32px 80px rgba(37,99,235,0.22), 0 0 0 1px rgba(59,130,246,0.1)' : '0 4px 24px rgba(0,0,0,0.2)',
          cursor:'pointer',
          transform: hov ? `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(-12px) scale(1.02)` : 'perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)',
          transformStyle:'preserve-3d',
          willChange:'transform',
          transitionProperty:'transform,border-color,box-shadow',
          transitionDuration: hov ? '0.1s,0.3s,0.4s' : '0.6s,0.3s,0.4s',
          transitionTimingFunction:'ease',
        }}
      >
        {/* Top glow line on hover */}
        <div style={{
          position:'absolute', top:0, left:0, right:0, height:'2px',
          background:'linear-gradient(90deg, #1247cc, #06d6e3)',
          opacity: hov ? 1 : 0,
          transition:'opacity 0.3s',
          zIndex:10,
        }} />

        {/* Image area */}
        <div style={{ height:'190px', overflow:'hidden', position:'relative' }}>
          {!imgError ? (
            <img src={s.img} alt={s.title} onError={() => setImgError(true)}
              style={{
                width:'100%', height:'100%', objectFit:'cover',
                opacity: hov ? 0.85 : 0.6,
                transform: hov ? 'scale(1.08)' : 'scale(1)',
                transition:'all 0.6s cubic-bezier(0.34,1.56,0.64,1)',
                filter: hov ? 'brightness(1.1)' : 'brightness(0.85)',
              }} />
          ) : (
            <div style={{
              width:'100%', height:'100%',
              background:'linear-gradient(135deg,rgba(18,71,204,0.35),rgba(6,214,227,0.12))',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'64px',
              transform: hov ? 'scale(1.08)' : 'scale(1)',
              transition:'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
              {s.icon}
            </div>
          )}
          {/* Image gradient overlay */}
          <div style={{
            position:'absolute', bottom:0, left:0, right:0, height:'80px',
            background:'linear-gradient(to top, rgba(11,31,74,0.9), transparent)',
          }} />
        </div>

        <div style={{ padding:'22px 24px 28px', position:'relative', zIndex:10 }}>
          {/* Icon badge */}
          <div style={{
            width:'40px', height:'40px', borderRadius:'11px',
            background:'linear-gradient(135deg,#1247cc,#06d6e3)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'18px', marginBottom:'12px',
            boxShadow:'0 6px 20px rgba(37,99,235,0.45)',
            transform: hov ? 'scale(1.1) rotate(-5deg)' : '',
            transition:'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          }}>{s.icon}</div>

          <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:'15.5px', fontWeight:700,
            marginBottom:'8px', color:'#fff' }}>{s.title}</h3>
          <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, margin:0 }}>{s.desc}</p>
        </div>

        {/* Arrow */}
        <div style={{
          position:'absolute', bottom:'22px', right:'22px',
          width:'32px', height:'32px', borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'14px', transition:'all 0.3s',
          background: hov ? 'linear-gradient(135deg,#1247cc,#06d6e3)' : 'transparent',
          border: hov ? 'none' : '1px solid rgba(59,130,246,0.3)',
          color: hov ? '#fff' : '#3b82f6',
          transform: hov ? 'scale(1.15) rotate(-45deg)' : '',
        }}>→</div>
      </div>
    </Reveal>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="px-[5%] py-[110px] relative z-10"
      style={{ background:'linear-gradient(180deg,#050c1a 0%,#071428 100%)' }}>

      {/* Section decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(6,214,227,0.07) 0%,transparent 65%)', filter:'blur(40px)' }} />

      <Reveal>
        <div className="flex justify-between items-end flex-wrap gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-[22px] h-[1.5px] inline-block" style={{ background:'#06d6e3' }} />
              <span className="text-[11px] uppercase tracking-[2.5px] font-semibold" style={{ color:'#06d6e3' }}>Our Services</span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight text-white">
              Explore Our <span style={{
                background:'linear-gradient(120deg,#3b82f6,#06d6e3)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>Service</span> & Expertise
            </h2>
          </div>
          <p className="text-[15px] font-light leading-relaxed max-w-[380px]"
            style={{ color:'rgba(255,255,255,0.65)' }}>
            We are passionate about helping businesses harness the power of technology to achieve their goals.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5" style={{ gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))' }}>
        {SERVICES.map((s,i) => <ServiceCard key={s.title} s={s} delay={i*0.07} />)}
      </div>
    </section>
  );
}
