// import React from 'react';

// const REGIONS = [
//   { flag: '🇦🇪', label: 'UAE' },
//   { flag: '🇸🇦', label: 'Saudi Arabia' },
//   { flag: '🇶🇦', label: 'Qatar' },
//   { flag: '🇰🇼', label: 'Kuwait' },
//   { flag: '🇧🇭', label: 'Bahrain' },
//   { flag: '🌍', label: 'Africa' },
// ];

// export default function ExportBanner() {
//   return (
//     <div className="px-[5%] py-[70px] bg-gradient-to-r from-[#0f2d7a] via-[#1247cc] to-[#0891b2] text-center relative overflow-hidden z-10">
//       {/* Decorative dot pattern */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-30"
//         style={{
//           backgroundImage:
//             "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
//         }}
//       />

//       <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight relative">
//         We Export IT Products Throughout
//         <br />
//         <span className="text-[#06d6e3]">Middle East &amp; Africa</span>
//       </h2>

//       <div className="flex justify-center gap-4 flex-wrap mt-7 relative">
//         {REGIONS.map((r) => (
//           <span
//             key={r.label}
//             className="bg-white/[0.12] border border-white/25 rounded-full px-5 py-2 text-sm text-white font-medium"
//           >
//             {r.flag} {r.label}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
