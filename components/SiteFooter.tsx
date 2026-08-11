import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";
import BrandMark from "./BrandMark";

export function HeritageRail() {
  return <div className="heritage-line" aria-hidden="true">{Array.from({ length: 18 }).map((_, index) => <span key={index}><i /></span>)}</div>;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <HeritageRail />
      <div className="footer-cinematic">
        <Image src="/images/home-footer-pantry-v3.png" alt="A cinematic still life of the complete Churn and Grain pantry" fill sizes="100vw" />
        <div className="footer-cinematic-shade" />
      <div className="footer-lead">
        <span>GOOD FOOD, KEPT HONEST.</span>
        <h2>A pantry worth<br /><em>coming home to.</em></h2>
        <a href="/shop">SHOP THE COMPLETE RANGE <ArrowUpRight /></a>
      </div>
      </div>
      <div className="footer-grid">
        <div><BrandMark light /><p>Pure Indian food, lab-tested and presented with complete ingredient transparency.</p></div>
        <nav><b>EXPLORE</b><a href="/shop">Shop</a><a href="/#proof">The Proof</a><a href="/story">Our Story</a><a href="/account">My Account</a></nav>
        <nav><b>HELP</b><a href="/shipping">Shipping</a><a href="/returns">Returns</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a></nav>
        <div className="footer-note"><b>FROM ODISHA, WITH PROOF.</b><p>Plot No. 37, OSHB Colony,<br />Lewis Road, Bhubaneswar 751002</p><a href="#"><Instagram /> INSTAGRAM</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 CHURN &amp; GRAIN CO.</span><span>FSSAI LIC. NO. 22026072000173</span><span>PURE · HONEST · UNADULTERATED</span><span>DEVELOPED BY VEDONYX</span></div>
    </footer>
  );
}
