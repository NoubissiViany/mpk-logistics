import { tickerItems } from '../../data/ticker'

export default function Ticker() {
    return (
        <section className="border-y border-[#1B3A6B] bg-[#111] overflow-hidden py-4">

            <div className="ticker whitespace-nowrap flex gap-16 text-sm uppercase tracking-[0.3em] text-gray-300">

                {[...tickerItems, ...tickerItems].map((item, idx) => (
                    <span
                        key={idx}
                        className="inline-flex items-center gap-4"
                    >
                        <span className="text-[#C0392B]">
                            ◆
                        </span>

                        {item}
                    </span>
                ))}

            </div>
        </section>
    )
}