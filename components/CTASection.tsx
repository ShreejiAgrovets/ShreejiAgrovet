import Link from 'next/link'
export default function CTASection() {
    return (
        <section className="bg-green-700 py-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-6 text-lg">Looking for sustainable, high-quality animal feed? Contact us to discuss your needs.</p>
            <Link href="/contact">
                <span className="inline-block bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-50 transition">Contact Us</span>
            </Link>
        </section>
    )
}
