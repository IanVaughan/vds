import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "./site";

const SITE_NAME = "Vaughan Dyslexia Services";

export default function Seo({ title, description, noindex = false }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {!noindex && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
    </Helmet>
  );
}
