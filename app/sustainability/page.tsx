import Hero from '../../components/Hero'

export default function SustainabilityPage() {
    return (
        <>
            <Hero
                title="Environmental Responsibility at Shreeji"
                subtitle="Sustainable cattle feed production with zero waste philosophy"
                backgroundImage="/sustainable_bg.jpg"
            />

            <section className="container mx-auto py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Environmental Commitment</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            At Shreeji Agrovet, we believe in sustainable business practices that protect our planet while delivering premium cattle feed solutions.
                            Our environmental responsibility goes beyond compliance – it's at the core of everything we do.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-green-700">Zero Waste Philosophy</h3>
                            <p className="text-lg text-gray-600 mb-4">
                                We transform what would be waste into valuable nutrition. By utilizing biscuit waste, bread, and other food byproducts,
                                we prevent tons of materials from ending up in landfills while creating high-quality cattle feed.
                            </p>
                            <p className="text-lg text-gray-600 mb-4">
                                Our circular economy approach ensures that every material we process serves a purpose, either as nutrition for livestock
                                or as recyclable materials for other industries.
                            </p>
                            <div className="bg-green-100 p-6 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">Environmental Impact</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                        100+ tons of waste diverted from landfills annually
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                        Carbon footprint reduction through upcycling
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                        Support for sustainable agriculture practices
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-6 text-blue-700">Recycling Partnerships</h3>
                            <p className="text-lg text-gray-600 mb-4">
                                We partner with specialized recycling companies to ensure all non-feed materials are properly processed.
                                Plastic wrappers, packaging materials, and other waste byproducts are systematically sorted and sent to
                                certified recycling facilities.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Plastic Waste Management</h4>
                                    <p className="text-gray-600">All plastic wrappers and packaging materials are collected and sent to certified recycling partners.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Resource Optimization</h4>
                                    <p className="text-gray-600">We continuously optimize our processes to minimize energy consumption and water usage.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Sustainable Sourcing</h4>
                                    <p className="text-gray-600">We prioritize local sourcing to reduce transportation emissions and support local economies.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-700 text-white p-8 rounded-lg mb-16">
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Sustainability Goals</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-2">2025</div>
                                <h4 className="font-semibold mb-2">Zero Landfill</h4>
                                <p className="text-blue-100">Achieve zero waste to landfill status</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">30%</div>
                                <h4 className="font-semibold mb-2">Energy Reduction</h4>
                                <p className="text-blue-100">Reduce energy consumption by 30%</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">100%</div>
                                <h4 className="font-semibold mb-2">Recyclable Packaging</h4>
                                <p className="text-blue-100">Use only recyclable packaging materials</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
