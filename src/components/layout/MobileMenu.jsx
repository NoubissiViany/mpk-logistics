export default function MobileMenu({
    mobileMenuOpen,
    setMobileMenuOpen,
}) {
    if (!mobileMenuOpen) return null

    return (
        <div className="md:hidden bg-[#111] border-t border-[#1B3A6B] px-6 py-6 flex flex-col gap-5 uppercase tracking-widest text-sm">
            <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
            >
                Services
            </a>

            <a
                href="#coverage"
                onClick={() => setMobileMenuOpen(false)}
            >
                Coverage
            </a>

            <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
            >
                Quote
            </a>
        </div>
    )
}