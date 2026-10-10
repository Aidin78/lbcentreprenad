import type { Metadata } from "next";

import { ServicePage } from "@/components/services/service-page";
import { getService } from "@/content/services";
import { serviceMetadata } from "@/lib/seo";

const service = getService("tradgard");

export const metadata: Metadata = serviceMetadata(service);

export default function TradgardPage() {
  return <ServicePage service={service} />;
}
