import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, HeartHandshake, ArrowRight, Award, Users, Sparkles } from 'lucide-react';
import { SectionHeading, Reveal } from '../components/ui';
import { teamMembers, impactStats } from '../data/data';

const values = [
  { t: 'Karuna', d: 'Compassion first — every beneficiary is family, never a number.' },
  { t: 'Nishtha', d: 'Consistency — weekly drives, not one-time photo ops.' },
  { t: 'Pardarshita', d: 'Transparency — receipts, photos & open books for every rupee.' },
  { t: 'Sanskriti', d: 'Culture-rooted — bhakti and modern social work, together.' },
];

export default function About() {
  return (
    <div className="bg-cream-100">
      <section className="relative overflow-hidden bg-maroon-900">
        <div className="pattern-jaali-dark absolute inset-0" />
        <img src="/attachments/image1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/70 via-maroon-900/70 to-maroon-900" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-200">About the Trust • Est. 2024 Jaipur</span>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-cream-50 sm:text-6xl">Nirmal man se,<br/><span className="bg-gradient-to-r from-saffron-400 to-gold-300 bg-clip-text text-transparent">nirmal samaj tak.</span></h1>
            <p className="mt-4 max-w-2xl text-lg text-cream-100/80">"Sabko saath lekar chalne ka pran" — taking everyone along. Education, women empowerment, environment, Gau seva and animal welfare.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our Story" title="Born from Jaipur's galiyon ka dard" description="In 2024, Kailash Ojha saw what many walk past — hungry elders, thirsty parindas, unattended Gau Mata, and bright kids without books. Instead of looking away, he gathered friends, hired no staff, and started weekly seva with his own hands. Today that small circle is a city-wide parivaar." />
            <div className="mt-6 grid grid-cols-3 gap-4">
              {impactStats.slice(0,3).map(s=>(<div key={s.label} className="rounded-2xl border border-gold-500/30 bg-white p-4 text-center shadow-card"><p className="font-display text-3xl text-maroon-700">{s.value}</p><p className="text-[11px] font-bold uppercase tracking-widest text-stone-500">{s.label}</p></div>))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <img src="/attachments/image2.jpg" className="h-64 w-full rounded-3xl object-cover shadow-card" alt="seva" loading="lazy" />
              <img src="/attachments/image3.jpg" className="mt-8 h-64 w-full rounded-3xl object-cover shadow-card" alt="seva" loading="lazy" />
              <img src="/attachments/image4.jpg" className="h-64 w-full rounded-3xl object-cover shadow-card" alt="seva" loading="lazy" />
              <img src="/attachments/image5.jpg" className="mt-8 h-64 w-full rounded-3xl object-cover shadow-card" alt="seva" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-cream-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Founder" title="Kailash Ojha" hindi="संस्थापक" description="Empathy in action — from personal success to grassroots revolution." />
          <Reveal className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <div className="grid md:grid-cols-[380px_1fr]">
              <div className="relative min-h-[380px]"><img src="/founder.jpg" alt="Kailash Ojha" className="absolute inset-0 h-full w-full object-cover object-top" /><div className="absolute inset-0 bg-gradient-to-t from-maroon-950/50 to-transparent md:bg-gradient-to-r" /></div>
              <div className="p-8 sm:p-12">
                <Quote className="text-gold-500" size={36} />
                <p className="mt-4 font-serif text-xl italic leading-relaxed text-stone-700">"True progress is impossible if the vulnerable are left behind. Every act of kindness — educating a child, uplifting a woman, caring for a stray — creates ripples that transform the world."</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Grassroots leader","Gau sevak","Youth mentor"].map(t=>(<span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-maroon-700/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-maroon-700"><Sparkles size={12}/>{t}</span>))}
                </div>
                <p className="mt-6 leading-relaxed text-stone-600">Witnessing marginalized families and voiceless animals daily, Kailash chose seva over comfort — building a platform not of charity, but of lasting empowerment.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading eyebrow="Values" title="What guides every drive" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v,i)=>(<Reveal key={v.t} delay={i*0.06}><div className="h-full rounded-3xl border border-gold-500/25 bg-white p-6 shadow-card"><p className="font-display text-3xl text-saffron-600">0{i+1}</p><h3 className="mt-2 font-display text-2xl text-maroon-700">{v.t}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{v.d}</p></div></Reveal>))}
        </div>
      </section>
      <section className="bg-maroon-900 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading dark eyebrow="Parivaar" title="Pillars of the Trust" />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {teamMembers.map((m,i)=>(<Reveal key={m.name} delay={(i%4)*0.06}><div className="overflow-hidden rounded-3xl bg-white/[0.07] text-center backdrop-blur"><img src={`/${m.image}`} alt={m.name} loading="lazy" className="h-52 w-full object-cover object-top" onError={(e)=>{e.currentTarget.src='/founder.jpg';}} /><div className="p-4"><p className="font-display text-lg leading-tight text-cream-50">{m.name}</p><p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-gold-300">{m.role}</p></div></div></Reveal>))}
          </div>
          <div className="mt-10 text-center"><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-maroon-950 transition hover:-translate-y-0.5"><HeartHandshake size={17}/> Join the parivaar <ArrowRight size={15}/></Link></div>
        </div>
      </section>
    </div>
  );
}
