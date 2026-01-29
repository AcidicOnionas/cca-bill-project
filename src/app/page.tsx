import Link from "next/link";
import { bill } from "../../content/bill";
import { Callout } from "@/components/Callout";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div>
      <section className="border-b border-black/10 dark:border-white/10 bg-gradient-to-b from-black/[.03] to-transparent dark:from-white/[.06]">
        <div className="container-page py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-black/70 dark:text-white/70">
              Public draft portal
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              {bill.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70">
              {bill.summaryParagraphs[0]}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/bill"
                className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-semibold hover:opacity-90"
              >
                Read the bill
              </Link>
              <Link
                href="/timeline"
                className="inline-flex items-center justify-center rounded-full border border-black/15 dark:border-white/15 px-5 py-2.5 text-sm font-semibold text-black dark:text-white hover:bg-black/[.04] dark:hover:bg-white/[.06]"
              >
                View timeline
              </Link>
            </div>
            <div className="mt-6 text-sm text-black/60 dark:text-white/60">
              Status: <span className="font-medium">{bill.status}</span> · Last
              updated:{" "}
              <span className="font-medium">{bill.lastUpdatedISO}</span>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="At a glance"
        subtitle="A quick overview and navigation to supporting materials."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Callout title="What this is">
            A public-facing portal for publishing and reviewing the bill text,
            sponsors, timeline, and references.
          </Callout>
          <Callout title="How to update the bill">
            Edit <code>content/bill.ts</code> to change the full text and all
            related metadata across the site.
          </Callout>
          <Callout title="Public note">
            If this is a student or mock-government project, state that clearly
            on the About page and in the footer disclaimer.
          </Callout>
        </div>
      </Section>
    </div>
  );
}
