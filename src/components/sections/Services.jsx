import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'

export default function Services() {
    return (
        <section id="services" className="py-18 bg-[#0d0d0d]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-4xl mb-16">

                    <p className="uppercase tracking-[0.3em] text-[#C0392B] text-sm mb-4">
                        Services
                    </p>

                    <h2 className="headline-font text-5xl uppercase leading-tight mb-6">
                        Tire, Rim & Auto Parts Freight
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        From new tires to scrap — we move it all.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {services.map((service) => (

                        <div
                            key={service.title}
                            className="service-card relative overflow-hidden border p-8 transition-all duration-300 hover:-translate-y-2 border-[#1f1f1f] bg-[#141414]"
                        >

                            <div className="text-5xl mb-6">
                                {service.icon}
                            </div>

                            <h3 className="headline-font text-3xl uppercase mb-4 leading-tight">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {service.tags.map((tag) => (

                                    <span
                                        key={tag}
                                        className="text-xs uppercase tracking-wider px-3 py-2 border border-[#2a2a2a] text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}