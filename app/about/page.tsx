import Image from "next/image";
import AboutFeature from "../components/AboutFeature";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Techorc - Custom Software Development Company",
    description: "Learn more about Techorc, a custom software development company in India delivering scalable solutions tailored to your business needs.",
};

export default function AboutPage() {
    const features = [
        {
            title: "Agile Approach",
            description: "Keeping customers at the centre of the service delivery is in our traits. Our quick turnaround time and proactive approach assist our clients to rehearse the future and outperform the competition.",
            icon: "/images/quick-&-easy.svg",
            color: "bg-green-100"
        },
        {
            title: "Smart Solutions",
            description: "Our machine first approach empowers you to bypass the repetitive manual tasks. Greater levels of automation through Artificial Intelligence, Cognitive capabilities and data analytics bring efficiency.",
            icon: "/images/smart-solutions.svg",
            color: "bg-pink-100"
        },
        {
            title: "Scalability",
            description: "When we solve business challenges, we envision solutions that can be scaled. Our dynamic resourcing calibration can replicate any solution for a much larger playing ground.",
            icon: "/images/scalability.svg",
            color: "bg-yellow-100"
        },
        {
            title: "Cost-effective",
            description: "Our flexible, reliable and efficient service delivery sets us apart from the rest and helps our clients perform to the best of their capacities in this competitive market environment.",
            icon: "/images/cost-effective.svg",
            color: "bg-blue-100"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-900 text-white pt-28 pb-20 md:pt-40 md:pb-24">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <span className="bg-blue-900 text-blue-200 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide inline-block mb-4">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Software development company that delivers
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        With 12+ years of experience, we enable progressive businesses to
                        transform, scale and gain competitive advantage, through the expert
                        delivery of tailor-made software.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Techorc is a leading software development company based in India. We are a team of passionate engineers, designers, and strategists committed to helping businesses achieve digital excellence.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We believe in building long-term partnerships with our clients. By understanding your unique challenges, we craft solutions that not only solve today&apos;s problems but also pave the way for future growth.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-[#00a8f2] hover:bg-[#008ecb] text-white px-8 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-1 font-semibold"
                            >
                                Work With Us
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <Image
                                src="/images/about-vector.svg"
                                width={500}
                                height={400}
                                alt="About Techorc"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values/Features Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
                        <p className="text-gray-600 mt-4 text-lg">What drives us to deliver excellence every day.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <AboutFeature
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                color={feature.color}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Team/Office Teaser (Optional - using generic image if specific not available, or skipping) */}

        </>
    );
}
