import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Start", path: "/" }, ...items];

  return (
    <>
      <nav aria-label="Brödsmulor">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-ink-muted">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-graphite">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.path} className="link-underline">
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(trail)} />
    </>
  );
}
