'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a backend
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 bg-charcoal relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
              Get in <span className="text-primary-orange">Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2">
              Ready to explore how VyomGarud can support your mission? Contact
              us today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Reach out to our team for inquiries, partnerships, or support.
                  We&apos;re here to help you find the right UAV solution for your
                  needs.
                </p>
              </div>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-orange/20 flex items-center justify-center border border-primary-orange/30 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-orange" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Phone</h4>
                    <a
                      href="tel:+918881444693"
                      className="text-sm sm:text-base text-gray-400 hover:text-primary-orange transition-colors break-all"
                    >
                      +91 8881444693
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-orange/20 flex items-center justify-center border border-primary-orange/30 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-orange" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                    <a
                      href="mailto:contact@vyomgarud.com"
                      className="text-sm sm:text-base text-gray-400 hover:text-primary-orange transition-colors break-all"
                    >
                      contact@vyomgarud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-orange/20 flex items-center justify-center border border-primary-orange/30 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-orange" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Location</h4>
                    <p className="text-sm sm:text-base text-gray-400">India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6 p-6 sm:p-8 rounded-lg border border-white/10 bg-charcoal-light/50 backdrop-blur-sm"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 bg-charcoal border border-white/10 rounded-lg focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 bg-charcoal border border-white/10 rounded-lg focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 sm:py-3 bg-charcoal border border-white/10 rounded-lg focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary-orange text-charcoal font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-primary-orange/90 transition-all duration-300 shadow-lg shadow-primary-orange/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  whileHover={{ scale: submitted ? 1 : 1.02 }}
                  whileTap={{ scale: submitted ? 1 : 0.98 }}
                  disabled={submitted}
                >
                  {submitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10 text-center text-gray-400"
          >
            <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} VyomGarud. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

