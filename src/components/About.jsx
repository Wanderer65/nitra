import React from 'react';
import { Reveal } from './Reveal';

const POINTS = [
  "Certified IT professionals with 10+ years of expertise",
  "End-to-end solutions from infrastructure to software",
  "24/7 customer support and rapid response team",
  "Trusted by 75+ satisfied clients across the UAE",
];

export default function About() {
  return (
    <section id="about"
      className="px-[5%] py-[110px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10"
      style={{ background:'#050c1a' }}>

      {/* Ambient blob */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(18,71,204,0.1) 0%,transparent 65%)', filter:'blur(60px)' }} />

      {/* Left — Image */}
      <Reveal direction="left">
        <div className="relative" style={{ transform:'perspective(1000px)' }}>
          <img
            src="/about-bg.jpg"
            alt="About Nitra Technology"
            className="w-full rounded-[28px] object-cover"
            style={{
              minHeight:'400px',
              border:'1px solid rgba(59,130,246,0.2)',
              boxShadow:'0 40px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
            }}
            onError={(e) => {
              e.currentTarget.style.display='none';
              e.currentTarget.nextElementSibling.style.display='flex';
            }}
          />
          {/* Fallback */}
          <div className="w-full rounded-[28px] items-center justify-center text-[100px]"
            style={{ display:'none', minHeight:'400px', background:'linear-gradient(135deg,#0d1b3e,#1e4fcf)', border:'1px solid rgba(59,130,246,0.2)' }}>
            🖥️
          </div>

          {/* Experience badge */}
          <div style={{
            position:'absolute', bottom:'28px', right:'-16px',
            background:'linear-gradient(135deg,#1247cc,#06d6e3)',
            borderRadius:'20px', padding:'18px 22px',
            textAlign:'center',
            boxShadow:'0 20px 60px rgba(37,99,235,0.6)',
            animation:'charFloat 5s ease-in-out infinite',
          }}>
            <div className="font-['Syne',sans-serif]" style={{ fontSize:'42px', fontWeight:800, color:'#fff', lineHeight:1 }}>
              10<sup style={{ fontSize:'14px', color:'rgba(255,255,255,0.7)' }}>+</sup>
            </div>
            <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.8)', marginTop:'4px', lineHeight:1.4 }}>
              Years of<br/>Experience
            </div>
          </div>

          {/* Clients badge */}
          <div style={{
            position:'absolute', top:'24px', left:'-16px',
            background:'rgba(7,20,48,0.92)',
            border:'1px solid rgba(59,130,246,0.4)',
            borderRadius:'16px', padding:'14px 20px',
            backdropFilter:'blur(16px)',
            boxShadow:'0 12px 40px rgba(0,0,0,0.4)',
            animation:'cf2 6s ease-in-out infinite',
          }}>
            <div className="font-['Syne',sans-serif]" style={{ fontSize:'28px', fontWeight:800, color:'#06d6e3', lineHeight:1 }}>75+</div>
            <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.6)', marginTop:'4px' }}>Happy Clients</div>
          </div>
        </div>
      </Reveal>

      {/* Right — Content */}
      <Reveal delay={0.15} direction="right">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block" style={{ width:'22px', height:'1.5px', background:'#06d6e3' }} />
          <span style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'2.5px', color:'#06d6e3', fontWeight:600 }}>About Us</span>
        </div>

        <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight mb-4 text-white">
          Nitra Technology<br />
          <span style={{
            background:'linear-gradient(120deg,#3b82f6,#06d6e3)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
          }}>Best IT Support</span>
        </h2>

        <p style={{ color:'rgba(255,255,255,0.72)', fontSize:'15.5px', fontWeight:300, lineHeight:1.8, marginBottom:'28px' }}>
          Welcome to Nitra Technology, your one-stop destination for comprehensive IT solutions. We are a leading IT company that specialises in providing a wide range of services to meet all your technological needs. With our cutting-edge solutions, we empower businesses to thrive in the digital age.
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginBottom:'32px' }}>
          {POINTS.map((item, i) => (
            <div key={item}
              style={{
                display:'flex', alignItems:'flex-start', gap:'12px',
                padding:'12px 16px', borderRadius:'12px',
                background:'rgba(59,130,246,0.06)',
                border:'1px solid rgba(59,130,246,0.12)',
                transition:'all 0.2s',
                animationDelay:`${i*0.1}s`,
              }}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(59,130,246,0.1)';e.currentTarget.style.borderColor='rgba(59,130,246,0.3)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(59,130,246,0.06)';e.currentTarget.style.borderColor='rgba(59,130,246,0.12)';}}>
              <span style={{
                width:'22px', height:'22px', borderRadius:'6px',
                background:'linear-gradient(135deg,#1247cc,#06d6e3)',
                display:'inline-flex', alignItems:'center', justifyContent:'center',
                fontSize:'11px', flexShrink:0, marginTop:'1px',
              }}>✓</span>
              <span style={{ fontSize:'14.5px', color:'rgba(255,255,255,0.78)', lineHeight:1.5 }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
          <a href="about"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-[30px] py-3.5 rounded-xl no-underline transition-all duration-300"
            style={{
              background:'linear-gradient(135deg,#1247cc,#06d6e3)',
              boxShadow:'0 8px 32px rgba(37,99,235,0.45)',
            }}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 20px 50px rgba(37,99,235,0.65)';}}
            onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 8px 32px rgba(37,99,235,0.45)';}}>
            Read More →
          </a>
          <a href="contact"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3.5 rounded-xl no-underline transition-all duration-300"
            style={{ color:'rgba(255,255,255,0.75)', border:'1px solid rgba(255,255,255,0.15)', backdropFilter:'blur(10px)' }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='#3b82f6';e.currentTarget.style.background='rgba(59,130,246,0.1)';e.currentTarget.style.color='#fff';}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.15)';e.currentTarget.style.background='';e.currentTarget.style.color='rgba(255,255,255,0.75)';}}>
            Contact Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
