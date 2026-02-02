import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
            <div className="container mx-auto px-4 pt-16 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" aria-label="Techorc home" className="inline-block">
                            {/* Note: In a real scenario, you'd want a white/light logo for dark footer. 
                                 Using brightness filter as a quick fix if logo is dark. */}
                            <Image
                                src="/images/logo.svg"
                                width={140}
                                height={40}
                                alt="Techorc"
                                className="w-[140px]  invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Custom software development company delivering scalable solutions for startups and enterprises. We turn ideas into reality.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { name: 'linkedin', icon: '/images/linkedin.svg', url: 'https://www.linkedin.com/company/techorc' },
                                { name: 'twitter', icon: '/images/twitter.svg', url: 'https://twitter.com/techorc' },
                                { name: 'facebook', icon: '/images/facebook.svg', url: 'https://www.facebook.com/techorc' },
                                { name: 'instagram', icon: '/images/instagram.svg', url: 'https://www.instagram.com/techorc' }
                            ].map((social) => (
                                <Link
                                    href={social.url}
                                    key={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 group"
                                    aria-label={`Follow us on ${social.name}`}
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={18}
                                        height={18}
                                        className="w-5 h-5 brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" // Icons likely colored, make white for dark theme? Or keep original? User said "icons added", usually means branding. Let's try white for consistency with dark theme.
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal & Support Links */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
                            Legal & Support
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-[15px]">
                            <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/support" className="hover:text-blue-400 transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Service Quick Links */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-[15px]">
                            {['Custom Software', 'Web Apps', 'Mobile Apps', 'Cloud Solutions'].map((item, idx) => {
                                const hrefs = [
                                    "/custom-software-development",
                                    "/web-application-development",
                                    "/mobile-app-development",
                                    "/cloud-integration-services"
                                ];
                                return (
                                    <li key={idx}>
                                        <Link
                                            href={hrefs[idx]}
                                            className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                                            {item}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Newsletter / Contact Info */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
                            Get in Touch
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-sm mb-8">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span> NO:1/264 T, Pollachi Main Rd,

                                    Raj Vijay Nagar, Coimbatore,

                                    Tamil Nadu, 641021, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <a href="mailto:sales@techorc.com" className="hover:text-blue-400 transition-colors">sales@techorc.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <a href="tel:+919677173084" className="hover:text-blue-400 transition-colors">+91 96771 73084 / 94889 77565 / 94422 23512</a>
                            </li>
                        </ul>

                        {/* Newsletter Input */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Subscribe to newsletter"
                                className="w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                            />
                            <button className="absolute right-1.5 top-1.5 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors text-white">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Techorc Software Solutions. All rights reserved.</p>
                    <p>Designed  by <span className="text-gray-400">Techorc Team</span></p>
                </div>
            </div>
        </footer>
    );
}
