'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  {
    title: 'Military-Grade Reliability',
    description:
      'Rigorous testing and certification processes ensure our systems meet the highest standards for defense applications.',
  },
  {
    title: 'Advanced AI Autonomy',
    description:
      'Cutting-edge machine learning algorithms enable intelligent decision-making and adaptive mission execution.',
  },
  {
    title: 'Precision Engineering',
    description:
      'Every component is meticulously designed and manufactured to deliver exceptional performance in extreme conditions.',
  },
]

export default function Highlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 md:py-32 bg-charcoal-light relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why <span className="text-primary-orange">VyomGarud</span>
          </motion.h2>

          <div className="space-y-6 sm:space-y-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="flex gap-4 sm:gap-6 items-start group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-orange/20 flex items-center justify-center border border-primary-orange/30 group-hover:bg-primary-orange/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-orange" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-primary-orange transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

