"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function NewYearScreen({ onNext }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-3xl mx-auto">

        {/* Glowing heart */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center border border-pink-400/30 pulse-glow">
            <Heart className="w-10 h-10 text-pink-400/80" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl text-pink-200 mb-6 font-semibold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Happy{" "}
          <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            New Year
          </span>
        </motion.h1>

        {/* Message box */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 mb-10 text-pink-100/80 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <p>
            As this new year begins,<br />
            I just wanted to wish you happiness,<br />
            peace, and moments that make you smile.
          </p>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full pulse-glow transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Continue →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
