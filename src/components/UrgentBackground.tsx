import React from 'react';
import { motion } from 'framer-motion';

export const UrgentBackground = () => (
  <motion.div
    className="absolute inset-0 z-0 pointer-events-none"
    animate={{
      background: [
        "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.05) 0%, transparent 70%)",
        "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 70%)",
        "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.05) 0%, transparent 70%)",
      ],
    }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />
);
