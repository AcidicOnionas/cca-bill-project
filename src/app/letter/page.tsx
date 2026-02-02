import { bill } from "../../../content/bill";

export default function LetterPage() {
  return (
    <div className="container-page py-10">
      <div className="prose-portal">
        <h1>Letter to a Representative</h1>
        <p className="text-black/70 dark:text-white/70">
          Use the draft below to contact your representative about{" "}
          <span className="font-medium">{bill.shortTitle}</span>. Copy and edit
          it as you like.
        </p>
      </div>

      <div className="mt-8 rounded-xl border-2 border-black/15 dark:border-white/15 bg-black/[.02] dark:bg-white/[.04] overflow-hidden">
        <div
          className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto"
          role="region"
          aria-label="Draft letter"
        >
          <div className="prose-portal max-w-none text-black/90 dark:text-white/90 whitespace-pre-line">
            {`Chris Cao
Canyon Crest Academy
2/1/2026

Dear Representative Mike Levin:

I’m a student in CP Gov, and for our class project we were tasked with making a "bill" and told to contact our representative about it, it is not meant to be taken as a serious complaint or idea. The bill is about oversight of U.S. military operations in international territories; things like requiring congressional approval for operations that go beyond sixty days, reporting to Congress on objectives and costs, and civilian protection. This is just a school assignment and I hope it could be interesting.


Link: https://cca-bill-project.vercel.app/

Thanks for your time.

Chris`}
          </div>
        </div>
      </div>
    </div>
  );
}
