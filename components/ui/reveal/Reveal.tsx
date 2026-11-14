"use client";
import { motion } from "motion/react";
import { FC, ReactNode } from "react";
type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "x" | "y";
  offset?: number;
  isImmediate?: boolean;
};
const Reveal: FC<RevealProps> = ({
  children,
  delay,
  className,
  direction = "y",
  offset = 40,
  isImmediate = false,
}) => {
  const visible = { opacity: 1, [direction]: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, [direction]: offset }}
      className={className}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...(isImmediate
        ? { animate: visible }
        : {
            whileInView: visible,
            viewport: { once: true, amount: 0.2 },
          })}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
