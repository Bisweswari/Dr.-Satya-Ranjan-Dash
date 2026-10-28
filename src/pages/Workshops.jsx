import { ArrowUpRight, Play, PlayCircle } from "lucide-react";

const sessions = [
  {
    title: "Research Workshop",
    type: "Workshop",
    description:
      "A session featuring research insights, practical knowledge and academic discussions.",
    date: "Add event date",
    videoId: "YOUR_YOUTUBE_VIDEO_ID",
  },
  {
    title: "Summer School",
    type: "Summer School",
    description:
      "An academic session focused on learning, emerging technologies and research developments.",
    date: "Add event date",
    videoId: "YOUR_YOUTUBE_VIDEO_ID",
  },
  {
    title: "Faculty Development Programme",
    type: "Faculty Development",
    description:
      "A knowledge-sharing session for educators and researchers to explore new concepts and practices.",
    date: "Add event date",
    videoId: "YOUR_YOUTUBE_VIDEO_ID",
  },
];

export default function Workshops() {
  return (
    <main className="min-h-screen bg-paper px-4 pt-8 pb-14 md:px-8 md:pt-12 md:pb-20">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Learning & engagement
          </p>

          <h1 className="font-display text-3xl font-semibold text-ink md:text-5xl">
            Workshops & Summer Schools
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Explore recorded academic sessions, workshops, summer schools and
            faculty development programmes.
          </p>
        </div>

        {/* YouTube session cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session) => {
            const validVideo = session.videoId !== "YOUR_YOUTUBE_VIDEO_ID";

            const videoUrl = `https://www.youtube.com/watch?v=${session.videoId}`;
            const thumbnailUrl = `https://img.youtube.com/vi/${session.videoId}/hqdefault.jpg`;

            return (
              <article
                key={session.title}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl"
              >
                {/* Video thumbnail */}
                <a
                  href={validVideo ? videoUrl : undefined}
                  target={validVideo ? "_blank" : undefined}
                  rel={validVideo ? "noopener noreferrer" : undefined}
                  aria-label={`Watch ${session.title} on YouTube`}
                  className={`relative block aspect-video overflow-hidden bg-slate-100 ${
                    validVideo ? "cursor-pointer" : "cursor-default"
                  }`}
                  onClick={(event) => {
                    if (!validVideo) event.preventDefault();
                  }}
                >
                  {validVideo ? (
                    <img
                      src={thumbnailUrl}
                      alt={`${session.title} video thumbnail`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-teal/10 to-slate-100 text-slate-500">
                      <PlayCircle size={34} strokeWidth={1.5} />
                      <span className="text-xs">Add YouTube video ID</span>
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
                    href={validVideo ? videoUrl : undefined}
                    target={validVideo ? "_blank" : undefined}
                    rel={validVideo ? "noopener noreferrer" : undefined}
                    onClick={(event) => {
                      if (!validVideo) event.preventDefault();
                    }}
                    aria-disabled={!validVideo}
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
                      validVideo
                        ? "text-teal hover:text-ink"
                        : "cursor-not-allowed text-slate-400"
                    }`}
                  >
                    Watch on YouTube
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
