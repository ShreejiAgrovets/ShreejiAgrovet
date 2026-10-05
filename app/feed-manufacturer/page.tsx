import Hero from '../../components/Hero'

export default function FeedManufacturerPage() {
    return (
        <>
            <Hero
                title="Partner with Shreeji for Feed Manufacturing"
                subtitle="Premium bulk cattle feed mix solutions for large-scale feed manufacturers"
                backgroundImage="/partnership_bg.jpg"
            />
            
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Bulk Feed Manufacturing Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide premium cattle feed mix ingredients and custom formulations for large-scale feed manufacturers. 
                            Our bulk procurement solutions ensure consistent quality, competitive pricing, and reliable supply chains 
                            for your manufacturing operations.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-green-700">Why Partner with Shreeji?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Bulk Custom Formulations</h4>
                                        <p className="text-gray-600">Custom protein levels (18-30%) tailored to your manufacturing requirements</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Premium Ingredients</h4>
                                        <p className="text-gray-600">Quality biscuit waste, bread, muesli, and protein powders for optimal nutrition</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Process Transparency</h4>
                                        <p className="text-gray-600">Full traceability and quality control documentation for every batch</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Competitive Pricing</h4>
                                        <p className="text-gray-600">Volume discounts and flexible payment terms for long-term partnerships</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-6 text-blue-700">Manufacturing Benefits</h3>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Consistent Quality</h4>
                                    <p className="text-gray-600">Standardized formulations ensure uniform quality across your production batches</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Supply Reliability</h4>
                                    <p className="text-gray-600">99.8% on-time delivery rate keeps your manufacturing lines running smoothly</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Technical Support</h4>
                                    <p className="text-gray-600">Expert guidance on formulation optimization and nutritional requirements</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Certification Ready</h4>
                                    <p className="text-gray-600">All products meet industry standards and certification requirements</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-green-700 text-white p-8 rounded-lg mb-16">
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Manufacturing Partnership Program</h3>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h4 className="text-xl font-semibold mb-3">Volume Tiers</h4>
                                <p className="text-green-100">Flexible pricing based on your production volume requirements</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-3">Custom Blending</h4>
                                <p className="text-green-100">Tailored formulations to match your specific manufacturing needs</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-3">Quality Assurance</h4>
                                <p className="text-green-100">Rigorous testing and certification for every batch</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Ready to Scale Your Production?</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Join leading feed manufacturers who trust Shreeji Agrovet for their bulk cattle feed mix requirements. 
                            Contact us to discuss your manufacturing needs and discover our partnership benefits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                Call for Bulk Pricing
                            </a>
                            <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                Request Partnership Info
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

