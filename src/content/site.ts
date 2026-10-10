export const site = {
  name: "LBC Entreprenad",
  legalName: "LBC Entreprenad AB",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lbcentreprenad.se",
  phone: {
    display: "070-390 70 71",
    href: "tel:+46703907071",
    e164: "+46703907071",
  },
  email: "kontakt@lbcentreprenad.se",
  address: {
    street: "Kullerstensvägen 45",
    postalCode: "137 61",
    city: "Jordbro",
    region: "Stockholms län",
    country: "SE",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Kullerstensv%C3%A4gen+45%2C+137+61+Jordbro",
  instagram: {
    handle: "@nac_lbc",
    url: "https://www.instagram.com/nac_lbc/",
  },
  areaServed: "Stockholm med kranskommuner",
  values: ["Öppenhet", "Engagemang", "Trygghet"],
} as const;

export const mainNav = [
  { href: "/tjanster/", label: "Tjänster" },
  { href: "/projekt/", label: "Projekt" },
  { href: "/om-oss/", label: "Om oss" },
  { href: "/kontakt/", label: "Kontakt" },
] as const;

export const quoteHref = "/kontakt/#offert";
