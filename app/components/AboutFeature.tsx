"use client";

import Image from "next/image";

interface AboutFeatureProps {
    title: string;
    description: string;
    icon: string;
    color: string;
}

export default function AboutFeature({ title, description, icon, color }: AboutFeatureProps) {
    return (
        <div
            className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] border border-gray-100 h-full group "
        >
            <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 ${color} transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
            >
                <Image src={icon} width={40} height={40} alt={title} className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
