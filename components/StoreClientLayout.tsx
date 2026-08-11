"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, Search, ShoppingBag, UserRound, X, ArrowUpRight, Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import BrandMark from "./BrandMark";
import { products } from "@/lib/products";
import { HeritageRail } from "./SiteFooter";

type CartLine = { slug: string; quantity: number };

export default function StoreClientLayout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: .25 });
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("cg-cart");
      if (saved) setCart(JSON.parse(saved));
    } catch { /* Cart remains empty if local storage is unavailable. */ }
    setHydrated(true);

    const add = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      setCart((lines) => {
        const found = lines.find((line) => line.slug === slug);
        return found
          ? lines.map((line) => line.slug === slug ? { ...line, quantity: line.quantity + 1 } : line)
          : [...lines, { slug, quantity: 1 }];
      });
      setCartOpen(true);
    };
    const clear = () => setCart([]);
    window.addEventListener("cg:add", add);
    window.addEventListener("cg:clear", clear);
    return () => {
      window.removeEventListener("cg:add", add);
      window.removeEventListener("cg:clear", clear);
    };
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("cg-cart", JSON.stringify(cart));
  }, [cart, hydrated]);

  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const total = useMemo(() => cart.reduce((sum, line) => {
    const product = products.find((item) => item.slug === line.slug);
    return sum + Number(product?.price.replace(/[^0-9]/g, "") || 0) * line.quantity;
  }, 0), [cart]);

  const changeQuantity = (slug: string, amount: number) => setCart((lines) => lines
    .map((line) => line.slug === slug ? { ...line, quantity: line.quantity + amount } : line)
    .filter((line) => line.quantity > 0));

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <div className="store-announcement"><div>COMPLIMENTARY DELIVERY ABOVE ₹1,499 <i /> EVERY BATCH TESTED <i /> ROOTED IN ODISHA <i /> PURE FOOD, NOTHING ELSE <i /> COMPLIMENTARY DELIVERY ABOVE ₹1,499 <i /> EVERY BATCH TESTED <i /> ROOTED IN ODISHA <i /></div></div>
      <header className="store-header">
        <div className="header-pill">
          <a href="/shop">GIFTING <span>↗</span></a>
          <a className="header-promise" href="/#pantry">PURE PANTRY <ShoppingBag /></a>
        </div>
        <div className="header-logo"><BrandMark /></div>
        <div className="header-lower">
          <button className="mobile-nav-trigger" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
          <nav aria-label="Primary navigation">
            <a href="/shop">SHOP</a>
            <a href="/#pantry">OUR PANTRY</a>
            <a href="/#origin">FROM ODISHA</a>
            <a href="/#proof">OUR STANDARDS</a>
          </nav>
          <div className="header-actions">
            <button onClick={() => setSearchOpen(true)} aria-label="Search"><Search /></button>
            <a href="/account" aria-label="Account"><UserRound /></a>
            <button onClick={() => setCartOpen(true)} aria-label={`Cart with ${count} items`}><ShoppingBag /><b>{String(count).padStart(2, "0")}</b></button>
          </div>
        </div>
      </header>
      <HeritageRail />
      {children}

      <AnimatePresence>
        {menuOpen && (
          <motion.aside className="mobile-menu-panel" initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ ease: [0.22, 1, 0.36, 1], duration: .55 }}>
            <div><BrandMark /><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div>
            <nav>{[["01","SHOP","/shop"],["02","OUR PANTRY","/#pantry"],["03","THE PROOF","/#proof"],["04","OUR STORY","/story"]].map(([n,label,href]) => <a href={href} key={label}><span>{n}</span>{label}<ArrowUpRight /></a>)}</nav>
            <p>PURE · HONEST · UNADULTERATED<br />BHUBANESWAR, ODISHA</p>
          </motion.aside>
        )}
        {searchOpen && (
          <motion.div className="search-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={() => setSearchOpen(false)} aria-label="Close search"><X /></button>
            <span>WHAT ARE YOU LOOKING FOR?</span>
            <input autoFocus placeholder="Search the pantry" />
            <div>{products.slice(0, 4).map((product) => <a href={`/product/${product.slug}`} key={product.slug}>{product.shortName}<ArrowUpRight /></a>)}</div>
          </motion.div>
        )}
        {cartOpen && (
          <>
            <motion.button className="drawer-backdrop" aria-label="Close cart" onClick={() => setCartOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.aside className="cart-drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], duration: .5 }}>
              <header><div><span>YOUR PANTRY</span><strong>{count} {count === 1 ? "ITEM" : "ITEMS"}</strong></div><button onClick={() => setCartOpen(false)} aria-label="Close cart"><X /></button></header>
              <div className="cart-lines">
                {cart.length === 0 ? <div className="empty-cart"><ShoppingBag /><h3>Your pantry is empty.</h3><p>Start with food that shows its proof.</p><a href="/shop">EXPLORE THE PANTRY <ArrowUpRight /></a></div> : cart.map((line) => {
                  const product = products.find((item) => item.slug === line.slug)!;
                  return <article key={line.slug}><img src={product.image} alt="" /><div><span>{product.category}</span><h3>{product.shortName}</h3><p>{product.size}</p><div><button onClick={() => changeQuantity(line.slug, -1)}><Minus /></button><b>{line.quantity}</b><button onClick={() => changeQuantity(line.slug, 1)}><Plus /></button></div></div><strong>{product.price}</strong></article>;
                })}
              </div>
              {cart.length > 0 && <footer><div><span>SUBTOTAL</span><strong>₹{total.toLocaleString("en-IN")}</strong></div><p>Taxes included. Shipping calculated at checkout.</p><a className="drawer-checkout" href="/checkout" onClick={() => setCartOpen(false)}>SECURE CHECKOUT <ArrowUpRight /></a></footer>}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
