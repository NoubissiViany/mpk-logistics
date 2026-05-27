export default function ServiceCard({ service }) {
    return (
        <div className="bg-[#141414] border border-[#1f1f1f] p-8 hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-6">{service.icon}</div>

            <h3 className="text-3xl uppercase font-bold mb-4">
                {service.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
                {service.description}
            </p>
        </div>
    )
}