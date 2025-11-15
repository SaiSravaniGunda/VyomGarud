'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plane, Scan, Shield, Navigation2 } from 'lucide-react'

const capabilities = [
  {
    icon: Plane,
    title: 'Tactical UAV Systems',
    description:
      'Advanced multi-rotor and fixed-wing platforms designed for tactical operations with extended range and payload capacity.',
    color: 'from-primary-orange/20 to-primary-orange/5',
    borderColor: 'border-primary-orange/30',
  },
  {
    icon: Scan,
    title: 'Surveillance & Reconnaissance',
    description:
      'State-of-the-art sensor integration for real-time intelligence gathering, target tracking, and situational awareness.',
    color: 'from-white/10 to-white/5',
    borderColor: 'border-white/20',
  },
  {
    icon: Shield,
    title: 'Secure Command & Control',
    description:
      'Military-grade encrypted communication systems ensuring secure data transmission and mission-critical reliability.',
    color: 'from-primary-orange/20 to-primary-orange/5',
    borderColor: 'border-primary-orange/30',
  },
  {
    icon: Navigation2,
    title: 'Autonomous Operations',
    description:
      'AI-powered flight systems with advanced path planning, obstacle avoidance, and autonomous mission execution capabilities.',
    color: 'from-white/10 to-white/5',
    borderColor: 'border-white/20',
  },
]

export default function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="capabilities"
      ref={ref}
      className="py-24 sm:py-32 bg-charcoal relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-primary-orange">Capabilities</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive UAV solutions engineered for mission-critical
            operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`h-full p-8 rounded-lg border ${capability.borderColor} bg-gradient-to-br ${capability.color} backdrop-blur-sm transition-all duration-300 hover:border-primary-orange/50`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary-orange/20 flex items-center justify-center border border-primary-orange/30 group-hover:bg-primary-orange/30 transition-colors">
                      <capability.icon className="w-7 h-7 text-primary-orange" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-orange transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

