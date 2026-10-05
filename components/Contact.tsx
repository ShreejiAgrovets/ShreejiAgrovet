'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Please contact us for any inquiries or business opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold">Purvam Overseas</p>
                  <p>192, Shukan Mall, Science city Road</p>
                  <p>Sola, Ahmedabad-380060, Gujarat</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-600 mr-3" />
                <a href="tel:+917990772656" className="hover:text-green-600 transition-colors">
                  +91 7990772656
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-green-600 mr-3" />
                <a href="mailto:purvamoverseas@gmail.com" className="hover:text-green-600 transition-colors">
                  purvamoverseas@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


