import type { ReactNode } from "react";

export function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-10">
      <div className="container-page">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-sm sm:text-base text-black/70 dark:text-white/70">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

