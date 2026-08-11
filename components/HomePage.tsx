"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, FlaskConical, Leaf, QrCode, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/products";
import SiteFooter, { HeritageRail } from "./SiteFooter";
import BrandMark from "./BrandMark";

const addToCart = (slug: string) => window.dispatchEvent(new CustomEvent("cg:add", { detail: slug }));

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function HomePage() {
  const [active, setActive] = useState(0);
  const product = products[active];
  const previous = () => setActive((active - 1 + products.length) % products.length);
  const next = () => setActive((active + 1) % products.length);

  return (
    <main className="store-main">
      <section className="store-hero">
        <div className="hero-copy-new">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>LAB-TESTED FOOD · ROOTED IN ODISHA</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 55 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>Pure food.<br />Nothing <em>else.</em></motion.h1>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .7 }}>A considered pantry of A2 ghee, Kashmir saffron, honey and Ayurvedic essentials—sourced with care and backed by proof.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}><a className="primary-cta" href="/shop">SHOP PURE FOOD <ArrowUpRight /></a><a className="text-link" href="/story">OUR STORY</a></motion.div>
        </div>
        <div className="hero-visual-new"><Image src="/images/home-hero-ghee-v2.png" alt="Golden A2 ghee being poured into a glass jar in a sculptural studio" fill priority sizes="(max-width: 800px) 100vw, 58vw" /><div className="hero-image-note"><span>01 / 06</span><strong>Slow-made.<br />Fully shown.</strong></div></div>
      </section>

      <div className="moving-copy"><div>FULL INGREDIENT TRANSPARENCY <i>✦</i> EVERY BATCH TESTED <i>✦</i> FROM THE LAND OF JAGANNATH <i>✦</i> FULL INGREDIENT TRANSPARENCY <i>✦</i> EVERY BATCH TESTED <i>✦</i></div></div>

      <section className="pantry-slider" id="pantry" style={{ backgroundColor: product.theme, color: "#2B211D" }}>
        <Reveal className="slider-heading"><span>THE PURE PANTRY · 01—06</span><h2>OUR PANTRY</h2><p>Use the arrows to move through food that shows exactly what it is.</p></Reveal>
        <div className="slider-stage">
          <button className="slider-arrow left" onClick={previous} aria-label="Previous product"><ArrowLeft /></button>
          <button className="side-product prev" onClick={previous} aria-label="View previous product"><span><Image src={products[(active - 1 + products.length) % products.length].image} alt="" fill sizes="25vw" /></span><b>{products[(active - 1 + products.length) % products.length].shortName}</b></button>
          <AnimatePresence mode="wait">
            <motion.article className="active-product" key={product.slug} initial={{ opacity: 0, scale: .88, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: .88, rotate: 3 }} transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}>
              <a href={`/product/${product.slug}`} className="product-orbit"><span /><span /><Image src={product.image} alt={product.name} fill sizes="45vw" /></a>
              <span className="active-category">{product.category}</span><h3>{product.name}</h3><p>{product.size} · {product.price}</p>
              <button className="active-product-quick-add" onClick={() => addToCart(product.slug)}>QUICK ADD <ArrowUpRight /></button>
            </motion.article>
          </AnimatePresence>
          <button className="side-product next" onClick={next} aria-label="View next product"><span><Image src={products[(active + 1) % products.length].image} alt="" fill sizes="25vw" /></span><b>{products[(active + 1) % products.length].shortName}</b></button>
          <button className="slider-arrow right" onClick={next} aria-label="Next product"><ArrowRight /></button>
        </div>
        <div className="slider-dots">{products.map((item, index) => <button key={item.slug} className={index === active ? "active" : ""} onClick={() => setActive(index)}><span>{String(index + 1).padStart(2, "0")}</span><i /></button>)}</div>
      </section>

      <HeritageRail />

      <section className="material-story">
        <div className="material-story-image"><Image src="/images/home-ghee-texture-v2.png" alt="A luminous spiral of pure golden ghee" fill sizes="100vw" /></div>
        <div className="material-story-shade" />
        <Reveal className="material-story-copy"><span>THE TEXTURE OF CERTAINTY · 02</span><h2>Purity you can<br /><em>see move.</em></h2><p>Rich, grainy, aromatic and slow-made. Our ghee keeps the character that shortcuts usually erase.</p><a href="/product/a2-desi-cow-ghee">MEET THE GOLDEN JAR <ArrowUpRight /></a></Reveal>
        <div className="material-coordinate"><span>99.96%</span><b>MILK FAT</b></div>
      </section>

      <div className="campaign-ticker"><div>ONE INGREDIENT <i>✦</i> SLOW CHURNED <i>✦</i> FULLY TESTED <i>✦</i> NOTHING HIDDEN <i>✦</i> ONE INGREDIENT <i>✦</i> SLOW CHURNED <i>✦</i> FULLY TESTED <i>✦</i> NOTHING HIDDEN <i>✦</i></div></div>

      <section className="category-section">
        <Reveal className="section-title"><span>SHOP BY RITUAL</span><h2>Good food for<br /><em>everyday living.</em></h2></Reveal>
        <div className="category-grid">
          <Reveal className="category-card category-large"><Image src="/images/home-shop-pantry-v4.png" alt="The complete Churn and Grain pantry in a cinematic cream studio" fill sizes="70vw" /><div><span>THE PURE PANTRY</span><h3>Everyday essentials,<br />made exceptional.</h3><a href="/shop">EXPLORE 04 PRODUCTS <ArrowUpRight /></a></div></Reveal>
          <Reveal className="category-card"><Image src="/images/wellness-ritual.png" alt="Ayurvedic wellness ritual" fill sizes="35vw" /><div><span>AYURVEDIC WELLNESS</span><h3>For slower rituals.</h3><a href="/shop">EXPLORE 02 PRODUCTS <ArrowUpRight /></a></div></Reveal>
        </div>
      </section>

      <section className="saffron-orbit" aria-label="Churn and Grain purity statement">
        <div className="saffron-word-line saffron-word-line--top"><div>PURE FOOD, FULLY SHOWN · PURE FOOD, FULLY SHOWN · PURE FOOD, FULLY SHOWN ·</div></div>
        <div className="saffron-word-line saffron-word-line--bottom"><div>ROOTED IN ODISHA · TESTED BY THE BATCH · ROOTED IN ODISHA · TESTED BY THE BATCH ·</div></div>
        <div className="saffron-disc"><Image src="/images/home-saffron-particles-v3.png" alt="Kashmir saffron threads suspended in warm light" fill sizes="420px" /><div className="saffron-disc-logo"><BrandMark /></div></div>
      </section>

      <section className="proof-section" id="proof">
        <Reveal className="proof-intro"><span>PROOF, NOT PROMISES</span><h2>We don’t ask<br />for trust. <em>We show it.</em></h2><p>Every batch is tested before it leaves us. Every label names the ingredient. Every claim has somewhere real to point.</p></Reveal>
        <div className="proof-grid">
          {[[FlaskConical,"99.96%","MILK FAT","Full chemical purity profile"],[QrCode,"01","QR PER BATCH","The actual report, not a generic certificate"],[ShieldCheck,"ZERO","ADULTERATION","Negative Baudoin test on our ghee"],[Leaf,"100%","TRACEABLE","Ingredient origins you can understand"]].map(([Icon,value,label,copy],index) => <Reveal className="proof-card" key={String(label)}><span>0{index + 1}</span><Icon /><strong>{String(value)}</strong><b>{String(label)}</b><p>{String(copy)}</p></Reveal>)}
        </div>
      </section>

      <section className="origin-section" id="origin">
        <motion.div className="origin-image" initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}><Image src="/images/home-odisha-bilona-v2.png" alt="Traditional bilona churning in an Odisha courtyard with a Pattachitra border" fill sizes="55vw" /></motion.div>
        <Reveal className="origin-copy"><span>FROM THE LAND OF JAGANNATH</span><h2>Purity was never<br />a marketing claim <em>here.</em></h2><p>Churn &amp; Grain Co. was born from a conversation between two fathers from Odisha—and one question: what are we really feeding our children?</p><p>One founder grew up near the Jagannath Temple in Puri. The other watched his grandmother churn butter in a home dairy of over 50 cows. Their answer is a pantry made the way food deserves to be made.</p><a href="/story">READ OUR KITCHEN STORY <ArrowUpRight /></a></Reveal>
      </section>

      <section className="editorial-section">
        <Reveal className="editorial-heading"><span>THE INGREDIENT EDIT</span><h2>Real colour.<br /><em>Real character.</em></h2></Reveal>
        <div className="editorial-grid">
          <motion.a href="/product/a2-desi-cow-ghee" whileHover={{ y: -8 }}><Image src="/images/home-ghee-texture-v2.png" alt="Pure ghee texture" fill sizes="48vw" /><span>01 / SLOW-CHURNED GHEE</span></motion.a>
          <motion.a href="/product/extra-virgin-olive-oil" whileHover={{ y: -8 }}><Image src="/images/product-olive-oil.png" alt="Extra virgin olive oil" fill sizes="35vw" /><span>02 / COLD PROCESSED</span></motion.a>
          <motion.a href="/product/kashmir-mongra-kesar" whileHover={{ y: -8 }}><Image src="/images/product-saffron.png" alt="Kashmir saffron" fill sizes="35vw" /><span>03 / KASHMIR MONGRA</span></motion.a>
        </div>
      </section>

      <section className="pantry-campaign">
        <Image src="/images/home-shop-pantry-v4.png" alt="Churn and Grain complete pantry collection" fill sizes="100vw" />
        <div className="pantry-campaign-overlay" />
        <Reveal className="pantry-campaign-copy"><span>THE WHOLE PANTRY · 05</span><h2>Colourful by nature.<br /><em>Clear by choice.</em></h2><div><p>Ghee, saffron, honey, olive oil and everyday wellness—selected with modern scrutiny and presented without mystery.</p><a href="/shop">SHOP THE COMPLETE RANGE <ArrowUpRight /></a></div></Reveal>
      </section>

      <section className="shop-row shop-row--featured">
        <div className="shop-row-head"><span>SHOP THE COMPLETE PANTRY</span><a href="/shop">VIEW ALL 06 <ArrowUpRight /></a></div>
        <div className="product-card-row">{products.slice(0,4).map((item) => <article className="mini-product-card" key={item.slug}><a href={`/product/${item.slug}`}><div style={{ background: item.theme }}><Image src={item.slug === "turmeric-latte" ? item.image : item.gallery[1]} alt={item.name} fill sizes="25vw" /><span>{item.badge}</span></div><p>{item.category}</p><h3>{item.name}</h3></a><footer><span>{item.size}</span><strong>{item.price}</strong><button onClick={() => addToCart(item.slug)}>+</button></footer></article>)}</div>
      </section>

      <SiteFooter />
    </main>
  );
}
