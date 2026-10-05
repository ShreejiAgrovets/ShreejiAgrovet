import Image from 'next/image'

export default function ProductShowcase() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-800">Premium Feed Ingredients</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        We use only the finest ingredients to create highly nutritious cattle feed mix, customized to meet your specific requirements and budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                        <div className="relative h-48 md:h-56 mb-4 md:mb-6 overflow-hidden rounded-lg">
                            <Image
                                src="/biscuit1.jpg"
                                alt="Premium Biscuit Raw Material"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">Premium Biscuit Base</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            High-quality biscuit materials provide essential carbohydrates and energy for optimal cattle growth and milk production.
                        </p>
                        <div className="mt-4 flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                            <span className="text-sm">Learn More</span>
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                        <div className="relative h-48 md:h-56 mb-4 md:mb-6 overflow-hidden rounded-lg">
                            <Image
                                src="/biscuit2.jpg"
                                alt="Assorted Biscuit Varieties"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">Assorted Varieties</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            Multiple biscuit types blended to create balanced nutrition profiles, ensuring comprehensive feed solutions.
                        </p>
                        <div className="mt-4 flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                            <span className="text-sm">Learn More</span>
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                        <div className="relative h-48 md:h-56 mb-4 md:mb-6 overflow-hidden rounded-lg">
                            <Image
                                src="/grind.jpg"
                                alt="Precision Ground Feed Mix"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">Precision Grinding</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            Our advanced grinding process ensures optimal particle size for maximum digestibility and nutrient absorption.
                        </p>
                        <div className="mt-4 flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                            <span className="text-sm">Learn More</span>
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center">Custom Formulations Available</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                        <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-lg md:text-xl font-semibold mb-2">High Protein Blends</h4>
                            <p className="text-sm md:text-base text-green-100">High protein,fat and energy content for premium cattle feed requirements</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h4 className="text-lg md:text-xl font-semibold mb-2">Economic Solutions</h4>
                            <p className="text-sm md:text-base text-green-100">Cost-effective formulations without compromising nutritional quality</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-lg md:text-xl font-semibold mb-2">Specialized Mixes</h4>
                            <p className="text-sm md:text-base text-green-100">Custom blends for dairy cattle, poultry, and growing calves</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
