import { business } from "@/data/data";
import { SITE_URL } from "@/lib/site";

const BakeryJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: business.name,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.jpg`,
    telephone: business.phoneNumber,
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    // openingHoursSpecification — добавить, когда Елена скажет часы работы
    sameAs: [business.mapsUrl, business.telegram, business.vk],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default BakeryJsonLd;
