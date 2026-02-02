import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Team | Meet the Techorc Experts",
    description:
        "Meet the talented team behind Techorc. Our experienced developers, designers, and strategists are committed to delivering exceptional software solutions.",
    keywords: [
        "Techorc Team",
        "Software Experts India",
        "IT Professionals India",
        "Tech Leadership",
        "Software Developers India",
        "Software Engineers Coimbatore",
    ],
    alternates: {
        canonical: "https://support.techorc.in/team",
    },
    openGraph: {
        title: "Our Team | Meet the Techorc Experts",
        description:
            "Meet the talented team behind Techorc. Our experienced developers, designers, and strategists are committed to delivering exceptional software solutions.",
        url: "https://support.techorc.in/team",
        siteName: "Techorc",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Team | Meet the Techorc Experts",
        description:
            "Meet the talented team behind Techorc. Our experienced developers, designers, and strategists are committed to delivering exceptional software solutions.",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};

const teamMembers = [
    {
        name: "Tech Leadership",
        role: "Development Team",
        description: "Our core development team brings together expertise in full-stack development, mobile apps, and cloud architecture.",
        icon: "💻"
    },
    {
        name: "Design Excellence",
        role: "UI/UX Team",
        description: "Creative designers focused on building intuitive, user-friendly interfaces that enhance user experience.",
        icon: "🎨"
    },
    {
        name: "Project Management",
        role: "Delivery Team",
        description: "Experienced project managers ensuring timely delivery and seamless communication throughout your project.",
        icon: "📊"
    },
    {
        name: "Quality Assurance",
        role: "QA Team",
        description: "Dedicated QA specialists committed to delivering bug-free, high-performance software solutions.",
        icon: "✅"
    }
];

export default function TeamPage() {
    return (
        <main>
            {/* Banner Section */}
            <section className="bg-gray-900 text-white pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <span className="bg-blue-900 text-blue-200 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide inline-block mb-4">
                        Our Team
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Meet the Experts Behind Techorc
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        A passionate team of developers, designers, and strategists dedicated to transforming your ideas into reality.
                    </p>
                </div>
            </section>

            {/* Team Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Departments</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            With 14+ years of experience, our team has successfully delivered 50+ projects across various industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="text-5xl mb-6">{member.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-[#00a8f2] font-semibold text-sm mb-4">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Culture */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        At Techorc, we believe in fostering a collaborative environment where innovation thrives.
                        Our team works together to solve complex challenges and deliver solutions that exceed expectations.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Innovation", "Collaboration", "Excellence", "Integrity"].map((value, idx) => (
                            <span key={idx} className="bg-white px-6 py-3 rounded-full text-gray-700 font-semibold border border-gray-200 shadow-sm">
                                {value}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
