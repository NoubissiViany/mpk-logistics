import { tickerItems } from '../../data/ticker'

export default function Ticker() {

    return (
        <div
            className="border-y border-[#1B3A6B] bg-[#111] overflow-hidden py-4"
            aria-label="Company highlights"
        >

            <div
                className="ticker whitespace-nowrap flex gap-16 text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300 will-change-transform"
                aria-hidden="true"
            >

                {[...tickerItems, ...tickerItems].map((item, idx) => (

                    <span
                        key={`${item}-${idx}`}
                        className="inline-flex items-center gap-4 shrink-0"
                    >

                        <span
                            className="text-[#C0392B]"
                            aria-hidden="true"
                        >
                            ◆
                        </span>

                        <span>
                            {item}
                        </span>

                    </span>
                ))}

            </div>

        </div>
    )
}