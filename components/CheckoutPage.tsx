"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, CreditCard, Landmark, LockKeyhole, PackageCheck, Smartphone } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { products } from "@/lib/products";
import { HeritageRail } from "./SiteFooter";

type CartLine = { slug: string; quantity: number };

const money = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [payment, setPayment] = useState("upi");

  useEffect(() => {
    try {
      setCart(JSON.parse(window.localStorage.getItem("cg-cart") || "[]"));
    } catch { setCart([]); }
    setReady(true);
  }, []);

  const lines = useMemo(() => cart.map((line) => ({ ...line, product: products.find((item) => item.slug === line.slug)! })).filter((line) => line.product), [cart]);
  const subtotal = lines.reduce((sum, line) => sum + Number(line.product.price.replace(/[^0-9]/g, "")) * line.quantity, 0);
  const shipping = subtotal >= 1499 ? 0 : 99;

  const continueToPayment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const placeOrder = () => {
    window.localStorage.setItem("cg-cart", "[]");
    window.dispatchEvent(new Event("cg:clear"));
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!ready) return <main className="checkout-loading">PREPARING YOUR PANTRY…</main>;

  if (step === 3) return (
    <main className="checkout-success">
      <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}>
        <span className="success-icon"><PackageCheck /></span>
        <small>UI DEMONSTRATION COMPLETE</small>
        <h1>Your pantry<br />is reserved.</h1>
        <p>This frontend flow is complete. No payment was charged and no order was sent to a backend.</p>
        <a className="primary-cta" href="/shop">CONTINUE SHOPPING <ArrowUpRight /></a>
      </motion.div>
    </main>
  );

  if (!lines.length) return (
    <main className="checkout-empty">
      <span>YOUR PANTRY · 00</span>
      <h1>Nothing to<br />check out yet.</h1>
      <p>Choose a pure pantry essential and return when your basket feels right.</p>
      <a className="primary-cta" href="/shop">EXPLORE THE RANGE <ArrowUpRight /></a>
    </main>
  );

  return (
    <main className="checkout-page">
      <section className="checkout-main">
        <header className="checkout-heading">
          <a href="/shop"><ArrowLeft /> BACK TO SHOP</a>
          <span>SECURE CHECKOUT · {step === 1 ? "DELIVERY" : "PAYMENT"}</span>
          <h1>{step === 1 ? <>Where should<br />we send it?</> : <>Choose how<br />you’ll pay.</>}</h1>
          <div className="checkout-steps"><i className="active" /><i className={step >= 2 ? "active" : ""} /><span>0{step} / 02</span></div>
        </header>

        {step === 1 ? (
          <motion.form className="checkout-form" onSubmit={continueToPayment} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="form-section-title"><span>01</span><strong>CONTACT</strong></div>
            <label className="field-wide"><span>EMAIL ADDRESS</span><input type="email" required placeholder="you@example.com" /></label>
            <div className="form-section-title"><span>02</span><strong>DELIVERY ADDRESS</strong></div>
            <div className="checkout-field-grid">
              <label><span>FIRST NAME</span><input required placeholder="First name" /></label>
              <label><span>LAST NAME</span><input required placeholder="Last name" /></label>
              <label className="field-wide"><span>ADDRESS</span><input required placeholder="House, street and area" /></label>
              <label><span>CITY</span><input required placeholder="City" /></label>
              <label><span>STATE</span><input required placeholder="State" /></label>
              <label><span>PIN CODE</span><input required inputMode="numeric" pattern="[0-9]{6}" placeholder="000000" /></label>
              <label><span>PHONE</span><input required inputMode="tel" placeholder="+91" /></label>
            </div>
            <label className="save-address"><input type="checkbox" /> Save this address for next time</label>
            <button className="checkout-next" type="submit">CONTINUE TO PAYMENT <ArrowUpRight /></button>
          </motion.form>
        ) : (
          <motion.section className="payment-panel" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <button className="change-address" onClick={() => setStep(1)}><ArrowLeft /> CHANGE DELIVERY DETAILS</button>
            <div className="form-section-title"><span>02</span><strong>PAYMENT METHOD</strong></div>
            <div className="payment-options">
              {[["upi", Smartphone, "UPI", "Google Pay, PhonePe or any UPI app"], ["card", CreditCard, "CARD", "Credit or debit card"], ["cod", Landmark, "CASH ON DELIVERY", "Pay when your parcel arrives"]].map(([id, Icon, title, copy]) => (
                <button className={payment === id ? "active" : ""} onClick={() => setPayment(String(id))} key={String(id)}><Icon /><span><strong>{String(title)}</strong><small>{String(copy)}</small></span><i>{payment === id ? <Check /> : null}</i></button>
              ))}
            </div>
            {payment === "upi" && <label className="payment-detail"><span>UPI ID</span><input placeholder="name@bank" /></label>}
            {payment === "card" && <div className="card-fields"><label><span>CARD NUMBER</span><input inputMode="numeric" placeholder="0000 0000 0000 0000" /></label><label><span>EXPIRY</span><input placeholder="MM / YY" /></label><label><span>CVV</span><input inputMode="numeric" placeholder="•••" /></label></div>}
            <div className="secure-note"><LockKeyhole /><span><strong>SECURE UI PREVIEW</strong><small>No payment information is transmitted or stored.</small></span></div>
            <button className="checkout-next" onClick={placeOrder}>PLACE DEMO ORDER · {money(subtotal + shipping)} <ArrowUpRight /></button>
          </motion.section>
        )}
      </section>

      <aside className="checkout-summary">
        <span>YOUR PANTRY · {String(lines.reduce((sum, line) => sum + line.quantity, 0)).padStart(2, "0")}</span>
        <div className="summary-lines">{lines.map(({ product, quantity }) => <article key={product.slug}><div style={{ background: product.theme }}><img src={product.image} alt="" /><b>{quantity}</b></div><span><small>{product.category}</small><strong>{product.shortName}</strong><em>{product.size}</em></span><p>{money(Number(product.price.replace(/[^0-9]/g, "")) * quantity)}</p></article>)}</div>
        <div className="summary-totals"><p><span>SUBTOTAL</span><strong>{money(subtotal)}</strong></p><p><span>DELIVERY</span><strong>{shipping ? money(shipping) : "COMPLIMENTARY"}</strong></p><p><span>TOTAL</span><strong>{money(subtotal + shipping)}</strong></p></div>
        <div className="summary-proof"><LockKeyhole /><p><strong>NOTHING HIDDEN.</strong><br />Taxes included. No live payment will be processed.</p></div>
        <HeritageRail />
      </aside>
    </main>
  );
}
