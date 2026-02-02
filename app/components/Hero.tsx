import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Enhanced Background Decor Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-24">

                    <div className="lg:w-1/2 xl:w-[55%] z-10 text-center lg:text-left">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-[#00a8f2] text-xs sm:text-sm font-bold tracking-wide mb-6 border border-blue-100/60 shadow-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Innovation Driven Development
                        </span>

                        {/* Main Heading - Enhanced Responsive Typography */}
                        <h1 className="text-[28px] leading-[1.2] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px] font-extrabold text-gray-900 mb-4 sm:mb-6">
                            Building{' '}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cf2f2] via-[#00a8f2] to-[#9d12bb] drop-shadow-sm">
                                    Scalable
                                </span>
                                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] rounded-full opacity-50"></span>
                            </span>
                            <br className="hidden sm:block" />
                            <span className="block sm:inline"> Software Solutions</span>
                        </h1>

                        {/* Subheading - Responsive */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            We empower businesses to seize new opportunities with custom consulting, development, and support services tailored to your goals.
                        </p>

                        {/* CTA Buttons - Responsive */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10 sm:mb-14">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] hover:from-[#00a8f2] hover:to-[#0077b6] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-blue-200/50 hover:shadow-blue-300/60 transition-all duration-300 transform hover:-translate-y-1 font-bold text-base sm:text-lg"
                            >
                                Let&apos;s Get Started
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/#Service"
                                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-[#00a8f2] px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 font-semibold text-base sm:text-lg"
                            >
                                View Services
                            </Link>
                        </div>

                        {/* Partner Logos - Enhanced */}
                        <div className="border-t border-gray-200/80 pt-6 sm:pt-8">
                            <p className="text-xs sm:text-sm font-semibold text-gray-400 mb-4 sm:mb-6 uppercase tracking-widest">Trusted Technology Partners</p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-10">
                                {[
                                    { src: "/images/amazon.svg", alt: "Amazon", h: "h-6 sm:h-7 md:h-8" },
                                    { src: "/images/azure.svg", alt: "Azure", h: "h-6 sm:h-7 md:h-8" },
                                    { src: "/images/wowza.svg", alt: "Wowza", h: "h-5 sm:h-6 md:h-7" },
                                    { src: "/images/aws.svg", alt: "AWS", h: "h-6 sm:h-7 md:h-8" },
                                ].map((logo, index) => (
                                    <div
                                        key={index}
                                        className={`${logo.h} w-auto grayscale opacity-200 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110`}
                                    >
                                        <Image
                                            src={logo.src}
                                            height={32}
                                            width={100}
                                            alt={logo.alt}
                                            className="h-full w-auto object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hero Image Section */}
                    <div className="lg:w-1/2 xl:w-[45%] relative z-0 mt-8 lg:mt-0">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/40 to-purple-100/40 rounded-full blur-[100px] opacity-60 -z-10 transform scale-75"></div>

                        {/* Floating Stats Cards */}
                        <div className="hidden md:block absolute -left-4 top-1/4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-100/50 z-20 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Projects Delivered</p>
                                    <p className="font-bold text-gray-900">50+</p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-100/50 z-20 animate-float" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Years Experience</p>
                                    <p className="font-bold text-gray-900">14+</p>
                                </div>
                            </div>
                        </div>

                        <Image
                            src="/images/hero-vector.svg"
                            width={700}
                            height={600}
                            alt="Software Development Illustration"
                            className="w-full h-auto drop-shadow-2xl animate-float object-cover"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
