import { bill } from "../../../content/bill";

export default function ReferencesPage() {
  return (
    <div className="container-page py-10">
      <div className="prose-portal">
        <h1>References</h1>
        <p className="text-black/70 dark:text-white/70">
          Supporting sources and citations for{" "}
          <span className="font-medium">{bill.shortTitle}</span>.
        </p>
      </div>

      <ul className="mt-8 space-y-4">
        {bill.references.map((r) => (
          <li
            key={`${r.title}-${r.url ?? ""}`}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5"
          >
            <div className="font-semibold">{r.title}</div>
            <div className="mt-1 text-sm text-black/70 dark:text-white/70">
              {r.source ? <span>{r.source}</span> : null}
              {r.source && r.url ? <span> · </span> : null}
              {r.url ? (
                <a
                  href={r.url}
                  className="underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {r.url}
                </a>
              ) : null}
            </div>
            {r.note ? (
              <p className="mt-2 text-sm text-black/80 dark:text-white/80">
                {r.note}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

