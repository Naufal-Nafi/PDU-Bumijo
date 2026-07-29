"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface PopInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function PopIn({
  children,
  delay = 0,
  className,
}: PopInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}