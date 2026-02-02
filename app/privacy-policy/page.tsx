import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Techorc",
    description:
        "Read Techorc's Privacy Policy to understand how we collect, use, and protect your personal information.",
    keywords: [
        "Privacy Policy",
        "Data Protection",
        "Techorc Privacy",
        "User Data Safety",
        "Data Privacy India",
    ],
    alternates: {
        canonical: "https://support.techorc.in/privacy-policy",
    },
    openGraph: {
        title: "Privacy Policy | Techorc",
        description:
            "Read Techorc's Privacy Policy to understand how we collect, use, and protect your personal information.",
        url: "https://support.techorc.in/privacy-policy",
        siteName: "Techorc",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Techorc",
        description:
            "Read Techorc's Privacy Policy to understand how we collect, use, and protect your personal information.",
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

export default function PrivacyPolicyPage() {
    return (
        <main>
            {/* Banner Section */}
            <section className="bg-gray-900 text-white pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Your privacy is important to us. This policy outlines how we handle your data.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-lg prose-gray">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                    <p className="text-gray-600 mb-6">
                        We may collect personal information such as your name, email address, phone number,
                        and company details when you fill out our contact form or subscribe to our newsletter.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-600 mb-6">
                        The information we collect is used to respond to your inquiries, provide our services,
                        and improve your experience on our website. We do not sell or share your personal
                        information with third parties for marketing purposes.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                    <p className="text-gray-600 mb-6">
                        We implement industry-standard security measures to protect your personal information
                        from unauthorized access, alteration, or disclosure.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
                    <p className="text-gray-600 mb-6">
                        Our website may use cookies to enhance your browsing experience. You can choose to
                        disable cookies through your browser settings, though this may affect some site functionality.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Links</h2>
                    <p className="text-gray-600 mb-6">
                        Our website may contain links to third-party sites. We are not responsible for the
                        privacy practices or content of these external sites.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                    <p className="text-gray-600 mb-6">
                        If you have any questions about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:sales@techorc.com" className="text-[#00a8f2] hover:underline">
                            sales@techorc.com
                        </a>.
                    </p>

                    <p className="text-gray-500 text-sm mt-12">
                        Last updated: February 2026
                    </p>
                </div>
            </section>
        </main>
    );
}
