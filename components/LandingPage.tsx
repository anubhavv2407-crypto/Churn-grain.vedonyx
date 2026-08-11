"use client";

import { motion, useReducedMotion } from "framer-motion";
import BrandMark from "./BrandMark";

export default function LandingPage() {
  const reduced = useReducedMotion();

  return (
    <main className="coming-page">
      <header className="coming-header">
        <span className="header-spacer" aria-hidden="true" />
        <BrandMark />
        <span className="header-note">PURE · HONEST · UNADULTERATED</span>
      </header>

      <section className="coming-hero" aria-labelledby="coming-title">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .65 }}
        >
          THE PURE PANTRY IS ALMOST READY
        </motion.p>
        <motion.h1
          id="coming-title"
          initial={reduced ? false : { opacity: 0, y: 55, scale: .97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: .95, delay: .08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>COMING</span>
          <strong>SOON.</strong>
        </motion.h1>
      </section>

      <div className="coming-footer"><span>ROOTED IN ODISHA</span><span>CHURN &amp; GRAIN CO. · 2026</span></div>
    </main>
  );
}
