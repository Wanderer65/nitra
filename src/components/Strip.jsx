import React from 'react';

const STRIP_ITEMS = [
  { icon: '🌐', label: 'Networking' },
  { icon: '🖥️', label: 'Server Implementation' },
  { icon: '🔒', label: 'Security Systems' },
  { icon: '💻', label: 'Web / Software' },
  { icon: '🛠️', label: 'IT Support' },
  { icon: '🖨️', label: 'Printer & Scanner' },
  { icon: '📱', label: 'Mobile & Accessories' },
  { icon: '📣', label: 'Social Media' },
  { icon: '⚙️', label: 'IT Solutions' },
];

// Duplicate for seamless loop
const DOUBLED = [...STRIP_ITEMS, ...STRIP_ITEMS];

export default function Strip() {
  return (
    <div className="relative overflow-hidden z-10 border-t border-b"
      style={{ borderColor:'rgba(59,130,246,0.18)', background:'rgba(255,255,255,0.035)', padding:'14px 0' }}>

      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background:'linear-gradient(to right, #050c1a, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background:'linear-gradient(to left, #050c1a, transparent)' }} />

      <div className="marquee-track" style={{ animation:'marquee 28s linear infinite' }}>
        {DOUBLED.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 mx-7 shrink-0 cursor-default group">
            <div className="w-8 h-8 rounded-[9px] flex items-center justify-center text-sm transition-all duration-300 group-hover:scale-110"
              style={{
                background:'linear-gradient(135deg,rgba(37,99,235,0.25),rgba(6,214,227,0.08))',
                border:'1px solid rgba(59,130,246,0.25)',
              }}>
              {item.icon}
            </div>
            <span className="text-[13px] font-medium whitespace-nowrap transition-colors duration-200 group-hover:text-white"
              style={{ color:'rgba(255,255,255,0.65)' }}>
              {item.label}
            </span>
            <span className="w-1 h-1 rounded-full mx-3 opacity-30" style={{ background:'#3b82f6' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
