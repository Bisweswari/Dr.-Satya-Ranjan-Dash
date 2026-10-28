export default function ListingPage({
  eyebrow,
  title,
  description,
  items = [],
}) {
  return (
    <main>
      {/* Dark band, same structure as the home hero */}
      <section className="relative bg-ink">
        <div className="absolute inset-x-0 top-0 h-16 bg-paper" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-gold md:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-xl leading-7 text-white/85">{description}</p>
        </div>
      </section>

      <section className="bg-paper px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          {items.length ? (
            <div className="border-t border-ink">
              {items.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-3 border-b border-ink/20 py-8 md:grid-cols-[1fr_1.4fr] md:gap-10"
                >
                  <div>
                    <p className="text-sm text-teal">
                      {item.type || item.date || eyebrow}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold text-ink">
                      {item.title}
                    </h2>
                  </div>
                  <div>
                    <p className="leading-7 text-slate-600">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block border-b border-teal text-sm font-semibold text-teal hover:text-ink"
                      >
                        Learn more
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="border-t border-ink pt-8 text-slate-600">
              Nothing here yet. Add items to this page's list.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
