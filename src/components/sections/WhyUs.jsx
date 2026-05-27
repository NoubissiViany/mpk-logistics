import { differentiators, lanes } from '../../data/company'

export default function WhyUs() {
    return (
        <section
            id="why"
            className="py-18 bg-[#111] border-y border-[#1f1f1f]"
        >

            <div className='max-w-7xl mx-auto px-6 '>
                <p className="uppercase tracking-[0.3em] text-[#C0392B] text-sm mb-4">
                    Why MPK
                </p>

                <h2 className="headline-font text-5xl uppercase mb-12">
                    Freight Expertise Built <br /> Around Tires & Recycling
                </h2>
                <div className="flex flex-col lg:flex-row lg:justify-center gap-16">
                    <div className="space-y-6">

                        {differentiators.map((item) => (
                            <div
                                key={item.number}
                                className="border-l-4 border-[#C0392B] bg-[#161616] p-6"
                            >

                                <div className="headline-font text-4xl text-[#C0392B] mb-4">
                                    {item.number}
                                </div>

                                <h3 className="headline-font text-2xl uppercase mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {item.text}
                                </p>

                            </div>
                        ))}

                    </div>
                    <div className="bg-[#151515] border border-[#1f1f1f] p-8 h-fit sticky top-28">

                        <div className="flex items-center justify-between mb-10">

                            <div>
                                <p className="uppercase tracking-[0.3em] text-[#C0392B] text-sm mb-2">
                                    Primary Freight Lanes
                                </p>

                                <h3 className="headline-font text-4xl uppercase">
                                    Coverage Performance
                                </h3>
                            </div>

                            <div className="text-5xl">
                                📍
                            </div>

                        </div>

                        <div className="space-y-8">

                            {lanes.map((lane, index) => (
                                <div key={lane.lane}>

                                    <div className="flex justify-between items-center mb-3">

                                        <div>
                                            <p className="headline-font text-xl uppercase">
                                                {lane.lane}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                {lane.km}
                                            </p>
                                        </div>

                                        <p className="text-[#C0392B] font-semibold">
                                            {lane.fill}
                                        </p>

                                    </div>

                                    <div className="h-3 bg-[#252525] overflow-hidden">

                                        <div
                                            className="lane-fill h-full bg-linear-to-r from-[#1B3A6B] to-[#C0392B]"
                                            style={{
                                                width: lane.fill,
                                                animationDelay: `${index * 0.3}s`,
                                            }}
                                        ></div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}