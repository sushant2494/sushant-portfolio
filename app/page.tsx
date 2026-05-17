export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-400">
          Executive Portfolio
        </div>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Sushant Choudhary
        </h1>

        <p className="mt-6 text-xl text-neutral-300 md:text-2xl">
          Commercial Analyst | Sales Strategy | Growth & Business Performance
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-500">
          Corporate professional focused on commercial analytics, business
          performance, sales strategy, and growth initiatives.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/sushant-choudhary-457925108/"
            target="_blank"
            className="rounded-2xl bg-white px-6 py-3 text-black transition hover:scale-105"
          >
            LinkedIn
          </a>

          <button className="rounded-2xl border border-neutral-700 px-6 py-3 transition hover:border-neutral-400">
            Resume
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-neutral-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            About
          </p>

          <h2 className="mb-10 text-4xl font-bold">
            Professional Overview
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                Commercial Analytics
              </h3>

              <p className="leading-7 text-neutral-400">
                Supporting strategic business decisions through performance
                reporting and analytical insights.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                Sales Strategy
              </h3>

              <p className="leading-7 text-neutral-400">
                Experience working across sales operations, growth tracking,
                and commercial execution frameworks.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                Business Performance
              </h3>

              <p className="leading-7 text-neutral-400">
                Enabling data-driven commercial decisions through structured
                reporting and operational visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-neutral-900 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Career Journey
          </p>

          <h2 className="mb-16 text-4xl font-bold">
            Professional Experience
          </h2>

          <div className="space-y-8">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">
                  Commercial Analyst
                </h3>

                <span className="rounded-full border border-neutral-700 px-4 py-1 text-sm text-neutral-400">
                  Current
                </span>
              </div>

              <p className="text-neutral-400">
                Career timeline and achievements will be managed from admin
                panel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="border-t border-neutral-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Media
          </p>

          <h2 className="mb-14 text-4xl font-bold">
            Photos & Videos
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-neutral-700 bg-neutral-900/20 text-neutral-500">
              Photo Placeholder
            </div>

            <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-neutral-700 bg-neutral-900/20 text-neutral-500">
              Video Placeholder
            </div>

            <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-neutral-700 bg-neutral-900/20 text-neutral-500">
              Gallery Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-neutral-900 px-6 py-24 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Contact
        </p>

        <h2 className="text-5xl font-bold">
          Let’s Connect
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
          Open to professional collaborations, strategic discussions,
          analytics initiatives, and business transformation opportunities.
        </p>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/sushant-choudhary-457925108/"
            target="_blank"
            className="rounded-2xl bg-white px-6 py-3 text-black transition hover:scale-105"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}