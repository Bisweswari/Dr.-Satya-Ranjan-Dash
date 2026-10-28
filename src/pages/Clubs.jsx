import { ShieldCheck, Lightbulb, ArrowUpRight } from "lucide-react";

const societies = [
  {
    title: "KAVACH",
    subtitle: "Academic & Technical Society",
    description:
      "A community dedicated to technical learning, collaborative research, knowledge sharing and academic growth.",
    link: "https://kavach-society.vercel.app/",
    icon: ShieldCheck,
    accent: "from-teal-500/10 to-cyan-500/5",
  },
  {
    title: "KNOWVATE",
    subtitle: "Innovation & Knowledge Society",
    description:
      "An initiative that encourages creative thinking, innovation, knowledge exchange and exploration of emerging technologies.",
    link: "https://knowvate-research-hub.vercel.app/",
    icon: Lightbulb,
    accent: "from-amber-500/10 to-orange-500/5",
  },
];

export default function Clubs() {
  return (
    <main className="min-h-screen bg-paper px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Community & leadership
          </p>

          <h1 className="font-display text-3xl font-semibold text-ink md:text-5xl">
            Clubs & Societies
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Academic communities and faculty-led initiatives fostering
            knowledge, innovation and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {societies.map((society) => {
            const Icon = society.icon;

            return (
              <article
                key={society.title}
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl md:p-8"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${society.accent} text-teal`}
                >
                  <Icon size={28} strokeWidth={1.7} />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal">
                  {society.subtitle}
                </p>

                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  {society.title}
                </h2>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 md:text-base">
                  {society.description}
                </p>

                <a
                  href={society.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 border-b border-teal/40 pb-1 text-sm font-semibold text-teal transition hover:border-teal hover:text-ink"
                >
                  Explore Society
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
