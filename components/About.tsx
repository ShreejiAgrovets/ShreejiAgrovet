'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Purvam Overseas</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Purvam Overseas is a leading merchant exporter specializing in high-quality cattle feed and agricultural products. With years of experience and a commitment to excellence, we provide our customers with the best products to meet their livestock nutrition needs.
            </p>
            <p>
              Our company's ability to meet customer requirements expeditiously and at competitive prices has been our major strength. This has helped us gain a loyal and growing customer base in the international market. We keep a close tab on the regularly changing international market scenario and customer preferences, always striving to incorporate the latest trends in our products.
            </p>
            <p>
              Our prime activities include procurement of products directly from farmers, processing, and packing of such products to supply high-quality goods to our international buyers under the brand name of Purvam.
            </p>
            <p>
              As a professionally managed organization, Purvam Overseas has exceptional experience in exporting food grains, animal feed products, Indian spices, and other general products. We aspire to achieve long-term business relationships with our clients based on strong corporate ethics.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

