import Link from "next/link";
import { bill } from "../../content/bill";
import { Section } from "@/components/Section";

const homeLinks = [
  { href: "/bill", label: "Bill", description: "Full text and table of contents" },
  { href: "/timeline", label: "Timeline", description: "Milestones and history" },
  { href: "/letter", label: "Letter", description: "Draft letter to a representative" },
  { href: "/references", label: "References", description: "Sources in MLA format" },
] as const;

export default function Home() {
  return (
    <div>
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="container-page py-12 sm:py-14">
          <div className="max-w-3xl prose-portal">
            <h1>{bill.title}</h1>
            <p className="mt-4 text-black/70 dark:text-white/70">
              {bill.summaryParagraphs[0] || "A school government bill project."}
            </p>
            <p className="mt-4 text-sm text-black/60 dark:text-white/60">
              Status: <span className="font-medium">{bill.status}</span>
              {" · "}
              Last updated:{" "}
              <span className="font-medium">{bill.lastUpdatedISO}</span>
            </p>
            <p className="mt-6">
              <Link
                href="/bill"
                className="inline-block rounded border border-black/15 dark:border-white/15 bg-black/[.04] dark:bg-white/[.06] px-4 py-2.5 text-sm font-medium text-black dark:text-white hover:bg-black/[.08] dark:hover:bg-white/[.1]"
              >
                Read the bill
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Section
        title="On this site"
        subtitle="Navigate to the bill text, timeline, letter draft, and references."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {homeLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl border border-black/10 dark:border-white/10 bg-black/[.02] dark:bg-white/[.04] p-5 transition-colors hover:bg-black/[.04] dark:hover:bg-white/[.06]"
              >
                <span className="font-semibold text-black dark:text-white">
                  {item.label}
                </span>
                <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
