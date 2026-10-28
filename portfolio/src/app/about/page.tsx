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
    </main>
  );
}