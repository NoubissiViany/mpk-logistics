const stats = [
    ['24H', 'Quote Response'],
    ['EN/FR', 'Bilingual Service'],
    ['ON+', 'Canada Coverage'],
    ['INC', 'Incorporated'],
]

export default function Hero() {

    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden hero-grid"
        >

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(0,0,0,0.72),
                            rgba(0,0,0,0.78)
                        ),
                        url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2070&q=80')
                    `,
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(192,57,43,0.35),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(27,58,107,0.4),_transparent_40%)]" />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

                <div className="max-w-4xl">

                    {/* Main SEO Heading */}
                    <h1 className="headline-font text-5xl md:text-6xl uppercase leading-none tracking-tight mb-8">

                        Reliable Freight <br />

                        <span className="text-[#C0392B]">
                            & Logistics Solutions
                        </span>

                        <br />

                        Across Canada

                    </h1>

                    {/* Supporting SEO Text */}
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-6">

                        MPK Logistics provides freight brokerage,
                        logistics coordination, tire transportation,
                        and supply chain solutions for businesses
                        across Canada and North America.

                    </p>

                    <p className="uppercase tracking-[0.3em] text-sm text-[#C0392B] mb-10">
                        From new tires to scrap — we move it all.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">

                        <a
                            href="#quote"
                            aria-label="Request a freight quote"
                            className="bg-[#C0392B] hover:bg-[#a93226] transition-all duration-300 px-8 py-4 text-center uppercase font-semibold tracking-wider shadow-2xl hover:scale-105"
                        >
                            Get a Free Quote
                        </a>

                        <a
                            href="#services"
                            aria-label="View freight services"
                            className="border border-white hover:border-[#C0392B] hover:text-[#C0392B] hover:bg-white/5 transition-all duration-300 px-8 py-4 text-center uppercase font-semibold tracking-wider"
                        >
                            Our Services
                        </a>

                    </div>

                    {/* Stats */}
                    <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        {stats.map(([stat, label]) => (

                            <div
                                key={stat}
                                className="border border-white/10 backdrop-blur-md bg-white/5 p-4 hover:bg-white/10 transition-all duration-300"
                            >

                                <dt className="headline-font text-3xl text-[#C0392B]">
                                    {stat}
                                </dt>

                                <dd className="text-sm text-gray-300 mt-2">
                                    {label}
                                </dd>

                            </div>
                        ))}

                    </dl>

                </div>
            </div>
        </section>
    )
}