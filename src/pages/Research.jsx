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
// Edited Books moved from Scholars.jsx
const editedBooks = [
  {
    authors:
      "Sushree Sangita Mohanty, Satya Ranjan Dash, and Shantipriya Parida (eds.)",
    title:
      "Applying AI-Based Tools and Technologies Towards Revitalization of Indigenous and Endangered Languages",
    publisher: "Springer",
    year: 2024,
  },
  {
    authors:
      "Satya Ranjan Dash, Manas Ranjan Lenka, Kuan-Ching Li, and Esaú Villatoro-Tello (eds.)",
    title:
      "Intelligent Technologies: Concepts, Applications, and Future Directions",
    publisher: "Springer",
    year: 2023,
  },
  {
    authors:
      "Satya Ranjan Dash, Shantipriya Parida, Esaú Villatoro-Tello, Biswaranjan Acharya, and Ondřej Bojar (eds.)",
    title:
      "Natural Language Processing in Healthcare: A Special Focus on Low Resource Languages",
    publisher: "CRC Press",
    year: 2022,
  },
  {
    authors:
      "Satya Ranjan Dash, Himansu Das, Kuan-Ching Li, and Esau Villatoro-Tello",
    title:
      "Intelligent Technologies: Concepts, Applications, and Future Directions, Volume 2",
    publisher: "Springer",
    year: 2021,
  },
];
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

// Diamond pattern used in navigation and publication cards
function DiamondPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full text-slate-400/[0.055] transition-colors duration-500 group-hover:text-slate-400/[0.12]"
        viewBox="0 0 300 150"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M150 0 L75 75 L150 150 L225 75 Z" stroke="currentColor" />
        <path d="M75 75 L225 75 M150 0 L150 150" stroke="currentColor" />
        <path d="M0 0 L150 150 L300 0" stroke="currentColor" />
        <path d="M0 150 L150 0 L300 150" stroke="currentColor" />
        <path d="M0 75 L150 0 L300 75" stroke="currentColor" />
        <path d="M0 75 L150 150 L300 75" stroke="currentColor" />
      </svg>

      <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-teal/[0.04] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </div>
  );
}

// Five navigation cards
function SectionNavigation() {
  const sections = [
    {
      id: "research-projects",
      count: projects.length,
      label: "Research Projects",
    },
    {
      id: "journals",
      count: journalPublications.length,
      label: "Journal Publications",
    },
    {
      id: "edited-books",
      count: editedBooks.length,
      label: "Edited Books",
    },
    {
      id: "book-chapters",
      count: bookChapters.length,
      label: "Book Chapters",
    },
    {
      id: "conference-papers",
      count: conferencePapers.length,
      label: "Conference Papers",
    },
  ];

  return (
    <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group relative isolate overflow-hidden rounded-xl border border-ink/10 bg-white px-5 py-4 text-left transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/10"
        >
          <DiamondPattern />

          <span className="block font-display text-2xl font-bold text-teal">
            {section.count}
          </span>

          <span className="mt-1 block text-sm font-medium text-ink/70 transition-colors duration-300 group-hover:text-teal">
            {section.label} →
          </span>
        </a>
      ))}
    </div>
  );
}

