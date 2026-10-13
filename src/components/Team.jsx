import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/data';
import { SectionHeading, Reveal } from './ui';

export default function Team() {
  return (
    <section className="relative bg-cream-100 py-20 sm:py-24">
      <div className="texture-paper absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Pillars of the Trust" title="The hands behind the seva" hindi="सेवाभावी परिवार" description="Volunteers, guides and guardians — led by founder Kailash Ojha — who show up every single drive." />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((m, i) => (
            <Reveal key={m.name} delay={(i%4)*0.07}>
              <motion.article whileHover={{y:-8}} transition={{duration:0.3}} className="group overflow-hidden rounded-[1.75rem] border border-gold-500/25 bg-white text-center shadow-card">
                <div className="relative h-64 overflow-hidden bg-cream-200">
                  <img src={`/${m.image}`} alt={m.name} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" onError={(e)=>{e.currentTarget.src='/founder.jpg';}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-1/2 w-max -translate-x-1/2 rounded-full bg-saffron-500 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-maroon-950">{m.role}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl leading-tight text-maroon-700">{m.name}</h3>
                  <p className="mt-1 font-hindi text-[15px] text-stone-500">॥ seva parivaar ॥</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
