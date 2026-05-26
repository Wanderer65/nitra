import { useEffect, useState, useRef } from "react";

export function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const [ref, visible] = useReveal();

  const transforms = {
    up:    { hidden: "translateY(40px)",  shown: "translateY(0)" },
    left:  { hidden: "translateX(-40px)", shown: "translateX(0)" },
    right: { hidden: "translateX(40px)",  shown: "translateX(0)" },
    scale: { hidden: "scale(0.9) translateY(20px)", shown: "scale(1) translateY(0)" },
  };
  const t = transforms[direction] || transforms.up;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? t.shown : t.hidden,
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
