export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] py-32 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Executive Profile
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
            Building stronger institutions by investing in people.
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            I am a peacebuilding practitioner, programme management specialist,
            and social entrepreneur with more than seven years of experience
            leading initiatives in peacebuilding, democratic participation,
            youth leadership, intercultural dialogue, and community
            development.
          </p>

          <p className="mt-6 text-lg leading-9 text-zinc-400">
            Throughout my career, I have designed and delivered programmes,
            coordinated multicultural teams, built strategic partnerships,
            and managed initiatives that have strengthened social cohesion,
            civic engagement, and leadership development across Nigeria and
            beyond.
          </p>

          <p className="mt-6 text-lg leading-9 text-zinc-400">
            My work brings together governments, development partners,
            faith-based institutions, civil society organisations and young
            leaders to design practical solutions that create measurable,
            sustainable impact.
          </p>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              Experience
            </p>

            <h3 className="mt-3 text-4xl font-black">
              7+ Years
            </h3>

            <p className="mt-4 text-zinc-400">
              Leading programmes across peacebuilding, governance,
              humanitarian response, civic engagement and youth leadership.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              Expertise
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              {[
                "Programme Management",
                "Peacebuilding",
                "Democracy",
                "Governance",
                "Stakeholder Engagement",
                "Youth Leadership",
                "Monitoring & Evaluation",
                "Partnership Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-8">

            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              Leadership Philosophy
            </p>

            <blockquote className="mt-5 text-2xl font-semibold leading-10">
              "Lasting impact begins with empowered people, trusted
              partnerships, and programmes designed to outlive those who
              lead them."
            </blockquote>

          </div>

        </div>

      </div>
    </section>
  );
}