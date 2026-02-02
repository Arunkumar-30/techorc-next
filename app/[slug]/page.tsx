import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, ServiceSlug } from "@/app/data/services";
import Sidebar from "../components/Sidebar";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

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
    };
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData[slug as ServiceSlug];

    if (!service) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="bg-gray-900 text-white pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {service.heroTitle}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {service.heroDescription}
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col-reverse lg:flex-row gap-12">

                        {/* Sidebar (Left) */}
                        <aside className="lg:w-1/4">
                            <Sidebar activeSlug={slug} />
                        </aside>

                        {/* Content (Right) */}
                        <div className="lg:w-3/4">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {service.mainTitle}
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {service.mainDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {service.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group"
                                    >
                                        <div className="w-12 h-1 bg-[#00a8f2] mb-6 rounded-full group-hover:w-20 transition-all"></div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Techorc?</h2>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-lg text-gray-700 font-medium mb-12">
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-xl">✔</span> Experienced Team
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-xl">✔</span> Agile Process
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-xl">✔</span> Scalable Solutions
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-xl">✔</span> Secure Architecture
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-block bg-[#00a8f2] hover:bg-[#008ecb] text-white px-8 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 font-bold"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
