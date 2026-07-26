import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#070707] text-white"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-300px] top-[-150px] h-[900px] w-[900px] rounded-full bg-yellow-400/10 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] left-[-250px] h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1700px] px-8 pt-20 pb-24 lg:px-20">
        <div className="grid min-h-screen items-center gap-10 lg:grid-cols-[48%_52%]">

          {/* LEFT */}

          <MotionReveal>

            <span className="inline-block rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Programme Management • Governance • Peacebuilding
            </span>

            <h1 className="mt-8 text-6xl font-black leading-[1.02] tracking-[-0.03em] lg:text-7xl xl:text-[5.8rem]">
              Leading programmes that advance peace,
              <span className="text-yellow-400"> strengthen institutions</span>,
              and empower the next generation of leaders.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
              I design and deliver high-impact programmes across
              peacebuilding, democracy, governance and youth leadership,
              partnering with governments, international organisations,
              and civil society to create measurable social change.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black shadow-lg shadow-yellow-400/20"
              >
                Explore My Work
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="rounded-full border border-white/20 px-8 py-4 transition duration-300 hover:border-yellow-400 hover:text-yellow-400"
              >
                Contact Me
              </motion.a>

            </div>

            <div className="mt-16 h-px w-full max-w-2xl bg-gradient-to-r from-yellow-400/40 via-white/10 to-transparent" />

          </MotionReveal>

          {/* RIGHT */}

          <MotionReveal delay={0.2}>

            <div className="relative flex h-[820px] items-end justify-end overflow-hidden">

              <motion.img
                src="/images/hero.jpg"
                alt="Ayuba Bazam"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                }}
                className="relative h-[820px] w-auto max-w-none object-contain lg:translate-x-6"
              />

            </div>

          </MotionReveal>

        </div>

        {/* Scroll Indicator */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#about"
            className="text-xs uppercase tracking-[0.35em] text-zinc-500 transition hover:text-yellow-400"
          >
            Scroll ↓
          </a>
        </motion.div>

      </div>
    </section>
  );
}