import { useState } from "react";
import { motion } from "framer-motion";

import MotionReveal from "./MotionReveal";
import Lightbox from "./Lightbox";

import { highlights } from "../data/highlights";

export default function MoreHighlights() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImage(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    if (selectedProject === null) return;

    setCurrentImage((prev) =>
      prev === highlights[selectedProject].images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    if (selectedProject === null) return;

    setCurrentImage((prev) =>
      prev === 0 ? highlights[selectedProject].images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section
        id="more-highlights"
        className="bg-[#050505] py-32 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <MotionReveal>
            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
              More Highlights
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
              Beyond the
              <br />
              flagship programmes.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Additional initiatives that reflect my commitment to
              peacebuilding, youth development, humanitarian service and
              organizational leadership.
            </p>
          </MotionReveal>          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((project, index) => (
              <MotionReveal
                key={project.title}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="h-80 w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-black">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <button
                      onClick={() => openGallery(index)}
                      className="mt-8 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                    >
                      View Photos
                    </button>
                  </div>
                </motion.div>
              </MotionReveal>
            ))}
          </div> </div>
      </section>

      <Lightbox
        isOpen={selectedProject !== null}
        images={
          selectedProject !== null
            ? highlights[selectedProject].images
            : []
        }
        title={
          selectedProject !== null
            ? highlights[selectedProject].title
            : ""
        }
        currentIndex={currentImage}
        onClose={closeGallery}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
}