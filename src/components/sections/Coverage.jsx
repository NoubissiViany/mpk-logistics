import { coverageAreas } from '../../data/company'

export default function Coverage() {
    return (
        <section
            id="coverage"
            className="py-18 bg-[#111] border-y border-[#1f1f1f]"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-4xl mb-16">

                    <p className="uppercase tracking-[0.3em] text-[#C0392B] text-sm mb-4">
                        Coverage Area
                    </p>

                    <h2 className="headline-font text-5xl uppercase mb-6">
                        Ontario-Focused Operations with Canada-Wide Reach
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        MPK Logistics serves freight lanes across Ontario,
                        Quebec, the Prairies, and nationwide routes.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {coverageAreas.map((area) => (
                        <div
                            key={area.title}
                            className="bg-[#151515] border border-[#1f1f1f] p-8 hover:border-[#1B3A6B] transition-colors duration-300"
                        >

                            <div className="flex items-center justify-between mb-6">

                                <h3 className="headline-font text-3xl uppercase">
                                    {area.title}
                                </h3>

                            </div>

                            <p className="text-gray-400 leading-relaxed">
                                {area.areas}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}