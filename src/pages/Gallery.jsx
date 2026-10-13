import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/ui';

const sections = [
  { id: 'blood2026', title: 'Blood Donation 2026', hindi: 'रक्तदान', path: 'blood_donation2026', ext: 'jpeg', count: 32 },
  { id: 'blood', title: 'Blood Donation Drive', hindi: 'रक्तदान', path: 'blood_donation', ext: 'jpg', count: 33 },
  { id: 'sawariya', title: 'Sawariya Seth Yatra', hindi: 'सांवरिया सेठ', path: 'darshan_yatra/sawariya_seth', ext: 'jpeg', count: 29 },
  { id: 'khatu', title: 'Khatu Shyam Yatra', hindi: 'खाटू श्याम', path: 'darshan_yatra/khatu_shyam', ext: 'jpg', count: 10 },
  { id: 'kumbh', title: 'Kumbh Yatra', hindi: 'कुंभ', path: 'darshan_yatra/kumbh', ext: 'jpg', count: 8 },
  { id: 'kambal', title: 'Kambal Vitaran', hindi: 'कंबल वितरण', path: 'kambal_vitaran', ext: 'jpg', count: 14 },
  { id: 'gau', title: 'Gau Seva', hindi: 'गौ सेवा', path: 'gau_seva', ext: 'jpg', count: 3 },
  { id: 'pakshi', title: 'Pakshi Sanrakshan', hindi: 'पक्षी संरक्षण', path: 'pakshi_sanrakshan', ext: 'jpg', count: 6 },
  { id: 'samagri', title: 'Samagri Vitaran', hindi: 'सामग्री वितरण', path: 'samagri_vitaran', ext: 'jpg', count: 5 },
  { id: 'chhat', title: 'Chhat Puja', hindi: 'छठ पूजा', path: 'chhat', ext: 'jpg', count: 2 },
  { id: 'others', title: 'More Seva', hindi: 'अन्य', path: 'others', ext: 'jpg', count: 5 },
];

function urlsFor(s) {
  return Array.from({length: s.count}, (_,i)=>`/gallery/${s.path}/image${i+1}.${s.ext}`);
}

export default function Gallery() {
  const [tab, setTab] = useState(sections[0].id);
  const [light, setLight] = useState(-1);
  const active = sections.find(s=>s.id===tab);
  const urls = useMemo(()=>urlsFor(active),[tab]);
  const total = sections.reduce((a,s)=>a+s.count,0);
  return (
    <div className="bg-cream-100">
      <section className="relative overflow-hidden bg-maroon-900 py-16 sm:py-20">
        <div className="pattern-jaali-dark absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading dark eyebrow={`${total}+ Moments`} title="Gallery of seva" hindi="सेवा झलक" description="Every photo is a volunteer hour, a donated blanket, a unit of blood, a filled parinda." />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {sections.map(s=>(<button key={s.id} onClick={()=>{setTab(s.id); setLight(-1);}} className={`rounded-full px-4 py-2 text-[13px] font-bold transition ${s.id===tab?"bg-saffron-500 text-maroon-950 shadow-glow":"border border-white/20 bg-white/10 text-cream-100 hover:border-gold-400 hover:text-gold-200"}`}>{s.title}</button>))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div><p className="font-hindi text-xl text-saffron-600">{active.hindi}</p><h2 className="font-display text-3xl text-maroon-700 sm:text-4xl">{active.title}</h2></div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-maroon-700/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-maroon-700"><Images size={14}/>{active.count} photos</span>
        </div>
        <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
          {urls.map((u,i)=>(
            <motion.button key={u} layout initial={{opacity:0, scale:0.94}} animate={{opacity:1, scale:1}} exit={{opacity:0}} transition={{duration:0.35, delay:Math.min(i*0.015,0.3)}} onClick={()=>setLight(i)} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200 shadow-card">
              <img src={u} alt={`${active.title} ${i+1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" onError={(e)=>{ const s=e.currentTarget.src; if(s.endsWith('.jpg')) e.currentTarget.src=s.replace('.jpg','.jpeg'); else e.currentTarget.style.display='none'; }} />
              <span className="absolute inset-0 bg-gradient-to-t from-maroon-950/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-2 left-2 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-bold text-white opacity-0 backdrop-blur transition group-hover:opacity-100">View</span>
            </motion.button>
          ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-stone-500"><MapPin size={15} className="text-saffron-600"/> Shot by volunteers across Jaipur — Sanganer, hospitals, gau-shalas & yatra routes.</p>
      </section>
      <AnimatePresence>
        {light>=0 && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[80] grid place-items-center bg-maroon-950/90 p-4 backdrop-blur" onClick={()=>setLight(-1)}>
            <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30" aria-label="close"><X/></button>
            <button onClick={(e)=>{e.stopPropagation(); setLight((light-1+urls.length)%urls.length);}} className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30" aria-label="prev"><ChevronLeft/></button>
            <motion.img key={urls[light]} src={urls[light]} alt="preview" initial={{scale:0.92}} animate={{scale:1}} className="max-h-[84vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl" onClick={(e)=>e.stopPropagation()} />
            <button onClick={(e)=>{e.stopPropagation(); setLight((light+1)%urls.length);}} className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30" aria-label="next"><ChevronRight/></button>
            <p className="absolute bottom-5 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">{light+1} / {urls.length} • {active.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
