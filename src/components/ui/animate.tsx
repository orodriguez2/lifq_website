"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type MotionDivProps = ComponentProps<typeof motion.div>;

interface FadeUpProps extends Omit<MotionDivProps, "initial" | "animate" | "variants"> {
  delay?: number;
  children: ReactNode;
}

export function FadeUp({ delay = 0, children, ...props }: FadeUpProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div {...(props as ComponentProps<"div">)}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      variants={fadeUpVariants}
      transition={{ duration: 0.55, ease, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends Omit<MotionDivProps, "initial" | "animate" | "variants"> {
  children: ReactNode;
}

export function StaggerContainer({ children, ...props }: StaggerContainerProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div {...(props as ComponentProps<"div">)}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      variants={staggerContainerVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends Omit<MotionDivProps, "variants"> {
  hover?: boolean;
  children: ReactNode;
}

export function StaggerItem({ hover = true, children, ...props }: StaggerItemProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div {...(props as ComponentProps<"div">)}>{children}</div>;
  return (
    <motion.div
      variants={staggerItemVariants}
      transition={{ duration: 0.45, ease }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
