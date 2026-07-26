import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";

const projects = [
  {
    title: "Peace Ambassadors Certificate Programme",
    role: "Programme Manager",
    image: "/images/Projects/peace-ambassadors/1.jpg",
    description:
      "Led the design and delivery of two cohorts of the Peace Ambassadors Certificate Programme, strengthening youth leadership, peacebuilding knowledge and practical conflict resolution skills. Using findings from Monitoring, Evaluation, Accountability and Learning (MEAL), I redesigned the programme from a 30-week curriculum into a more impactful 12-week model.",
    stats: [
      "200+ Participants",
      "2 Cohorts",
      "30 Weeks → 12 Weeks",
    ],
  },

  {
    title: "International Conference on Love & Tolerance",
    role: "Project Lead",
    image: "/images/Projects/love-tolerance/1.jpg",
    description:
      "Led the planning and execution of the 7th, 8th and 9th editions of one of Nigeria's leading dialogue platforms, coordinating international speakers, government institutions, faith leaders, logistics and programme delivery to promote peaceful coexistence and social cohesion.",
    stats: [
      "6,500+ Participants",
      "15+ Countries",
      "3 Editions",
    ],
  },

  {
    title: "Lunch for Democracy",
    role: "Country Director, Nigeria",
    image: "/images/Projects/lunch-for-democracy/1.jpg",
    description:
      "Leading WonderFuture CIC's flagship democracy initiative in Nigeria by building university partnerships, facilitating civic dialogue and creating opportunities for young people to actively participate in democratic processes through meaningful conversations and community engagement.",
    stats: [
      "University Partnerships",
      "Youth Civic Engagement",
      "National Expansion",
    ],
  },

  {
    title: "International Peace Conference 2024",
    role: "Programme Manager",
    image: "/images/Projects/international-peace-conference/1.jpg",
    description:
      "Coordinated programme delivery and stakeholder engagement for a national peacebuilding conference that convened government institutions, development partners, academia and civil society organizations to advance dialogue, conflict prevention and sustainable peace.",
    stats: [
      "National Conference",
      "Multi-sector Partnerships",
      "Peacebuilding Leadership",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#070707] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <MotionReveal>
          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Featured Projects
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
            Programmes that
            <br />
            create measurable impact.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Selected initiatives demonstrating programme management,
            peacebuilding, governance, civic engagement and leadership across
            local, national and international contexts.
          </p>
        </MotionReveal>

        <div className="mt-24 space-y-28">
          {projects.map((project, index) => (
            <MotionReveal
              key={project.title}
              delay={index * 0.12}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`grid items-center gap-14 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                    {project.role}
                  </span>

                  <h3 className="mt-6 text-4xl font-black leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    {project.stats.map((stat) => (
                      <div
                        key={stat}
                        className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}