import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { GraduationCap, Mail, Phone, FileText, ImageIcon } from "lucide-react";
import {
  SiResearchgate,
  SiGooglescholar,
  SiOrcid,
  SiInstagram,
} from "react-icons/si";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Portrait lives in src/data (imported so Vite bundles it correctly)
import PHOTO from "../data/dr. satya sir.jpeg";

// CV file: put it at  public/cv.pdf
const CV_URL = "/cv.pdf";

// Contact details shown beside the photo -- replace with the real ones
const EMAIL = "srdash@kiit.ac.in";
const PHONE = "+91 9861093702";

// ---------------------------------------------------------------
// Recent activities: drop photos into  src/data/activities/
// The caption comes from the file name, e.g.
//   "01 Guest lecture at IIT Bhubaneswar.jpg" -> "Guest lecture at IIT Bhubaneswar"
// The number at the start only controls the order and is not shown.
// ---------------------------------------------------------------
const captionFrom = (path) =>
  path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .replace(/^[\d\s._-]+/, "")
    .replace(/[_-]+/g, " ")
    .trim();

const activities = Object.entries(
  import.meta.glob("../data/activities/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, caption: captionFrom(path) }));

export default function Home() {
  const [photoFailed, setPhotoFailed] = useState(false);

  const cards = activities.length
    ? activities
    : [0, 1, 2, 3].map(() => ({ src: null, caption: "" }));

  return (
    <main>
      {/* Hero: sized to the screen height so it fits a laptop without scrolling */}
      <section className="relative flex bg-ink lg:min-h-[calc(100svh-6.5rem)]">
        <div className="absolute inset-x-0 top-0 h-[14svh] min-h-16 bg-paper" />

        <div className="relative mx-auto grid w-full max-w-[1300px] items-center gap-8 px-6 pb-12 pt-4 md:grid-cols-[auto_minmax(0,1fr)] md:gap-0 md:px-8 md:pb-[5svh] md:pt-[3svh]">
          <div className="mx-auto aspect-[3/4] w-[min(80vw,360px)] overflow-hidden bg-slate-200 md:ml-6 md:mt-[-12px] md:h-[clamp(320px,calc(100svh_-_7rem_-_8svh),900px)] md:w-auto">
            {photoFailed ? (
              <div className="flex h-full w-full items-center justify-center bg-paper text-ink/30">
                <GraduationCap size={96} />
              </div>
            ) : (
              <img
                src={PHOTO}
                alt="Dr. Satya Ranjan Dash"
                onError={() => setPhotoFailed(true)}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <div className="md:self-stretch md:pt-[11svh]">
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-gold sm:text-6xl md:ml-[clamp(1.5rem,4vw,4rem)] md:text-[clamp(2.5rem,min(5.8vw,12.5svh),6.5rem)]">
              Dr. Satya Ranjan Dash
            </h1>

            <div className="mt-8 md:ml-[clamp(1.5rem,4vw,4rem)] md:mt-[5svh] md:max-w-xl">
              <p className="whitespace-nowrap font-display text-base font-bold text-white md:text-xl">
                Professor & Dean, School of Computer Applications, KIIT Deemed
                To Be University
              </p>
              <p className="mt-4 leading-7 text-white/85 md:mt-[3svh] md:text-lg md:leading-8">
                Welcome to my academic portfolio — a space for research,
                publications, academic activities and meaningful scholarly
                collaboration.
              </p>

              <div className="mt-5 flex flex-col gap-2 text-sm text-white/85 md:mt-[2.5svh] md:text-base">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 hover:text-gold"
                >
                  <Mail size={18} className="shrink-0 text-gold" />
                  {EMAIL}
                </a>
                <a
                  href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-3 hover:text-gold"
                >
                  <Phone size={18} className="shrink-0 text-gold" />
                  {PHONE}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-[2.5svh]">
                <Link
                  to="/research"
                  className="inline-block border-b border-gold pb-1 text-sm font-semibold text-gold hover:text-white"
                >
                  Explore my research
                </Link>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  <FileText size={16} />
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="bg-paper px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <h2 className="font-display text-2xl font-semibold text-teal md:text-3xl">
              Research Interests
            </h2>
          </div>

          <ul className="mx-auto w-fit max-w-full space-y-3 text-sm leading-6 text-slate-700 md:text-base">
            {[
              "Data science, big data analysis, Internet of Things and data mining",
              "Deep learning and neural networks",
              "Machine learning and pattern recognition",
              "Cognitive computing",
              "Video, colour, medical and remotely sensed image analysis",
              "Natural computing, soft computing and computational intelligence",
              "Bioinformatics and computational biology",
            ].map((interest) => (
              <li
                key={interest}
                className="flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-base"
              >
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span>{interest}</span>
              </li>
            ))}
          </ul>

          {/* Google Scholar metrics */}
          <div className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-3 border-t border-ink/10 pt-6 sm:grid-cols-3">
            {[
              { label: "h-index", value: "22" },
              { label: "i10-index", value: "41" },
              { label: "Total citations", value: "1,610" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-ink/10 bg-white px-5 py-4 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {metric.label}
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-ink">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">Google Scholar</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic and social profiles */}
      <section className="bg-paper px-4 py-4 md:px-8 md:py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 md:gap-4">
          {[
            {
              name: "ResearchGate",
              icon: SiResearchgate,
              url: "https://www.researchgate.net/profile/Satya-Dash-3",
            },
            {
              name: "Google Scholar",
              icon: SiGooglescholar,
              url: "https://scholar.google.com/citations?user=3aLkeUYAAAAJ&hl=en&oi=ao",
            },
            {
              name: "Scilit",
              icon: FileText,
              url: "https://www.scilit.com/scholars/019f2742cdff700b85676f2bb63835b5",
            },
            {
              name: "ORCID",
              icon: SiOrcid,
              url: "https://orcid.org/0000-0002-7902-1183",
            },
            {
              name: "LinkedIn",
              icon: FaLinkedinIn,
              url: "https://www.linkedin.com/in/dr-satya-ranjan-dash-7009a539/",
            },
            {
              name: "Instagram",
              icon: SiInstagram,
              url: "https://www.instagram.com/satyaranjan601/",
            },
            {
              name: "Facebook",
              icon: FaFacebookF,
              url: "https://www.facebook.com/satyardash/",
            },
            {
              name: "X (Twitter)",
              icon: FaXTwitter,
              url: "https://x.com/Babunisatya/status/2081618387927716087",
            },
          ].map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white px-4 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:text-base"
            >
              <Icon size={10} aria-hidden="true" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </section>
      {/* Recent activities: horizontal, staggered up and down */}
      <section id="activities" className="bg-paper px-6 py-8 md:px-8 md:py-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-teal md:text-4xl">
                Recent activities
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Moments from recent talks, events and academic engagements.
              </p>
            </div>
          </div>

          {/* Wraps to the next row automatically when a row is full */}
          <div className="mt-12 flex flex-wrap gap-x-5 gap-y-10 pb-12 md:gap-x-8 md:gap-y-14">
            {cards.map((item, i) => (
              <figure
                key={item.src || i}
                className={`w-[calc(50%-0.625rem)] md:w-[calc(33.333%-1.334rem)] lg:w-[calc(25%-1.5rem)] ${
                  i % 2 === 1 ? "mt-8 md:mt-14" : ""
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-white">
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-ink/40">
                      <ImageIcon size={40} />
                      <span className="text-xs">
                        Add photos to src/data/activities
                      </span>
                    </div>
                  )}
                </div>

                <figcaption className="mt-4 flex gap-3">
                  <span className="font-display text-sm font-bold text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-ink">
                    {item.caption || "Caption appears here"}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      {/* Hobbies */}
      <section className="bg-white px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/beyond-academia"
            className="group block rounded-xl transition-colors hover:bg-paper/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            aria-label="Explore Beyond Academia"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-3xl font-bold text-teal md:text-4xl">
                Beyond academia
              </h2>

              <ArrowUpRight
                size={28}
                className="shrink-0 text-teal transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Away from research, my time is shared with the birds and dogs that
              live with us at home.
            </p>

            <p className="mt-4 text-sm font-semibold text-teal">
              Explore beyond academia →
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
