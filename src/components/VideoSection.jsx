import { useRef } from "react";
import { Play, ChevronLeft, ChevronRight, Youtube } from "lucide-react";
import { videos } from "../data/ytdata";
import { SectionHeading, Reveal } from "./ui";

export default function VideoSection() {
  const ref = useRef(null);
  const go = (d) => { const el = ref.current; if(!el) return; el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: "smooth" }); };
  return (
    <section className="bg-cream-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Witness Our Journey" title="Stories in motion" hindi="झलकियाँ" description="Glimpses from blood camps, yatra buses, blanket nights and gau-shala mornings." />
        <div className="group relative mt-12">
          <div className="pointer-events-none absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <button onClick={()=>go(-1)} aria-label="scroll left" className="grid h-12 w-12 place-items-center rounded-full bg-maroon-700 text-cream-50 opacity-0 shadow-xl transition group-hover:opacity-100 hover:bg-maroon-800"><ChevronLeft/></button>
          </div>
          <div ref={ref} className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2">
            {videos.map((v,i)=>(
              <Reveal key={v.id} delay={Math.min(i*0.05,0.3)} className="w-[86vw] shrink-0 snap-center sm:w-[420px]">
                <a href={v.url} target="_blank" rel="noreferrer" className="group/card block overflow-hidden rounded-3xl border border-gold-500/25 bg-white shadow-card transition hover:-translate-y-1.5 hover:shadow-soft">
                  <span className="relative block aspect-video overflow-hidden">
                    <img src={v.thumbnail} alt={v.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover/card:scale-105" />
                    <span className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 to-transparent" />
                    <span className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-saffron-500 text-maroon-950 shadow-glow transition group-hover/card:scale-110"><Play fill="currentColor"/></span></span>
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur"><Youtube size={13}/> YouTube</span>
                  </span>
                  <span className="block p-5"><span className="block font-display text-xl leading-snug text-maroon-700">{v.title}</span><span className="mt-1 block text-sm text-stone-500">Nirmal Man Foundation • Seva diary</span></span>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <button onClick={()=>go(1)} aria-label="scroll right" className="grid h-12 w-12 place-items-center rounded-full bg-maroon-700 text-cream-50 opacity-0 shadow-xl transition group-hover:opacity-100 hover:bg-maroon-800"><ChevronRight/></button>
          </div>
        </div>
      </div>
    </section>
  );
}
