import { useRef } from "react";
const phdScholars = [
  {
    name: "Dr. Namita Mishra",
    title:
      "Towards Inclusive Human–Language Interaction: Speech Recognition and Text Processing for Low-Resource Languages",
    year: 2026,
  },
  {
    name: "Dr. Rupashree Mohanty",
    title:
      "Fetal Health Prediction and Anatomical Assessment Using Machine Learning and Deep Learning Techniques",
    year: 2026,
  },
  {
    name: "Dr. Bikram Biruli",
    title:
      "Application of Artificial Intelligence Recognition for Language Maintenance in Ho Language",
    year: 2025,
  },
  {
    name: "Dr. Arghyadeep Sen",
    title: "Healthcare Question Answering System in Bengali",
    year: 2025,
  },
  {
    name: "Dr. Dula Bankira",
    title: "Computational Linguistics for Ho Language",
    year: 2023,
  },
  {
    name: "Dr. Pranab Kumar Bharimalla",
    title:
      "A Secured Blockchain-Based Electronic Health Record System for the Indian Subcontinent",
    year: 2022,
  },
  {
    name: "Dr. Rekha Sahu",
    title:
      "Detection of Brain Abnormalities from Spontaneous Electroencephalography Using Spiking Neural Network",
    year: 2022,
  },
  {
    name: "Dr. Debjani Panda",
    title: "Predictive Analytics for Cardio Health Systems",
    year: 2021,
  },
];

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

const mastersScholars = [
  {
    name: "Arosekk Padhi",
    program: "B.Tech. & M.Tech. Dual Degree in Biotechnology",
    year: 2024,
    title:
      "Prediction of Chronic Kidney Diseases Using Supervised Machine Learning Models",
  },
  {
    name: "Ankita Mondal",
    program: "B.Tech. & M.Tech. Dual Degree in Biotechnology",
    year: 2023,
    title:
      "Detection and Classification of Diseases in Rice Crops from Their Leaves Using Machine Learning Algorithms",
  },
  {
    name: "Sudeshana Swain",
    program: "B.Tech. & M.Tech. Dual Degree in Biotechnology",
    year: 2023,
    title:
      "Identifying the Variation in TAL Effectors from Different Xanthomonas oryzae Strains Using Bioinformatics",
  },
  {
    name: "Soumya Ranjan Mohanty",
    program: "B.Tech. & M.Tech. Dual Degree in Biotechnology",
    year: 2023,
    title:
      "Identifying the Variation in TAL Effectors from Different Xanthomonas oryzae Strains Using Bioinformatics",
  },
  {
    name: "Bithika Sardar",
    program: "B.Tech. & M.Tech. Dual Degree in Biotechnology",
    year: 2021,
    title:
      "In Silico Identification of SSRs in Different Trichoderma Species from Available Sequences",
  },
  {
    name: "Kriti Maurya",
    program: "B.Tech. & M.Tech. Dual Degree in Biotechnology",
    year: 2021,
    title:
      "Sequence Analysis of COVID-19 Strains from Different Geographical Regions and In-Silico Analysis of Correlation Between Environment and Their Antigenicity",
  },
  {
    name: "Oindrila Das",
    program: "M.Sc. in Biotechnology",
    year: 2021,
    title:
      "Genome-Wide Classification of Defensin Gene in Oryza sativa Indica Subspecies",
  },
  {
    name: "Saumya Biswas",
    program: "B.Tech. & M.Tech. Dual Degree in Biotechnology",
    year: 2021,
    title:
      "Survey of Sweet Genes in Indica Rice and In-Silico Classification in Different Rice Varieties Using an Algorithmic Approach",
  },
  {
    name: "Srestha Kumar",
    program: "B.Tech. & M.Tech. Dual Degree in Biotechnology",
    year: 2021,
    title:
      "In Silico Characterization and Homology Modelling of Membrane-Bound Protein in Different Rice Cultivars",
  },
  {
    name: "Susmita Das",
    program: "M.Sc. in Biotechnology",
    year: 2021,
    title: "Disease Prediction on the Basis of Sickle Cell Anemia",
  },
  {
    name: "Kunal Kabi",
    program: "Network M.Tech. in Computer Science and Engineering",
    year: 2018,
    title: "Protein Structure Prediction Using Convolutional Neural Networks",
  },
  {
    name: "Jyotiprakash Panigrahi",
    program: "M.Tech. in Computer Science and Engineering",
    year: 2018,
    title: "Disease Prediction on the Basis of SNPs",
  },
];

