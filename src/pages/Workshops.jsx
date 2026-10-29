import { ArrowUpRight, Play, PlayCircle } from "lucide-react";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@satyaranjandash1511";

const sessions = [
  {
    title: "Kavach Cybersecurity Society",
    type: "Society",
    description:
      "An introducory session featuring research insights, practical knowledge and academic discussions.",
    date: "17th October 2026",
    videoId: "https://www.youtube.com/watch?v=lYExgFfy7B0",
  },
  {
    title:
      "Leveraging AI for Sensitive Domains: Advances in Clinical Text Analysis",
    type: "Summer School",
    description: "By Dr. Soumitra Ghosh, IIT BHU",
    date: "10th June 2026",
    videoId: "https://www.youtube.com/watch?v=9g2DPACwMrQ",
  },
  {
    title: "Faculty Development Programme",
    type: "Faculty Development",
    description:
      "A knowledge-sharing session for educators and researchers to explore new concepts and practices.",
    date: "Add event date",
    videoId: "",
  },
];

export default function Workshops() {
  return (
    <main className="min-h-screen bg-paper px-4 pb-14 pt-8 md:px-8 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Learning & Engagement
          </p>

          <h1 className="font-display text-3xl font-semibold text-ink md:text-5xl">
            Workshops & Summer Schools
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Explore recorded academic sessions, workshops, summer schools and
            faculty development programmes.
          </p>

          {/* YouTube channel link */}
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
          >
            <PlayCircle size={19} />
            Visit YouTube Channel
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Session cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session) => {
            const validVideo = /^[a-zA-Z0-9_-]{11}$/.test(session.videoId);

            const videoUrl = validVideo
              ? `https://www.youtube.com/watch?v=${session.videoId}`
              : YOUTUBE_CHANNEL;

            const thumbnailUrl = validVideo
              ? `https://img.youtube.com/vi/${session.videoId}/hqdefault.jpg`
              : null;

            return (
              <article
                key={session.title}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl"
              >
                {/* Video thumbnail */}
                <a
                  href={session.videoId}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    validVideo
                      ? `Watch ${session.title} on YouTube`
                      : `Visit YouTube channel for ${session.title}`
                  }
                  className="relative block aspect-video overflow-hidden bg-slate-100"
                >
                  {validVideo ? (
                    <img
                      src={thumbnailUrl}
                      alt={`${session.title} video thumbnail`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-teal/10 to-slate-100 text-slate-500">
                      <PlayCircle size={42} strokeWidth={1.5} />
                      <span className="text-xs">Explore videos on YouTube</span>
                    </div>
                  )}

                  <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/25">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-teal shadow-lg transition group-hover:scale-110">
                      <Play size={21} fill="currentColor" />
                    </span>
                  </span>
                </a>

                {/* Session information */}
                <div className="p-5 md:p-6">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal">
                      {session.type}
                    </span>

                    <span className="text-xs text-slate-500">
                      {session.date}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-semibold text-ink">
                    {session.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {session.description}
                  </p>

                  <a
                    href={session.videoId}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-ink"
                  >
                    {validVideo ? "Watch on YouTube" : "Explore Channel"}
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
