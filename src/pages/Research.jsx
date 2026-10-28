import { useState } from "react";

import {
  ArrowUpRight,
  BookOpen,
  Quote,
  ExternalLink,
  FlaskConical,
  Building2,
  ChevronDown,
} from "lucide-react";

import {
  projects,
  journalPublications,
  bookChapters,
  conferencePapers,
} from "../data/researchData";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl leading-7 text-ink/70">{description}</p>
      )}
    </div>
  );
}
function ProjectSection() {
  return (
    <section id="research-projects" className="mb-20 scroll-mt-24">
      <SectionHeading
        icon={FlaskConical}
        eyebrow="Research initiatives"
        title="Research Projects"
        count={projects.length}
        unit="projects"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg md:p-7 ${index === 0 ? "md:col-span-2" : ""}`}
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-teal/70" />
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 font-display text-base font-semibold text-teal">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink transition group-hover:text-teal md:text-xl">
                  {project.title}
                </h3>
                <div className="mt-5 flex items-start gap-2.5 border-t border-ink/10 pt-4">
                  <Building2 size={17} className="mt-0.5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      {project.organization}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {project.program}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {project.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PublicationSection({
  id,
  title,
  eyebrow,
  icon: Icon,
  items,
  initialCount = 5,
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, initialCount);

  return (
    <section id={id} className="mb-20 scroll-mt-24">
      <SectionHeading
        icon={Icon}
        eyebrow={eyebrow}
        title={title}
        count={items.length}
        unit="entries"
      />
      <div className="space-y-4">
        {visibleItems.map((item, index) => {
          const [citation, url] = item;
          return (
            <article
              key={`${id}-${index}`}
              className="group rounded-2xl border border-ink/10 bg-white p-5 transition duration-300 hover:border-teal/40 hover:shadow-lg md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="hidden shrink-0 sm:block">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 font-display text-sm font-semibold text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-7 text-slate-700 md:text-base">
                    {citation}
                  </p>
                  {url && (
                    <div className="mt-4 border-t border-ink/10 pt-4">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-ink"
                      >
                        <ExternalLink size={16} /> DOI / Publisher{" "}
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {items.length > initialCount && (
        <button
          type="button"
          onClick={() => setExpanded((previous) => !previous)}
          aria-expanded={expanded}
          className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal"
        >
          {expanded ? "Show fewer" : `View all ${items.length} entries`}
          <ChevronDown
            size={16}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </section>
  );
}

export default function Research() {
  const totalRecords =
    projects.length +
    journalPublications.length +
    bookChapters.length +
    conferencePapers.length;
  return (
    <main className="min-h-screen bg-paper px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Academic work
          </p>
          <h1 className="font-display text-3xl font-semibold text-ink md:text-5xl">
            Research &amp; Publications
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Explore research projects, funded initiatives, journal articles,
            book chapters, and conference contributions across interdisciplinary
            research and innovation.
          </p>
          <p className="mt-5 text-xs font-medium uppercase tracking-widest text-slate-500">
            {totalRecords} research records across four categories
          </p>
        </header>

        <ProjectSection />
        <PublicationSection
          id="journals"
          title="Journal Publications"
          eyebrow="Peer-reviewed research"
          icon={BookOpen}
          items={journalPublications}
        />
        <PublicationSection
          id="book-chapters"
          title="Book Chapters"
          eyebrow="Scholarly contributions"
          icon={BookOpen}
          items={bookChapters}
        />
        <PublicationSection
          id="conference-papers"
          title="Conference Papers & Proceedings"
          eyebrow="Conference contributions"
          icon={FlaskConical}
          items={conferencePapers}
        />

        <div className="rounded-2xl border border-ink/10 bg-white p-6 text-center md:p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
            <Quote size={23} />
          </div>
          <h2 className="mt-4 font-display text-xl font-semibold text-ink md:text-2xl">
            Explore All Publications
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Visit the researcher's Google Scholar profile for additional
            publications and citation information.
          </p>
          <a
            href="https://scholar.google.com/citations?user=3aLkeUYAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
          >
            Google Scholar <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </main>
  );
}
