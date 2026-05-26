import React from 'react';

/*
  Image: socialmedia.jpg — put it in /public/socialmedia.jpg
  This is the SAME file used in Services section (Social Media card).
  If missing, a gradient fallback is shown automatically.
*/

const PLATFORMS = ['▶ YouTube', '♪ TikTok', '📸 Instagram', '👥 Facebook', '💼 LinkedIn'];

export default function SocialMedia() {
  return (
    <section className="bg-[#050c1a] relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left — real photo with gradient overlay + emoji fallback */}
        <div className="relative overflow-hidden min-h-[420px] bg-gradient-to-br from-[rgba(18,71,204,0.5)] to-[rgba(6,214,227,0.2)]">
          <img
            src="/socialmedia.jpg"
            alt="Social Media Influencer"
            className="w-full h-full object-cover absolute inset-0 opacity-75 transition-opacity duration-400 hover:opacity-90"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,12,26,0.4)] to-transparent pointer-events-none" />
        </div>

        {/* Right — content */}
        <div className="bg-[#071428] px-[10%] py-[70px] flex flex-col justify-center">
          <div className="text-[11px] uppercase tracking-[2.5px] text-[#06d6e3] font-semibold flex items-center gap-2 mb-2">
            <span className="w-[22px] h-[1.5px] bg-[#06d6e3] inline-block" />
            Social Media
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl md:text-[40px] font-bold leading-tight mb-3 text-white">
            Social Media <span className="text-[#3b82f6]">Influencer</span>
          </h2>

          <div className="flex flex-wrap gap-2 my-5">
            {PLATFORMS.map((p) => (
              <span key={p} className="bg-[rgba(37,99,235,0.2)] border border-[rgba(59,130,246,0.22)] rounded-full px-3.5 py-1 text-xs text-[#60a5fa] font-medium">
                {p}
              </span>
            ))}
          </div>

          <p className="text-white/80 text-[15px] leading-relaxed font-light">
            Discover your ultimate influencer gear at our online store! Elevate your content
            with the Selfie Stick Gimbal Stabilizer, Ring Light with RGB options, and Wireless
            Lavalier Microphone for crystal-clear audio. Capture cinematic shots with the
            Cinematic Camera and Traveling Drones. We also have Camera Tripods, Lenses, and
            all gaming needs, including PS4, PS5, and a vast selection of gaming CDs. All top
            brands available!
          </p>

          <div className="mt-7">
            <a href="socialmedia" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1247cc] to-[#06d6e3] text-white px-[30px] py-3.5 rounded-xl text-[15px] font-medium no-underline transition-all duration-300 shadow-[0_8px_32px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(37,99,235,0.7)]">
              Explore Products →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}