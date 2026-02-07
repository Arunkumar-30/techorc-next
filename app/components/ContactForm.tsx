"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        field: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://techorc.in/api/contact.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="text-center p-8 bg-green-50 rounded-xl">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Message Sent!</h3>
                <p className="text-green-600 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                <button
                    onClick={() => {
                        setFormData({ name: "", email: "", phone: "", field: "" });
                        setStatus("idle");
                    }}
                    className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
                >
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#00a8f2]">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-[#00a8f2] outline-none transition-all placeholder-gray-400 text-gray-900"
                    placeholder="John Doe"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#00a8f2]">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-[#00a8f2] outline-none transition-all placeholder-gray-400 text-gray-900"
                        placeholder="john@example.com"
                    />
                </div>
                <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#00a8f2]">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-[#00a8f2] outline-none transition-all placeholder-gray-400 text-gray-900"
                        placeholder="+91 98765 43210"
                    />
                </div>
            </div>

            <div className="group">
                <label htmlFor="field" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#00a8f2]">How can we help?</label>
                <textarea
                    id="field"
                    name="field"
                    required
                    rows={4}
                    value={formData.field}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-[#00a8f2] outline-none transition-all resize-none placeholder-gray-400 text-gray-900"
                    placeholder="Tell us about your project..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-[#00a8f2] to-[#0077b6] hover:shadow-2xl hover:shadow-blue-500/30 text-white font-bold py-5 rounded-2xl transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "submitting" ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                )}
            </button>

            {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <p className="text-sm font-medium">Something went wrong. Please try again.</p>
                </div>
            )}
        </form>
    );
}
