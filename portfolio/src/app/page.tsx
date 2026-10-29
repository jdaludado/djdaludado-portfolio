export default function Home() {
  return (
    <main className="min-h-screen bg-white p-12 text-gray-900">
      <nav className="mb-12 flex flex-wrap gap-6 border-b border-gray-200 pb-5">
  <a
    href="/"
    className="font-medium text-teal-700 hover:underline"
  >
    Home
  </a>

  <a
    href="/about"
    className="font-medium text-teal-700 hover:underline"
  >
    About Me
  </a>

  <a
    href="/projects/maxio"
    className="font-medium text-teal-700 hover:underline"
  >
    Maxio Case Study
  </a>
</nav>
      <h1 className="text-4xl font-bold">
        Dawna Joy Daludado
      </h1>

      <h2 className="mt-4 text-2xl text-teal-700">
        AI Workflow & Documentation Engineering
      </h2>

      <p className="mt-6 max-w-2xl text-lg">
        Bridging 25+ years of technical documentation expertise
        with AI-assisted development, automation, and modern
        publishing platforms.
      </p>
      <a
  href="/Dawna_Joy_Daludado_Resume.pdf"
  download
  className="mt-6 inline-block rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800"
>
  Download My Resume ↓
</a>
            <section className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold">
          Featured Projects
        </h2>

        <div className="mt-6 rounded-xl border border-gray-200 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Documentation Platform Modernization
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            Maxio Help Center Transformation
          </h3>

          <p className="mt-4 text-gray-700">
            Initiated an AI-assisted Next.js proof of concept
            that helped drive Maxio&apos;s transition from Zendesk
            to a modern docs-as-code documentation platform.
          </p>

          <p className="mt-4 text-gray-700">
            Collaborated with engineering on a ten-week
            transformation that migrated more than 1,000
            articles into a Git-based publishing system.
          </p>

<a
  href="/projects/maxio"
  className="mt-6 inline-block font-semibold text-teal-700 hover:underline"
>
  Read Case Study →
</a>
        </div>
      </section>
    </main>
  );
}