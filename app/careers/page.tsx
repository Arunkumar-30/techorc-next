import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers at Techorc | Join Our Team",
    description: "Explore career opportunities at Techorc. We're looking for talented developers, designers, and innovators to join our growing team.",
};

export default function CareersPage() {
    return (
        <main>
            {/* Banner Section */}
            <section className="bg-gray-900 text-white pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <span className="bg-blue-900 text-blue-200 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide inline-block mb-4">
                        Careers
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Join the Techorc Family
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Be part of a team that&apos;s shaping the future of software development.
                    </p>
                </div>
            </section>

            {/* No Vacancies Notice */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-100">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-[#00a8f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            No Open Positions Currently
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Thank you for your interest in joining Techorc! We don&apos;t have any open positions at the moment,
                            but we&apos;re always looking for exceptional talent. Feel free to send us your resume for future opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="mailto:sales@techorc.com"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Send Your Resume
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold hover:border-blue-300 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work at Techorc?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: "Growth Opportunities", desc: "Continuous learning and career advancement paths", icon: "📈" },
                            { title: "Work-Life Balance", desc: "Flexible schedules and supportive environment", icon: "⚖️" },
                            { title: "Innovative Projects", desc: "Work on cutting-edge technologies and solutions", icon: "🚀" },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-all">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
