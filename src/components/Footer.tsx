export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-8 py-16 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-3xl font-black tracking-tight">
            Ayuba Bazam
          </h2>

          <p className="mt-4 max-w-md text-lg leading-8 text-zinc-400">
            Programme Leader • Peacebuilder • Social Entrepreneur
          </p>

          <p className="mt-6 max-w-lg text-zinc-500">
            Building partnerships, strengthening institutions, and empowering
            young people through peacebuilding, dialogue, and strategic
            programme leadership.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-10 text-sm uppercase tracking-[0.2em] text-zinc-400">

          <div className="space-y-4">

            <a
              href="#about"
              className="block transition hover:text-yellow-400"
            >
              About
            </a>

            <a
              href="#projects"
              className="block transition hover:text-yellow-400"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="block transition hover:text-yellow-400"
            >
              Experience
            </a>

            <a
              href="#recommendations"
              className="block transition hover:text-yellow-400"
            >
              Recommendations
            </a>

          </div>

          <div className="space-y-4">

            <a
              href="mailto:bazamayuba@yahoo.com"
              className="block transition hover:text-yellow-400"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/ayuba-bazam-0a9b31113/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-yellow-400"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/2348105909343"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-yellow-400"
            >
              WhatsApp
            </a>

            <a
              href="/Ayuba_Bazam_CV.pdf"
              download
              className="block transition hover:text-yellow-400"
            >
              Download CV
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © {year} Ayuba Bazam. All rights reserved.
          </p>

          <p>
            Designed & developed with purpose.
          </p>

        </div>

      </div>
    </footer>
  );
}