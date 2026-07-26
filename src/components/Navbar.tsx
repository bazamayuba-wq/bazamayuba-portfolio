import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090909]/75 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <a
          href="#home"
          className="group text-4xl font-black uppercase tracking-[0.28em] text-white"
        >
          BAZAM
          <span className="text-yellow-400 transition duration-300 group-hover:text-white">
            .
          </span>
        </a>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium uppercase tracking-[0.25em] text-zinc-400 transition duration-300 hover:text-white"
            >
              {link.label}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}

        <a
          href="/Ayuba_Bazam_CV.pdf"
          download
          className="hidden rounded-full border border-yellow-400 px-7 py-3 font-semibold text-yellow-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/20 lg:block"
        >
          Download CV
        </a>

      </div>
    </motion.header>
  );
}