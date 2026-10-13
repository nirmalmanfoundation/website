import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, HeartHandshake, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState('');
  const copy = async (k, v) => { try { await navigator.clipboard.writeText(v); setCopied(k); setTimeout(()=>setCopied(''),1400);} catch{ /* clipboard unavailable */ } };
  const Row = ({k,v,label}) => (
    <button onClick={()=>copy(k,v)} className="group flex w-full items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2 text-left hover:bg-white/10">
      <span><span className="block text-[11px] uppercase tracking-widest text-gold-300">{label}</span><span className="font-mono text-[13px] text-cream-100">{v}</span></span>
      {copied===k ? <Check size={15} className="text-green-300"/> : <Copy size={15} className="text-cream-100/50 group-hover:text-gold-200"/>}
    </button>
  );
  return (
    <footer className="relative overflow-hidden bg-maroon-900 text-cream-100">
      <div className="pattern-jaali-dark absolute inset-0 opacity-60" />
      <div className="absolute -top-28 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-saffron-500/15 blur-3xl" />
      <div className="h-1.5 bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-500" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white ring-2 ring-gold-500"><img src="/logofinal.png" alt="logo" className="h-10 w-10 object-contain"/></span>
              <span><span className="block font-display text-2xl">Nirmal Man</span><span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-gold-300">Foundation Trust</span></span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-cream-100/70">Sabko saath lekar chalne ka pran — uplifting the underprivileged, caring for Gau Mata & animals, and spreading shiksha, swasthya and sanskar.</p>
            <p className="mt-4 font-hindi text-lg text-gold-200">सेवा • शिक्षा • समर्पण</p>
          </div>
          <div>
            <h4 className="font-display text-xl text-gold-300">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {[['About Us','/about'],['Gallery','/gallery'],['News & Press','/news'],['Contact / Join','/contact']].map(([a,b])=>(<li key={b}><Link to={b} className="inline-flex items-center gap-1 text-cream-100/80 hover:text-gold-200">{a}<ArrowUpRight size={14}/></Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl text-gold-300">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/75">
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-saffron-400"/>269 A Ganesh Vatika I, Kallawala, Vatika Road, Sanganer, Jaipur – 303905</li>
              <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-saffron-400"/>+91 96947 11457, +91 98293 33137</li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-saffron-400"/>nirmalmanfoundation@gmail.com</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gold-500/30 bg-white/[0.06] p-5 backdrop-blur">
            <h4 className="flex items-center gap-2 font-display text-xl text-gold-200"><HeartHandshake size={20}/>Direct Donation</h4>
            <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/60">Nirmalmanfoundation Trust</p>
            <div className="mt-3 space-y-2">
              <Row k="ac" v="6951004944" label="A/C No • Kotak Mahindra"/>
              <Row k="ifsc" v="KKBK0003549" label="IFSC"/>
            </div>
            <p className="mt-3 text-xs text-cream-100/55">Tap any detail to copy. UPI QR available on homepage.</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-sm text-cream-100/55">
          <span className="font-display text-2xl text-gold-400">ॐ</span>
          <p>© {new Date().getFullYear()} Nirmal Man Foundation Trust • Made with seva in Jaipur</p>
        </div>
      </div>
    </footer>
  );
}
