import { Eyebrow } from "@/components/ui/eyebrow";

const steps = [
  {
    title: "Kontakt",
    text: "Ring, maila eller skicka en förfrågan via formuläret och berätta kort vad du vill göra.",
  },
  {
    title: "Rådgivning och bedömning",
    text: "Vi går igenom förutsättningarna med dig och bedömer till exempel fasadens eller underlagets skick innan vi föreslår metod och material.",
  },
  {
    title: "Offert och tidsplan",
    text: "Du får en tydlig och kostnadsfri offert med tidsplan, så att du vet vad som ingår.",
  },
  {
    title: "Utförande",
    text: "Arbetet utförs fackmannamässigt och enligt gällande branschregler, med tydlig kommunikation hela vägen till färdigt resultat.",
  },
];

export function Process() {
  return (
    <section
      aria-labelledby="process-rubrik"
      className="container-page py-24 lg:py-36"
    >
      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Eyebrow index="05">Så går det till</Eyebrow>
          <h2
            id="process-rubrik"
            className="mt-8 font-display text-display-lg font-semibold [font-stretch:112%]"
          >
            Från första samtal till färdigt resultat.
          </h2>
        </div>
        <p className="text-[1.0625rem] leading-relaxed text-ink-muted lg:col-span-4 lg:col-start-9">
          Varje projekt är unikt, men de flesta uppdrag följer samma
          grundläggande steg.
        </p>
      </div>

      <div className="relative mt-16 pl-10 md:pl-0 lg:mt-24 lg:pt-14">
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-0 w-3 border-l border-graphite/40 bg-[repeating-linear-gradient(to_bottom,rgb(36_40_37/0.35)_0_1px,transparent_1px_12px)] bg-[length:6px_100%] bg-no-repeat md:hidden lg:top-0 lg:right-0 lg:bottom-auto lg:block lg:h-3 lg:w-auto lg:border-t lg:border-l-0 lg:bg-[repeating-linear-gradient(to_right,rgb(36_40_37/0.35)_0_1px,transparent_1px_12px)] lg:bg-[length:100%_6px]"
        />
        <ol className="grid gap-y-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal relative">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-10 size-3 -translate-x-[5px] bg-copper md:hidden lg:-top-14 lg:left-0 lg:block lg:translate-x-0 lg:-translate-y-[5px]"
              />
              <p
                aria-hidden="true"
                className="font-display text-[3.5rem] leading-none font-semibold text-concrete-deep tabular-nums [font-stretch:112%]"
              >
                0{i + 1}
              </p>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-[0.9875rem] leading-relaxed text-ink-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