function ProjectSection() {
  return (
    <section id="research-projects" className="mb-20 scroll-mt-24">
      <SectionHeading
        eyebrow="Research initiatives"
        title="Research Projects"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group relative isolate overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/10 md:p-7 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            {/* Criss-cross diamond-cut decorative lines */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <svg
                className="absolute inset-0 h-full w-full text-slate-400/[0.055] transition-colors duration-500 group-hover:text-slate-400/[0.12]"
                viewBox="0 0 300 150"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M150 0 L75 75 L150 150 L225 75 Z"
                  stroke="currentColor"
                />
                <path
                  d="M75 75 L225 75 M150 0 L150 150"
                  stroke="currentColor"
                />
                <path d="M0 0 L150 150 L300 0" stroke="currentColor" />
                <path d="M0 150 L150 0 L300 150" stroke="currentColor" />
                <path d="M0 75 L150 0 L300 75" stroke="currentColor" />
                <path d="M0 75 L150 150 L300 75" stroke="currentColor" />
              </svg>

              <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-teal/[0.04] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>

            <div className="absolute inset-y-0 left-0 w-1 bg-teal/70" />

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 font-display text-base font-semibold text-teal transition-transform duration-500 group-hover:scale-110">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-teal md:text-xl">
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

function PublicationSection({ id, title, eyebrow, items, initialCount = 4 }) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, initialCount);

  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="divide-y divide-ink/10">
        {visibleItems.map((item, index) => {
          const [citation, url] = item;

          return (
            <article key={`${id}-${index}`} className="py-5 first:pt-0">
              <p className="text-sm leading-7 text-slate-700 md:text-base">
                {citation}
              </p>

              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-ink"
                >
                  View publication
                  <ArrowUpRight size={15} />
                </a>
              )}
            </article>
          );
        })}
      </div>

      {items.length > initialCount && (
        <button
          type="button"
          onClick={() => setExpanded((previous) => !previous)}
          aria-expanded={expanded}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-ink"
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

// Edited Books section
function EditedBooksSection() {
  return (
    <section id="edited-books" className="mb-16 scroll-mt-24">
      <SectionHeading
        eyebrow="Scholarly volumes"
        title="Edited Books"
        description="Edited scholarly volumes on intelligent technologies, low-resource languages, and healthcare natural language processing."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {editedBooks.map((book) => (
          <article
            key={book.title}
            className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/10"
          >
            <DiamondPattern />

            <span className="text-xs font-semibold uppercase tracking-wider text-teal">
              {book.publisher} · {book.year}
            </span>

            <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink">
              {book.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-ink/65">{book.authors}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Research() {
  const totalRecords =
    projects.length +
    journalPublications.length +
    editedBooks.length +
    bookChapters.length +
    conferencePapers.length;

  return (
    <main className="min-h-screen bg-paper px-4 pt-8 pb-14 md:px-8 md:pt-12 md:pb-20">
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
            edited books, book chapters, and conference contributions across
            interdisciplinary research and innovation.
          </p>

          <p className="mt-5 text-xs font-medium uppercase tracking-widest text-slate-500">
            {totalRecords} research records across five categories
          </p>
        </header>

        {/* Five section navigation cards */}
        <SectionNavigation />

        <ProjectSection />

        <PublicationSection
          id="journals"
          title="Journal Publications"
          eyebrow="Peer-reviewed research"
          items={journalPublications}
        />

        <EditedBooksSection />

        <PublicationSection
          id="book-chapters"
          title="Book Chapters"
          eyebrow="Scholarly contributions"
          items={bookChapters}
        />

        <PublicationSection
          id="conference-papers"
          title="Conference Papers & Proceedings"
          eyebrow="Conference contributions"
          items={conferencePapers}
        />

        {/* Google Scholar card */}
        <div className="group relative isolate overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/10 md:p-8">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute inset-0 h-full w-full text-slate-400/[0.050] transition-colors duration-500 group-hover:text-slate-400/[0.08]"
              viewBox="0 0 300 150"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M150 0 L75 75 L150 150 L225 75 Z"
                stroke="currentColor"
              />
              <path d="M75 75 L225 75 M150 0 L150 150" stroke="currentColor" />
              <path d="M0 0 L150 150 L300 0" stroke="currentColor" />
              <path d="M0 150 L150 0 L300 150" stroke="currentColor" />
              <path d="M0 75 L150 0 L300 75" stroke="currentColor" />
              <path d="M0 75 L150 150 L300 75" stroke="currentColor" />
            </svg>

            <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-teal/[0.04] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </div>

          <div className="absolute inset-y-0 left-0 w-1 bg-teal/70" />

          <div className="relative z-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal transition-transform duration-500 group-hover:scale-110">
              <Quote size={23} />
            </div>

            <h2 className="mt-4 font-display text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-teal md:text-2xl">
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
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
            >
              Google Scholar <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
