import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflows & Documentation Automation",
  description:
    "How Dawna Joy Daludado developed version-controlled Claude skills, content audits, and documentation workflows, evolving a personal repository into a resource shared with Product and Engineering.",
  alternates: {
    canonical: "/projects/ai-workflows",
  },
  openGraph: {
    type: "website",
    url: "/projects/ai-workflows",
    title:
      "AI Workflows & Documentation Automation | Dawna Joy Daludado",
    description:
      "Reusable Claude skills, documentation audits, guided authoring, and automation supported by shared standards and human review.",
    images: [
      {
        url: "/portfolio-social.png",
        alt: "Dawna Joy Daludado — Documentation Engineering & AI Workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Workflows & Documentation Automation | Dawna Joy Daludado",
    description:
      "Reusable Claude skills, documentation audits, guided authoring, and automation supported by shared standards and human review.",
    images: ["/portfolio-social.png"],
  },
};

export default function AIWorkflowsCaseStudy() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-900 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="font-medium text-teal-700 hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <header className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Case Study · Maxio
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            AI Workflows &amp; Documentation Automation
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            I developed reusable AI workflows to support documentation
            auditing, content creation, review, and maintenance. What
            began as a personal Git repository for version control
            became a resource shared with Product and Engineering.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Claude Code",
              "Claude Cowork",
              "Git & GitHub",
              "Markdown / MDX",
              "Workflow Automation",
              "Content Governance",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">The Challenge</h2>

          <p className="mt-4 leading-8 text-gray-700">
            Modernizing the Help Center also required improving how
            its content was maintained. Documentation needed
            consistent article structures, accurate product
            information, reliable metadata, and a repeatable path
            from identifying a need to reviewing a proposed update.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            From Personal Repository to Shared Resource
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            I started a personal Git repository to version-control
            my AI skills, agent definitions, and automations.
            Keeping instructions, policies, and templates together
            gave me a consistent way to review changes, track
            revisions, and refine workflows through use.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            The repository later became a shared resource for
            Product and Engineering, making the definitions
            available for others to use and adapt.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            As the work evolved, Claude skills superseded most
            of my earlier Custom GPTs, Rovo agents, and Jira
            automations. Shared standards and reusable skill
            foundations helped maintain consistency across
            documentation workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Content Auditing and Standardization
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            I used a content audit skill in Claude Code to check
            all 900+ published articles. A shared audit foundation
            supported specialized skills for different
            documentation areas, combining product verification,
            editorial standards, content structure, and validation.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            For integrations, the skills organized content into
            overview, setup, configuration, sync, using, and
            troubleshooting/FAQ articles, with exceptions where
            a smaller article set was appropriate.
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-gray-700">
            <li>
              Used shared rules with specialized guidance for
              different documentation areas.
            </li>
            <li>
              Used Claude skills to automate MDX frontmatter
              fields and validate related-article references.
            </li>
            <li>
              Refined instructions and validation checks as
              reviews revealed recurring content issues.
            </li>
          </ul>

          <p className="mt-5 text-sm leading-6 text-gray-600">
            The audit covered 900+ published articles. The broader
            Help Center migration included 1,000+ articles and
            internal documents, some of which were not published.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Documentation Delivery and Maintenance
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            I developed skill definitions for documentation
            delivery and maintenance, with explicit verification
            steps and review boundaries. These defined how AI
            assistance should move from source material to
            proposed documentation changes.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">
                Source-Based Documentation Updates
              </h3>
              <p className="mt-3 leading-8 text-gray-700">
                Defined a workflow for reading product source
                code, preparing article changes, running local
                checks, and opening GitHub pull requests for
                human review.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">
                Content-Gap Discovery
              </h3>
              <p className="mt-3 leading-8 text-gray-700">
                Created a skill to compare product questions
                in Slack with existing Help Center content,
                identify documentation gaps, and prepare
                evidence-backed drafts outside the content
                repository for review.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold">
                Recurring Maintenance
              </h3>
              <p className="mt-3 leading-8 text-gray-700">
                Defined a scheduled maintenance workflow for
                release-note creation, archiving older release
                notes, and content-gap review, with proposed
                repository changes submitted through draft
                pull requests.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Guided Tools and Proofs of Concept
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            I also explored ways to help contributors provide
            structured information and help customers find
            relevant answers.
          </p>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="text-xl font-semibold">
                Natural-Language Search
              </h3>
<p className="mt-3 leading-8 text-gray-700">
  Created a proof of concept to improve question-style
  search in the Algolia-based Help Center, helping users
  find relevant articles using everyday language rather
  than exact product terminology.
</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Guided Integration Authoring
              </h3>
              <p className="mt-3 leading-8 text-gray-700">
                Developed a guided authoring tool in Claude
                Cowork, designed to help contributors create
                a complete article set for a new integration
                using established templates.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-12 rounded-xl bg-teal-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            What This Work Demonstrates
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            These projects show how I translate documentation
            needs into reusable instructions, validation rules,
            and guided workflows. They reflect an iterative
            approach: testing tools in practice, refining their
            behavior, and consolidating earlier implementations
            into Claude skills while retaining human review.
          </p>
        </section>

        <nav
          aria-label="Related portfolio pages"
          className="mt-12 flex flex-wrap gap-6 border-t border-gray-200 pt-8"
        >
          <Link
            href="/projects/maxio"
            className="font-medium text-teal-700 hover:underline"
          >
            View the Help Center transformation →
          </Link>

          <Link
            href="/"
            className="font-medium text-teal-700 hover:underline"
          >
            Back to Portfolio
          </Link>
        </nav>
      </div>
    </main>
  );
}