function Section({ number, title, description, children, sectionRef }) {
  return (
    <section ref={sectionRef} className="mb-16 scroll-mt-8">
      <div className="mb-7 flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 font-display text-sm font-bold text-teal">
          {number}
        </span>
        <div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/65">
              {description}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function ScholarCard({ name, title, year, program }) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-ink">{name}</h3>
        <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
          {year}
        </span>
      </div>

      {program && (
        <p className="mt-2 text-sm font-medium text-ink/60">{program}</p>
      )}

      <p className="mt-3 text-sm leading-7 text-ink/75">
        <span className="font-semibold text-ink">Thesis: </span>
        {title}
      </p>
    </article>
  );
}

export default function Scholars() {
  const phdRef = useRef(null);
  const booksRef = useRef(null);
  const mastersRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <main className="min-h-screen bg-paper px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            Academic mentorship
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
            Scholars & Edited Books
          </h1>

          <p className="mt-5 text-base leading-8 text-ink/70 md:text-lg">
            Research contributions, doctoral supervision, postgraduate projects,
            and edited scholarly volumes associated with Dr. Satya Ranjan Dash.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => scrollToSection(phdRef)}
              className="rounded-xl border border-ink/10 bg-white px-5 py-4 text-left transition hover:-translate-y-1 hover:border-teal hover:shadow-md"
            >
              <span className="block font-display text-2xl font-bold text-teal">
                {phdScholars.length}
              </span>
              <span className="mt-1 block text-sm text-ink/70">
                PhD scholars →
              </span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection(booksRef)}
              className="rounded-xl border border-ink/10 bg-white px-5 py-4 text-left transition hover:-translate-y-1 hover:border-teal hover:shadow-md"
            >
              <span className="block font-display text-2xl font-bold text-teal">
                {editedBooks.length}
              </span>
              <span className="mt-1 block text-sm text-ink/70">
                Edited books →
              </span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection(mastersRef)}
              className="rounded-xl border border-ink/10 bg-white px-5 py-4 text-left transition hover:-translate-y-1 hover:border-teal hover:shadow-md"
            >
              <span className="block font-display text-2xl font-bold text-teal">
                {mastersScholars.length}
              </span>
              <span className="mt-1 block text-sm text-ink/70">
                Master's scholars →
              </span>
            </button>
          </div>
        </header>

        <Section
          sectionRef={phdRef}
          number="01"
          title="PhD Research Scholars"
          description="Doctoral research spanning language technologies, healthcare, artificial intelligence, and computational linguistics."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {phdScholars.map((scholar) => (
              <ScholarCard key={scholar.name} {...scholar} />
            ))}
          </div>
        </Section>

        <Section
          sectionRef={booksRef}
          number="02"
          title="Edited Books"
          description="Scholarly volumes on intelligent technologies, low-resource languages, and healthcare natural language processing."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {editedBooks.map((book) => (
              <article
                key={book.title}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                  {book.publisher} · {book.year}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink">
                  {book.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink/65">
                  {book.authors}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          sectionRef={mastersRef}
          number="03"
          title="MTech / MSc Research Scholars"
          description="Postgraduate and dual-degree research projects in biotechnology, bioinformatics, machine learning, and computational biology."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {mastersScholars.map((scholar) => (
              <ScholarCard key={scholar.name} {...scholar} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
