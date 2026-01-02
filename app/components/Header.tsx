"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-5 shadow-2xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:shadow-orange-500/70 transition-all duration-300 group-hover:scale-110">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 10.5H16M8 14H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">ChatFlow</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-400 hover:text-orange-500 font-medium transition-colors relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/about" className="text-gray-400 hover:text-orange-500 font-medium transition-colors relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/features" className="text-gray-400 hover:text-orange-500 font-medium transition-colors relative group">
                            Features
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/setup" className="text-gray-400 hover:text-orange-500 font-medium transition-colors relative group">
                            Setup
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/pricing" className="text-gray-400 hover:text-orange-500 font-medium transition-colors relative group">
                            Pricing
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/contact" className="text-gray-400 hover:text-orange-500 font-medium transition-colors relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#cta" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105">
                            Install Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-orange-500 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 border-t border-gray-800 mt-4">
                        <Link href="/" className="text-gray-400 hover:text-orange-500 font-medium py-2 transition-colors">Home</Link>
                        <Link href="/about" className="text-gray-400 hover:text-orange-500 font-medium py-2 transition-colors">About</Link>
                        <Link href="/features" className="text-gray-400 hover:text-orange-500 font-medium py-2 transition-colors">Features</Link>
                        <Link href="/setup" className="text-gray-400 hover:text-orange-500 font-medium py-2 transition-colors">Setup</Link>
                        <Link href="/pricing" className="text-gray-400 hover:text-orange-500 font-medium py-2 transition-colors">Pricing</Link>
                        <Link href="/contact" className="text-gray-400 hover:text-orange-500 font-medium py-2 transition-colors">Contact</Link>
                        <a href="#cta" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg text-center shadow-lg shadow-orange-500/50">Install Now</a>
                    </nav>
                )}
            </div>
        </header>
    );
}
