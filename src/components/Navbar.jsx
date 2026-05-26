import React, { useState, useEffect, useRef } from "react";

const SERVICES_LINKS = [
  { href: "networking",           icon: "🌐", label: "Networking" },
  { href: "server_implementation",icon: "🖥️", label: "Server Implementation" },
  { href: "systems",              icon: "🔒", label: "Security Systems" },
  { href: "web_software",         icon: "💻", label: "Web / Software" },
  { href: "itsupport",            icon: "🛠️", label: "IT Support Services" },
  { href: "solutions",            icon: "⚙️", label: "IT Solutions" },
  { href: "printers",             icon: "🖨️", label: "Printer & Scanner" },
  { href: "socialmedia",          icon: "📣", label: "Social Media Influencer" },
  { href: "mobile",               icon: "📱", label: "Mobile & Accessories" },
];

const PRODUCT_LINKS = [
  "GI Conduits","PVC Conduits","PVC Coated Flexible Conduits","GI Conduit Accessories",
  "Brass Cable Gland & Accessories","Cable Lugs | Connectors","Insulated Lugs & Ferrules",
  "PVC Conduit Accessories","Pipe Support Fittings","EMT Fittings Accessories",
  "Cable Tray System","Cable Tray - Trunking",
];

function NavLink({ href, children, active }) {
  return (
    <a
      href={href}
      className="relative flex items-center gap-1 text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 no-underline group"
      style={{ color: active ? "#60a5fa" : "rgba(255,255,255,0.75)" }}
    >
      <span className="relative z-10 group-hover:text-white transition-colors duration-200">{children}</span>
      {/* Hover bg */}
      <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.07] transition-all duration-200" />
      {/* Underline */}
      <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-gradient-to-r from-[#1247cc] to-[#06d6e3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </a>
  );
}

