import Link from "next/link";

export default function MaxioCaseStudy() {
  return (
    <main className="min-h-screen bg-white px-8 py-12 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="font-medium text-teal-700 hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-wide text-teal-700">
          Featured Case Study
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          From AI-Assisted Prototype to Production
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Modernizing Maxio&apos;s Help Center
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["1,000+", "Articles migrated"],
            ["10 weeks", "Project timeline"],
            ["12 of 12", "Evaluation areas improved"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 p-6"
            >
              <p className="text-3xl font-bold text-teal-700">
                {value}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {label}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">The Challenge</h2>
          <p className="mt-4 leading-8 text-gray-700">
            Maxio&apos;s documentation was maintained in Zendesk
            Guide. The existing platform limited our flexibility
            to customize the user experience and integrate
            documentation into automated development workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">My Initiative</h2>
          <p className="mt-4 leading-8 text-gray-700">
            I used ChatGPT to help develop an initial Next.js
            proof of concept for a modern Help Center. The
            prototype demonstrated an alternative approach
            and helped establish the direction for a
            company-supported modernization initiative.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            From Prototype to Production
          </h2>
          <p className="mt-4 leading-8 text-gray-700">
            Working with engineering colleagues, we transitioned
            to a Git-based documentation platform using Next.js,
            Markdown/MDX, GitHub, and Vercel. The team migrated
            more than 1,000 articles across seven product areas
            and launched the new Help Center in September 2026.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Results</h2>
          <p className="mt-4 leading-8 text-gray-700">
            A post-launch qualitative assessment documented
            improvements across all 12 evaluated areas,
            including article navigation, usability, content
            freshness, and AI/LLM readiness.
          </p>
        </section>

        <a
          href="https://docs.maxio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800"
        >
          Visit the Live Maxio Help Center ↗
        </a>
      </div>
    </main>
  );
}