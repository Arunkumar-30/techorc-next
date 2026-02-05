import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/app/data/services";
import Sidebar from "@/app/components/Sidebar";
import FAQAccordion from "@/app/components/FAQAccordion";
import { Metadata } from "next";

// ServiceSlug type definition to avoid import issues if not exported correctly or strictly needed locally
type ServiceSlug = keyof typeof servicesData;

interface Props {
    params: Promise<{ slug: string }>;
}

/* =========================
   METADATA
========================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug as ServiceSlug];

    if (!service) {
        return {
            title: "Service Not Found | Techorc",
        };
    }

    return {
        title: service.title,
        description: service.description,
        keywords: service.keywords || [],
        alternates: {
            canonical: `https://techorc.in/${slug}`,
        },
        openGraph: {
            title: service.title,
            description: service.description,
            url: `https://techorc.in/${slug}`,
            siteName: "Techorc",
            type: "website",
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: service.title,
            description: service.description,
        },
    };
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

/* =========================
   PAGE COMPONENT
========================= */
export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData[slug as ServiceSlug];

    if (!service) {
        notFound();
    }

    /* FAQ SCHEMA (AEO) */
    const faqSchema = service.faqs?.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        }
        : null;

    return (
        <main className="bg-white">
            {/* JSON-LD Schema */}
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            )}

            {/* HERO SECTION */}
            <section className="bg-gray-900 text-white pt-28 pb-20 md:pt-40 md:pb-24">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <span className="bg-blue-900 text-blue-200 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide inline-block mb-4">
                        Our Expertise
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {service.heroTitle}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        {service.heroDescription}
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT SPLIT */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col-reverse lg:flex-row gap-16">

                        {/* LEFT: CONTENT */}
                        <div className="lg:w-3/4 order-2 lg:order-none">

                            {/* Introduction */}
                            <div className="mb-16">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {service.mainTitle}
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                                    {service.mainDescription}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                                {service.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                                    >
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white text-xl font-bold shadow-lg"
                                            style={{ backgroundColor: service.color }}
                                        >
                                            {index + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00a8f2] transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* FAQ Section */}
                            {service.faqs?.length > 0 && (
                                <div className="mb-16">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                        Headlines & Answers
                                    </h2>
                                    <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100">
                                        <FAQAccordion faqs={service.faqs} />
                                    </div>
                                </div>
                            )}

                            {/* Service Areas */}
                            {service.serviceAreas?.length > 0 && (
                                <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-50">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        Serving Clients In
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {service.serviceAreas.map((area, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-white rounded-lg text-sm text-gray-700 font-medium shadow-sm border border-gray-100"
                                            >
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* RIGHT: SIDEBAR */}
                        <aside className="lg:w-1/4 order-1 lg:order-none">
                            <div className="sticky top-28">
                                <Sidebar activeSlug={slug} />

                                {/* Quick Contact Widget */}
                                <div className="mt-8 bg-[#00a8f2] text-white p-8 rounded-2xl text-center shadow-lg relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold mb-4">Need Help?</h4>
                                        <p className="text-blue-100 mb-6 text-sm">
                                            Speak with our {service.title.split(' ')[0]} experts today.
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="inline-block bg-white text-[#00a8f2] px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-50 transition w-full"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #c2c2c2ff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join hundreds of successful businesses that trust Techorc.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-5 rounded-full font-bold text-lg text-white shadow-xl transition hover:-translate-y-1"
                        style={{ backgroundColor: service.color }}
                    >
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
