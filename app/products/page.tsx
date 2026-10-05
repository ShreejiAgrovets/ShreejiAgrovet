import Hero from '../../components/Hero'

const products = [
    {
        name: 'Premium Biscuit Mix',
        description: 'High-energy feed supplement with high protein content. Made from quality biscuit waste, perfect for dairy cattle nutrition.',
        image: '/biscuit1.jpg',
        protein: '22%',
        category: 'Premium'
    },
    {
        name: 'Assorted Snack Blend',
        description: 'Balanced nutrition mix combining various snack materials, bread, and muesli for comprehensive cattle feed.',
        image: '/biscuit3.jpg',
        protein: '20%',
        category: 'Standard'
    },
    {
        name: 'Protein-Enriched Formula',
        description: 'Enhanced with additional protein powders for maximum growth and milk production in high-performance cattle.',
        image: '/mix.jpg',
        protein: '28%',
        category: 'Premium'
    },
    {
        name: 'Economic Feed Mix',
        description: 'Cost-effective solution for bulk feeding requirements without compromising on essential nutrients.',
        image: '/biscuit2.jpg',
        protein: '18%',
        category: 'Economy'
    },
    {
        name: 'Custom Blend',
        description: 'Tailored formulations based on your specific requirements, protein levels, and budget constraints.',
        image: '/grind.jpg',
        protein: 'Custom',
        category: 'Custom'
    },
]

export default function ProductsPage() {
    return (
        <>
            <Hero
                title="Our Premium Feed Products"
                subtitle="High-quality, customizable cattle feed mix solutions for optimal livestock nutrition"
                backgroundImage="/bg2.webp"
            />

            <section className="container mx-auto py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Custom Feed Formulations</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We specialize in creating customized cattle feed mix using premium ingredients including biscuit waste,
                            bread, muesli, protein powders, and various snack materials. Each formulation is designed to meet
                            specific nutritional requirements and budget considerations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {products.map((product) => (
                            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="relative h-48">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-green-700 text-white p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Feed Mix?</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <h4 className="text-xl font-semibold mb-3">Superior Ingredients</h4>
                                <p className="text-green-100">
                                    Quality biscuit waste, bread, muesli, and snack materials ensure optimal nutrition
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-semibold mb-3">Custom Formulations</h4>
                                <p className="text-green-100">
                                    Tailored protein levels and ingredients to match your specific requirements
                                </p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-semibold mb-3">Consistent Quality</h4>
                                <p className="text-green-100">
                                    Strict quality control ensures every batch meets our high standards
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
