export default function StatsSection() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Our Impact in Numbers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-2 md:mb-3">500</div>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">Metric Tons Monthly </p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-700 mb-2 md:mb-3">99.8%</div>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">On-Time Delivery</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-700 mb-2 md:mb-3">50+</div>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">Feed Producers Served</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
