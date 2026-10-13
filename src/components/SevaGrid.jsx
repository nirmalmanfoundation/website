import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { sevas } from '../data/data';
import { SectionHeading, Reveal } from './ui';

export default function SevaGrid() {
  return (
    <section className="relative bg-cream-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="What we do" title="Six paths, one pran" hindi="छह सेवा, एक संकल्प" description="Every week our volunteers fan out across Jaipur — hospitals, gau-shalas, footpaths, temples and lakes." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sevas.map((s,i)=>(
            <Reveal key={s.id} delay={(i%3)*0.08}>
              <Link to="/gallery" className="group relative block h-[420px] overflow-hidden rounded-[1.75rem] shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-108" onError={(e)=>{e.currentTarget.src='/attachments/top.jpg';}} />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-maroon-700">{s.tag}</span>
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-saffron-500 text-maroon-950 opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={18}/></span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-hindi text-lg leading-none text-gold-300">{s.hindi}</p>
                  <h3 className="mt-1 font-display text-3xl text-cream-50">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-cream-100/80">{s.description}</p>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-200 backdrop-blur">{s.stat}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
