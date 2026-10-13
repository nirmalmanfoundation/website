import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { news } from "../data/data";
import { SectionHeading, Reveal } from "./ui";

export default function Hero() {
  const items = news?.length ? news.slice(0, 8) : [];
  const [idx, setIdx] = useState(0);
  useEffect(()=>{ const t=setInterval(()=>setIdx(p=>(p+1)%items.length),6500); return ()=>clearInterval(t); },[items.length]);
  if(!items.length) return null;
  const cur = items[idx];
  return (
    <section className="relative bg-cream-100 py-20 sm:py-24">
      <div className="texture-paper absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Our Divine Impact" title="Seva that touches every jeevan" hindi="सेवा ही संकल्प है" description="From hospital corridors to gau-shalas and winter footpaths — stories from the field, updated with every drive." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div key={cur.id} initial={{opacity:0, scale:1.04}} animate={{opacity:1, scale:1}} exit={{opacity:0}} transition={{duration:0.7}} className="absolute inset-0">
                <img src={`/${cur.image}`} alt={cur.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/25 to-transparent" />
                <div className="absolute bottom-0 p-7 sm:p-9">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-500 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-maroon-950"><Sparkles size={12}/>Field Story {String(idx+1).padStart(2,'0')}</span>
                  <h3 className="mt-3 max-w-lg font-display text-3xl leading-tight text-cream-50 sm:text-4xl">{cur.title}</h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-cream-100/85">{cur.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
          <div className="flex flex-col gap-3">
            {items.map((n,d)=>(
              <button key={n.id} onClick={()=>setIdx(d)} className={`group flex items-center gap-4 rounded-2xl border p-3 text-left transition-all ${d===idx?"border-gold-500 bg-white shadow-card":"border-maroon-700/10 bg-white/60 hover:bg-white hover:shadow-card"}`}>
                <span className="h-14 w-16 shrink-0 overflow-hidden rounded-xl"><img src={`/${n.image}`} alt="" className="h-full w-full object-cover" loading="lazy"/></span>
                <span className="min-w-0"><span className={`block truncate font-display text-lg leading-tight ${d===idx?"text-maroon-700":"text-stone-700"}`}>{n.title}</span><span className="mt-0.5 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-saffron-600">Explore <ArrowRight size={12}/></span></span>
                <span className={`ml-auto h-10 w-1 shrink-0 rounded-full ${d===idx?"bg-saffron-500":"bg-maroon-700/10"}`} />
              </button>
            )).slice(0,5)}
            <Link to="/gallery" className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-maroon-700 px-6 py-4 text-sm font-bold uppercase tracking-wider text-cream-50 transition hover:bg-maroon-800">View full gallery <ArrowRight size={16}/></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
