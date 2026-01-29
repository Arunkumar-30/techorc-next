import Image from "next/image";

interface TestimonialCardProps {
    quote: string;
    clientName: string;
    clientRole: string;
    clientImage: string;
}

export default function TestimonialCard({ quote, clientName, clientRole, clientImage }: TestimonialCardProps) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col h-full hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            {/* Decorative Quote Icon opacity change on hover */}
            <div className="absolute top-6 right-8 text-6xl text-blue-100 font-serif opacity-50 group-hover:text-blue-50 group-hover:scale-110 transition-all duration-300">
                "
            </div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 relative flex-shrink-0">
                    <Image
                        src={clientImage}
                        alt={clientName}
                        fill
                        className="rounded-full object-cover border-2 border-white shadow-md group-hover:border-blue-100 transition-colors"
                    />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">{clientName}</p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{clientRole}</p>
                </div>
            </div>

            <div className="relative z-10 flex-grow">
                <p className="text-gray-600 leading-relaxed italic text-[15px]">
                    "{quote}"
                </p>
            </div>

            {/* Bottom blue line on hover */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
}

