import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import pkg from "../../package.json"

const metadata = {
  name: "zigMOO via Cowbell",
  og_image: `${pkg.homepage}/og-image.png`,
  theme_color: "#ecc51b",
}

const cache = new Date().getTime()

export function Metadata() {
  return (
    <Helmet
      titleTemplate={`%s | ${metadata.name}`}
      defaultTitle={metadata.name}
      defer={false}
    >
      <meta charSet="utf-8" />
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pkg.description} />
      <meta name="og:type" content="website" />
      <meta name="og:locale" content="en_US" />
      <meta name="og:site_name" content={metadata.name} />
      <meta name="og:title" content={metadata.name} />
      <meta
        name="og:url"
        content={`${pkg.homepage}${useLocation().pathname}`}
      />
      <meta name="og:image" content={metadata.og_image} />
      <meta name="og:description" content={pkg.description} />
      <meta name="twitter:title" content={metadata.name} />
      <meta name="twitter:description" content={pkg.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={metadata.og_image} />
      <link rel="canonical" href={`${pkg.homepage}${useLocation().pathname}`} />
      <link rel="manifest" href={`/metadata.json`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/apple-touch-icon.png?v=${cache}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-32x32.png?v=${cache}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-16x16.png?v=${cache}`}
      />
      <link
        rel="mask-icon"
        href={`/safari-pinned-tab.svg?v=${cache}`}
        color={metadata.theme_color}
      />
      <link rel="shortcut icon" href={`/favicon.ico?v=${cache}`} />
      <meta name="msapplication-TileColor" content={metadata.theme_color} />
      <meta name="theme-color" content={metadata.theme_color} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: metadata.name,
          url: pkg.homepage,
        })}
      </script>
    </Helmet>
  )
}
