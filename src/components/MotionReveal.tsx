import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../lib/animations";

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function MotionReveal({
  children,
  delay = 0,
}: MotionRevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}