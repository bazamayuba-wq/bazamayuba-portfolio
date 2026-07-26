import { useEffect, useState } from "react";

import haruna from "../assets/recommendations/haruna.png";
import betty from "../assets/recommendations/betty.jpg";
import gerald from "../assets/recommendations/gerald.png";
import abdul from "../assets/recommendations/abdul.jpg";

const linkedinUrl =
  "https://www.linkedin.com/in/ayuba-bazam-0a9b31113/details/recommendations/?detailScreenTabIndex=0";

const recommendations = [
  {
    name: "Haruna Usman",
    relationship: "Mentor",
    title: "VAM Associate (Research Assessment & Monitoring)",
    organisation: "World Food Programme",
    image: haruna,
    text: `I am pleased to recommend Ayuba Bazam, whom I have had the privilege of mentoring and supporting in his professional journey. Over time, I have observed him demonstrate a high level of professionalism, dedication, integrity, and a genuine commitment to continuous learning and personal development.

Ayuba is a highly motivated and dependable professional with an impressive ability to learn, adapt, and take on new challenges. He is particularly strong in writing and high-level engagement, and he communicates effectively in a way that builds trust and fosters positive working relationships.

What particularly stands out about Ayuba is his passion for growth and improvement. He approaches his responsibilities with commitment, curiosity, and a strong desire to deliver quality results.

I highly recommend him to any organisation or professional opportunity that values dedication, professionalism, continuous growth, and impact.`,
  },

  {
    name: "Betty Ategbero",
    relationship: "Professional Colleague",
    title: "Pharmacy Manager",
    organisation: "MSF-Holland",
    image: betty,
    text: `Ayuba Bazam is a purpose-driven development practitioner with a strong commitment to creating measurable social impact.

He brings solid experience in designing and implementing programs in peacebuilding, interfaith dialogue, youth engagement, and civic participation.

He is highly intelligent, adaptable, and results-oriented, and possesses a strong ability to mobilize people and resources effectively.

What sets him apart is his ability to engage across all levels—from high-level stakeholders to young people—building trust and driving meaningful dialogue.

I highly recommend him for any impact-focused opportunity.`,
  },

  {
    name: "Prof. Gerald Maki",
    relationship: "Faculty Mentor",
    title: "Professor of English",
    organisation: "Ivy Tech Community College",
    image: gerald,
    text: `Ayuba is a sharp, motivated, brilliant young global leader who inspires others around him with his visionary work to bring people together for meaningful connection.

As a participant in the Journalists and Writers Foundation Global Youth Leadership Programme, Ayuba exemplified leadership and shared thoughtful ideas for promoting interfaith dialogue and supporting local communities within a wider global framework.

I am honored to recommend Ayuba and deeply inspired by his efforts.`,
  },

  {
    name: "Abdul A. Arjali",
    relationship: "Academic Peer",
    title: "ESL/EFL Instructor • PhD Candidate",
    organisation: "Academic Colleague",
    image: abdul,
    text: `I had the privilege of studying alongside Ayuba Bazam, and from the very beginning, his passion for peacebuilding and community development was evident.

He leads with empathy, purpose, and a genuine commitment to bringing people together for positive change.

His professionalism, humility, and dedication to interfaith dialogue, youth empowerment, and partnership building make him stand out as both a leader and a changemaker.

I’m happy to recommend him not just for his skills, but also for his character.`,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % recommendations.length);
      setExpanded(false);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setActive((prev) => (prev + 1) % recommendations.length);
    setExpanded(false);
  };

  const previous = () => {
    setActive((prev) =>
      prev === 0 ? recommendations.length - 1 : prev - 1
    );
    setExpanded(false);
  };

  const item = recommendations[active];

  const preview =
    item.text.length > 330
      ? item.text.substring(0, 330) + "..."
      : item.text;

  return (
    <section
      id="recommendations"
      className="bg-[#090909] py-32 text-white"
    >
      <div className="mx-auto max-w-6xl px-8">

        <div className="flex items-center justify-between">

          <div>

            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Recommendations
            </span>

            <h2 className="mt-8 text-5xl font-black lg:text-6xl">
              Trusted by
              <br />
              mentors and partners.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Public recommendations from professionals who have mentored,
              taught, collaborated with, or worked alongside me.
            </p>

          </div>

          <div className="hidden gap-4 md:flex">

            <button
              onClick={previous}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              ←
            </button>

            <button
              onClick={next}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              →
            </button>

          </div>

        </div>

        <div className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.03] p-12">          <div className="flex flex-col items-center text-center">

            <img
              src={item.image}
              alt={item.name}
              className="h-28 w-28 rounded-full object-cover ring-4 ring-yellow-400/20 transition duration-300 hover:scale-105"
            />

            <span className="mt-6 rounded-full bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
              {item.relationship}
            </span>

            <h3 className="mt-6 text-3xl font-black">
              {item.name}
            </h3>

            <p className="mt-2 text-lg text-zinc-300">
              {item.title}
            </p>

            <p className="mt-1 uppercase tracking-[0.25em] text-yellow-400">
              {item.organisation}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#0A66C2]/30 bg-[#0A66C2]/10 px-5 py-2 text-sm font-medium text-[#6DB5FF]">
              <span className="text-lg">✓</span>
              Verified LinkedIn Recommendation
            </div>

            <div className="mt-10 max-w-3xl">

              <p className="text-left text-xl leading-9 text-zinc-300 whitespace-pre-line">
                {expanded ? item.text : preview}
              </p>

              {item.text.length > 330 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-6 font-semibold text-yellow-400 transition hover:text-yellow-300"
                >
                  {expanded ? "Read less" : "Read more"}
                </button>
              )}

            </div>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              See all LinkedIn Recommendations
              <span>↗</span>
            </a>

          </div>

        </div>

        <div className="mt-10 flex justify-center gap-3">

          {recommendations.map((_, index) => (

            <button
              key={index}
              onClick={() => {
                setActive(index);
                setExpanded(false);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-10 bg-yellow-400"
                  : "w-3 bg-zinc-600 hover:bg-zinc-400"
              }`}
              aria-label={`Recommendation ${index + 1}`}
            />

          ))}

        </div>

        <div className="mt-12 flex justify-center gap-4 md:hidden">

          <button
            onClick={previous}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 hover:border-yellow-400 hover:text-yellow-400"
          >
            ←
          </button>

          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 hover:border-yellow-400 hover:text-yellow-400"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}