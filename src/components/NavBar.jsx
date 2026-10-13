import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HeartHandshake, Menu, X, Phone, MapPin } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-maroon-800 text-cream-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-[12px] sm:px-6">
          <p className="flex items-center gap-1.5 truncate"><MapPin size={13} className="text-gold-300" /><span className="truncate">Sanganer, Jaipur — Seva across Rajasthan</span></p>
          <a href="tel:+919694711457" className="hidden items-center gap-1.5 hover:text-gold-200 sm:flex"><Phone size={13} className="text-gold-300" />+91 96947 11457</a>
        </div>
      </div>
      <nav className={`border-b transition-all duration-300 ${scrolled ? "border-gold-500/50 bg-cream-50/95 shadow-[0_10px_30px_rgba(66,0,16,0.12)] backdrop-blur-xl" : "border-gold-500/30 bg-cream-100/95 backdrop-blur-md"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white shadow-md ring-2 ring-gold-500/60"><img src="/logofinal.png" alt="Nirmal Man Foundation logo" className="h-9 w-9 object-contain" /></span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-maroon-700">Nirmal Man</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-gold-600">Foundation • Jaipur</span>
            </span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map(l => (
              <NavLink key={l.path} to={l.path} className={({isActive}) => `link-underline text-[15px] font-semibold ${isActive ? "active text-maroon-700" : "text-stone-700 hover:text-maroon-700"}`}>{l.name}</NavLink>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="upi://pay?pa=0793549A0225226.bqr@kotak&pn=Nirmal%20Man%20Foundation&cu=INR" className="inline-flex items-center gap-2 rounded-full bg-maroon-700 px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-cream-50 shadow-lg transition hover:-translate-y-0.5 hover:bg-maroon-800"><HeartHandshake size={16}/>Donate</a>
          </div>
          <button onClick={()=>setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-maroon-700/20 text-maroon-700 lg:hidden" aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 top-[104px] z-40 bg-maroon-950/60 backdrop-blur-sm lg:hidden" onClick={()=>setOpen(false)}>
          <div className="m-3 rounded-3xl border border-gold-500/30 bg-cream-50 p-4 shadow-2xl" onClick={e=>e.stopPropagation()}>
            {links.map(l=>(
              <NavLink key={l.path} to={l.path} className={({isActive})=>`block rounded-2xl px-4 py-3.5 font-display text-2xl ${isActive?"bg-maroon-700 text-cream-50":"text-maroon-800 hover:bg-cream-200"}`}>{l.name}</NavLink>
            ))}
            <a href="upi://pay?pa=0793549A0225226.bqr@kotak&pn=Nirmal%20Man%20Foundation&cu=INR" className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-saffron-500 px-4 py-4 font-bold uppercase tracking-wider text-maroon-950"><HeartHandshake size={18}/>Donate via UPI</a>
          </div>
        </div>
      )}
    </header>
  );
}
