import {
    Phone,
    Mail,
    Clock3,
    MapPin
} from 'lucide-react'

const contactCards = [
    {
        icon: <Phone size={36} />,
        title: 'Phone',
        content: (
            <a
                href="tel:+18553051611"
                aria-label="Call MPK Logistics"
                className="hover:text-[#C0392B] transition-colors"
            >
                +1 (855) 305-1611
            </a>
        )
    },

    {
        icon: <Mail size={36} />,
        title: 'Email',
        content: (
            <a
                href="mailto:info@mpklogistics.ca"
                aria-label="Email MPK Logistics"
                className="hover:text-[#C0392B] transition-colors"
            >
                info@mpklogistics.ca
            </a>
        )
    },

    {
        icon: <Clock3 size={36} />,
        title: 'Business Hours',
        content: (
            <p className="text-gray-300">
                Monday to Saturday
            </p>
        )
    },

    {
        icon: <MapPin size={36} />,
        title: 'Location',
        content: (
            <address className="not-italic text-gray-300">
                London, Ontario, Canada
            </address>
        )
    }
]

export default function Contact() {

    return (
        <section
            id="contact"
            className="py-20 bg-[#0d0d0d]"
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="max-w-4xl mb-16">

                    <p className="uppercase tracking-[0.3em] text-[#C0392B] text-sm mb-4">
                        Contact
                    </p>

                    <h2 className="headline-font text-5xl uppercase mb-6">
                        Let's Move Your Freight
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        Connect with MPK Logistics for freight brokerage,
                        logistics coordination, carrier partnerships,
                        and RPRA-compliant scrap tire transportation
                        services across Canada.
                    </p>

                </div>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

                    {contactCards.map((card) => (

                        <div
                            key={card.title}
                            className="bg-[#151515] border border-[#1f1f1f] p-8 hover:border-[#C0392B] transition-colors duration-300"
                        >

                            <div className="text-[#C0392B] mb-6">
                                {card.icon}
                            </div>

                            <h3 className="headline-font text-2xl uppercase mb-4">
                                {card.title}
                            </h3>

                            <div>
                                {card.content}
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}