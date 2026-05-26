import React, { useState } from "react";
import { Reveal } from "./Reveal";

const WHY_CARDS = [
  { icon:"🏆", title:"Expertise & Experience",    desc:"Clients benefit from our extensive expertise and years of delivering outstanding IT solutions across the UAE." },
  { icon:"✅", title:"Reliability & Quality",      desc:"Committed to providing reliable, high-quality services with consistent delivery that our clients depend on." },
  { icon:"💬", title:"Excellent Customer Support", desc:"We believe in building long-term relationships through exceptional after-sales support and genuine care." },
  { icon:"🔧", title:"Comprehensive Solutions",    desc:"A wide range of comprehensive IT solutions under one roof, saving you time and simplifying your operations." },
  { icon:"🎯", title:"Customised Approach",        desc:"We understand every business is unique and take a personalised approach to meet specific needs and budgets." },
  { icon:"🚀", title:"Cutting-edge Technology",    desc:"We stay at the forefront of tech advancements to offer clients the most modern and effective solutions." },
];

function WhyCard({ c, delay, align = "left" }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay} direction={align === "left" ? "left" : "right"}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          borderRadius:'18px',
          padding:'20px',
          transition:'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          position:'relative',
          overflow:'hidden',
          display:'flex',
          gap:'16px',
          alignItems:'flex-start',
          background: hov ? 'rgba(11,31,74,0.5)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${hov ? 'rgba(59,130,246,0.55)' : 'rgba(59,130,246,0.15)'}`,
          transform: hov ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hov ? '0 20px 60px rgba(37,99,235,0.2)' : 'none',
          cursor:'default',
        }}
      >
        {/* Top accent */}
        <div style={{
          position:'absolute', top:0, left:0, right:0, height:'2px',
          background:'linear-gradient(90deg,#1247cc,#06d6e3)',
          opacity: hov ? 1 : 0,
          transition:'opacity 0.3s',
        }} />

        <div style={{
          width:'46px', height:'46px', borderRadius:'13px', flexShrink:0,
          background: hov ? 'linear-gradient(135deg,#1247cc,#06d6e3)' : 'rgba(37,99,235,0.15)',
          border:'1px solid rgba(59,130,246,0.25)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'20px',
          transition:'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow: hov ? '0 8px 24px rgba(37,99,235,0.4)' : 'none',
          transform: hov ? 'scale(1.1) rotate(-5deg)' : '',
        }}>{c.icon}</div>

        <div>
          <h3 className="font-['Syne',sans-serif]" style={{ fontSize:'15px', fontWeight:700, marginBottom:'6px', color:'#fff' }}>
            {c.title}
          </h3>
          <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.52)', lineHeight:1.7, margin:0 }}>{c.desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="px-[5%] py-[110px] relative z-10"
      style={{ background:'linear-gradient(180deg,#071428 0%,#050c1a 100%)' }}>

      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(18,71,204,0.06) 0%,transparent 65%)', filter:'blur(40px)' }} />

      <Reveal>
        <div className="text-center flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <span className="inline-block w-[22px] h-[1.5px]" style={{ background:'#06d6e3' }} />
            <span style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'2.5px', color:'#06d6e3', fontWeight:600 }}>Why Choose Us</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight mb-4 text-white">
            Best IT Support{' '}
            <span style={{
              background:'linear-gradient(120deg,#3b82f6,#06d6e3)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>Provider In UAE</span>
          </h2>
          <p className="max-w-[520px] text-[15px] font-light leading-relaxed" style={{ color:'rgba(255,255,255,0.65)' }}>
            We combine deep expertise, reliability, and a customer-first approach to deliver IT solutions that truly make a difference.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px_1fr] gap-10 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-5">
          {WHY_CARDS.slice(0,3).map((c,i) => <WhyCard key={c.title} c={c} delay={i*0.1} align="left" />)}
        </div>

        {/* Center image */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          {/* Ring decorations */}
          <div style={{
            position:'absolute', width:'200px', height:'200px', borderRadius:'50%',
            border:'1px solid rgba(59,130,246,0.15)',
            animation:'spin-slow 20s linear infinite',
          }}>
            <div style={{ position:'absolute', top:'-5px', left:'50%', transform:'translateX(-50%)',
              width:'10px', height:'10px', borderRadius:'50%',
              background:'#06d6e3', boxShadow:'0 0 16px #06d6e3' }} />
          </div>
          <img
            src="/why-choose-us.png"
            alt="Why Choose Us"
            style={{
              width:'100%',
              position:'relative', zIndex:2,
              filter:'drop-shadow(0 0 40px rgba(37,99,235,0.5))',
              animation:'charFloat 5s ease-in-out infinite',
            }}
            onError={(e) => { e.currentTarget.parentElement.style.display='none'; }}
          />
          <style>{`@keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {WHY_CARDS.slice(3).map((c,i) => <WhyCard key={c.title} c={c} delay={i*0.1} align="right" />)}
        </div>
      </div>
    </section>
  );
}
