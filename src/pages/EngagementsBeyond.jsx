import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const descriptions = {
  "s1.png":
    "Receiving my promotion letter from our Hon’ble Founder, Dr. Achyuta Samanta, in the gracious presence of the Vice Chancellor, Registrar, and Director General (HR) of KIIT Deemed to be University.",
  "s2.png":
    "Participated in a blood donation drive at SCB Medical College and Hospital (SCBMCH) Blood Centre, supporting a lifesaving cause and promoting community health.",
  "s3.png":
    "Meeting the Winter School Resource Person at KIMS: Dr. D. Sannkeerthi, Department of Obstetrics & Gynaecology.",
  "s4.png":
    "Meeting the Winter School Resource Person at KIMS: Dr. Pritam Nath, Professor and Head, Department of Gastroenterology.",
  "s5.png":
    "Meeting the Winter School Resource Person at KIMS: Dr. N. Sagarika, Department of Obstetrics & Gynaecology.",
  "s6.png":
    "Meeting the Winter School Resource Person at KIMS: Dr. Matuli Das, Professor and Head, Department of Ophthalmology, KIMS.",
  "s7.png": "Participating in the 7th HSIL Hackathon 2026.",
  "s8.png":
    "First meeting with the Core Members of KnowVate Global Hub, connecting minds across the world to shape a global future of research and innovation for international students.",
  "s9.png":
    "Discussing future collaboration with Dr. Rajesh Kumar Mishra (Samsung Research America, USA), Er. Parmeswar Panda (Waaree Energies), and Mr. Tapas Ranjan Dash.",
  "s10.png":
    "Alumni Talk by Ms. Tapasi Panda, KIIT School of Computer Applications.",
  "s11.png":
    "Four students from the School of Computer Applications, KIIT-DU, qualified for the National Level Basketball Team at the East Zone Inter-University Basketball (Men) Tournament 2025–2026, organised by the Department of Sports, University of Calcutta.",
  "s12.png": "KIIT Deemed to be University.",
};

const photos = Object.entries(
  import.meta.glob("../data/activities/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const filename = path.split("/").pop();

    return {
      src,
      filename,
      description: descriptions[filename] || "",
    };
  });

export default function EngagementsBeyond() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Page header */}
      <section className="px-5 pb-8 pt-8 md:px-8 md:pb-10 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-ink/10 pb-8 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Academic & Personal
            </p>

            <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              Engagements & Beyond
              <span className="text-teal">.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              A collection of academic engagements, professional milestones,
              collaborative experiences, and moments beyond research.
            </p>
          </div>
        </div>
      </section>

      {/* Academic engagements gallery */}
      <section className="px-5 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="font-display text-2xl font-bold text-teal md:text-3xl">
              Academic Engagements
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Moments from academic events, institutional activities,
              collaborations, and community initiatives.
            </p>
          </div>

          {photos.length > 0 ? (
            <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 md:gap-x-5 md:gap-y-10">
              {photos.map((photo, index) => (
                <figure
                  key={photo.filename}
                  className={`mx-auto w-full min-w-0 text-center ${
                    index % 4 === 0
                      ? "mt-5"
                      : index % 4 === 1
                        ? "mt-0"
                        : index % 4 === 2
                          ? "mt-8"
                          : "mt-3"
                  }`}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-white">
                    <img
                      src={photo.src}
                      alt={
                        photo.description || `Academic engagement ${index + 1}`
                      }
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <figcaption className="mt-3 text-center">
                    <span className="mb-2 block font-display text-sm font-bold text-teal">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-xs leading-6 text-slate-600 md:text-sm">
                      {photo.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-slate-500">
              Add photographs to src/data/activities/ to display them here.
            </p>
          )}
        </div>
      </section>

      {/* Beyond Academia link */}
      <section className="mt-8 bg-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/beyond-academia"
            className="group mx-auto block max-w-4xl rounded-xl border border-ink/10 p-6 text-center transition-colors hover:border-teal/40 hover:bg-paper/60 md:p-8"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Life beyond research
            </p>

            <div className="flex items-center justify-center gap-3">
              <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                Beyond Academia
              </h2>

              <ArrowUpRight
                size={26}
                className="shrink-0 text-teal transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Explore personal interests, memorable experiences, and moments
              shared with the birds and dogs at home.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
