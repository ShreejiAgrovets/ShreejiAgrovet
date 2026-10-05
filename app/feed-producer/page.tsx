import Hero from '../../components/Hero'

export default function FeedProducerPage() {
    return (
        <>
            <Hero
                title="Premium Feed Solutions for Producers"
                subtitle="Cost-effective, reliable cattle feed mix for Indian feed producers"
                backgroundImage="/bg4.jpg"
            />

            <section className="container mx-auto py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Feed Producer Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Purvam Overseas provides comprehensive cattle feed solutions for feed producers across India.
                            Our high-quality, cost-effective feed mixes help you optimize livestock nutrition while maintaining
                            competitive pricing and reliable supply chains.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-green-700">Producer Benefits</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Cost-Effective Nutrition</h4>
                                        <p className="text-gray-600">Premium feed formulations at competitive prices to maximize your profit margins</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Wide Range of Options</h4>
                                        <p className="text-gray-600">Multiple protein levels and formulations for different cattle types and production goals</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Direct Supply Chain</h4>
                                        <p className="text-gray-600">Eliminate middlemen and get premium feed directly from the manufacturer</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Flexible Delivery</h4>
                                        <p className="text-gray-600">Scheduled deliveries to match your production cycles and storage capacity</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-6 text-blue-700">Our Product Range</h3>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Premium Biscuit Mix</h4>
                                    <p className="text-gray-600">Ideal for dairy cattle requiring high-energy nutrition for optimal milk production</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Standard Feed Mix </h4>
                                    <p className="text-gray-600">Balanced nutrition for general cattle maintenance and growth</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Economic Feed </h4>
                                    <p className="text-gray-600">Cost-effective solution for bulk feeding without compromising essential nutrients</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">High-Protein Formula </h4>
                                    <p className="text-gray-600">Enhanced formulation for high-performance cattle and intensive production systems</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-700 text-white p-8 rounded-lg mb-16">
                        <h3 className="text-2xl font-bold mb-6 text-center">Production Excellence</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-2">500</div>
                                <h4 className="font-semibold mb-2">Metric Tons</h4>
                                <p className="text-blue-100">Monthly production capacity</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">99.8%</div>
                                <h4 className="font-semibold mb-2">On-Time Delivery</h4>
                                <p className="text-blue-100">Reliable supply chain</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <h4 className="font-semibold mb-2">Producers Served</h4>
                                <p className="text-blue-100">Across India</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-6 bg-green-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-green-800">Quality Assurance</h3>
                            <p className="text-gray-600">
                                Every batch undergoes rigorous testing to ensure consistent nutritional content and quality standards.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-blue-800">Export Ready</h3>
                            <p className="text-gray-600">
                                Our feed meets international standards and can be exported for global market requirements.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-yellow-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-yellow-800">Sustainable Production</h3>
                            <p className="text-gray-600">
                                Environmentally friendly manufacturing process with zero waste philosophy.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Optimize Your Feed Production</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Partner with Purvam Overseas to enhance your cattle feed production with premium, cost-effective solutions.
                            Our expert team is ready to help you choose the right formulations for your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                Get Pricing
                            </a>
                            <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                Request Sample
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
