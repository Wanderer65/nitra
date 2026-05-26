import React from 'react';
import { Reveal } from './Reveal';

export default function Footer() {
  const quickLinks    = ["Home","About Us","Our Services","Contact","Testimonials"];
  const serviceLinks  = ["Networking","Security Systems","Web / Software","Server Implementation","IT Support","Printer & Scanner","Social Media","Mobile & Accessories"];
  const productLinks  = ["GI Conduits","PVC Conduits","Flexible Conduits","Brass Cable Gland","Cable Lugs","Insulated Lugs","Cable Tray System","EMT Fittings","Pipe Support Fittings"];

  const INFO = [
    { icon:"🏢", title:"Our Office",    content:"Office No: 71, 3rd Floor, Souk Al Kabeer Building, Khalid Bin Waleed Road, Dubai, UAE" },
    { icon:"📞", title:"Phone Number",  content:"(+971) 58 265 2070\n(+971) 04 885 1803" },
    { icon:"✉️", title:"Email Address", content:"info@nitratechs.com" },
    { icon:"🌐", title:"Website",       content:"www.nitratechs.com" },
  ];

  return (
    <footer style={{ background:'rgba(0,0,0,0.6)', borderTop:'1px solid rgba(59,130,246,0.15)', position:'relative', zIndex:10 }}>
      {/* Info row */}
      <div style={{
        padding:'50px 5%',
        display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',
        gap:'32px',
        borderBottom:'1px solid rgba(59,130,246,0.12)',
      }}>
        {INFO.map((c,i) => (
          <Reveal key={c.title} delay={i*0.1}>
            <div style={{ display:'flex', alignItems:'flex-start', gap:'14px' }}>
              <div style={{
                width:'42px', height:'42px', borderRadius:'12px', flexShrink:0,
                background:'rgba(59,130,246,0.08)',
                border:'1px solid rgba(59,130,246,0.2)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'18px',
              }}>{c.icon}</div>
              <div>
                <h5 style={{ fontSize:'11px', color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'6px' }}>{c.title}</h5>
                <p style={{ fontSize:'13.5px', color:'rgba(255,255,255,0.78)', whiteSpace:'pre-line', lineHeight:1.65, margin:0 }}>{c.content}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Main links */}
      <div style={{ padding:'50px 5%', display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:'48px' }}
        className="grid-cols-1 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="font-['Syne',sans-serif] font-bold text-xl text-white mb-3">
            Nitra <span style={{ color:'#06d6e3' }}>Technology</span>
          </div>
          <p style={{ color:'rgba(255,255,255,0.45)', fontSize:'13.5px', lineHeight:1.75, maxWidth:'280px', marginBottom:'20px' }}>
            Your one-stop destination for comprehensive IT solutions in the UAE. Empowering businesses to thrive in the digital age since 2015.
          </p>
          {/* Social icons */}
          <div style={{ display:'flex', gap:'10px', marginBottom:'20px' }}>
            {['💼','📘','📸','▶'].map((icon,i) => (
              <a key={i} href="#" style={{
                width:'38px', height:'38px', borderRadius:'10px',
                background:'rgba(59,130,246,0.08)',
                border:'1px solid rgba(59,130,246,0.18)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'16px', textDecoration:'none',
                transition:'all 0.2s',
              }}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(59,130,246,0.2)';e.currentTarget.style.borderColor='rgba(59,130,246,0.5)';e.currentTarget.style.transform='translateY(-3px)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(59,130,246,0.08)';e.currentTarget.style.borderColor='rgba(59,130,246,0.18)';e.currentTarget.style.transform='';}}>
                {icon}
              </a>
            ))}
          </div>
          <div style={{ borderRadius:'14px', overflow:'hidden', border:'1px solid rgba(59,130,246,0.18)' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14433.20042799773!2d55.2929197!3d25.2604881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4326004a1f7f%3A0x436b588db7203ca8!2sNitra%20Technology%20Trading!5e0!3m2!1sen!2sin!4v1689337272072!5m2!1sen!2sin"
              width="100%" height="180" style={{ border:0, display:'block' }} allowFullScreen loading="lazy" title="Nitra Location" />
          </div>
        </div>

        <div>
          <h4 className="font-['Syne',sans-serif]" style={{ fontSize:'12px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'18px', color:'#fff' }}>Quick Links</h4>
          <ul style={{ listStyle:'none', padding:0, margin:'0 0 32px', display:'flex', flexDirection:'column', gap:'10px' }}>
            {quickLinks.map(l => (
              <li key={l}><a href="#" style={{ fontSize:'13.5px', color:'rgba(255,255,255,0.45)', textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.color='#60a5fa';e.currentTarget.style.paddingLeft='6px';}}
                onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.45)';e.currentTarget.style.paddingLeft='';}}>{l}</a></li>
            ))}
          </ul>
          <h4 className="font-['Syne',sans-serif]" style={{ fontSize:'12px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'18px', color:'#fff' }}>Our Services</h4>
          <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'10px' }}>
            {serviceLinks.slice(0,4).map(l => (
              <li key={l}><a href="#" style={{ fontSize:'13.5px', color:'rgba(255,255,255,0.45)', textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.color='#60a5fa';e.currentTarget.style.paddingLeft='6px';}}
                onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.45)';e.currentTarget.style.paddingLeft='';}}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-['Syne',sans-serif]" style={{ fontSize:'12px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'18px', color:'#fff' }}>Products</h4>
          <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'10px' }}>
            {productLinks.map(l => (
              <li key={l}><a href="#" style={{ fontSize:'13.5px', color:'rgba(255,255,255,0.45)', textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.color='#60a5fa';e.currentTarget.style.paddingLeft='6px';}}
                onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.45)';e.currentTarget.style.paddingLeft='';}}>{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        padding:'18px 5%',
        borderTop:'1px solid rgba(255,255,255,0.05)',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        flexWrap:'wrap', gap:'12px',
      }}>
        <span style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)' }}>© 2026 Nitra Technology. All rights reserved.</span>
        <span style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)' }}>📍 Dubai, United Arab Emirates</span>
      </div>
    </footer>
  );
}
