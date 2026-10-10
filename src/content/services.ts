import { projectImages, type ProjectImage } from "@/content/projects";

export type ServiceKey =
  "byggnation" | "ytskikt" | "fasad" | "sten" | "tradgard";

export type ServiceSection = {
  heading: string;
  body: string[];
  items?: string[];
  note?: string;
};

export type ServiceDetail = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  statement: string;
  sections: ServiceSection[];
  reasons: string[];
  cta: { heading: string; body: string };
  gallery: ProjectImage[];
};

export type Service = {
  key: ServiceKey;
  index: string;
  name: string;
  summary: string;
  description: string[];
  scope: string[];
  image: ProjectImage;
  detail?: ServiceDetail;
};

export const services: Service[] = [
  {
    key: "byggnation",
    index: "01",
    name: "Byggnation & renovering",
    summary:
      "Nybyggnation, tillbyggnad och renovering av villor och fastigheter – inget uppdrag är för stort eller för litet.",
    description: [
      "Vi utför allt från nybyggnation till renovering: grundarbeten, tillbyggnader, invändiga renoveringar och löpande byggservice. Uppdragen kommer från privatpersoner, bostadsrättsföreningar och fastighetsägare i Stockholm med omnejd.",
      "Eftersom vi själva arbetar med allt från betong och puts till kakel och parkett kan flera moment samordnas i ett och samma projekt – med en kontaktperson och en tydlig plan.",
    ],
    scope: [
      "Nybyggnation",
      "Tillbyggnad",
      "Renovering",
      "Byggservice",
      "Parkettläggning",
    ],
    image: projectImages.villaVeranda,
  },
  {
    key: "ytskikt",
    index: "02",
    name: "Måleri, kakel & ytskikt",
    summary:
      "Väggar, målning och kakel i badrum, kök och bostäder – från underarbete till sista fogen.",
    description: [
      "Ett bra slutresultat börjar med rätt underarbete. Vi spacklar, bygger upp och målar väggar och sätter kakel och klinker i badrum, kök och övriga utrymmen.",
    ],
    scope: [
      "Spackling och väggrenovering",
      "Målning av väggar och tak",
      "Kakel och klinker",
      "Våtrumsväggar",
      "Färgval och rådgivning",
    ],
    image: projectImages.badrumKakelsattning,
    detail: {
      path: "/vaggar-malning-kakel-i-stockholm/",
      metaTitle: "Väggar, målning & kakel i Stockholm – badrum och kök",
      metaDescription:
        "Spackling, målning och kakelsättning i badrum, kök och bostäder i Stockholm. LBC Entreprenad renoverar väggar för privatpersoner, BRF:er och fastighetsägare – från underarbete till färdig yta.",
      title: "Väggar, målning & kakel i Stockholm",
      lead: "Renovering av badrum och kök för privatpersoner, bostadsrättsföreningar och fastighetsägare. Hållbara, snygga och fackmannamässigt utförda ytor – från förarbete till färdigt resultat.",
      statement:
        "Ett bra slutresultat börjar alltid med rätt underarbete. Därför lägger vi lika stor omsorg på väggen bakom som på ytan du ser.",
      sections: [
        {
          heading: "Renovera väggar – grunden för ett bra resultat",
          body: [
            "Vi renoverar och bygger upp väggar inför målning eller plattsättning, med fokus på hållbarhet och precision. Oavsett om det gäller en lägenhet, en villa eller en lokal ser vi till att väggarna håller rätt standard.",
          ],
          items: [
            "Spackling och slipning av väggar",
            "Reparation av sprickor och ojämnheter",
            "Uppbyggnad av våtrumsväggar",
            "Anpassning inför kakel, klinker eller målning",
          ],
        },
        {
          heading: "Målning av väggar och tak",
          body: [
            "Vi målar väggar och tak vid både renovering och nyproduktion. Rätt färg, rätt teknik och ett noggrant utförande ger en jämn och slitstark yta som lyfter hela rummet.",
          ],
          items: [
            "Målning av väggar och tak",
            "Slitstarka färger för kök och hall",
            "Fuktanpassade färgsystem för badrum",
            "Färgval och rådgivning",
          ],
        },
        {
          heading: "Kakel i badrum och kök",
          body: [
            "Kakelsättning kräver precision, rätt material och kunskap om underlaget – särskilt i våtutrymmen. Allt arbete utförs enligt gällande branschregler för ett säkert och hållbart resultat.",
          ],
          items: [
            "Kakel på badrumsväggar",
            "Kök, stänkskydd och fondväggar",
            "Rakt, diagonalt eller mönsterlagt",
            "Noggrann fogning och finish",
          ],
        },
        {
          heading: "Komplett renovering av kök och badrum",
          body: [
            "Vill du ha en helhetslösning? Med LBC Entreprenad får du en entreprenör som samordnar väggar, målning och kakel i ett och samma projekt. Det sparar tid, minskar risken för fel och ger ett bättre slutresultat.",
          ],
        },
      ],
      reasons: [
        "Erfaren renoveringspartner i Stockholm",
        "Hög kvalitet på väggar, målning och kakel",
        "Fackmannamässigt utförande",
        "Tydlig offert och pålitlig leverans",
      ],
      cta: {
        heading: "Ska badrummet eller köket renoveras?",
        body: "Berätta vad du planerar så återkommer vi med rådgivning och offert. Vi hjälper dig att skapa snygga, funktionella och hållbara ytor.",
      },
      gallery: [
        projectImages.badrumDusch,
        projectImages.badrumMarmor,
        projectImages.poolMosaik,
        projectImages.badrumKakelsattning,
      ],
    },
  },
  {
    key: "fasad",
    index: "03",
    name: "Fasad & puts",
    summary:
      "Fasadputs och fasadmålning för villor, radhus och flerbostadshus – från lagning till komplett renovering.",
    description: [
      "Putsade fasader är vår specialitet. Vi lagar sprickor och skador, putsar om hela fasader och målar med diffusionsöppna färgsystem som tål det nordiska klimatet.",
    ],
    scope: [
      "Lagning av sprickor och skador",
      "Omputsning av fasader",
      "Kalk- och cementputs",
      "Fasadmålning",
      "Puts på nybyggnation och tillbyggnad",
    ],
    image: projectImages.fasadVillaFardig,
    detail: {
      path: "/renovera-fasader-i-stockholm/",
      metaTitle: "Renovera fasader i Stockholm – fasadputs & fasadmålning",
      metaDescription:
        "Fasadputs och fasadmålning för villor, radhus och flerbostadshus i Stockholm. LBC Entreprenad renoverar putsade fasader – från lagning av sprickor till komplett fasadrenovering.",
      title: "Renovera fasader i Stockholm",
      lead: "Fasadputs och fasadmålning för villor, radhus och flerbostadshus. Vi renoverar putsade fasader med fokus på hållbarhet, estetik och lång livslängd – anpassat för det nordiska klimatet.",
      statement:
        "En välrenoverad fasad skyddar huset, förbättrar energieffektiviteten och höjer fastighetens värde.",
      sections: [
        {
          heading: "Fasadputs – reparation och renovering",
          body: [
            "Vi är specialiserade på putsade fasader och utför allt från mindre lagningar till kompletta fasadrenoveringar. Sprickor, bom puts, fuktskador och slitage åtgärdas noggrant för ett hållbart slutresultat.",
          ],
          items: [
            "Reparation av sprickor och skador",
            "Omputsning av villor och husfasader",
            "Puts på nybyggnation och tillbyggnad",
            "Kalkputs, cementputs och moderna putssystem",
            "Förstärkning och skydd mot fukt och frost",
          ],
          note: "Vi bedömer alltid fasadens skick innan arbetet påbörjas, så att metod och material blir rätt från start.",
        },
        {
          heading: "Fasadmålning av hus och villa",
          body: [
            "Efter putsning – eller när fasaden behöver fräschas upp – målar vi putsade fasader. Rätt färg och rätt utförande avgör både utseende och hållbarhet.",
          ],
          items: [
            "Målning av putsade fasader",
            "Diffusionsöppna och väderbeständiga färgsystem",
            "Färgval anpassade för Stockholms klimat",
            "Villor, radhus och flerbostadshus",
          ],
          note: "Resultatet blir en fasad som andas, står emot väder och vind och håller sig snygg i många år.",
        },
        {
          heading: "Villarenovering med helhetsansvar",
          body: [
            "För dig som planerar en villarenovering är fasaden en av de viktigaste investeringarna. Vi tar helhetsansvar – från besiktning och rådgivning till färdigt arbete – och kombinerar hantverksskicklighet med entreprenadkunskap.",
          ],
          items: [
            "Tydlig offert och tidsplan",
            "Kvalitetsmaterial och fackmannamässigt utförande",
            "Ett slutresultat som håller över tid",
          ],
        },
      ],
      reasons: [
        "Erfarenhet av fasadrenovering i Stockholm",
        "Specialister på putsade fasader",
        "Helhetslösningar – puts, målning och renovering",
        "Pålitlig entreprenör med kvalitet i fokus",
      ],
      cta: {
        heading: "Dags att renovera fasaden?",
        body: "Berätta om ditt hus så återkommer vi med rådgivning och offert på fasadputs och fasadmålning.",
      },
      gallery: [
        projectImages.fasadVillaStallning,
        projectImages.fasadPutsVeranda,
        projectImages.fasadKvall,
        projectImages.fasadPutsEntre,
        projectImages.fasadStallningHus,
        projectImages.fasadVillaFardig,
      ],
    },
  },
  {
    key: "sten",
    index: "04",
    name: "Sten & betong",
    summary:
      "Trappor, murar, gjutningar och stensättning som bär upp både hus och trädgård.",
    description: [
      "Stenarbeten och betongentreprenad – från en enskild entrétrappa till terrassmurar, gjutna plattor och stensatta uteplatser.",
    ],
    scope: [
      "Trappor i granit och betong",
      "Murar i tegel och natursten",
      "Gjutning av plattor och grunder",
      "Formarbete och armering",
      "Stensättning",
    ],
    image: projectImages.granittrappa,
    detail: {
      path: "/sten-och-betongarbeten-stockholm/",
      metaTitle:
        "Sten- och betongarbeten i Stockholm – trappor, murar & gjutning",
      metaDescription:
        "Stenarbeten och betongentreprenad i Stockholm: trappor i granit och betong, murar i tegel och natursten, gjutning av plattor och stensättning. Begär kostnadsfri offert från LBC Entreprenad.",
      title: "Sten- och betongarbeten i Stockholm",
      lead: "Trappor, murar, gjutningar och stensättning för villaägare, bostadsrättsföreningar och fastighetsägare – konstruktioner som används varje dag och ska hålla länge.",
      statement:
        "Ett sten- eller betongarbete är aldrig bättre än det som finns under ytan. Bädd, form och armering avgör hur länge resultatet håller.",
      sections: [
        {
          heading: "Trappor och murar i sten och tegel",
          body: [
            "En trappa eller mur ska vara stabil, säker och snygg i många år. Vi bygger trappor i granit, natursten och betong och murar i tegel och sten – med omsorg om både underarbete och detaljer.",
          ],
          items: [
            "Trappor i granit och natursten",
            "Gjutna betongtrappor",
            "Murar och stödmurar i tegel och sten",
            "Murkrön och avslutningar",
          ],
        },
        {
          heading: "Betongentreprenad",
          body: [
            "Gjutning kräver noggrann förberedelse. Vi sköter formarbete, armering och gjutning av plattor, grunder och trappor – och efterbehandlar ytan så att den blir rätt för sitt ändamål.",
          ],
          items: [
            "Formarbete och armering",
            "Gjutning av grund- och terrassplattor",
            "Avdragning och efterbehandling",
            "Betong för trappor och murar",
          ],
        },
        {
          heading: "Stensättning och markytor",
          body: [
            "Gångar, uteplatser och entréer i natursten, skiffer eller marksten. En rätt uppbyggd bädd och fungerande dränering gör att ytan håller sig plan och fin.",
          ],
          items: [
            "Uteplatser i natursten och skiffer",
            "Gångar och entréer",
            "Kantstöd och avgränsningar",
          ],
        },
      ],
      reasons: [
        "Formarbete, armering, gjutning och stensättning i samma team",
        "Noggrant underarbete som grund för ett hållbart resultat",
        "Tydlig offert och tidsplan",
        "Lokal entreprenör i Stockholm",
      ],
      cta: {
        heading: "Planerar du en trappa, mur eller gjutning?",
        body: "Beskriv projektet så återkommer vi med förslag och en kostnadsfri offert.",
      },
      gallery: [
        projectImages.granittrappaArbete,
        projectImages.betongtrappa,
        projectImages.tegelmurRundad,
        projectImages.betongGjutning,
        projectImages.tegelmurRundadSten,
        projectImages.armering,
      ],
    },
  },
  {
    key: "tradgard",
    index: "05",
    name: "Landskapsdesign & trädgård",
    summary:
      "Utemiljöer från första skiss till färdig trädgård – markarbete, stenläggning och plantering.",
    description: [
      "Vi skapar hållbara, funktionella och vackra utemiljöer för villor, bostadsrättsföreningar och företag – och utför hela arbetet, från design och markarbete till plantering och blomsterarrangemang.",
    ],
    scope: [
      "Landskapsdesign",
      "Mark- och schaktarbeten",
      "Stensättning, murar och gångar",
      "Plantering och blomsterarrangemang",
      "Gräsmattor och dränering",
    ],
    image: projectImages.tradgardGang,
    detail: {
      path: "/landskapsdesign-tradgard-stockholm/",
      metaTitle: "Landskapsdesign & trädgård i Stockholm – trädgårdsanläggning",
      metaDescription:
        "Landskapsdesign och trädgårdsanläggning i Stockholm. LBC Entreprenad skapar utemiljöer för villor, BRF:er och företag – från idé och design till markarbete, stensättning och plantering.",
      title: "Landskapsdesign & trädgård i Stockholm",
      lead: "Kompletta lösningar för utemiljöer – från idé och design till markarbete, anläggning och färdigt resultat. För privatpersoner, bostadsrättsföreningar och företag.",
      statement:
        "Vi skapar hållbara, funktionella och vackra utemiljöer – anpassade för det svenska klimatet och för hur du faktiskt vill använda dem.",
      sections: [
        {
          heading: "Skräddarsydd landskapsdesign för Stockholmsmiljöer",
          body: [
            "Varje trädgård och utemiljö är unik. Därför tar vi hänsyn till markförhållanden, solläge, användning och arkitektur – oavsett om det gäller en villaträdgård, en innergård, en parkmiljö eller en kommersiell fastighet.",
            "Vi kombinerar kreativ formgivning med gedigen entreprenadkompetens, så att idéerna faktiskt går att genomföra – kostnadseffektivt och hållbart.",
          ],
        },
        {
          heading: "Trädgårdsanläggning och markarbete",
          body: [
            "LBC Entreprenad är mer än design – vi utför hela arbetet. Våra tjänster inom trädgård och landskapsanläggning omfattar bland annat:",
          ],
          items: [
            "Mark- och schaktarbeten",
            "Stensättning, murar och gångar",
            "Plantering av träd, buskar och växter",
            "Gräsmattor – sådd och rullgräs",
            "Dränering och dagvattenlösningar",
            "Utemiljöer för BRF och fastigheter",
          ],
          note: "När allt samlas hos en och samma aktör får du en smidig process, en tydlig tidsplan och ett slutresultat utan kompromisser.",
        },
        {
          heading: "Hållbara och långsiktiga lösningar",
          body: [
            "Vi väljer material och växtlighet som passar Stockholms klimat och kräver minimalt underhåll. Rätt utförd landskapsdesign sparar både pengar och tid på lång sikt – något vi alltid har i åtanke.",
          ],
        },
      ],
      reasons: [
        "Lokal expertis i Stockholm",
        "Helhetsansvar från design till färdig utemiljö",
        "Erfaren entreprenör med kvalitet i fokus",
        "Tydlig kommunikation och pålitliga leveranser",
      ],
      cta: {
        heading: "Vill du förnya trädgården?",
        body: "Kontakta oss för en kostnadsfri rådgivning. Vi hjälper dig hela vägen – från första skiss till färdigt resultat.",
      },
      gallery: [
        projectImages.tradgardSkifferaltan,
        projectImages.tradgardOlivtrad,
        projectImages.tradgardStenlaggning,
        projectImages.tradgardRullgras,
        projectImages.villaVeranda,
        projectImages.tradgardGang,
      ],
    },
  },
];

export function getService(key: ServiceKey) {
  const service = services.find((s) => s.key === key);
  if (!service) throw new Error(`Okänd tjänst: ${key}`);
  return service;
}

export function serviceHref(service: Service) {
  return service.detail?.path ?? `/tjanster/#${service.key}`;
}

export const projectTypeOptions = [
  ...services.map((s) => ({ value: s.key, label: s.name })),
  { value: "annat", label: "Annat / vet inte än" },
] as const;
