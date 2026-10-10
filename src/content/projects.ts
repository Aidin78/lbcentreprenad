import type { StaticImageData } from "next/image";

import armering from "@/assets/projekt/armering.jpg";
import badrumDusch from "@/assets/projekt/badrum-dusch.jpg";
import badrumKakelsattning from "@/assets/projekt/badrum-kakelsattning.jpg";
import badrumMarmor from "@/assets/projekt/badrum-marmor.jpg";
import betongGjutning from "@/assets/projekt/betong-gjutning.jpg";
import betongplatta from "@/assets/projekt/betongplatta.jpg";
import betongtrappa from "@/assets/projekt/betongtrappa.jpg";
import fasadKvall from "@/assets/projekt/fasad-kvall.jpg";
import fasadPutsEntre from "@/assets/projekt/fasad-puts-entre.jpg";
import fasadPutsVeranda from "@/assets/projekt/fasad-puts-veranda.jpg";
import fasadStallningHus from "@/assets/projekt/fasad-stallning-hus.jpg";
import fasadVillaFardig from "@/assets/projekt/fasad-villa-fardig.jpg";
import fasadVillaStallning from "@/assets/projekt/fasad-villa-stallning.jpg";
import granittrappa from "@/assets/projekt/granittrappa.jpg";
import granittrappaArbete from "@/assets/projekt/granittrappa-arbete.jpg";
import poolMosaik from "@/assets/projekt/pool-mosaik.jpg";
import tegelmur from "@/assets/projekt/tegelmur.jpg";
import tegelmurRundad from "@/assets/projekt/tegelmur-rundad.jpg";
import tegelmurRundadSten from "@/assets/projekt/tegelmur-rundad-sten.jpg";
import tegeltrappa from "@/assets/projekt/tegeltrappa.jpg";
import tradgardGang from "@/assets/projekt/tradgard-gang.jpg";
import tradgardOlivtrad from "@/assets/projekt/tradgard-olivtrad.jpg";
import tradgardRullgras from "@/assets/projekt/tradgard-rullgras.jpg";
import tradgardSkifferaltan from "@/assets/projekt/tradgard-skifferaltan.jpg";
import tradgardStenlaggning from "@/assets/projekt/tradgard-stenlaggning.jpg";
import villaVeranda from "@/assets/projekt/villa-veranda.jpg";

export const projectCategories = {
  fasad: "Fasad & puts",
  sten: "Sten & betong",
  tradgard: "Trädgård & mark",
  kakel: "Kakel & våtrum",
} as const;

export type ProjectCategory = keyof typeof projectCategories;

export type ProjectImage = {
  id: string;
  src: StaticImageData;
  alt: string;
  caption: string;
  category: ProjectCategory;
};

