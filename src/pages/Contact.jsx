import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, HeartHandshake } from "lucide-react";
import { SectionHeading, Reveal } from "../components/ui";

const info = [
  { icon: MapPin, t: 'Visit Us', d: '269 A Ganesh Vatika I, Kallawala, Vatika Road, Sanganer, Jaipur – 303905' },
  { icon: Phone, t: 'Call Us', d: '+91 96947 11457 • +91 98293 33137' },
  { icon: Mail, t: 'Write Us', d: 'nirmalmanfoundation@gmail.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name:'', mobile:'', address:'', occupation:'', message:'' });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);
  const set = (k,v)=>setForm(f=>({...f,[k]:v}));
  const submit = async (e) => {
    e.preventDefault(); setBusy(true); setMsg(null);
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      const sid = import.meta.env.VITE_EMAILJS_SERVICE || 'your_service_id';
      const tid = import.meta.env.VITE_EMAILJS_TEMPLATE || 'your_template_id';
      const key = import.meta.env.VITE_EMAILJS_KEY || 'your_public_key';
      if (sid.includes('your_')) throw new Error('EmailJS not configured');
      await emailjs.send(sid, tid, form, key);
      setMsg({ ok:true, t:'Dhanyavaad! We received your message and will call you soon.' });
      setForm({ name:'', mobile:'', address:'', occupation:'', message:'' });
    } catch {
      const text = `Namaste! I am ${form.name} (${form.mobile}). Occupation: ${form.occupation}. Address: ${form.address}. Message: ${form.message || 'Want to volunteer / donate.'}`;
      window.open(`https://wa.me/919694711457?text=${encodeURIComponent(text)}`, '_blank');
      setMsg({ ok:true, t:'Opening WhatsApp instead — just press send there! (Email service not configured yet.)' });
    }
    setBusy(false);
  };
  const input = "w-full rounded-2xl border border-maroon-700/15 bg-cream-50 px-5 py-3.5 outline-none transition placeholder:text-stone-400 focus:border-saffron-500 focus:ring-4 focus:ring-saffron-500/20";
  return (
    <div className="bg-cream-100">
      <section className="relative overflow-hidden bg-maroon-900 py-16 sm:py-20">
        <div className="pattern-jaali-dark absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading dark eyebrow="Join • Volunteer • Donate" title="Come, sit with us for chai" hindi="आइए, जुड़िए" description="Volunteer for Sunday drives, sponsor kits, or just come to meet the parivaar." />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            {info.map((c,i)=>(<Reveal key={c.t} delay={i*0.07}><div className="flex gap-4 rounded-3xl border border-gold-500/25 bg-white p-6 shadow-card"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-maroon-700 text-cream-50"><c.icon size={22}/></span><span><h3 className="font-display text-xl text-maroon-700">{c.t}</h3><p className="mt-1 text-[15px] leading-relaxed text-stone-600">{c.d}</p></span></div></Reveal>))}
            <Reveal delay={0.2} className="overflow-hidden rounded-3xl shadow-card">
              <iframe title="map" src="https://www.google.com/maps?q=Sanganer,Jaipur&output=embed" className="h-64 w-full border-0" loading="lazy" />
            </Reveal>
            <Reveal delay={0.25} className="rounded-3xl bg-maroon-800 p-6 text-cream-50">
              <h3 className="flex items-center gap-2 font-display text-xl text-gold-200"><HeartHandshake size={20}/> Prefer WhatsApp?</h3>
              <p className="mt-1 text-sm text-cream-100/75">Fastest response — usually within hours.</p>
              <a href="https://chat.whatsapp.com/IjGzImCRcsWEDMnPBlu3s9" target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-leaf-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5">Open group</a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="rounded-[2rem] border border-gold-500/25 bg-white p-7 shadow-soft sm:p-10">
              <h2 className="font-display text-3xl text-maroon-700">Send a message</h2>
              <p className="mt-1 text-sm text-stone-500">We reply on call + WhatsApp — tell us how you'd like to serve.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Full name *</span><input required value={form.name} onChange={e=>set('name',e.target.value)} placeholder="Your name" className={input} /></label>
                <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Mobile *</span><input required value={form.mobile} onChange={e=>set('mobile',e.target.value)} placeholder="+91 XXXXX XXXXX" className={input} /></label>
              </div>
              <label className="mt-4 block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Address *</span><textarea required rows={2} value={form.address} onChange={e=>set('address',e.target.value)} placeholder="Area, city..." className={input} /></label>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Occupation *</span><input required value={form.occupation} onChange={e=>set('occupation',e.target.value)} placeholder="Student, teacher..." className={input} /></label>
                <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">I want to…</span><select value={form.message} onChange={e=>set('message',e.target.value)} className={input}><option value="">Choose…</option><option>Volunteer in drives</option><option>Donate / sponsor kits</option><option>Organise a camp</option><option>Just say hello</option></select></label>
              </div>
              <button disabled={busy} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-maroon-700 py-4 text-sm font-bold uppercase tracking-widest text-cream-50 transition hover:bg-maroon-800 disabled:opacity-60">{busy?"Sending…":<><Send size={17}/> Send message</>}</button>
              {msg && (<motion.p initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className={`mt-4 flex items-start gap-2 rounded-2xl p-4 text-sm font-semibold ${msg.ok?"bg-green-50 text-green-800":"bg-red-50 text-red-700"}`}>{msg.ok?<CheckCircle2 size={18}/>:<AlertCircle size={18}/>}{msg.t}</motion.p>)}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
