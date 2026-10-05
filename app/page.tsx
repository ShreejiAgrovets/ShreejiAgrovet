// /app/page.tsx
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import ProductShowcase from '../components/ProductShowcase'
import ESGSection from '../components/ESGSection'
import CTASection from '../components/CTASection'

export default function Home() {
    return (
        <>
            <Hero
                title="Premium Cattle Feed Mix for Optimal Nutrition"
                subtitle="High-protein, customizable feed solutions for Indian cattle feed producers"
                backgroundImage="/bg1.png"
            />
            <StatsSection />
            <ProductShowcase />
            <ESGSection />
            <CTASection />
        </>
    )
}

