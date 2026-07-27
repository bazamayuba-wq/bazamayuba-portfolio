import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#070707] text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[140px] lg:left-[75%]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        {/* Desktop */}
        <div className="hidden min-h-screen items-center gap-12 lg:grid lg:grid-cols-2">

          <MotionReveal>
            <div className="max-w-xl">

              <span className="inline-block rounded-full border border-yellow-400/30 px-4 py-2 text-[11px] font-semibold tracking-[0.25em] text-yellow-400">
                PROGRAMME MANAGEMENT • GOVERNANCE • PEACEBUILDING
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[1.05]">
                Leading programmes that advance peace,
                <span className="text-yellow-400">
                  {" "}strengthen institutions
                </span>,
                and empower the next generation of leaders.
              </h1>

              <p className="mt-8 text-lg leading-8 text-zinc-400">
                I design and deliver high-impact programmes across
                peacebuilding, democracy, governance and youth leadership,
                partnering with governments, international organisations and
                civil society to create measurable social change.
              </p>

              <div className="mt-10 flex gap-4">

                <a
                  href="#projects"
                  className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
                >
                  Explore My Work
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400"
                >
                  Contact Me
                </a>

              </div>

            </div>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <div className="flex justify-center lg:justify-end">

              <motion.img
                src="/hero.png"
                alt="Ayuba Bazam"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  w-[260px]
                  sm:w-[340px]
                  md:w-[400px]
                  lg:w-[460px]
                  xl:w-[500px]
                  h-auto
                  object-contain
                  drop-shadow-[0_25px_60px_rgba(0,0,0,.55)]
                "
              />

            </div>
          </MotionReveal>

        </div>

        {/* Mobile */}
        <div className="lg:hidden min-h-screen flex flex-col justify-center pt-28 pb-10">

          <MotionReveal>

            <span className="inline-block rounded-full border border-yellow-400/30 px-4 py-2 text-[10px] tracking-[0.2em] text-yellow-400">
              PROGRAMME MANAGEMENT • GOVERNANCE • PEACEBUILDING
            </span>

            <h1 className="mt-6 text-[2.35rem] font-black leading-tight">
              Leading programmes that advance peace,
              <span className="text-yellow-400">
                {" "}strengthen institutions
              </span>,
              and empower the next generation of leaders.
            </h1>

            <p className="mt-6 text-base leading-7 text-zinc-400">
              I design and deliver high-impact programmes across
              peacebuilding, democracy, governance and youth leadership,
              partnering with governments, international organisations and
              civil society.
            </p>

            <div className="mt-8 flex flex-col gap-4">

              <a
                href="#projects"
                className="rounded-full bg-yellow-400 px-7 py-4 text-center font-semibold text-black"
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold"
              >
                Contact Me
              </a>

            </div>

          </MotionReveal>

          <MotionReveal delay={0.2}>

            <div className="mt-12 flex justify-center">

              <motion.img
                src="/hero.png"
                alt="Ayuba Bazam"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[260px] h-auto object-contain"
              />

            </div>

          </MotionReveal>

        </div>

      </div>
    </section>
  );
}