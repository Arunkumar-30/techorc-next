import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service | Techorc",
    description:
        "Read Techorc's Terms of Service to understand the rules and guidelines for using our website and services.",
    keywords: [
        "Terms of Service",
        "Techorc Terms",
        "Legal Agreement",
        "Service Rules",
        "User Responsibility India",
    ],
    alternates: {
        canonical: "https://techorc.in/terms-of-service",
    },
    openGraph: {
        title: "Terms of Service | Techorc",
        description:
            "Read Techorc's Terms of Service to understand the rules and guidelines for using our website and services.",
        url: "https://techorc.in/terms-of-service",
        siteName: "Techorc",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | Techorc",
        description:
            "Read Techorc's Terms of Service to understand the rules and guidelines for using our website and services.",
    },
    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};

export default function TermsOfServicePage() {
    return (
        <main>
            {/* Banner Section */}
            <section className="bg-gray-900 text-white pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Please read these terms carefully before using our services.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="prose prose-lg prose-gray max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 mb-6">
                            By accessing and using Techorc&apos;s website and services, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                        <p className="text-gray-600 mb-6">
                            Techorc provides custom software development, web application development, mobile app development,
                            cloud integration, and related IT consulting services. The specific terms of each project will be
                            outlined in a separate agreement or proposal.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                        <p className="text-gray-600 mb-6">
                            All content on this website, including but not limited to text, graphics, logos, and software,
                            is the property of Techorc and is protected by intellectual property laws. You may not reproduce,
                            distribute, or create derivative works without our prior written consent.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                        <p className="text-gray-600 mb-6">
                            You agree to use our services only for lawful purposes and in accordance with these terms.
                            You are responsible for maintaining the confidentiality of any account information and for
                            all activities that occur under your account.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
                        <p className="text-gray-600 mb-6">
                            Payment terms for our services will be specified in individual project agreements.
                            All payments are due as per the agreed schedule. Late payments may incur additional charges.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p className="text-gray-600 mb-6">
                            Techorc shall not be liable for any indirect, incidental, special, or consequential damages
                            arising out of or in connection with our services. Our total liability shall not exceed the
                            amount paid for the specific service in question.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
                        <p className="text-gray-600 mb-6">
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective
                            immediately upon posting on this website. Your continued use of our services constitutes
                            acceptance of the modified terms.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                        <p className="text-gray-600 mb-6">
                            If you have any questions about these Terms of Service, please contact us at{' '}
                            <a href="mailto:sales@techorc.com" className="text-[#00a8f2] hover:underline">
                                sales@techorc.com
                            </a>.
                        </p>

                        <p className="text-gray-500 text-sm mt-12">
                            Last updated: February 2026
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
