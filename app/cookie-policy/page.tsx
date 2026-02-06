import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cookie Policy | Techorc",
    description:
        "Learn how Techorc uses cookies to enhance your browsing experience and improve our website services.",
    keywords: [
        "Cookie Policy",
        "Website Cookies",
        "User Browsing",
        "Data Tracking India",
        "Browser Cookies Techorc",
    ],
    alternates: {
        canonical: "https://support.techorc.in/cookie-policy",
    },
    openGraph: {
        title: "Cookie Policy | Techorc",
        description:
            "Learn how Techorc uses cookies to enhance your browsing experience and improve our website services.",
        url: "https://support.techorc.in/cookie-policy",
        siteName: "Techorc",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cookie Policy | Techorc",
        description:
            "Learn how Techorc uses cookies to enhance your browsing experience and improve our website services.",
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

export default function CookiePolicyPage() {
    return (
        <main>
            {/* Banner Section */}
            <section className="bg-gray-900 text-white pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Understanding how we use cookies to improve your experience.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="prose prose-lg prose-gray max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                        <p className="text-gray-600 mb-6">
                            Cookies are small text files that are stored on your device when you visit a website.
                            They help websites remember your preferences and improve your browsing experience.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                        <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
                        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                            <li><strong>Performance Cookies:</strong> Improve website speed and performance</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                        <div className="bg-gray-50 rounded-xl p-6 mb-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 text-gray-900 font-bold">Cookie Type</th>
                                        <th className="py-3 text-gray-900 font-bold">Purpose</th>
                                        <th className="py-3 text-gray-900 font-bold">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3">Session</td>
                                        <td className="py-3">Maintain session state</td>
                                        <td className="py-3">Session</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3">Preferences</td>
                                        <td className="py-3">Remember user settings</td>
                                        <td className="py-3">1 year</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3">Analytics</td>
                                        <td className="py-3">Track website usage</td>
                                        <td className="py-3">2 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                        <p className="text-gray-600 mb-6">
                            You can control and manage cookies through your browser settings. Most browsers allow you to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                            <li>View what cookies are stored and delete them individually</li>
                            <li>Block third-party cookies</li>
                            <li>Block cookies from specific websites</li>
                            <li>Block all cookies</li>
                            <li>Delete all cookies when you close your browser</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-6">
                            If you have any questions about our Cookie Policy, please contact us at{' '}
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
