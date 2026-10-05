'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: "Our Belief and Values",
    description: "Trade with Quality Products & Customer's Satisfaction. Our objective is to enhance customer satisfaction by consistently providing quality service that meets or exceeds expectations, while empowering farmers to receive fair prices for their goods."
  },
  {
    title: "Customer Focus",
    description: "We are always customer-focused and will deliver what the customer needs in terms of value, quality, and satisfaction."
  },
  {
    title: "Respect for People",
    description: "We acknowledge the individual's contribution to the success of our company."
  },
  {
    title: "Quality Assurance",
    description: "Our objective is to enhance customer satisfaction by consistently providing quality products."
  }
]

const expertise = [
  "We ensure premium quality merchandise.",
  "We deal in bulk quantity.",
  "We guarantee the most competitive prices.",
  "We assure prompt delivery."
]

const Values = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values and Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-green-600 text-white p-8 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
          <ul className="list-disc list-inside space-y-2">
            {expertise.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">We are different</h3>
          <p className="text-xl mb-2">We procure bulk quantity to offer you the best price</p>
          <p className="text-gray-600">
            We procure raw products directly from farmers/manufacturers in bulk quantity for long-term contracts. This policy helps us offer the best price to our customers due to our lower purchase cost.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Values

