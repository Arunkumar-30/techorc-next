"use client";

import Image from "next/image";

const techStack = [
    { name: "Java", icon: "/images/java.png" },
    { name: "React", icon: "/images/react.png" },
    { name: "Angular", icon: "/images/angular.png" },
    { name: "MySQL", icon: "/images/mysql.png" },
    { name: "Python", icon: "/images/python.png" },
    { name: "Talend", icon: "/images/talend.png" },
    { name: "Apache", icon: "/images/apache.png" },
    { name: "jQuery", icon: "/images/jquery.png" },

];

// Since we might not have all logos, let's reuse the existing ones to ensure we have enough for a loop.
// We will split them into two rows or just use the same list with different order/speed.
const row1 = [...techStack, ...techStack];
const row2 = [...techStack.reverse(), ...techStack];

export default function TechStack() {
    return (
        <section className="py-10 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h3 className="text-gray-400 font-bold uppercase tracking-[0.2em] mb-4">Powered By Modern Tech Stack</h3>
                <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1: Left Scrolling */}
                <div className="relative w-full overflow-hidden py-4">
                    <div className="flex w-max animate-scroll-left hover:pause-on-hover">
                        {row1.map((tech, i) => (
                            <div key={`r1-${i}`} className="w-[140px] md:w-[180px] h-[80px] md:h-[100px] mx-2 md:mx-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-blue-100 hover:bg-white group">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={120}
                                    height={50}
                                    className="object-contain w-auto h-12 opacity-90 md:opacity-60 group-hover:opacity-100 transition-opacity"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {row1.map((tech, i) => (
                            <div key={`r1-dup-${i}`} className="w-[140px] md:w-[180px] h-[80px] md:h-[100px] mx-2 md:mx-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-blue-100 hover:bg-white group">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={120}
                                    height={50}
                                    className="object-contain w-auto h-12 opacity-90 md:opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right Scrolling */}
                <div className="relative w-full overflow-hidden py-4">
                    <div className="flex w-max animate-scroll-right hover:pause-on-hover">
                        {row2.map((tech, i) => (
                            <div key={`r2-${i}`} className="w-[140px] md:w-[180px] h-[80px] md:h-[100px] mx-2 md:mx-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-blue-100 hover:bg-white group">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={120}
                                    height={50}
                                    className="object-contain w-auto h-12 opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {row2.map((tech, i) => (
                            <div key={`r2-dup-${i}`} className="w-[140px] md:w-[180px] h-[80px] md:h-[100px] mx-2 md:mx-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-blue-100 hover:bg-white group">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={120}
                                    height={50}
                                    className="object-contain w-auto h-12 opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
