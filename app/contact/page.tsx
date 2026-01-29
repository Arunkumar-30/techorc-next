import ContactForm from "../components/ContactForm";
import { Metadata } from "next";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Contact Us | Techorc - Custom Software Development Solutions",
    description:
        "Get in touch with Techorc for your custom software development needs. We are ready to help you solve specific business challenges.",
};

export default function ContactPage() {
    return (
        <main>
            {/* Banner Section */}
            <section className="bg-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[80%] bg-blue-600 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
                    <span className="bg-blue-900 text-blue-200 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide inline-block mb-4">
                        Contact Us
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Let’s Start a Conversation
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Have a project idea? We'd love to hear about it. Fill out the form
                        below or reach out to us directly.
                    </p>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                                Get in Touch
                            </h2>
                            <p className="text-gray-500 text-lg mb-12">
                                We combine innovation, expertise, and passion to deliver
                                software that drives real growth.
                            </p>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 group">
                                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#00a8f2] text-2xl transition-colors group-hover:bg-[#00a8f2] group-hover:text-white">
                                        <FiMapPin />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-xl mb-2">
                                            Visit Us
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            NO:1/264 T, Pollachi Main Rd,
                                            <br />
                                            Raj Vijay Nagar, Coimbatore,
                                            <br />
                                            Tamil Nadu, 641021, India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 group">
                                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-green-500 text-2xl transition-colors group-hover:bg-green-500 group-hover:text-white">
                                        <FiPhone />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-xl mb-2">
                                            Call Us
                                        </h3>
                                        <a
                                            href="tel:+919677173084"
                                            className="text-gray-600 hover:text-[#00a8f2] transition-colors font-medium block mb-1"
                                        >
                                            +91 96771 73084 / 94889 77565 / 94422 23512
                                        </a>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <FiClock />
                                            <span>Mon–Fri: 9am – 6pm IST</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 group">
                                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-purple-500 text-2xl transition-colors group-hover:bg-purple-500 group-hover:text-white">
                                        <FiMail />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-xl mb-2">
                                            Email Us
                                        </h3>
                                        <a
                                            href="mailto:sales@techorc.com"
                                            className="text-gray-600 hover:text-[#00a8f2] transition-colors font-medium block mb-1"
                                        >
                                            sales@techorc.com
                                        </a>
                                        <p className="text-sm text-gray-500">
                                            We respond within 24 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mt-12 w-full h-80 rounded-3xl overflow-hidden  border border-gray-100 relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.627940279079!2d76.98687747586969!3d10.915854756604784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858dd36f76da9%3A0x79fc48718fdc0626!2sTechorc%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1769685502604!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    allowFullScreen
                                    title="Techorc Office Location"
                                    className="absolute  transition-all duration-700"
                                />

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                        Send us a message
                                    </h3>
                                    <p className="text-gray-500 mb-8 font-light">
                                        We're here to help and answer any questions you might have.
                                    </p>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
