import {
  ArrowUpRight,
  Users,
  MessageCircle,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

const forums = [
  {
    title: "Research Discussion Forum",
    type: "Research Discussion",
    topic: "Emerging Research Trends and Innovation",
    description:
      "An academic forum for exchanging research ideas, discussing emerging challenges and encouraging collaboration among researchers and scholars.",
    date: "Add event date",
    speaker: "Add speaker or coordinator",
    link: "",
    linkLabel: "View Forum Details",
  },
  {
    title: "Invited Research Talk",
    type: "Invited Talk",
    topic: "Interdisciplinary Research and Applications",
    description:
      "A knowledge-sharing session featuring research perspectives, new methodologies and opportunities for interdisciplinary academic collaboration.",
    date: "Add event date",
    speaker: "Add speaker or institution",
    link: "",
    linkLabel: "View Session",
  },
];

export default function Forums() {
  return (
    <main className="min-h-screen bg-paper px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Ideas & collaboration
          </p>

          <h1 className="font-display text-3xl font-semibold text-ink md:text-5xl">
            Research Forums
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            A platform for research discussions, invited talks, knowledge
            exchange and interdisciplinary collaboration.
          </p>
        </header>

        {/* Introductory banner */}
        <section className="mb-10 overflow-hidden rounded-2xl border border-ink/10 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr]">
            <div className="p-6 md:p-9">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <MessageCircle size={25} strokeWidth={1.6} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                Exchange · Explore · Collaborate
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                Conversations that advance research
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Discover academic discussions, expert perspectives and
                collaborative initiatives that bring researchers together to
                share knowledge and explore new ideas.
              </p>
            </div>

            <div className="flex items-center justify-center bg-gradient-to-br from-teal/10 via-teal/5 to-transparent p-8">
              <div className="grid w-full max-w-xs grid-cols-2 gap-3">
                <div className="rounded-xl border border-ink/10 bg-white p-4">
                  <Users size={22} className="text-teal" />
                  <p className="mt-3 text-sm font-semibold text-ink">
                    Discussion
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Share perspectives
                  </p>
                </div>

                <div className="rounded-xl border border-ink/10 bg-white p-4">
                  <MessageCircle size={22} className="text-teal" />
                  <p className="mt-3 text-sm font-semibold text-ink">
                    Collaboration
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Connect ideas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forum listings */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-ink/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal">
              Academic engagement
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
              Forums & Discussions
            </h2>
          </div>

          <span className="text-sm text-slate-500">
            {forums.length} entries
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {forums.map((forum, index) => (
            <article
              key={forum.title}
              className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                  {index === 0 ? (
                    <MessageCircle size={23} strokeWidth={1.6} />
                  ) : (
                    <Users size={23} strokeWidth={1.6} />
                  )}
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                  {forum.type}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-ink transition group-hover:text-teal md:text-2xl">
                {forum.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-teal">
                {forum.topic}
              </p>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {forum.description}
              </p>

              <div className="mt-5 space-y-3 border-t border-ink/10 pt-4">
                <div className="flex items-start gap-3 text-sm text-slate-500">
                  <CalendarDays
                    size={17}
                    className="mt-0.5 shrink-0 text-teal"
                  />
                  <span>{forum.date}</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-500">
                  <Users size={17} className="mt-0.5 shrink-0 text-teal" />
                  <span>{forum.speaker}</span>
                </div>
              </div>

              {forum.link && (
                <a
                  href={forum.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal transition hover:text-ink"
                >
                  {forum.linkLabel}
                  <ArrowUpRight size={17} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
