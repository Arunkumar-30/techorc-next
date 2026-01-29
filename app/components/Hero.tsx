import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="pt-20 pb-20 md:pt-32 md:pb-26 bg-gray-50/50 relative overflow-hidden">
            {/* Background Decor Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/3"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    <div className="lg:w-1/2 z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#00a8f2] text-sm font-bold tracking-wide mb-6 border border-blue-100/50">
                            🚀 Innovation Driven Development
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-6">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cf2f2] via-[#00a8f2] to-[#9d12bb]">Scalable</span> Software Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                            We empower businesses to seize new opportunities with custom consulting, development, and support services tailored to your goals.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-14">
                            <Link
                                href="/contact"
                                className="inline-block bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] hover:from-[#00a8f2] hover:to-[#008ecb] text-white px-8 py-4 rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform hover:-translate-y-1 font-bold text-lg"
                            >
                                Let’s Get Started
                            </Link>
                            <Link
                                href="/#Service"
                                className="inline-block bg-white text-gray-700 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 px-8 py-4 rounded-full transition-all font-semibold text-lg"
                            >
                                View Services
                            </Link>
                        </div>

                        {/* Partner Logos - Fixed Alignment */}
                        <div className="border-t border-gray-200 pt-8">
                            <p className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Trusted Technology Partners</p>
                            <div className="flex flex-wrap items-center gap-8 md:gap-12 grayscale opacity-200 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                <div className="h-8 w-auto relative">
                                    <Image src="/images/amazon.svg" height={32} width={100} alt="Amazon" className="h-full w-auto object-contain" />
                                </div>
                                <div className="h-8 w-auto relative">
                                    <Image src="/images/azure.svg" height={32} width={100} alt="Azure" className="h-full w-auto object-contain" />
                                </div>
                                <div className="h-7 w-auto relative">
                                    <Image src="/images/wowza.svg" height={28} width={100} alt="Wowza" className="h-full w-auto object-contain" />
                                </div>
                                <div className="h-8 w-auto relative">
                                    <Image src="/images/aws.svg" height={32} width={60} alt="AWS" className="h-full w-auto object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative z-0">
                        {/* Decorative Blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-[100px] opacity-60 -z-10 transform scale-90"></div>

                        <Image
                            src="/images/hero-vector.svg"
                            width={700}
                            height={600}
                            alt="Software Development Illustration"
                            className="w-full h-auto drop-shadow-xl animate-float"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
