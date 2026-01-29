import { bill } from "../../../content/bill";
import { TableOfContents } from "@/components/TableOfContents";

export default function BillPage() {
  return (
    <div className="container-page py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
        <article className="prose-portal">
          <h1>{bill.title}</h1>
          <p className="text-sm text-black/60 dark:text-white/60">
            Status: <span className="font-medium">{bill.status}</span> · Last
            updated:{" "}
            <span className="font-medium">{bill.lastUpdatedISO}</span>
          </p>

          {bill.summaryParagraphs.map((p, idx) => (
            <p key={idx} className="text-black/80 dark:text-white/80">
              {p}
            </p>
          ))}

          <hr className="my-8 border-black/10 dark:border-white/10" />

          {bill.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2>{s.heading}</h2>
              {s.body.map((p, idx) => {
                const isIndented = /^\s+/.test(p);
                return (
                  <p
                    key={idx}
                    className={isIndented ? "pl-6 sm:pl-8 border-l-2 border-black/10 dark:border-white/10 my-2" : undefined}
                  >
                    {isIndented ? p.trim() : p}
                  </p>
                );
              })}
            </section>
          ))}
        </article>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/30 backdrop-blur">
            <div className="text-sm font-semibold">Contents</div>
            <div className="mt-4">
              <TableOfContents sections={bill.sections} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

