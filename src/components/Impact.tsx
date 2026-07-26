const stats = [
  {
    value: "25+",
    label: "Programmes Delivered",
  },
  {
    value: "50,000+",
    label: "Participants Reached",
  },
  {
    value: "8",
    label: "Countries Led Across",
  },
  {
    value: "15+",
    label: "International Facilitators Coordinated",
  },
];

const organisations = [
  "WonderFuture CIC",
  "The Impact Angle",
  "Ufuk Dialogue",
  "NEAR Foundation",
  "Journalists & Writers Foundation",
  "Tony Elumelu Foundation",
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="bg-[#090909] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Impact at a Glance
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
            Delivering measurable impact
            <br />
            through leadership and partnership.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            My work spans programme management, peacebuilding, democratic
            participation, youth leadership and organisational development,
            partnering with governments, development partners, civil society,
            and international organisations to deliver sustainable results.
          </p>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >
              <h3 className="text-5xl font-black text-yellow-400">
                {stat.value}
              </h3>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

        {/* Organisations */}

        <div className="mt-28">

          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Professional Experience
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {organisations.map((org) => (

              <div
                key={org}
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-300 transition duration-300 hover:border-yellow-400 hover:text-white"
              >
                {org}
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}