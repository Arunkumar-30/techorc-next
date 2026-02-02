import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Help Center | Techorc Support",
    description: "Get help and support for Techorc services. Find answers to frequently asked questions or contact our support team.",
};

const faqs = [
    {
        question: "How do I request a quote for my project?",
        answer: "You can request a quote by filling out our contact form or emailing us at sales@techorc.com. We'll get back to you within 24 hours with a detailed proposal."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on complexity and requirements. A simple web application may take 4-8 weeks, while enterprise solutions can take 3-6 months. We'll provide a detailed timeline during the proposal phase."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, and feature enhancements based on your needs."
    },
    {
        question: "What technologies do you work with?",
        answer: "We work with a wide range of technologies including React, Angular, Node.js, Python, Java, AWS, Azure, and more. We choose the best tech stack based on your project requirements."
    },
    {
        question: "How do you ensure project quality?",
        answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and dedicated QA processes to ensure high-quality deliverables."
    }
];

export default function SupportPage() {
    return (
        <main>
            {/* Banner Section */}
            <section className="bg-gray-900 text-white pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <span className="bg-blue-900 text-blue-200 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide inline-block mb-4">
                        Support
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Help Center
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Find answers to common questions or get in touch with our support team.
                    </p>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center border border-blue-100">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <svg className="w-7 h-7 text-[#00a8f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Email Support</h3>
                            <a href="mailto:sales@techorc.com" className="text-[#00a8f2] hover:underline">
                                sales@techorc.com
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-100">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Phone Support</h3>
                            <a href="tel:+919677173084" className="text-green-600 hover:underline">
                                +91 96771 73084
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center border border-purple-100">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Business Hours</h3>
                            <p className="text-purple-600">Mon-Sat: 10am - 7pm IST</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                                <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-start gap-3">
                                    <span className="w-6 h-6 bg-[#00a8f2] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                                        ?
                                    </span>
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed pl-9">{faq.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
                        >
                            Contact Us
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
