import type { Metadata } from "next";

import { site } from "@/content/site";
import type { Service } from "@/content/services";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${site.name}`,
      description,
      url: path,
    },
  };
}

export const organizationId = `${site.url}/#organisation`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": organizationId,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}/`,
    logo: `${site.url}/icon.svg`,
    image: `${site.url}/opengraph-image.jpg`,
    telephone: site.phone.e164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "City", name: "Stockholm" },
      { "@type": "AdministrativeArea", name: "Stockholms län" },
    ],
    sameAs: [site.instagram.url],
    knowsAbout: [
      "Nybyggnation",
      "Renovering",
      "Byggservice",
      "Stenarbeten",
      "Betongentreprenad",
      "Måleri",
      "Kakel och klinker",
      "Fasadputs",
      "Fasadmålning",
      "Landskapsdesign",
      "Trädgårdsanläggning",
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(service: Service) {
  const detail = service.detail;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: detail?.title ?? service.name,
    serviceType: service.name,
    description: detail?.metaDescription ?? service.summary,
    url: detail ? `${site.url}${detail.path}` : undefined,
    provider: { "@id": organizationId },
    areaServed: { "@type": "City", name: "Stockholm" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.scope.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function serviceMetadata(service: Service): Metadata {
  if (!service.detail)
    throw new Error(`Tjänsten ${service.key} saknar egen sida`);
  return pageMetadata({
    title: service.detail.metaTitle,
    description: service.detail.metaDescription,
    path: service.detail.path,
  });
}
