const timeline = [
  {
    period: "2026 – Present",
    role: "Country Director, Nigeria",
    organisation: "WonderFuture CIC",
    description:
      "Leading WonderFuture CIC's national expansion in Nigeria, providing strategic leadership for civic engagement, democratic participation, youth leadership and peacebuilding initiatives.",
  },
  {
    period: "2026 – Present",
    role: "Founder & Executive Director",
    organisation: "The Impact Angle",
    description:
      "Founded a social impact consultancy supporting NGOs, development organisations and social enterprises through programme design, monitoring & evaluation, organisational strategy and capacity strengthening.",
  },
  {
    period: "2023 – 2025",
    role: "Program Coordinator",
    organisation: "Ufuk Dialogue",
    description:
      "Directed more than 25 programmes across peacebuilding, intercultural dialogue and youth leadership while building strategic partnerships and leading multidisciplinary teams.",
  },
  {
    period: "2019 – 2023",
    role: "Program Officer",
    organisation: "NEAR Foundation",
    description:
      "Supported humanitarian and community development programmes across Northeast Nigeria, working with international partners in conflict-affected communities.",
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      className="bg-[#0d0d0d] py-32 text-white"
    >
      <div className="mx-auto max-w-6xl px-8">

        <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Career Journey
        </span>

        <h2 className="mt-8 text-5xl font-black lg:text-6xl">
          Leadership Timeline
        </h2>

        <div className="relative mt-20 border-l border-yellow-400/30 pl-10">

          {timeline.map((item) => (

            <div
              key={item.role}
              className="relative mb-16"
            >

              <div className="absolute -left-[49px] top-2 h-5 w-5 rounded-full border-4 border-[#0d0d0d] bg-yellow-400" />

              <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                {item.period}
              </p>

              <h3 className="mt-3 text-3xl font-black">
                {item.role}
              </h3>

              <p className="mt-2 text-lg font-semibold text-zinc-300">
                {item.organisation}
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}