import { ArrowUpRight } from "lucide-react";
import SiteFooter, { HeritageRail } from "./SiteFooter";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: Array<{ heading: string; body: string }>;
  action?: { label: string; href: string };
};

export default function InfoPage({ eyebrow, title, intro, blocks, action }: InfoPageProps) {
  return (
    <main className="inner-main info-page">
      <section className="info-hero">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
        {action ? <a className="primary-cta" href={action.href}>{action.label}<ArrowUpRight /></a> : null}
      </section>
      <HeritageRail />
      <section className="info-grid">
        {blocks.map((block, index) => (
          <article key={block.heading}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            <h2>{block.heading}</h2>
            <p>{block.body}</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
