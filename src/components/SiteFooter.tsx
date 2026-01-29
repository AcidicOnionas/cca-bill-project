import Link from "next/link";
import { bill } from "../../content/bill";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="container-page py-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl text-sm text-black/70 dark:text-white/70">
          <div className="font-medium text-black dark:text-white">
            {bill.title}
          </div>
          {bill.disclaimer ? (
            <p className="mt-2">{bill.disclaimer}</p>
          ) : (
            <p className="mt-2">
              This site is for informational purposes only.
            </p>
          )}
        </div>
        <div className="text-sm">
          <div className="font-medium text-black dark:text-white">Links</div>
          <ul className="mt-2 space-y-1 text-black/70 dark:text-white/70">
            <li>
              <Link className="underline underline-offset-4" href="/bill">
                Read the bill
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/references">
                References
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

