import React from 'react';
import { impactStats } from '../data/data';
import { Reveal } from './ui';

export default function ImpactBand() {
  return (
    <section className="relative overflow-hidden bg-maroon-900 py-14">
      <div className="pattern-jaali-dark absolute inset-0" />
      <div className="absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
        {impactStats.map((s,i)=>(
          <Reveal key={s.label} delay={i*0.07}>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-5xl text-cream-50">{s.value}</span>
              <span className="h-0.5 w-8 rounded-full bg-gold-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
