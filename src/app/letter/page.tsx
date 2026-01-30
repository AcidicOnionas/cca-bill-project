import { bill } from "../../../content/bill";

export default function SponsorsPage() {
  return (
    <div className="container-page py-10">
      <div className="prose-portal">
        <h1>Letter to representatives</h1>
        <p className="text-black/70 dark:text-white/70">
          Sponsors and contributors associated with{" "}
          <span className="font-medium">{bill.shortTitle}</span>.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {bill.sponsors.map((s) => (
          <div
            key={`${s.name}-${s.role ?? ""}`}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5"
          >
            <div className="font-semibold">{s.name}</div>
            <div className="mt-1 text-sm text-black/70 dark:text-white/70">
              {s.role ?? "Sponsor"}
              {s.districtOrOrganization
                ? ` · ${s.districtOrOrganization}`
                : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

