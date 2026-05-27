export default function Quote() {
    return (
        <section
            id="quote"
            className="py-18 bg-[#0d0d0d]"
        >
            <div className="max-w-7xl mx-auto px-6 gap-16 items-start">

                {/* LEFT */}

                <div>

                    <p className="uppercase tracking-[0.3em] text-[#C0392B] text-sm mb-4">
                        Get a Quote
                    </p>

                    <h2 className="headline-font text-5xl uppercase mb-6">
                        Get Your Rate Today
                    </h2>

                    <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                        Fill out the form and we'll get back to you within 24 hours.
                    </p>

                    <div className="flex flex-col gap-4 lg:flex-row justify-between">
                        <div className="space-y-4 lg:w-1/2">

                            {[
                                'Response within 24 hours guaranteed',
                                'No obligation — free quote always',
                                'Bilingual service available (EN/FR)',
                                'Flat rates with no hidden fees',
                                'RPRA compliant haulers available',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-4 border border-[#1f1f1f] bg-[#141414] p-4"
                                >

                                    <span className="text-[#C0392B] text-xl">
                                        ✓
                                    </span>

                                    <span className="text-gray-300">
                                        {item}
                                    </span>

                                </div>
                            ))}

                        </div>
                        {/* FORM */}

                        <form className="bg-[#141414] border border-[#1f1f1f] p-8 space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4"
                                />

                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4"
                                />

                            </div>

                            <div className="grid md:grid-cols-2 gap-6">

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4"
                                />

                            </div>

                            <textarea
                                rows="6"
                                placeholder="Freight Details"
                                className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-[#C0392B] hover:bg-[#a93226] transition-colors py-5 uppercase tracking-widest font-semibold"
                            >
                                Request a Free Quote
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}