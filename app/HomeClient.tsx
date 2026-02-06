"use client";

import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import TechStack from "./components/TechStack";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "./data/services";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "framer-motion";

export default function HomeClient() {
    // Convert servicesData object to array for rendering all 14 services
    const services = Object.entries(servicesData).map(([slug, service]) => ({
        title: service.heroTitle,
        description: service.shortDescription,
        link: `/services/${slug}`,
        imageSrc: service.imageSrc,
        color: service.color
    }));

    const testimonials = [
        {
            quote: "I look forward to working with them again in the future! The Techorc team was essential to the success of SST. I’ve always been impressed by their engineering skills as well as their ability to suggest alternatives.",
            name: "SST Client",
            role: "Streaming Solution",
            image: "/images/client-sst.svg"
        },
        // {
        //     quote: "Not only they clearly understood my exact technical requirements but even suggested better ways in doing them.",
        //     name: "Balle Balle Restaurant",
        //     role: "Order Booking Portal",
        //     image: "/images/client-balle-balle.png"
        // },
        {
            quote: "Working with them felt like a collaboration resulting in the creation of a platform we are more than satisfied with.",
            name: "Surya GPS Tracking",
            role: "Enterprise Applications",
            image: "/images/client-surya-gps.svg"
        },
        {
            quote: "A product that came in below budget, on time, has a 92% Net Promoter Score and is growing 10% month on month.",
            name: "Ducont",
            role: "Tracking Solution",
            image: "/images/client-ducont.png"
        },
        // {
        //     quote: "Techorc came out way ahead of the others in terms of quality and speed. We are extremely happy.",
        //     name: "Yari Restaurant",
        //     role: "Billing System",
        //     image: "/images/client-yari.png"
        // },
        {
            quote: "Working with the team was a smooth and collaborative experience. The Surya GPS app was built with precision, performance, and usability in mind, and we are extremely satisfied with the final outcome.",
            name: "Surya Telematics",
            role: "GPS Tracking Application",
            image: "/images/client-surya-gps.svg"
        },
        {
            quote: "Rayzen Power delivered a seamless solar solution for our home, from consultation to installation. Their smart solar systems helped us reduce electricity costs while ensuring reliable and sustainable energy.",
            name: "Rayzen Power",
            role: "Solar Energy Solutions",
            image: "/images/rayzen_power.png"
        }


    ];

    return (
        <>
            <Hero />

            {/* Services Section */}
            <section id="Service" className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                            Our Services
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                            Custom Software Development Services in India
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Techorc is a custom software development company in India providing
                            end-to-end services including web application development, mobile app
                            development, cloud integration, AI solutions, and enterprise software.
                        </p>
                    </div>

                    <div className="services-swiper-container">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="pb-16"
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index} className="!h-auto !flex">
                                    <div className="h-full w-full py-4">
                                        <ServiceCard
                                            title={service.title}
                                            description={service.description}
                                            link={service.link}
                                            imageSrc={service.imageSrc}
                                            color={service.color}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="About" className="py-10 lg:py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                About Us
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                                Software development company that delivers
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                With 12+ years of experience, we enable progressive businesses to
                                transform, scale and gain competitive advantage, through the expert
                                delivery of tailor-made software.
                            </p>

                            <Link
                                href="/about"
                                className="inline-block bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] hover:from-[#00a8f2] hover:to-[#008ecb] text-white px-8 py-4 rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform hover:-translate-y-1 font-bold text-lg"
                            >
                                Read More About Us &rarr;
                            </Link>
                        </div>

                        <div className="lg:w-1/2">
                            <Image
                                src="/images/about-vector.svg"
                                width={500}
                                height={400}
                                alt="About us illustration"
                                className="w-full h-auto"

                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section id="Testimonial" className="py-10 lg:py-20 bg-blue-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                            Testimonial
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                            Our client success stories
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We are proud to have earned the trust of the great people we work with.
                        </p>
                    </div>

                    <div className="testimonial-swiper-container">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="pb-8"
                        >
                            {testimonials.map((testi, index) => (
                                <SwiperSlide key={index} className="!h-auto !flex">
                                    <div className="h-full w-full py-4 px-2">
                                        <TestimonialCard
                                            quote={testi.quote}
                                            clientName={testi.name}
                                            clientRole={testi.role}
                                            clientImage={testi.image}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <TechStack />

            {/* Contact CTA Section */}
            <section id="Contact" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,#00a8f2_0%,transparent_50%)] animate-spin-slow"></div>
                    </div>
                </div>

                <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2]">transform</span> your business?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            We combine innovation, expertise, and passion to deliver software that drives real growth. Let&apos;s build something extraordinary together.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00a8f2] to-[#0077b6] hover:from-[#00b4d8] hover:to-[#0096c7] text-white px-10 py-5 rounded-full shadow-[0_0_30px_rgba(0,168,242,0.4)] hover:shadow-[0_0_50px_rgba(0,168,242,0.6)] transition-all font-bold text-lg"
                            >
                                Start Your Project
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
