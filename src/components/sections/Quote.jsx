import { useState } from 'react'

export default function Quote() {
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        freightDetails: '',
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            const response = await fetch('https://formspree.io/f/mdajyyqk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSuccess(true)

                setFormData({
                    fullName: '',
                    company: '',
                    email: '',
                    phone: '',
                    freightDetails: '',
                })
            } else {
                setError('Something went wrong. Please try again.')
            }
        } catch {
            setError('Network error. Please try again.')
        }

        setLoading(false)
    }

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

                        {/* BENEFITS */}

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

                        <form
                            onSubmit={handleSubmit}
                            className="bg-[#141414] border border-[#1f1f1f] p-8 space-y-6 lg:w-1/2"
                        >

                            <div className="grid md:grid-cols-2 gap-6">

                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4 text-white outline-none focus:border-[#C0392B]"
                                />

                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company"
                                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4 text-white outline-none focus:border-[#C0392B]"
                                />

                            </div>

                            <div className="grid md:grid-cols-2 gap-6">

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4 text-white outline-none focus:border-[#C0392B]"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4 text-white outline-none focus:border-[#C0392B]"
                                />

                            </div>

                            <textarea
                                rows="6"
                                name="freightDetails"
                                value={formData.freightDetails}
                                onChange={handleChange}
                                placeholder="Freight Details"
                                required
                                className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4 text-white outline-none focus:border-[#C0392B]"
                            ></textarea>

                            {/* SUCCESS MESSAGE */}

                            {success && (
                                <div className="bg-green-600/20 border border-green-500 text-green-400 p-4">
                                    Your quote request has been sent successfully.
                                </div>
                            )}

                            {/* ERROR MESSAGE */}

                            {error && (
                                <div className="bg-red-600/20 border border-red-500 text-red-400 p-4">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#C0392B] hover:bg-[#a93226] transition-colors py-5 uppercase tracking-widest font-semibold disabled:opacity-50"
                            >
                                {loading
                                    ? 'Sending...'
                                    : 'Request a Free Quote'}
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}