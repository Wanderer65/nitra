import React, { useState, useEffect, useRef } from 'react';

// Animated particle canvas background
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i+1).forEach(q => {
          const d = Math.hypot(p.x-q.x, p.y-q.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.1 * (1 - d/120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      });
      // Draw dots
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.opacity})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />;
}

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 2000) {
  const [idx, setIdx]   = useState(0);
  const [text, setText] = useState('');
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const word = words[idx];
    const timer = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length === word.length - 1) setTimeout(() => setDel(true), pause);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) { setDel(false); setIdx((idx + 1) % words.length); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [text, del, idx]);
  return text;
}

export default function Hero() {
  const [charSrc, setCharSrc] = useState('/3d charr.png');
  const typed = useTypewriter(['Seamless Operations', 'Digital Excellence', 'Smart IT Solutions', 'Business Growth']);

  const handleCharError = () => {
    if (charSrc === '/3d charr.png') setCharSrc('/3d-char.png');
    else if (charSrc === '/3d-char.png') setCharSrc('/3d-charr.png');
    else setCharSrc(null);
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '120px 5% 60px',
      position: 'relative',
      overflow: 'hidden',
      background: '#050c1a',
    }}>
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Ambient glows */}
      <div style={{ position:'absolute', top:'-10%', left:'-5%', width:'600px', height:'600px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(18,71,204,0.18) 0%, transparent 65%)', pointerEvents:'none', zIndex:1 }} />
      <div style={{ position:'absolute', bottom:'5%', right:'-10%', width:'500px', height:'500px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(6,214,227,0.1) 0%, transparent 65%)', pointerEvents:'none', zIndex:1,
        animation:'orb 10s ease-in-out infinite 2s' }} />

      {/* ── LEFT ── */}
      <div style={{ position:'relative', zIndex:2 }}>
        {/* Badge */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:'10px',
          background:'rgba(37,99,235,0.1)',
          border:'1px solid rgba(37,99,235,0.3)',
          padding:'8px 20px', borderRadius:'100px',
          fontSize:'12.5px', color:'#60a5fa',
          marginBottom:'28px',
          animation:'fadeUp 0.7s ease both',
          backdropFilter:'blur(10px)',
        }}>
          <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#06d6e3',
            animation:'blink 1.8s ease infinite', display:'inline-block', boxShadow:'0 0 8px #06d6e3' }} />
          <span style={{ letterSpacing:'1.5px', textTransform:'uppercase', fontSize:'11px', fontWeight:600 }}>
            One Stop IT Solutions
          </span>
        </div>

        {/* H1 with typewriter */}
        <h1 style={{
          fontFamily:"'Syne', sans-serif",
          fontSize:'clamp(38px,4.2vw,66px)',
          fontWeight:800,
          lineHeight:1.06,
          marginBottom:'22px',
          animation:'fadeUp 0.7s 0.1s ease both',
          color:'#fff',
        }}>
          Your Partner for<br />
          <span style={{
            background:'linear-gradient(120deg,#3b82f6,#06d6e3,#3b82f6)',
            backgroundSize:'200% auto',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
            animation:'shimmer 3s linear infinite',
          }}>
            {typed}
          </span>
          <span style={{ color:'#3b82f6', animation:'blink 0.9s ease infinite' }}>|</span>
        </h1>

        <p style={{
          fontSize:'16px', color:'rgba(255,255,255,0.72)',
          lineHeight:1.8, maxWidth:'430px',
          marginBottom:'40px', fontWeight:300,
          animation:'fadeUp 0.7s 0.2s ease both',
        }}>
          We are passionate about helping businesses harness the power of technology.
          From networking and security systems to web development and IT support — we've got you covered.
        </p>

        {/* Actions */}
        <div style={{ display:'flex', gap:'14px', alignItems:'center', flexWrap:'wrap', animation:'fadeUp 0.7s 0.3s ease both' }}>
          {/* Phone ring button */}
          <a href="tel:+971582652070" style={{
            width:'50px', height:'50px', borderRadius:'50%',
            background:'rgba(37,99,235,0.15)',
            border:'1px solid rgba(37,99,235,0.4)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'20px', flexShrink:0, textDecoration:'none',
            animation:'pring 2.2s ease infinite',
            boxShadow:'0 0 0 0 rgba(37,99,235,0.5)',
            transition:'transform 0.2s',
          }}
            onMouseEnter={e=>e.currentTarget.style.transform='scale(1.15)'}
            onMouseLeave={e=>e.currentTarget.style.transform=''}
          >📞</a>

          <a href="#services" style={{
            display:'inline-flex', alignItems:'center', gap:'10px',
            background:'linear-gradient(135deg,#1247cc,#06d6e3)',
            color:'#fff', padding:'14px 32px', borderRadius:'14px',
            fontSize:'15px', fontWeight:600, textDecoration:'none',
            boxShadow:'0 8px 40px rgba(37,99,235,0.5)',
            transition:'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            position:'relative', overflow:'hidden',
          }}
            onMouseEnter={e=>{
              e.currentTarget.style.transform='translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow='0 20px 60px rgba(37,99,235,0.7)';
            }}
            onMouseLeave={e=>{
              e.currentTarget.style.transform='';
              e.currentTarget.style.boxShadow='0 8px 40px rgba(37,99,235,0.5)';
            }}
          >
            Explore Services
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="about" style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            color:'rgba(255,255,255,0.80)', padding:'14px 26px',
            borderRadius:'14px', fontSize:'15px', fontWeight:500,
            textDecoration:'none',
            border:'1px solid rgba(255,255,255,0.15)',
            backdropFilter:'blur(10px)',
            background:'rgba(255,255,255,0.04)',
            transition:'all 0.3s',
          }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='#3b82f6';e.currentTarget.style.color='#fff';e.currentTarget.style.background='rgba(59,130,246,0.1)';}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.15)';e.currentTarget.style.color='rgba(255,255,255,0.80)';e.currentTarget.style.background='rgba(255,255,255,0.04)';}}
          >
            About Us
          </a>
        </div>

        {/* Trust indicators */}
        <div style={{ display:'flex', gap:'28px', marginTop:'48px', animation:'fadeUp 0.7s 0.4s ease both' }}>
          {[['10+','Years Exp.'],['75+','Clients'],['24/7','Support']].map(([n,l]) => (
            <div key={l} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'22px', fontWeight:800,
                background:'linear-gradient(120deg,#fff,#60a5fa)', WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{n}</div>
              <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', marginTop:'2px', letterSpacing:'0.5px' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — char stage ── */}
      <div style={{
        position:'relative', zIndex:2,
        display:'flex', justifyContent:'center', alignItems:'center',
        animation:'fadeUp 0.8s 0.15s ease both',
      }}>
        <div style={{ position:'relative', width:'500px', height:'580px', display:'flex', justifyContent:'center', alignItems:'flex-end' }}>
          {/* Decorative rings */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%,-52%)',
            width:'440px', height:'440px', borderRadius:'50%',
            border:'1px solid rgba(59,130,246,0.15)',
            animation:'spin-slow 20s linear infinite',
            zIndex:1,
          }}>
            {/* Dot on ring */}
            <div style={{ position:'absolute', top:'-5px', left:'50%', width:'10px', height:'10px',
              borderRadius:'50%', background:'#06d6e3', boxShadow:'0 0 20px #06d6e3',
              transform:'translateX(-50%)' }} />
          </div>
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%,-52%)',
            width:'360px', height:'360px', borderRadius:'50%',
            border:'1px dashed rgba(37,99,235,0.12)',
            animation:'spin-reverse 30s linear infinite',
            zIndex:1,
          }} />

          {/* Glow base */}
          <div style={{
            position:'absolute', bottom:'0', left:'50%', transform:'translateX(-50%)',
            width:'300px', height:'80px', borderRadius:'50%',
            background:'radial-gradient(ellipse, rgba(18,71,204,0.5) 0%, transparent 70%)',
            filter:'blur(20px)', zIndex:2,
          }} />

          {/* Character */}
          {charSrc ? (
            <img src={charSrc} alt="Nitra Technology" onError={handleCharError}
              style={{
                position:'relative', zIndex:3,
                maxHeight:'540px', maxWidth:'100%',
                objectFit:'contain',
                animation:'charFloat 6s ease-in-out infinite',
                filter:'drop-shadow(0 40px 60px rgba(18,71,204,0.4))',
              }} />
          ) : (
            <div style={{
              position:'relative', zIndex:3,
              width:'340px', height:'440px',
              background:'linear-gradient(135deg,rgba(18,71,204,0.12),rgba(6,214,227,0.06))',
              border:'1px dashed rgba(59,130,246,0.3)',
              borderRadius:'24px',
              display:'flex', flexDirection:'column',
              alignItems:'center', justifyContent:'center',
              textAlign:'center', padding:'24px',
            }}>
              <div style={{ fontSize:'72px', marginBottom:'16px' }}>🖥️</div>
              <p style={{ color:'rgba(255,255,255,0.4)', fontSize:'13px', fontWeight:300 }}>
                Place <code style={{ color:'#06d6e3' }}>3d charr.png</code> in <code style={{ color:'#06d6e3' }}>/public</code>
              </p>
            </div>
          )}

          {/* Chip 1 */}
          <div style={{
            position:'absolute', top:'8%', right:'-4%', zIndex:5,
            background:'rgba(7,20,40,0.9)',
            border:'1px solid rgba(59,130,246,0.55)',
            borderRadius:'14px', padding:'11px 16px',
            fontSize:'12.5px', fontWeight:500, color:'#60a5fa',
            backdropFilter:'blur(16px)',
            display:'flex', alignItems:'center', gap:'9px',
            whiteSpace:'nowrap',
            boxShadow:'0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
            animation:'cf1 4s ease-in-out infinite',
          }}>
            <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#06d6e3',
              boxShadow:'0 0 10px #06d6e3', animation:'blink 1.8s ease infinite', display:'inline-block' }} />
            🌐 Networking
          </div>

          {/* Chip 2 */}
          <div style={{
            position:'absolute', top:'42%', left:'-10%', zIndex:5,
            background:'rgba(7,20,40,0.9)',
            border:'1px solid rgba(59,130,246,0.55)',
            borderRadius:'14px', padding:'11px 16px',
            fontSize:'12.5px', fontWeight:500, color:'#60a5fa',
            backdropFilter:'blur(16px)',
            display:'flex', alignItems:'center', gap:'9px',
            whiteSpace:'nowrap',
            boxShadow:'0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
            animation:'cf2 4.5s ease-in-out infinite',
          }}>
            <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#06d6e3',
              boxShadow:'0 0 10px #06d6e3', animation:'blink 1.8s ease infinite', display:'inline-block' }} />
            🔒 Security Systems
          </div>

          {/* Chip 3 */}
          <div style={{
            position:'absolute', bottom:'20%', right:'-5%', zIndex:5,
            background:'rgba(7,20,40,0.9)',
            border:'1px solid rgba(59,130,246,0.55)',
            borderRadius:'14px', padding:'11px 16px',
            fontSize:'12.5px', fontWeight:500, color:'#60a5fa',
            backdropFilter:'blur(16px)',
            display:'flex', alignItems:'center', gap:'9px',
            whiteSpace:'nowrap',
            boxShadow:'0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
            animation:'cf1 3.8s 0.6s ease-in-out infinite',
          }}>
            <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#06d6e3',
              boxShadow:'0 0 10px #06d6e3', animation:'blink 1.8s ease infinite', display:'inline-block' }} />
            💻 IT Support
          </div>
        </div>
      </div>

      {/* Mobile */}
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-reverse { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @media (max-width: 1050px) {
          section { grid-template-columns: 1fr !important; padding-top:100px !important; }
        }
      `}</style>
    </section>
  );
}