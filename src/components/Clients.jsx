import React, { useState } from 'react';
import { Reveal } from './Reveal';

const CLIENTS = [
  { img:"/img/clients/client1.jpg", fallback:"Partner 1" },
  { img:"/img/clients/client2.jpg", fallback:"Partner 2" },
  { img:"/img/clients/client3.jpg", fallback:"Partner 3" },
  { img:"/logo.png",                fallback:"Nitra Tech" },
  { img:"/img/clients/client4.jpg", fallback:"Partner 5" },
  { img:"/img/clients/client5.jpg", fallback:"Partner 6" },
  { img:"/img/clients/client6.jpg", fallback:"Partner 7" },
  { img:"/img/clients/client7.jpg", fallback:"Partner 8" },
];

function ClientCard({ client, delay }) {
  const [imgError, setImgError] = useState(false);
  const [hov, setHov] = useState(false);

  return (
    <Reveal delay={delay} direction="scale">
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          borderRadius:'18px',
          padding:'28px',
          display:'flex', alignItems:'center', justifyContent:'center',
          minHeight:'110px',
          background: hov ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.05)',
          border:`1px solid ${hov ? 'rgba(59,130,246,0.55)' : 'rgba(59,130,246,0.15)'}`,
          transition:'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          cursor:'pointer',
          transform: hov ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
          boxShadow: hov ? '0 20px 60px rgba(37,99,235,0.2)' : 'none',
          backdropFilter:'blur(10px)',
        }}
      >
        {!imgError ? (
          <img
            src={client.img}
            alt={client.fallback}
            style={{
              maxHeight:'65px', maxWidth:'130px', objectFit:'contain',
              filter: hov ? 'grayscale(0) brightness(1.1)' : 'grayscale(1) brightness(1.6)',
              opacity: hov ? 1 : 0.6,
              transition:'all 0.4s ease',
              transform: hov ? 'scale(1.05)' : 'scale(1)',
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="font-['Syne',sans-serif] text-lg font-bold transition-colors duration-300"
            style={{ color: hov ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)' }}>
            {client.fallback}
          </span>
        )}
      </div>
    </Reveal>
  );
}

export default function Clients() {
  return (
    <section className="px-[5%] py-[90px] relative z-10" style={{ background:'#050c1a' }}>
      {/* Ambient */}
      <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)', filter:'blur(60px)' }} />

      <Reveal>
        <div className="text-center flex flex-col items-center mb-14">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <span className="inline-block w-[22px] h-[1.5px]" style={{ background:'#06d6e3' }} />
            <span style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'2.5px', color:'#06d6e3', fontWeight:600 }}>Our Clients & Referral Partners</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight text-white">
            Trusted by{' '}
            <span style={{
              background:'linear-gradient(120deg,#3b82f6,#06d6e3)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>Leading Companies</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CLIENTS.map((client,i) => (
          <ClientCard key={client.fallback} client={client} delay={i*0.06} />
        ))}
      </div>
    </section>
  );
}
