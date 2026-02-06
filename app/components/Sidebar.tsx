import Link from "next/link";
import { servicesData } from "@/app/data/services";

interface SidebarProps {
    activeSlug?: string;
}

export default function Sidebar({ activeSlug }: SidebarProps) {
    return (
        <div className="bg-gray-50 rounded-xl p-6 sticky top-32 border border-gray-100 shadow-sm max-h-[calc(100vh-140px)] flex flex-col">
            <h3 className="font-bold text-xl text-gray-900 mb-6 pb-4 border-b border-gray-200 flex-shrink-0">Our Services</h3>
            <nav className="flex flex-col gap-1 overflow-y-auto pr-2 custom-scrollbar flex-grow">
                {Object.entries(servicesData).map(([key, data]) => {
                    const isActive = key === activeSlug;
                    return (
                        <Link
                            key={key}
                            href={`/services/${key}`}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all flex-shrink-0 ${isActive
                                ? "bg-[#00a8f2] text-white shadow-md cursor-default"
                                : "text-gray-600 hover:bg-white hover:shadow-sm hover:text-[#00a8f2]"
                                }`}
                        >
                            {data.heroTitle}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="font-bold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-4">Speak with our experts today.</p>
                <Link
                    href="/contact"
                    className="inline-block bg-[#00a8f2] text-white text-sm font-bold px-6 py-2 rounded-full hover:bg-[#008ecb] transition-colors"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
