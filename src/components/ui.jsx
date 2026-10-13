import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({ children, delay = 0, className = "", y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] ${
        dark
          ? "border-gold-500/40 bg-white/10 text-gold-200"
          : "border-gold-500/40 bg-gold-100/70 text-maroon-700"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  hindi,
  description,
  dark = false,
  align = "center",
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <div>
        <h2
          className={`font-display text-4xl leading-tight text-balance md:text-5xl ${
            dark ? "text-cream-100" : "text-maroon-700"
          }`}
        >
          {title}
        </h2>
        {hindi && (
          <p
            className={`mt-1 font-hindi text-xl ${
              dark ? "text-gold-200" : "text-saffron-600"
            }`}
          >
            {hindi}
          </p>
        )}
      </div>
      <div className="flex items-center gap-3" aria-hidden>
        <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold-500" />
        <span className="font-display text-xl leading-none text-gold-500">ॐ</span>
        <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold-500" />
      </div>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${
            dark ? "text-cream-100/75" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function DiyaDivider({ dark = false }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 py-2 opacity-90 ${
        dark ? "text-gold-300" : "text-gold-600"
      }`}
      aria-hidden
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-current sm:w-28" />
      <span className="flex items-center gap-2 text-lg">
        <span>🪔</span>
        <span className="font-display">ॐ</span>
        <span>🪔</span>
      </span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-current sm:w-28" />
    </div>
  );
}

export function PrimaryButton({ to, href, children, onClick, dark = false }) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
    dark
      ? "bg-saffron-500 text-maroon-950 shadow-[0_12px_30px_rgba(255,153,51,0.4)] hover:bg-saffron-400"
      : "bg-maroon-700 text-cream-50 shadow-[0_12px_30px_rgba(128,0,32,0.35)] hover:bg-maroon-800"
  }`;
  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function GhostButton({ to, href, children, dark = false }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
    dark
      ? "border-cream-100/30 text-cream-100 hover:border-gold-400 hover:text-gold-200"
      : "border-maroon-700/25 text-maroon-700 hover:border-maroon-700 hover:bg-maroon-700 hover:text-cream-50"
  }`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
}

export function Stat({ value, label, sub }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="font-display text-4xl text-cream-100 md:text-5xl">{value}</span>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">{label}</span>
      {sub && <span className="text-sm text-cream-100/60">{sub}</span>}
    </div>
  );
}
