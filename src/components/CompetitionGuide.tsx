import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { prizeLevels } from "@/content/site";

export type Guide = {
  title: string; eyebrow: string; intro: string; draft?: boolean;
  facts: { label: string; value: string }[];
  phases: { title: string; time: string; detail: string }[];
  preparationTitle: string; preparationIntro: string;
  preparation: { title: string; detail: string }[];
  materials: { title: string; items: string[] }[];
  participation: string;
  scoring: { title: string; points: number; detail: string }[];
  scoringNote: string;
  resources: { title: string; detail: string; href: string; draft?: boolean }[];
  other: { title: string; href: string };
};
const sections = [["format", "Format"], ["prepare", "Preparation"], ["materials", "Materials"], ["scoring", "Scoring"], ["resources", "Guides & resources"]];

export default function CompetitionGuide({ guide }: { guide: Guide }) {
  return <div className="site-shell">
    <Seo title={guide.title} description={guide.intro} />
    <Navbar />
    <main>
      <PageHero eyebrow={guide.eyebrow} title={guide.title} intro={guide.intro}
        aside={guide.draft && <p className="guide-draft-note">Draft guide · Current preparation details, subject to final confirmation.</p>} />
      <div className="guide-fact-strip"><dl className="site-container guide-facts">{guide.facts.map(f => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl></div>
      <div className="site-container guide-layout">
        <aside className="guide-sidebar">
          <nav aria-label={guide.title + " sections"}><p className="eyebrow">In this guide</p>{sections.map(([id, label]) => <a key={id} href={"#" + id}>{label}<ArrowRight aria-hidden="true" /></a>)}</nav>
          <div className="guide-awards"><p className="eyebrow">Competition awards</p>{prizeLevels.map(p => <p key={p.place}><span>{p.place} place</span><strong>{p.amount}</strong></p>)}</div>
        </aside>
        <div className="guide-body">
          <section id="format" tabIndex={-1} className="guide-section">
            <p className="eyebrow">01 / The format</p><h2>How your round works.</h2>
            <ol className="guide-timeline">{guide.phases.map(p => <li key={p.title}><span className="guide-duration">{p.time}</span><div><h3>{p.title}</h3><p>{p.detail}</p></div></li>)}</ol>
            <div className="guide-note"><strong>Everyone takes part.</strong><p>{guide.participation}</p></div>
          </section>
          <section id="prepare" tabIndex={-1} className="guide-section">
            <p className="eyebrow">02 / Get ready</p><h2>{guide.preparationTitle}</h2><p className="guide-intro">{guide.preparationIntro}</p>
            <ol className="guide-checklist">{guide.preparation.map((p, index) => <li key={p.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{p.title}</h3><p>{p.detail}</p></div></li>)}</ol>
          </section>
          <section id="materials" tabIndex={-1} className="guide-section">
            <p className="eyebrow">03 / On the day</p><h2>What to bring. What to expect.</h2>
            <div className="guide-materials">{guide.materials.map(group => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
          </section>
          <section id="scoring" tabIndex={-1} className="guide-section">
            <p className="eyebrow">04 / Judging</p><h2>100 points. Clear priorities.</h2>
            <div className="guide-score-list">{guide.scoring.map(s => <article key={s.title}><div><h3>{s.title}</h3><p>{s.detail}</p></div><p className="guide-score"><strong>{s.points}</strong><span>points</span></p></article>)}</div>
            <p className="guide-small-print">{guide.scoringNote}</p>
          </section>
          <section id="resources" tabIndex={-1} className="guide-section">
            <p className="eyebrow">05 / Resources</p><h2>Prepare with the materials.</h2><p className="guide-intro">Event guides, scoring criteria, and practice materials. PDFs open in Google Drive.</p>
            <div className="guide-resources">{guide.resources.map(r => <a key={r.href} href={r.href} target="_blank" rel="noreferrer" className="guide-resource"><FileText aria-hidden="true" /><div><span className="guide-resource-label">PDF{r.draft ? " · Draft" : ""}</span><h3>{r.title}</h3><p>{r.detail}</p></div><ArrowUpRight aria-hidden="true" /></a>)}</div>
            <p className="guide-small-print">Materials updated September 9, 2026. {guide.draft ? "Venture Pitch materials are drafts; check back for the final version." : "Practice cases are examples. The conference scenario is revealed when preparation begins."}</p>
            <div className="guide-note"><strong>Competition awards</strong><p>{prizeLevels.map(p => p.place + ": " + p.amount).join(" · ")} per competition. Official rules will explain award eligibility and disbursement.</p></div>
          </section>
          <div className="guide-next"><Link to="/registration" className="button button-dark">Registration updates <ArrowRight aria-hidden="true" /></Link><Link to={guide.other.href} className="text-link">Explore {guide.other.title} <ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </div>
    </main><Footer />
  </div>;
}
