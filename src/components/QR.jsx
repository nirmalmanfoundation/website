import React from 'react';
import { QrCode, BadgeCheck, Landmark, Smartphone } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

export default function QR() {
  return (
    <section className="relative overflow-hidden bg-maroon-800 py-20 sm:py-24">
      <div className="pattern-jaali-dark absolute inset-0" />
      <div className="absolute -right-20 -top-20 select-none font-display text-[22rem] leading-none text-gold-500/10">ॐ</div>
      <div className="absolute -left-24 bottom-0 select-none font-display text-[16rem] leading-none text-gold-500/10">ॐ</div>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading dark eyebrow="Offer Your Support" title="Your daan becomes someone's jeevan" hindi="दान ही सच्ची सेवा है" description="Scan to donate via any UPI app. Every rupee goes to ration, blankets, fodder, medicines and yatra seva." />
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal className="gold-frame rounded-[2rem] bg-cream-50 p-7 text-center shadow-soft sm:p-9">
            <div className="mx-auto flex max-w-xs items-center justify-center gap-3">
              <img src="/diya.svg" alt="diya" className="h-10 w-10" />
              <p className="font-display text-2xl text-maroon-700">Nirmal Man Foundation</p>
              <img src="/diya.svg" alt="diya" className="h-10 w-10 scale-x-[-1]" />
            </div>
            <a href="upi://pay?pa=0793549A0225226.bqr@kotak&pn=Nirmal%20Man%20Foundation&cu=INR" className="mx-auto mt-6 block w-fit overflow-hidden rounded-3xl border-2 border-dashed border-gold-500 bg-white p-3 transition hover:scale-[1.02] hover:shadow-glow">
              <img src="/members/nmfqr.jpg" alt="UPI QR code for donation" className="h-64 w-64 object-contain sm:h-72 sm:w-72" />
            </a>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-leaf-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-leaf-600"><Smartphone size={14}/> Scan with GPay • PhonePe • Paytm</p>
          </Reveal>
          <div className="flex flex-col gap-4">
            <Reveal delay={0.05} className="rounded-[2rem] border border-gold-500/30 bg-white/[0.07] p-7 backdrop-blur">
              <h3 className="flex items-center gap-2 font-display text-2xl text-gold-200"><Landmark size={22}/> Bank Transfer</h3>
              <dl className="mt-4 space-y-3 text-[15px]">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-cream-100/60">Trust</dt><dd className="text-right font-bold text-cream-50">NIRMALMANFOUNDATION TRUST</dd></div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-cream-100/60">A/C No</dt><dd className="font-mono font-bold text-gold-200">6951004944</dd></div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-cream-100/60">Bank</dt><dd className="text-cream-50">Kotak Mahindra Bank</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-cream-100/60">IFSC</dt><dd className="font-mono font-bold text-gold-200">KKBK0003549</dd></div>
              </dl>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[2rem] bg-saffron-500 p-7 text-maroon-950">
              <h3 className="flex items-center gap-2 font-display text-2xl"><BadgeCheck size={22}/> 80G Receipts</h3>
              <p className="mt-2 text-[15px] font-medium leading-relaxed">Share your transaction screenshot on WhatsApp to receive your donation receipt & blessings from the parivaar.</p>
              <a href="https://chat.whatsapp.com/IjGzImCRcsWEDMnPBlu3s9" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-maroon-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream-50 transition hover:-translate-y-0.5">Send screenshot</a>
            </Reveal>
            <Reveal delay={0.15} className="flex items-center gap-3 rounded-[2rem] border border-gold-500/30 bg-maroon-950/60 p-5 text-sm text-cream-100/75"><QrCode className="shrink-0 text-gold-300"/> Seva areas: Ration • Blankets • Gau fodder • Blood camps • Shiksha • Yatra</Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
