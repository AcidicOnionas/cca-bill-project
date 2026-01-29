import type { ReactNode } from "react";

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/[.02] dark:bg-white/[.04] p-5">
      <div className="text-sm font-semibold text-black dark:text-white">
        {title}
      </div>
      <div className="mt-2 text-sm text-black/70 dark:text-white/70">
        {children}
      </div>
    </div>
  );
}

