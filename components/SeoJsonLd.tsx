import { site } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fulshearroof.com";

export function SeoJsonLd() {
  const roofingContractor = {
    "@type": "RoofingContractor",
    "@id": `${siteUrl}/#roofingcontractor`,
    name: site.name,
    description: site.seo.metaDescription,
    url: siteUrl,
    telephone: site.phoneTel,
    email: site.email,
    image: `${siteUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: "Fulshear",
      addressRegion: "TX",
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Houston metropolitan area, Texas",
    },
    slogan: site.tagline,
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: site.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [roofingContractor, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
