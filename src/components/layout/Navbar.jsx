import { useState } from 'react'
import MobileMenu from './MobileMenu'
import Logo from '../../assets/Images/Logo.jpeg'

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMobileMenuOpen(prev => !prev)
    }

    return (
        <header
            role="banner"
            className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d]/95 border-b border-[#1B3A6B] backdrop-blur-md"
        >

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
                    aria-label="MPK Logistics homepage"
                >
                    <img
                        src={Logo}
                        alt="MPK Logistics"
                        className="h-16 w-auto object-contain"
                        loading="eager"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav
                    className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider"
                    aria-label="Primary navigation"
                >

                    <a
                        href="#services"
                        className="hover:text-[#C0392B] transition-colors"
                    >
                        Services
                    </a>

                    <a
                        href="#coverage"
                        className="hover:text-[#C0392B] transition-colors"
                    >
                        Coverage
                    </a>

                    <a
                        href="#why"
                        className="hover:text-[#C0392B] transition-colors"
                    >
                        Why Us
                    </a>


                    <a href="#contact" className="hover:text-[#C0392B] transition-colors">
                        Contact
                    </a>

                    <a
                        href="#quote"
                        className="bg-[#C0392B] hover:bg-[#a93226] transition-colors px-5 py-2 text-white font-semibold"
                    >
                        Get a Quote
                    </a>

                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden border border-[#C0392B] p-2"
                    aria-expanded={mobileMenuOpen}
                    aria-label="Toggle mobile menu"
                    aria-controls="mobile-menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu">
                <MobileMenu
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
            </div>

        </header>
    )
}