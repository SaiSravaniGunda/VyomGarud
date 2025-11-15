'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
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
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mission{' '}
            <span className="text-primary-orange">Excellence</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            VyomGarud stands at the forefront of unmanned aerial vehicle
            technology, delivering cutting-edge drone systems engineered for
            the most demanding operational environments. Our mission is to
            provide military-grade UAV solutions that combine precision
            engineering, advanced autonomy, and unwavering reliability.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We empower defense forces, security agencies, and critical
            infrastructure operators with autonomous systems that excel in
            reconnaissance, surveillance, and tactical operations. Every system
            we deliver is built to exceed the highest standards of performance,
            security, and operational readiness.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

