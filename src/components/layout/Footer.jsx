import Logo from '../../assets/Images/Logo.jpeg'

export default function Footer() {
    return (
        <footer
            id="footer"
            className="border-t border-[#1B3A6B] bg-[#090909] py-10"
        >

            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">

                {/* Logo + Copyright */}
                <div className="flex items-center gap-4">

                    <a
                        href="/"
                        className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
                        aria-label="Go to homepage"
                    >
                        <img
                            src={Logo}
                            alt="MPK Logistics Inc."
                            className="h-16 w-auto object-contain"
                            loading="lazy"
                        />
                    </a>

                    <div>
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} MPK Logistics Inc.
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <nav
                    className="flex flex-wrap items-center gap-6 uppercase tracking-widest text-sm"
                    aria-label="Footer navigation"
                >

                    <a href="#services" className="hover:text-[#C0392B] transition-colors">
                        Services
                    </a>

                    <a href="#coverage" className="hover:text-[#C0392B] transition-colors">
                        Coverage
                    </a>

                    <a href="#why" className="hover:text-[#C0392B] transition-colors">
                        Why Us
                    </a>

                    <a href="#quote" className="hover:text-[#C0392B] transition-colors">
                        Get a Quote
                    </a>

                    <a href="#contact" className="hover:text-[#C0392B] transition-colors">
                        Contact
                    </a>

                </nav>

            </div>
        </footer>
    )
}