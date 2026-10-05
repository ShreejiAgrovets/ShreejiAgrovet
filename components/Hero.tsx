import Image from 'next/image'

export default function Hero({ title, subtitle, backgroundImage }: { title: string, subtitle: string, backgroundImage: string }) {
    return (
        <section className="relative h-[60vh] md:h-[70vh] lg:h[80vh] flex items-center overflow-hidden">
            <Image 
                src={backgroundImage} 
                alt="Hero" 
                fill 
                style={{ objectFit: 'cover', zIndex: 1 }} 
                priority 
                className="transform scale-100 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
            <div className="relative z-20 text-center text-white w-full px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in-up">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}
