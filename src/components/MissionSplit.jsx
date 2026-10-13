import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, HeartPulse, Leaf } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

const cards = [
  { icon: GraduationCap, t: 'Shiksha', d: 'Books, fees & mentorship for first-generation learners.' },
  { icon: HeartPulse, t: 'Swasthya', d: 'Blood camps, medical support & health awareness.' },
  { icon: Leaf, t: 'Prakriti & Jeev', d: 'Gau seva, parindas, trees & clean public spaces.' },
];

export default function MissionSplit() {
  return (
    <section className="bg-cream-100 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img src="/attachments/top.jpg" alt="Volunteers in seva" className="h-[420px] w-full object-cover sm:h-[520px]" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 left-5 right-5 rounded-3xl border border-gold-500/40 bg-maroon-800 p-5 text-cream-50 shadow-soft sm:left-8 sm:right-auto sm:max-w-sm">
              <p className="font-hindi text-lg text-gold-200">"Sabko saath lekar chalne ka pran"</p>
              <p className="mt-1 text-sm text-cream-100/75">Our founding vow — no one left behind.</p>
            </div>
          </div>
        </Reveal>
        <div className="pt-6 lg:pt-0">
          <SectionHeading align="left" eyebrow="Our Mission" title="Nirmal man, nirmal samaj" hindi="निर्मल मन, निर्मल समाज" description="Founded in Jaipur in 2024, we blend bhakti with structured social work — education, women empowerment, health, environment and animal welfare." />
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {cards.map((c,i)=>(<Reveal key={c.t} delay={i*0.07}><div className="h-full rounded-3xl border border-gold-500/25 bg-white p-5 shadow-card"><c.icon className="text-saffron-600" size={26}/><h3 className="mt-3 font-display text-xl text-maroon-700">{c.t}</h3><p className="mt-1 text-sm leading-relaxed text-stone-600">{c.d}</p></div></Reveal>))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-maroon-700 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream-50 transition hover:-translate-y-0.5 hover:bg-maroon-800">Our story <ArrowRight size={16}/></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-maroon-700/25 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-maroon-700 transition hover:bg-maroon-700 hover:text-cream-50">Become volunteer</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
