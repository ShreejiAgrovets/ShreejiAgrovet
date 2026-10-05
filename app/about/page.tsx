import Hero from '../../components/Hero'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <Hero
                title="About Shreeji Agrovet"
                subtitle="Premium cattle feed mix manufacturer serving India's livestock industry"
                backgroundImage="/bg3.jpg"
            />
            
            <section className="container mx-auto py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Shreeji Agrovet is a leading manufacturer of premium cattle feed mix, specializing in highly nutritious, protein-rich formulations for India's cattle feed producers. We transform quality ingredients into superior feed solutions that drive optimal livestock growth and productivity.
                            </p>
                            <p className="text-lg text-gray-600 mb-4">
                                Our expertise lies in creating customized feed blends using premium biscuit waste, bread, muesli, protein powders, and various snack materials. Each formulation is carefully crafted to meet specific nutritional requirements and budget considerations.
                            </p>
                            <p className="text-lg text-gray-600">
                                With years of experience in feed manufacturing, we've established ourselves as trusted partners to cattle feed producers across India, delivering consistent quality and innovative solutions.
                            </p>
                        </div>
                        <div className="relative h-96">
                            <Image 
                                src="/grind.jpg" 
                                alt="Feed mixing process" 
                                fill 
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-6 bg-green-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-green-800">Quality First</h3>
                            <p className="text-gray-600">
                                We source only the finest ingredients and maintain strict quality control throughout our manufacturing process to ensure superior feed quality.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-blue-800">Custom Solutions</h3>
                            <p className="text-gray-600">
                                Our formulations can be customized for different protein levels and price ranges, ensuring perfect matches for your specific requirements.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-yellow-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-yellow-800">Reliable Delivery</h3>
                            <p className="text-gray-600">
                                With 99.8% on-time delivery rate, we ensure your feed production never stops, keeping your operations running smoothly.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Manufacturing Process</h2>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                                <h4 className="font-semibold mb-2">Sourcing</h4>
                                <p className="text-sm text-gray-600">Premium biscuit, bread, and snack materials</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                                <h4 className="font-semibold mb-2">Grinding</h4>
                                <p className="text-sm text-gray-600">Precision grinding for optimal digestibility</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                                <h4 className="font-semibold mb-2">Mixing</h4>
                                <p className="text-sm text-gray-600">Custom formulations with protein enrichment</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                                <h4 className="font-semibold mb-2">Packaging</h4>
                                <p className="text-sm text-gray-600">Secure packaging for freshness and quality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
