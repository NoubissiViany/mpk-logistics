export default function Contact() {
    return (
        <section
            id="contact"
            className="py-18 bg-[#0d0d0d]"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-4xl mb-16">

                    <p className="uppercase tracking-[0.3em] text-[#C0392B] text-sm mb-4">
                        Contact
                    </p>

                    <h2 className="headline-font text-5xl uppercase mb-6">
                        Let's Move Your Freight
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        Connect with MPK Logistics for freight quotes,
                        carrier partnerships, and RPRA-compliant
                        scrap tire transportation.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

                    <div className="bg-[#151515] border border-[#1f1f1f] p-8">

                        <div className="text-4xl mb-6">
                            📞
                        </div>

                        <h3 className="headline-font text-2xl uppercase mb-4">
                            Phone
                        </h3>

                        <div className="flex flex-col gap-2">
                            <a href="tel:+18553051611">
                                +1 (855) 305-1611
                            </a>

                            <a href="tel:+1548788611">
                                +1 (548) 788-1611
                            </a>
                        </div>

                    </div>

                    <div className="bg-[#151515] border border-[#1f1f1f] p-8">

                        <div className="text-4xl mb-6">
                            ✉️
                        </div>

                        <h3 className="headline-font text-2xl uppercase mb-4">
                            Email
                        </h3>

                        <a href="mailto:info@mpklogistics.ca">
                            info@mpklogistics.ca
                        </a>

                    </div>

                    <div className="bg-[#151515] border border-[#1f1f1f] p-8">

                        <div className="text-4xl mb-6">
                            🕒
                        </div>

                        <h3 className="headline-font text-2xl uppercase mb-4">
                            Business Hours
                        </h3>

                        <p className="text-gray-300">
                            Monday to Saturday
                        </p>

                    </div>

                    <div className="bg-[#151515] border border-[#1f1f1f] p-8">

                        <div className="text-4xl mb-6">
                            📍
                        </div>

                        <h3 className="headline-font text-2xl uppercase mb-4">
                            Location
                        </h3>

                        <p className="text-gray-300">
                            London, Ontario
                        </p>

                    </div>

                </div>
            </div>
        </section>
    )
}