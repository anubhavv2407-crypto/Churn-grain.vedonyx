"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Minus, Plus, ShieldCheck } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { products } from "@/lib/products";
import SiteFooter, { HeritageRail } from "./SiteFooter";

export default function ProductDetailsPage({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(product.size.split("/")[0].trim());
  const add = () => { for (let i = 0; i < quantity; i++) window.dispatchEvent(new CustomEvent("cg:add", { detail: product.slug })); };
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  return <main className="inner-main product-page">
    <section className="product-layout">
      <div className="product-gallery">
        {product.gallery.map((image, index) => <motion.div key={`${image}-${index}`} className={index === 0 ? "gallery-main" : "gallery-secondary"} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * .08 }} style={{ background: index === 0 ? product.theme : undefined }}><Image src={image} alt={`${product.name} view ${index + 1}`} fill priority={index === 0} sizes="(max-width: 900px) 100vw, 60vw" /><span>0{index + 1}</span></motion.div>)}
      </div>
      <aside className="product-info">
        <span>{product.category} · {product.badge}</span><h1>{product.name}</h1><p className="product-lead">{product.description}</p><div className="product-price"><strong>{product.price}</strong><span>MRP · TAXES INCLUDED</span></div>
        <div className="variant-picker"><span>SELECT SIZE</span><div>{product.size.split("/").map((item) => <button className={variant === item.trim() ? "active" : ""} onClick={() => setVariant(item.trim())} key={item}>{item.trim()}</button>)}</div></div>
        <div className="purchase-row"><div><button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus /></button><b>{quantity}</b><button onClick={() => setQuantity(quantity + 1)}><Plus /></button></div><button onClick={add}>ADD TO PANTRY <ArrowUpRight /></button></div>
        <p className="delivery-note"><Check /> Dispatches within 24–48 business hours</p>
        <div className="product-accordions"><details open><summary>WHY IT IS DIFFERENT <ArrowDown /></summary><ul>{product.highlights.map((item) => <li key={item}><Check />{item}</li>)}</ul></details><details><summary>INGREDIENTS <ArrowDown /></summary><p>{product.ingredients}</p></details><details><summary>STORAGE &amp; CARE <ArrowDown /></summary><p>Store in a cool, dry place away from direct sunlight. Natural colour and texture may vary.</p></details></div>
      </aside>
    </section>
    <HeritageRail />
    <section className="product-proof" style={{ background: product.accent }}><div><span>THE PROOF</span><h2>{product.proof}.</h2></div><ShieldCheck /><p>We do not ask you to trust a front-of-pack claim. Batch-specific reports and transparent ingredient lists are the standard.</p></section>
    <section className="product-story-band"><motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span>ONE PRODUCT. ONE CLEAR STORY.</span><h2>Nothing added.<br /><em>Nothing hidden.</em></h2><p>{product.ingredients}</p></motion.div><div><Image src={product.gallery[1]} alt={`${product.name} in use`} fill sizes="50vw" /></div></section>
    <section className="you-may-like"><header><span>CONTINUE THROUGH THE PANTRY</span><h2>You may also like.</h2></header><div>{related.map((item) => <a href={`/product/${item.slug}`} key={item.slug}><div style={{ background: item.theme }}><Image src={item.image} alt={item.name} fill sizes="33vw" /></div><span>{item.category}</span><h3>{item.name}</h3><p>{item.size} · {item.price}</p></a>)}</div></section>
    <SiteFooter />
  </main>;
}
