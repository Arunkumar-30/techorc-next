import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    link: string;
    imageSrc: string;
    color: string;
}

export default function ServiceCard({ title, description, link, imageSrc, color }: ServiceCardProps) {
    return (
        <div className="group bg-white rounded-2xl p-6 md:p-8 h-full border border-gray-100 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden flex flex-col">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: color }}></div>

            <div className="relative z-10 flex flex-col h-full">
                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundColor: `${color}` }} // 15 is for ~10% opacity hex
                >
                    <Image src={imageSrc} width={36} height={36} alt={title} className="w-9 h-9" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    <Link href={link}>
                        {title}
                    </Link>
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {description}
                </p>

                <div className="mt-4 pt-2 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors">Learn More</span>
                    <Link
                        href={link}
                        className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-500 group-hover:text-white transition-all transform group-hover:translate-x-1"
                    >
                        &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
