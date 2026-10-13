import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, HeartHandshake, Images } from "lucide-react";
import { Link } from "react-router-dom";
import { bannerData } from "../data/data";

const headlines = [
  { kicker: "Jaipur • Since 2024", title: "Sabko Saath Lekar", accent: "Chalne Ka Pran", sub: "Blood donation • Gau seva • Annadan • Shiksha — seva with heart, rooted in sanskar." },
  { kicker: "Rakt Daan Mahadaan", title: "One Donation,", accent: "Three Lives Saved", sub: "Join our mega blood donation camps with hospitals & youth across Rajasthan." },
  { kicker: "Gau • Pakshi • Prakriti", title: "Seva Beyond", accent: "Humanity", sub: "From Gau Mata to parindas — compassion for every jeev." },
];

export default function Banner() {
  const slides = bannerData?.length ? bannerData : [{image:'attachments/top.jpg'}];
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(()=>setI(p=>(p+1)%slides.length),[slides.length]);
  const prev = ()=>setI(p=>(p-1+slides.length)%slides.length);
  useEffect(()=>{ if(paused) return; const t=setInterval(next,6000); return ()=>clearInterval(t); },[next,paused]);
  const h = headlines[i % headlines.length];
  return (
    <section className="relative overflow-hidden bg-maroon-950" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
      <div className="relative h-[86svh] min-h-[560px] max-h-[860px] w-full">
        <AnimatePresence mode="popLayout">
          <motion.img key={i} src={`/${slides[i].image}`} alt="Nirmal Man Foundation seva" initial={{opacity:0, scale:1.08}} animate={{opacity:1, scale:1}} exit={{opacity:0}} transition={{duration:1.1, ease:[0.22,1,0.36,1]}} className="absolute inset-0 h-full w-full object-cover" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/55 to-maroon-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/80 via-maroon-950/20 to-transparent" />
        <div className="pattern-jaali-dark absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 sm:px-8 md:justify-center md:pb-0">
          <motion.div key={'t'+i} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-200 backdrop-blur"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-saffron-500"/>{h.kicker}</span>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-cream-50 sm:text-6xl lg:text-7xl">{h.title}<br/><span className="bg-gradient-to-r from-saffron-400 via-gold-300 to-saffron-400 bg-clip-text text-transparent">{h.accent}</span></h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-100/85 sm:text-lg">{h.sub}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="upi://pay?pa=0793549A0225226.bqr@kotak&pn=Nirmal%20Man%20Foundation&cu=INR" className="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-maroon-950 shadow-[0_12px_40px_rgba(255,153,51,0.45)] transition hover:-translate-y-0.5 hover:bg-saffron-400"><HeartHandshake size={17}/>Donate Seva</a>
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-cream-100/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream-50 backdrop-blur transition hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-200"><Images size={17}/>See Impact</Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 z-10 mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex gap-2">{slides.slice(0,8).map((_,d)=>(<button key={d} onClick={()=>setI(d % slides.length)} aria-label={'slide '+(d+1)} className={`h-1.5 rounded-full transition-all duration-500 ${d===i%8?'w-10 bg-saffron-500':'w-5 bg-white/40 hover:bg-white/80'}`} />))}</div>
          <div className="flex gap-2">
            <button onClick={prev} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/25" aria-label="prev"><ChevronLeft/></button>
            <button onClick={next} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/25" aria-label="next"><ChevronRight/></button>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-gold-500/30 bg-cream-50">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-hidden px-5 py-3 sm:px-8">
          <span className="shrink-0 rounded-full bg-maroon-700 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-cream-50">Live Seva</span>
          <div className="relative flex-1 overflow-hidden"><div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-[13px] font-semibold text-maroon-800"><span>Blood Donation Drive 2026 — 1000+ units collected</span><span>•</span><span>Kambal Vitaran — winter blankets across Jaipur</span><span>•</span><span>Gau Seva every Sunday</span><span>•</span><span>Darshan Yatra: Khatu Shyam • Sawariya Seth • Kumbh</span><span>•</span><span>Blood Donation Drive 2026 — 1000+ units collected</span><span>•</span><span>Kambal Vitaran — winter blankets across Jaipur</span><span>•</span><span>Gau Seva every Sunday</span><span>•</span><span>Darshan Yatra: Khatu Shyam • Sawariya Seth • Kumbh</span></div></div>
        </div>
      </div>
    </section>
  );
}
