export default function MobileMenu({
    mobileMenuOpen,
    setMobileMenuOpen,
}) {
    if (!mobileMenuOpen) return null

    const handleClick = () => {
        setMobileMenuOpen(false)
    }

    return (
        <nav
            className="md:hidden bg-[#111] border-t border-[#1B3A6B] px-6 py-6 flex flex-col gap-5 uppercase tracking-widest text-sm"
            aria-label="Mobile navigation menu"
        >

            <a
                href="#services"
                onClick={handleClick}
                className="hover:text-[#C0392B] transition-colors"
            >
                Services
            </a>

            <a
                href="#coverage"
                onClick={handleClick}
                className="hover:text-[#C0392B] transition-colors"
            >
                Coverage
            </a>

            <a
                href="#why"
                onClick={handleClick}
                className="hover:text-[#C0392B] transition-colors"
            >
                Why Us
            </a>

            <a
                href="#quote"
                onClick={handleClick}
                className="bg-[#C0392B] text-white px-4 py-2 text-center hover:bg-[#a93226] transition-colors"
            >
                Get Quote
            </a>

        </nav>
    )
}