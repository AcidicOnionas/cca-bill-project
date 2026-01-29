import { bill } from "../../../content/bill";

export default function TimelinePage() {
  return (
    <div className="container-page py-10">
      <div className="prose-portal">
        <h1>Timeline</h1>
        <p className="text-black/70 dark:text-white/70">
          Key milestones for <span className="font-medium">{bill.shortTitle}</span>
          .
        </p>
      </div>

      <ol className="mt-8 space-y-4">
        {bill.timeline.map((item) => (
          <li
            key={`${item.dateISO}-${item.label}`}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div className="font-semibold">{item.label}</div>
              <div className="text-sm text-black/60 dark:text-white/60">
                {item.dateISO}
              </div>
            </div>
            {item.details ? (
              <p className="mt-2 text-sm text-black/80 dark:text-white/80">
                {item.details}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

