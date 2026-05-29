import { services } from '../../data/services'

export default function Services() {

    return (
        <section
            id="services"
            className="py-20 bg-[#0d0d0d]"
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="max-w-4xl mb-16">

                    <p className="uppercase tracking-[0.3em] text-[#C0392B] text-sm mb-4">
                        Services
                    </p>

                    <h2 className="headline-font text-5xl uppercase leading-tight mb-6">
                        Freight Brokerage for Tires, Rims & Auto Parts
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        MPK Logistics provides freight transportation,
                        logistics coordination, scrap tire hauling,
                        and auto parts shipping services across Canada.
                    </p>

                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {services.map((service) => (

                        <article
                            key={service.title}
                            className="service-card relative overflow-hidden border p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C0392B] border-[#1f1f1f] bg-[#141414]"
                        >

                            {/* Service Icon */}
                            <div
                                className="text-5xl mb-6"
                                aria-hidden="true"
                            >
                                {service.icon}
                            </div>

                            {/* Service Title */}
                            <h3 className="headline-font text-3xl uppercase mb-4 leading-tight">
                                {service.title}
                            </h3>

                            {/* Service Description */}
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Tags */}
                            <ul className="flex flex-wrap gap-2">

                                {service.tags.map((tag) => (

                                    <li
                                        key={tag}
                                        className="text-xs uppercase tracking-wider px-3 py-2 border border-[#2a2a2a] text-gray-300 list-none"
                                    >
                                        {tag}
                                    </li>
                                ))}

                            </ul>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    )
}