export const projectImages = {
  fasadVillaFardig: {
    id: "fasad-villa-fardig",
    src: fasadVillaFardig,
    alt: "Ljust putsad villafasad med mansardtak, svart entrédörr och nymålade fönsteromfattningar",
    caption: "Putsad villafasad",
    category: "fasad",
  },
  fasadVillaStallning: {
    id: "fasad-villa-stallning",
    src: fasadVillaStallning,
    alt: "Byggnadsställning runt en äldre villa med spröjsade fönster under fasadrenovering",
    caption: "Fasadrenovering under arbete",
    category: "fasad",
  },
  fasadPutsVeranda: {
    id: "fasad-puts-veranda",
    src: fasadPutsVeranda,
    alt: "Puts och målning kring en glasveranda med svarvade balusterdetaljer, inklädd i ställning",
    caption: "Puts och målning kring veranda",
    category: "fasad",
  },
  fasadPutsEntre: {
    id: "fasad-puts-entre",
    src: fasadPutsEntre,
    alt: "Nyputsad sockel och stentrappa vid en verandaentré med ställning i bakgrunden",
    caption: "Sockelputs och entrétrappa",
    category: "fasad",
  },
  fasadKvall: {
    id: "fasad-kvall",
    src: fasadKvall,
    alt: "Verandafasad med gröna pardörrar och nyputsad sockel fotograferad i kvällsljus",
    caption: "Veranda i kvällsljus",
    category: "fasad",
  },
  fasadStallningHus: {
    id: "fasad-stallning-hus",
    src: fasadStallningHus,
    alt: "Vitt tvåplanshus med byggnadsställning på gaveln och en servicebil på uppfarten",
    caption: "Fasadarbete på tvåplanshus",
    category: "fasad",
  },
  villaVeranda: {
    id: "villa-veranda",
    src: villaVeranda,
    alt: "Trävilla med vit veranda, trappsteg i natursten och stenlagd gång framför entrén",
    caption: "Entré med trappa och stenläggning",
    category: "sten",
  },
  granittrappa: {
    id: "granittrappa",
    src: granittrappa,
    alt: "Ny trappa i huggen granit med murade stenkanter, före slutlig återfyllning",
    caption: "Granittrappa",
    category: "sten",
  },
  granittrappaArbete: {
    id: "granittrappa-arbete",
    src: granittrappaArbete,
    alt: "Granittrappa under byggnation med grävmaskin och hantverkare i varselkläder",
    caption: "Trappa i granit under arbete",
    category: "sten",
  },
  betongtrappa: {
    id: "betongtrappa",
    src: betongtrappa,
    alt: "Nygjuten bred betongtrappa med sidomurar i ljus betong",
    caption: "Gjuten betongtrappa",
    category: "sten",
  },
  tegeltrappa: {
    id: "tegeltrappa",
    src: tegeltrappa,
    alt: "Smal betongtrappa längs en mörk tegelmur, sedd uppifrån",
    caption: "Trappa längs tegelmur",
    category: "sten",
  },
  tegelmurRundad: {
    id: "tegelmur-rundad",
    src: tegelmurRundad,
    alt: "Rundad mur i mörkt tegel under uppförande med formvirke och armering",
    caption: "Rundad tegelmur",
    category: "sten",
  },
  tegelmurRundadSten: {
    id: "tegelmur-rundad-sten",
    src: tegelmurRundadSten,
    alt: "Terrasserade rundade murar i mörkt tegel och natursten under byggnation",
    caption: "Terrasserade murar",
    category: "sten",
  },
  tegelmur: {
    id: "tegelmur",
    src: tegelmur,
    alt: "Tegelmur med murkrön i rött tegel framför ett radhus",
    caption: "Mur med tegelkrön",
    category: "sten",
  },
  betongGjutning: {
    id: "betong-gjutning",
    src: betongGjutning,
    alt: "Två hantverkare drar av nygjuten betong på en terrass",
    caption: "Gjutning av terrassplatta",
    category: "sten",
  },
  betongplatta: {
    id: "betongplatta",
    src: betongplatta,
    alt: "Nygjuten betongplatta med formvirke längs kanterna",
    caption: "Betongplatta",
    category: "sten",
  },
  armering: {
    id: "armering",
    src: armering,
    alt: "Armeringsnät och golvvärmeslingor utlagda på isolering inför gjutning av grundplatta",
    caption: "Armering inför gjutning",
    category: "sten",
  },
  tradgardGang: {
    id: "tradgard-gang",
    src: tradgardGang,
    alt: "Svängd gång med stora stenplattor i grus, kantad av nyplanterade rabatter",
    caption: "Gång med stenplattor",
    category: "tradgard",
  },
  tradgardSkifferaltan: {
    id: "tradgard-skifferaltan",
    src: tradgardSkifferaltan,
    alt: "Uteplats i oregelbunden skiffer vid ett hus, fotograferad i skymningen efter regn",
    caption: "Uteplats i skiffer",
    category: "tradgard",
  },
  tradgardStenlaggning: {
    id: "tradgard-stenlaggning",
    src: tradgardStenlaggning,
    alt: "Stenläggning i stora oregelbundna naturstensplattor under arbete",
    caption: "Stenläggning i natursten",
    category: "tradgard",
  },
  tradgardOlivtrad: {
    id: "tradgard-olivtrad",
    src: tradgardOlivtrad,
    alt: "Nylagd gräsmatta med olivträd och rundad tegelkant i en villaträdgård",
    caption: "Gräsmatta och plantering",
    category: "tradgard",
  },
  tradgardRullgras: {
    id: "tradgard-rullgras",
    src: tradgardRullgras,
    alt: "Nylagt rullgräs i en smal villaträdgård med häck längs tomtgränsen",
    caption: "Nylagt rullgräs",
    category: "tradgard",
  },
  badrumKakelsattning: {
    id: "badrum-kakelsattning",
    src: badrumKakelsattning,
    alt: "Plattsättare sätter stora mörka plattor på badrumsvägg",
    caption: "Plattsättning i badrum",
    category: "kakel",
  },
  badrumMarmor: {
    id: "badrum-marmor",
    src: badrumMarmor,
    alt: "Badrum med marmormönstrade golv- och väggplattor inför montering",
    caption: "Marmorplattor i våtrum",
    category: "kakel",
  },
  badrumDusch: {
    id: "badrum-dusch",
    src: badrumDusch,
    alt: "Färdigt badrum med grå storformatsplattor, handdukstork och duschvägg",
    caption: "Färdigt badrum",
    category: "kakel",
  },
  poolMosaik: {
    id: "pool-mosaik",
    src: poolMosaik,
    alt: "Pool klädd med mörk mosaik och trappsteg i hörnet",
    caption: "Pool i mosaik",
    category: "kakel",
  },
} satisfies Record<string, ProjectImage>;

export type ProjectImageKey = keyof typeof projectImages;

export const projectGallery: ProjectImage[] = [
  projectImages.fasadVillaFardig,
  projectImages.granittrappa,
  projectImages.tradgardGang,
  projectImages.villaVeranda,
  projectImages.badrumKakelsattning,
  projectImages.fasadVillaStallning,
  projectImages.tegelmurRundad,
  projectImages.tradgardSkifferaltan,
  projectImages.betongGjutning,
  projectImages.fasadPutsVeranda,
  projectImages.badrumDusch,
  projectImages.betongtrappa,
  projectImages.tradgardOlivtrad,
  projectImages.fasadKvall,
  projectImages.granittrappaArbete,
  projectImages.poolMosaik,
  projectImages.tegelmurRundadSten,
  projectImages.fasadStallningHus,
  projectImages.tradgardStenlaggning,
  projectImages.betongplatta,
  projectImages.tegeltrappa,
  projectImages.fasadPutsEntre,
  projectImages.badrumMarmor,
  projectImages.tradgardRullgras,
  projectImages.tegelmur,
  projectImages.armering,
];
