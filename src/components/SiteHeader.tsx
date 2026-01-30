import Link from "next/link";
import { bill } from "../../content/bill";

const navItems = [
  { href: "/bill", label: "Bill" },
  { href: "/timeline", label: "Timeline" },
  { href: "/letter", label: "Letter" },
  { href: "/references", label: "References" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur">
      <div className="container-page py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-3">
          <Link
            href="/"
            className="font-semibold tracking-tight text-black dark:text-white"
          >
            {bill.shortTitle}
          </Link>
          <span className="text-sm text-black/60 dark:text-white/60">
            Status: {bill.status}
          </span>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap gap-x-4 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

