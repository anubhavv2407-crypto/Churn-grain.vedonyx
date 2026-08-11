"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import SiteFooter from "./SiteFooter";

const addToCart = (slug: string) => window.dispatchEvent(new CustomEvent("cg:add", { detail: slug }));

export default function ShopPage() {
  const [filter, setFilter] = useState("ALL");
  const filtered = useMemo(() => filter === "ALL" ? products : products.filter((product) => product.category.toUpperCase().includes(filter)), [filter]);
  return <main className="inner-main">
    <section className="shop-hero">
      <Image src="/images/home-shop-pantry-3d-v5.png" alt="The complete Churn and Grain pantry in a cinematic studio" fill priority sizes="100vw" />
      <div className="shop-hero-shade" />
      <div className="shop-hero-copy"><span>THE COMPLETE RANGE · 06 PRODUCTS</span><h1>The pure<br /><em>pantry.</em></h1><p>Traditional food, selected with modern scrutiny. Every ingredient named. Every batch accounted for.</p></div>
    </section>
    <div className="shop-toolbar"><div>{["ALL","PURE PANTRY","AYURVEDIC"].map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><span><SlidersHorizontal /> SHOWING {String(filtered.length).padStart(2,"0")}</span></div>
    <section className="shop-grid">{filtered.map((product, index) => <motion.article key={product.slug} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * .08 }}>
      <a href={`/product/${product.slug}`} className="shop-card-image" style={{ background: product.theme }}><Image src={product.slug === "turmeric-latte" ? product.image : product.gallery[1]} alt={product.name} fill sizes="(max-width: 700px) 100vw, 33vw" /><span>{String(index + 1).padStart(2,"0")}</span><b>{product.badge}</b></a>
      <div className="shop-card-copy"><span>{product.category}</span><h2>{product.name}</h2><p>{product.description}</p><footer><div><small>{product.size}</small><strong>{product.price}</strong></div><button onClick={() => addToCart(product.slug)}>ADD <ArrowUpRight /></button></footer></div>
    </motion.article>)}</section>
    <section className="shop-service"><div><span>01</span><strong>LAB TESTED</strong><p>Batch-specific proof.</p></div><div><span>02</span><strong>FAST DISPATCH</strong><p>Within 24–48 business hours.</p></div><div><span>03</span><strong>COMPLIMENTARY DELIVERY</strong><p>On orders above ₹1,499.</p></div></section>
    <SiteFooter />
  </main>;
}
