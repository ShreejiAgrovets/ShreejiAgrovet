import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingActionButton from '../components/FloatingActionButton'
import '../styles/globals.css'


export const metadata = {
    title: 'Shreeji Agrovet - Cattle Feed & Agricultural Products',
    description: 'Ahmedabad based company, exporting high-quality cattle feed and agricultural products. We provide our customers with the best products to meet their livestock nutrition needs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="min-h-screen pt-16 md:pt-20">{children}</main>
                <Footer />
                <FloatingActionButton />
            </body>
        </html>
    )
}

