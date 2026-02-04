import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="pt-24 pb-12 md:pt-36 md:pb-20 lg:pt-36 lg:pb-24 back relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-12 xl:gap-20">

                    <div className="lg:w-1/2 xl:w-[55%] z-10 text-center lg:text-left">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-[#00a8f2] text-xs sm:text-sm font-bold tracking-wide mb-6 border border-blue-100/60 shadow-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Innovation Driven Development
                        </span>

                        {/* Main Heading - Enhanced Responsive Typography */}
                        <h1 className="text-[28px] leading-[1.2] sm:text-[36px] md:text-[44px] lg:text-[42px] xl:text-[52px] 2xl:text-[64px] font-extrabold text-gray-900 mb-4 sm:mb-6">
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


                    </div>

                    {/* Hero Image Section */}
                    <div className="lg:w-1/2 xl:w-[45%] relative z-0 mt-10 lg:mt-0">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/40 to-purple-100/40 rounded-full blur-[100px] opacity-60 -z-10 transform scale-75"></div>

                        {/* Floating Stats Cards - Hidden on smallest mobile to prevent clutter if needed, or keep for all but adjust pos */}
                        <div className="hidden sm:block absolute -left-4 top-1/4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 md:p-4 border border-gray-100/50 z-20 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] md:text-xs text-gray-500">Projects Delivered</p>
                                    <p className="font-bold text-sm md:text-base text-gray-900">50+</p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:block absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 md:p-4 border border-gray-100/50 z-20 animate-float" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] md:text-xs text-gray-500">Years Experience</p>
                                    <p className="font-bold text-sm md:text-base text-gray-900">14+</p>
                                </div>
                            </div>
                        </div>

                        <Image
                            src="/images/hero-vector.svg"
                            width={700}
                            height={600}
                            alt="Software Development Illustration"
                            className="w-full h-auto drop-shadow-2xl animate-float object-contain"
                            priority
                        />
                    </div>

                </div>

                {/* Partner Logos - Enhanced for Visibility */}
                <div className="border-t border-gray-200/80 pt-2 sm:pt-4 w-full mt-8 md:mt-10">
                    <p className="text-xs sm:text-sm font-semibold text-gray-400 mb-4 sm:mb-6 uppercase tracking-widest text-center lg:text-left">Trusted Technology Partners</p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 sm:gap-6">
                        {[
                            { src: "/images/amazon.png", alt: "Amazon web services", },
                            { src: "/images/azure.png", alt: "Azure", },
                            { src: "/images/wowza.png", alt: "Wowza media systems", },
                            { src: "/images/aws.png", alt: "AWS", },
                        ].map((logo, index) => (
                            <div
                                key={index}
                                className="w-full h-[60px] md:h-[80px] bg-white rounded-xl border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-blue-100 group transition-all duration-300"
                            >
                                <Image
                                    src={logo.src}
                                    height={100}
                                    width={120}
                                    alt={logo.alt}
                                    className="object-fill max-h-12 md:max-h-16 w-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
