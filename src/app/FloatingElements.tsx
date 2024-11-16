'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Large Gradient Circle */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: '10%',
          left: '15%',
        }}
      />

      {/* Medium Blue Circle */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          top: '40%',
          right: '15%',
        }}
      />

      {/* Small Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-indigo-400/30 dark:bg-indigo-400/20 rounded-full blur-sm"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
          style={{
            left: `${25 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}

      {/* Glowing Ring */}
      <motion.div
        className="absolute w-64 h-64 border-2 border-purple-300/20 dark:border-purple-400/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          top: '60%',
          left: '25%',
        }}
      />
    </div>
  )
}