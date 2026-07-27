import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  title: string;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Lightbox({
  isOpen,
  images,
  title,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {/* Previous */}
          <button
            onClick={onPrevious}
            className="absolute left-4 z-20 rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-4 z-20 rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <ChevronRight size={28} />
          </button>

          {/* Content */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 flex w-full max-w-6xl flex-col items-center"
          >
            <h3 className="mb-4 text-center text-2xl font-bold text-white">
              {title}
            </h3>

            <img
              src={images[currentIndex]}
              alt={`${title} ${currentIndex + 1}`}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
            />

            <p className="mt-5 text-sm text-zinc-400">
              {currentIndex + 1} / {images.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}