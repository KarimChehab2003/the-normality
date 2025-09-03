import Link from "next/link";
import PageTransition from "./game/components/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen h-full flex justify-center items-center bg-base-100 text-base-content  py-8">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <p className="text-sm font-mono tracking-wider text-neutral-500 uppercase mb-6">
            QA-REPORT // INTERNAL USE ONLY
          </p>
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl tracking-widest text-center">
            The Normality
          </h1>

          {/* Intro Text */}
          <div className="space-y-4 sm:text-lg  leading-relaxed">
            <p>You are a quality assurance inspector.</p>
            <p>
              Your task is to review and validate a website left unfinished by its
              original developer, now deceased under unclear circumstances.
            </p>
            <p>Not everything is stable. Some elements may appear... off.</p>
          </div>

          {/* Section Header */}
          <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-wide text-neutral">
            Inspection Protocol
          </h2>

          {/* Rules List */}
          <ul className="list-disc list-inside sm:text-lg space-y-2 ms-4">
            <li>
              The first round will <span className="font-medium">always contain no anomalies</span>. Use it as a
              reference for expected conditions.
            </li>
            <li>Some rounds may contain an anomaly. Others may not.</li>
            <li>
              Select <span className="font-medium">Looks Good</span> if the page
              functions as expected, or{" "}
              <span className="font-medium">Looks Off</span> if you detect an
              anomaly.
            </li>
            <li>
              A successful inspection requires{" "}
              <span className="font-medium">8 consecutive correct evaluations</span>
              . Any error will invalidate the review and restart the process.
            </li>
          </ul>

          {/* Button */}
          <div className="flex justify-center">
            <Link href="/game" className="btn btn-primary btn-lg mt-6 tracking-wide px-8 py-6 rounded-lg">
              Begin Assessment
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
