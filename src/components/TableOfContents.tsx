import type { BillSection } from "../../content/bill";

export function TableOfContents({ sections }: { sections: BillSection[] }) {
  return (
    <nav aria-label="Table of contents">
      <ol className="space-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-sm text-black/80 hover:text-black underline underline-offset-4 dark:text-white/80 dark:hover:text-white"
            >
              {s.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

