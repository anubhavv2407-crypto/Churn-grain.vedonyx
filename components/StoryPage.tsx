import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SiteFooter, { HeritageRail } from "./SiteFooter";

export default function StoryPage() {
  return <main className="inner-main story-page-new">
    <section className="story-hero-new"><div><span>TWO FATHERS · ONE QUESTION</span><h1>Food our<br />children can<br /><em>trust.</em></h1></div><div><Image src="/images/story-bilona-odisha.png" alt="Traditional bilona churning" fill priority sizes="55vw" /></div></section>
    <HeritageRail />
    <section className="story-narrative"><span>THE KITCHEN STORY</span><h2>It began with<br />what was missing.</h2><div><p>We are two MBA batchmates from Odisha. One grew up two kilometres from the Jagannath Temple in Puri, where pure food was simply a way of life.</p><p>The other watched his grandfather—a state award-winning farmer—tend the land, and his grandmother run a home dairy with over 50 cows.</p><p>When we both became fathers within months of each other, everything changed. We read hundreds of labels, sent products to labs, and made more than a thousand calls.</p><p>India did not need trendier food. It needed good food—the kind our grandparents ate, with the proof modern families deserve.</p></div></section>
    <section className="story-quote"><span>OUR ANSWER</span><blockquote>“We are from the land where purity is not a marketing strategy. It is a daily ritual.”</blockquote></section>
    <section className="story-pillars"><div><b>01</b><h3>ROOTED</h3><p>Food traditions shaped in Odisha and sourced across India.</p></div><div><b>02</b><h3>VERIFIED</h3><p>Real tests, real ingredient lists, real batch accountability.</p></div><div><b>03</b><h3>RESTRAINED</h3><p>Nothing added simply to make a label sound impressive.</p></div></section>
    <section className="story-final"><Image src="/images/hero-ghee-pour.png" alt="Golden ghee" fill sizes="100vw" /><div><span>THE NEXT GENERATION’S PANTRY</span><h2>Good food<br /><em>should feel certain.</em></h2><a href="/shop">SHOP PURE FOOD <ArrowUpRight /></a></div></section>
    <SiteFooter />
  </main>;
}
