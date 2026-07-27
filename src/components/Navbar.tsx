import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border transition-all duration-300 lg:h-20 lg:px-8 px-5 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-2xl backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="text-2xl font-black tracking-[0.2em] text-white"
        >
          AYUBA BAZAM<span className="text-yellow-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-400 transition hover:text-yellow-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/Ayuba_Bazam_CV.pdf"
            download
            className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Download CV
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.25 }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl lg:hidden"
            >
              <nav className="flex flex-col p-6">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/5 py-4 text-lg font-medium text-white transition hover:text-yellow-400"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="/Ayuba_Bazam_CV.pdf"
                  download
                  className="mt-6 rounded-full bg-yellow-400 py-4 text-center font-semibold text-black"
                >
                  Download CV
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}