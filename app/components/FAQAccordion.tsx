"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? "shadow-md bg-white" : "bg-gray-50 hover:bg-white"
                        }`}
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                        <span className="text-lg font-semibold text-gray-900 pr-8">
                            {faq.question}
                        </span>
                        <span className="text-gray-500 shrink-0">
                            {openIndex === index ? (
                                <ChevronUp className="w-6 h-6 text-[#00a8f2]" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
