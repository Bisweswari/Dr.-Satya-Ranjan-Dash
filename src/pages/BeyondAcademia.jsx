import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Add all photos and videos to src/data/hobbies/
const photos = Object.entries(
  import.meta.glob("../data/hobbies/*.{jpg,jpeg,png,webp,mp4,webm,mov}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ path, src }));

const isVideo = (src) => /\.(mp4|webm|mov)(\?.*)?$/i.test(src);

export default function BeyondAcademia() {
  return (
    <main className="min-h-screen bg-white">
      {/* Compact, elegant page header */}
      <section className="px-5 pb-5 pt-8 md:px-8 md:pb-8 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-teal"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="flex flex-col gap-3 border-b border-ink/10 pb-6">
            <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              Life beyond research<span className="text-teal">.</span>
            </h1>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Little moments, personal interests, and experiences beyond
              academic life.
            </p>
          </div>
        </div>
      </section>

      {/* One unified photo and video gallery */}
      {/* Horizontally stacked photo gallery */}
      <section className="overflow-hidden px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          {photos.length > 0 ? (
            <div className="flex items-start gap-3 overflow-x-auto pb-6 md:gap-5">
              {photos.map(({ path, src }, index) => (
                <figure
                  key={path}
                  className={`w-36 flex-none overflow-hidden rounded-sm bg-paper sm:w-44 md:w-52 ${
                    index % 4 === 0
                      ? "mt-8"
                      : index % 4 === 1
                        ? "mt-0"
                        : index % 4 === 2
                          ? "mt-12"
                          : "mt-4"
                  }`}
                >
                  {isVideo(src) ? (
                    <video
                      src={src}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-40 w-full object-cover sm:h-48 md:h-56"
                    />
                  ) : (
                    <img
                      src={src}
                      alt="Beyond academia"
                      loading="lazy"
                      className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-48 md:h-56"
                    />
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-slate-500">
              Add your photos to <code>src/data/hobbies/</code> to get started.
            </p>
          )}
        </div>
      </section>
      <section className="bg-paper px-6 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border-b border-teal pb-1 font-semibold text-teal hover:text-ink"
          >
            <ArrowLeft size={18} />
            Return to the academic portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