export default function Navbar() {
  const [scrolled,   setScrolled]  = useState(false);
  const [mobileOpen, setMobileOpen]= useState(false);
  const [servOpen,   setServOpen]  = useState(false);
  const [prodOpen,   setProdOpen]  = useState(false);
  const [logoError,  setLogoError] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Magnetic CTA button effect
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onMove = (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    };
    const onLeave = () => { btn.style.transform = ""; };
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => { btn.removeEventListener("mousemove", onMove); btn.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[200] px-[4%] flex items-center justify-between border-b transition-all duration-500"
        style={{
          borderColor: "rgba(59,130,246,0.18)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          background: scrolled
            ? "rgba(5,12,26,0.97)"
            : "rgba(5,12,26,0.82)",
          padding: scrolled ? "10px 4%" : "16px 4%",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5 no-underline group">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="Nitra Technology"
              className="h-[42px] w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(6,214,227,0.6)]"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1247cc] to-[#06d6e3] flex items-center justify-center text-xl shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,214,227,0.6)]">
              🔷
            </div>
          )}
          <div className="font-['Syne',sans-serif] font-bold text-[15px] text-white tracking-wide">
            Nitra <span className="text-[#06d6e3]">Technology</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="about">About Us</NavLink></li>

          {/* Services dropdown */}
          <li className="relative" onMouseEnter={() => setServOpen(true)} onMouseLeave={() => setServOpen(false)}>
            <button className="relative flex items-center gap-1 text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 no-underline group bg-transparent border-none cursor-pointer"
              style={{ color: "rgba(255,255,255,0.75)" }}>
              <span className="group-hover:text-white transition-colors">Services</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                style={{ transition: "transform 0.3s", transform: servOpen ? "rotate(180deg)" : "" }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.07] transition-all duration-200" />
            </button>

            {/* Dropdown */}
            <div className="absolute top-[calc(100%+8px)] left-0 min-w-[240px] rounded-2xl p-2 z-[300]"
              style={{
                background: "rgba(7,20,48,0.97)",
                border: "1px solid rgba(59,130,246,0.25)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
                opacity: servOpen ? 1 : 0,
                visibility: servOpen ? "visible" : "hidden",
                transform: servOpen ? "translateY(0) scale(1)" : "translateY(10px) scale(0.97)",
                transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                transformOrigin: "top left",
              }}>
              {SERVICES_LINKS.map((s, i) => (
                <a key={s.href} href={s.href}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-white/75 hover:text-white hover:bg-[rgba(59,130,246,0.12)] text-[13px] rounded-xl transition-all duration-200 no-underline group"
                  style={{ animationDelay: `${i * 30}ms` }}>
                  <span className="text-base leading-none">{s.icon}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">{s.label}</span>
                </a>
              ))}
            </div>
          </li>

          {/* Products dropdown */}
          <li className="relative" onMouseEnter={() => setProdOpen(true)} onMouseLeave={() => setProdOpen(false)}>
            <button className="relative flex items-center gap-1 text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 no-underline group bg-transparent border-none cursor-pointer"
              style={{ color: "rgba(255,255,255,0.75)" }}>
              <span className="group-hover:text-white transition-colors">Products</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                style={{ transition: "transform 0.3s", transform: prodOpen ? "rotate(180deg)" : "" }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.07] transition-all duration-200" />
            </button>

            <div className="absolute top-[calc(100%+8px)] left-0 min-w-[380px] grid grid-cols-2 gap-0.5 rounded-2xl p-2 z-[300]"
              style={{
                background: "rgba(7,20,48,0.97)",
                border: "1px solid rgba(59,130,246,0.25)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
                opacity: prodOpen ? 1 : 0,
                visibility: prodOpen ? "visible" : "hidden",
                transform: prodOpen ? "translateY(0) scale(1)" : "translateY(10px) scale(0.97)",
                transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                transformOrigin: "top left",
              }}>
              {PRODUCT_LINKS.map((p) => (
                <a key={p} href={p.toLowerCase().replace(/[^a-z0-9]+/g,"-")}
                  className="block px-3 py-2 text-white/65 hover:text-white hover:bg-[rgba(59,130,246,0.12)] text-[12.5px] rounded-xl transition-all duration-200 no-underline">
                  {p}
                </a>
              ))}
            </div>
          </li>

          <li><NavLink href="contact">Contact</NavLink></li>
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a ref={btnRef} href="contact"
            className="hidden sm:inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-semibold no-underline transition-all duration-300 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1247cc, #06d6e3)",
              boxShadow: "0 4px 24px rgba(37,99,235,0.4)",
            }}>
            <span className="relative z-10">Free Quote</span>
            <svg className="relative z-10 w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-[#06d6e3] to-[#1247cc] opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </a>

          <button
            className="flex lg:hidden flex-col gap-[5px] p-2 bg-white/[0.06] border border-white/10 rounded-xl cursor-pointer transition-all duration-200 hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="w-5 h-[1.5px] bg-white rounded-full block transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(45deg) translateY(6.5px)" : "" }} />
            <span className="w-5 h-[1.5px] bg-white rounded-full block transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span className="w-5 h-[1.5px] bg-white rounded-full block transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(-45deg) translateY(-6.5px)" : "" }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className="fixed left-0 right-0 z-[199] flex flex-col overflow-hidden transition-all duration-500"
        style={{
          top: "68px",
          maxHeight: mobileOpen ? "500px" : "0",
          background: "rgba(5,12,26,0.98)",
          borderBottom: "1px solid rgba(59,130,246,0.18)",
          backdropFilter: "blur(24px)",
        }}>
        <div className="px-[5%] py-5 flex flex-col gap-1">
          {["Home","About Us","Services","Products","Contact"].map((l) => (
            <a key={l} href={l==="Home"?"/":`${l.toLowerCase().replace(/\s+/g,"")}`}
              className="py-3 px-4 text-white/80 border-b border-white/[0.06] text-base font-medium no-underline hover:text-white hover:pl-6 transition-all duration-200 rounded-lg hover:bg-white/[0.04]">
              {l}
            </a>
          ))}
          <a href="contact"
            className="mt-3 py-3 rounded-xl text-center font-semibold no-underline text-white"
            style={{ background: "linear-gradient(135deg,#1247cc,#06d6e3)" }}>
            Free Quote →
          </a>
        </div>
      </div>
    </>
  );
}
