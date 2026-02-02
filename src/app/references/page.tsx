import { bill } from "../../../content/bill";

export default function ReferencesPage() {
  return (
    <div className="container-page py-10">
      <div className="prose-portal">
        <h1>References</h1>
        <p className="text-black/70 dark:text-white/70">
          Supporting sources and citations for{" "}
          <span className="font-medium">{bill.shortTitle}</span>, in MLA format.
        </p>
      </div>

      <ol className="mt-8 list-decimal space-y-6 pl-6">
        {bill.references.map((r) => (
          <li
            key={`${r.title}-${r.url ?? ""}`}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5 pl-8"
            style={{ listStylePosition: "outside" }}
          >
            <div
              className="text-black/90 dark:text-white/90"
              style={{ textIndent: "-1.5em", marginLeft: "1.5em" }}
            >
              {r.author && <span>{r.author}. </span>}
              <span>&quot;{r.title}.&quot; </span>
              {r.container && (
                <span className="italic">{r.container}, </span>
              )}
              {r.publisher && <span>{r.publisher}, </span>}
              {r.date && <span>{r.date}. </span>}
              {r.url && (
                <span>
                  <a
                    href={r.url}
                    className="underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {r.url}
                  </a>
                  .{" "}
                </span>
              )}
              {r.accessedDate && (
                <span>Accessed {r.accessedDate}.</span>
              )}
            </div>
            {r.note ? (
              <p className="mt-3 text-sm text-black/80 dark:text-white/80">
                {r.note}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
