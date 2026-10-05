'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed w-full z-50 top-0 bg-green-600 text-white shadow">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
                <span className="font-bold text-xl md:text-2xl">
                    <Image
                        src="/Purvam_Logo.png"
                        alt="Purvam Overseas"
                        width={270}
                        height={90}
                    />
                </span>
                
                {/* Mobile menu button */}
                <button 
                    className="md:hidden flex flex-col space-y-1"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-4 lg:gap-6 text-base lg:text-lg">
                        <li><Link href="/" className="hover:text-green-200 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-green-200 transition-colors">About</Link></li>
                        <li><Link href="/products" className="hover:text-green-200 transition-colors">Products</Link></li>
                        <li><Link href="/sustainability" className="hover:text-green-200 transition-colors">Sustainability</Link></li>
                        <li><Link href="/feed-manufacturer" className="hover:text-green-200 transition-colors">Feed Manufacturer</Link></li>
                        <li><Link href="/feed-producer" className="hover:text-green-200 transition-colors">Feed Producer</Link></li>
                        <li><Link href="/contact" className="hover:text-green-200 transition-colors">Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile navigation */}
                <nav className={`md:hidden absolute top-full left-0 w-full bg-green-600 shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <ul className="flex flex-col py-4 px-4 space-y-3 text-base">
                        <li><Link href="/" className="block py-2 hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/about" className="block py-2 hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link href="/products" className="block py-2 hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                        <li><Link href="/sustainability" className="block py-2 hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Sustainability</Link></li>
                        <li><Link href="/feed-manufacturer" className="block py-2 hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Feed Manufacturer</Link></li>
                        <li><Link href="/feed-producer" className="block py-2 hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Feed Producer</Link></li>
                        <li><Link href="/contact" className="block py-2 hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

