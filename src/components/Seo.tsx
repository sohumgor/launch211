import { Helmet } from "react-helmet-async";

type SeoProps = { title: string; description: string; path?: string };

const Seo = ({ title, description, path = "" }: SeoProps) => {
  const fullTitle = title === "LaunchPoint" || title.endsWith("| LaunchPoint") ? title : `${title} | LaunchPoint`;
  const url = `https://www.launchpt.org${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.launchpt.org/thumbnail.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Seo;
