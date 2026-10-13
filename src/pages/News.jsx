import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, X, ZoomIn } from "lucide-react";
import { khabar } from "../data/data";
import { SectionHeading } from "../components/ui";

export default function News() {
  const [sel, setSel] = useState(null);
  return (
    <div className="bg-cream-100">
      <section className="relative overflow-hidden bg-maroon-900 py-16 sm:py-20">
        <div className="pattern-jaali-dark absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
          <SectionHeading dark eyebrow="Press & Khabar" title="In the news" hindi="ख़बरों में" description="Newspaper cuttings and media love from our blood camps, yatras and winter drives." />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {khabar.map((k,i)=>(
            <motion.button key={k.id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:Math.min(i*0.03,0.3)}} onClick={()=>setSel(`/${k.image}`)} className="group relative block w-full overflow-hidden rounded-2xl bg-white shadow-card">
              <img src={`/${k.image}`} alt={`News clipping ${k.id}`} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-[1.03]" onError={(e)=>{e.currentTarget.style.display='none';}} />
              <span className="absolute inset-0 grid place-items-center bg-maroon-950/0 transition group-hover:bg-maroon-950/35"><ZoomIn className="text-white opacity-0 transition group-hover:opacity-100" /></span>
              <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white"><Newspaper size={11}/> Khabar</span>
            </motion.button>
          ))}
        </div>
      </section>
      <AnimatePresence>
        {sel && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSel(null)} className="fixed inset-0 z-[80] grid place-items-center bg-maroon-950/92 p-4 backdrop-blur">
            <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white" aria-label="close"><X/></button>
            <motion.img src={sel} alt="news" initial={{scale:0.9}} animate={{scale:1}} className="max-h-[86vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl" onClick={(e)=>e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
