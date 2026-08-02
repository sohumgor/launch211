import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

type SeoProps = { title: string; description: string; path?: string };

const Seo = ({ title, description, path }: SeoProps) => {
  const location = useLocation();
  const fullTitle = title === "LaunchPoint" || title.endsWith("| LaunchPoint") ? title : `${title} | LaunchPoint`;
  const canonicalPath = path ?? location.pathname;
  const url = `https://www.launchpt.org${canonicalPath === "/" ? "/" : canonicalPath.replace(/\/$/, "")}`;
  const image = "https://www.launchpt.org/thumbnail.png";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LaunchPoint" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="LaunchPoint Fall 2026 regional business conference" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="LaunchPoint Fall 2026 regional business conference" />
    </Helmet>
  );
};

export default Seo;
