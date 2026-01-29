import Link from "next/link";
import { bill } from "../../../content/bill";

export default function AboutPage() {
  return (
    <div className="container-page py-10">
      <div className="prose-portal">
        <h1>About</h1>
        <p className="text-black/70 dark:text-white/70">
          About this portal and the purpose of publishing{" "}
          <span className="font-medium">{bill.shortTitle}</span>.
        </p>

        <h2>Purpose</h2>
        <p>
          This website publishes the bill text and supporting materials in a
          clear, accessible format for review and discussion.
        </p>

        <h2>Disclaimer</h2>
        <p>{bill.disclaimer}</p>

        <h2>How to update</h2>
        <p>
          Update all content in <code>content/bill.ts</code>. The pages on this
          site render directly from that file.
        </p>

        <p>
          Next: <Link href="/bill">read the bill</Link>.
        </p>
      </div>
    </div>
  );
}

