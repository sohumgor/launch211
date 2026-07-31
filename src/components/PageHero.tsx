import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  aside?: ReactNode;
};

const PageHero = ({ eyebrow, title, intro, aside }: PageHeroProps) => (
  <section className="page-hero" id="main-content" tabIndex={-1}>
    <div className="site-container page-hero-grid">
      <div>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
      </div>
      {aside && <div className="page-hero-aside">{aside}</div>}
    </div>
  </section>
);

export default PageHero;
