import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-8 py-12 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="font-medium text-teal-700 hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="mt-12 text-4xl font-bold">
          About Me
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          I&apos;m Dawna Joy Daludado, a technical documentation
          professional with more than 25 years of experience
          helping people understand complex software.
        </p>

        <p className="mt-6 leading-8 text-gray-700">
          My career began in traditional technical
          communication, including more than 20 years
          at Siemens Digital Industries Software.
          Over time, my work expanded beyond writing
          documentation to improving how documentation
          is created, maintained, and delivered.
        </p>

        <p className="mt-6 leading-8 text-gray-700">
          At Maxio, I initiated an AI-assisted proof of
          concept that helped launch a company-supported
          transition from Zendesk to a modern docs-as-code
          platform. I collaborated with engineering on
          the transformation while focusing on documentation
          quality, content organization, and publishing workflows.
        </p>

        <h2 className="mt-12 text-2xl font-bold">
          How I Work
        </h2>

        <p className="mt-4 leading-8 text-gray-700">
          I combine technical communication expertise with
          AI-assisted development and automation. I enjoy
          experimenting with new tools, building practical
          prototypes, and finding ways to make complex
          workflows more efficient.
        </p>

        <section className="mt-12">
  <h2 className="text-2xl font-bold">
    Professional Experience
  </h2>

  <div className="mt-6 space-y-10">
    <div>
      <h3 className="text-xl font-semibold">
        Maxio
      </h3>

      <p className="mt-1 font-medium text-teal-700">
        Senior Documentation & Content Automation Specialist | 2021–2026
      </p>

      <p className="mt-3 leading-8 text-gray-700">
        Led documentation modernization initiatives through AI-assisted
        development, docs-as-code workflows, and content automation.
        Initiated a Next.js proof of concept that helped establish the
        direction for Maxio's Help Center transformation. Collaborated
        with engineering on platform migration, content organization,
        documentation quality, and GitHub-based publishing workflows.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold">
        Siemens Digital Industries Software
      </h3>

      <p className="mt-1 font-medium text-teal-700">
        Documentation Lead / Technical Editor Principal | 2001–2021
      </p>

      <p className="mt-3 leading-8 text-gray-700">
        Served as the sole full-time documentation specialist for
        approximately 20 years, overseeing documentation planning,
        information architecture, content development, quality assurance,
        and publishing for complex enterprise software products.
      </p>

      <p className="mt-3 leading-8 text-gray-700">
        Managed documentation processes and release coordination,
        developed task-oriented online help systems, and collaborated
        with engineering and product teams to ensure technical accuracy.
        Trained and supervised contract writers while maintaining
        responsibility for documentation quality and delivery.
      </p>
    </div>
  </div>
</section>

        <h2 className="mt-12 text-2xl font-bold">
          Areas of Expertise
        </h2>

        <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-700">
          <li>AI-assisted workflows and automation</li>
          <li>Documentation engineering and docs-as-code</li>
          <li>Technical writing and content architecture</li>
          <li>GitHub-based publishing workflows</li>
          <li>Next.js, Markdown/MDX, and modern documentation platforms</li>
          <li>Cross-functional collaboration and technical mentorship</li>
        </ul>
      </div>

<section className="mt-12 border-t border-gray-200 pt-8">
  <h2 className="text-2xl font-bold">Let's Connect</h2>

   <p className="mt-4 leading-8 text-gray-700">
    Whether I'm building AI-assisted workflows, coaching middle school
    volleyball, helping kids learn at church, or experimenting with a
    new cookie recipe or craft project, I enjoy finding creative ways
    to solve problems and help people succeed.
  </p>

  <p className="mt-4 leading-8 text-gray-700">
    I'm always curious about what's possible when technology,
    creativity, and a people-first approach come together.
  </p>

  <p className="mt-4 leading-8 text-gray-700">
    If you're working on something involving AI, documentation
    engineering, automation, or a better way to help people learn,
    I'd love to connect!
  </p>

  <div className="mt-5 flex flex-wrap gap-6">
    <a
      href="https://www.linkedin.com/in/djdaludado/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-teal-700 hover:underline"
    >
      LinkedIn ↗
    </a>

    <a
      href="https://github.com/jdaludado"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-teal-700 hover:underline"
    >
      GitHub ↗
    </a>
  </div>
</section>

    </main>
  );
}