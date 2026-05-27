import Logo from '../../assets/Images/Logo.jpeg'

export default function Footer() {
    return (
        <footer className="border-t border-[#1B3A6B] bg-[#090909] py-10">

            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">

                <div className="flex items-center gap-4">

                    <a
                        href="#top"
                        className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
                    >
                        <img
                            src={Logo}
                            alt="MPK Logistics Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </a>

                    <div>
                        <p className="text-sm text-gray-500">
                            © 2026 MPK Logistics Inc.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 uppercase tracking-widest text-sm">

                    <a href="#quote">
                        Get a Quote
                    </a>

                    <a href="#services">
                        Services
                    </a>

                    <a href="#contact">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    )
}