import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { Reveal } from './ui';

export default function CtaBand() {
  return (
    <section className="bg-cream-100 px-5 pb-20 sm:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-maroon-800 px-7 py-14 text-center shadow-soft sm:px-12">
          <div className="pattern-jaali-dark absolute inset-0" />
          <div className="absolute -top-24 left-1/2 h-56 w-[30rem] -translate-x-1/2 rounded-full bg-saffron-500/25 blur-3xl" />
          <div className="relative">
            <p className="font-hindi text-xl text-gold-200">नर सेवा ही नारायण सेवा ह\u0948</p>
            <h2 className="mx-auto mt-2 max-w-2xl font-display text-4xl leading-tight text-cream-50 sm:text-5xl">Ready to serve with us this Sunday?</h2>
            <p className="mx-auto mt-3 max-w-xl text-cream-100/75">Volunteer for a drive, sponsor ration kits, or simply share our story. Every hand matters.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-maroon-950 transition hover:-translate-y-0.5 hover:bg-saffron-400"><HeartHandshake size={17}/> Join as volunteer</Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream-50 transition hover:border-gold-300 hover:text-gold-200">Learn more <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
