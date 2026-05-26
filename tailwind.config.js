/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm:   ['DM Sans', 'sans-serif'],
      },
      animation: {
        'orb':        'orb 7s ease-in-out infinite',
        'blink':      'blink 1.6s ease infinite',
        'pring':      'pring 2.2s ease infinite',
        'charFloat':  'charFloat 5s ease-in-out infinite',
        'cf1':        'cf1 4s ease-in-out infinite',
        'cf2':        'cf2 4.5s ease-in-out infinite',
        'shimmer':    'shimmer 3s linear infinite',
        'spin-slow':  'spin-slow 20s linear infinite',
        'marquee':    'marquee 28s linear infinite',
        'ripple':     'ripple 3s ease-out infinite',
      },
      keyframes: {
        orb:        { '0%,100%': { transform: 'scale(1) translateY(0)' }, '50%': { transform: 'scale(1.08) translateY(-20px)' } },
        blink:      { '0%,100%': { opacity: '1' }, '50%': { opacity: '.2' } },
        pring:      { '0%': { boxShadow: '0 0 0 0 rgba(37,99,235,0.6)' }, '70%': { boxShadow: '0 0 0 18px rgba(37,99,235,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(37,99,235,0)' } },
        charFloat:  { '0%,100%': { transform: 'translateY(0px) rotate(0deg)' }, '33%': { transform: 'translateY(-18px) rotate(1deg)' }, '66%': { transform: 'translateY(-8px) rotate(-1deg)' } },
        cf1:        { '0%,100%': { transform: 'translateY(0) translateX(0)' }, '50%': { transform: 'translateY(-12px) translateX(4px)' } },
        cf2:        { '0%,100%': { transform: 'translateY(0) translateX(0)' }, '50%': { transform: 'translateY(12px) translateX(-4px)' } },
        shimmer:    { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        'spin-slow':{ from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        marquee:    { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        ripple:     { '0%': { transform: 'scale(0.8)', opacity: '1' }, '100%': { transform: 'scale(2.4)', opacity: '0' } },
        fadeUp:     { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
