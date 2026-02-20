"use client";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How does ChatFlow integrate with my Shopify store?",
            answer: "ChatFlow automatically creates a Chatwoot account for your store, sets up an inbox, creates your first support agent, and provides a theme extension that adds the chat widget to your storefront. The entire process takes less than 5 minutes."
        },
        {
            question: "Do I need technical knowledge to set this up?",
            answer: "No technical knowledge required! ChatFlow handles all the configuration automatically. Just install the app, enable the widget in your theme, and you're ready to start chatting with customers."
        },
        {
            question: "Can I add multiple support agents?",
            answer: "Yes! You can create unlimited support agents from the ChatFlow dashboard. Each agent gets auto-generated credentials and SSO login links for quick access to the Chatwoot dashboard."
        },
        {
            question: "Can I customize the chat widget appearance?",
            answer: "Absolutely! You can customize the widget color to match your brand, set greeting messages, configure working hours, enable CSAT surveys, and much more from the widget settings page."
        },
        {
            question: "Does ChatFlow work on mobile devices?",
            answer: "Yes! Chatwoot provides iOS and Android apps for your support team. ChatFlow includes a mobile setup guide with credentials and download links to get your team started on mobile."
        },
        {
            question: "What happens to my data if I uninstall the app?",
            answer: "Your Chatwoot account and all conversation data remain intact even after uninstalling ChatFlow. You can continue accessing your Chatwoot dashboard directly or request data deletion by contacting support."
        },
        {
            question: "Is there a limit on conversations or messages?",
            answer: "No limits! You can have unlimited conversations and messages. The only limitation is the number of support agents based on your subscription plan."
        },
        {
            question: "How do I access the Chatwoot dashboard?",
            answer: "ChatFlow provides direct SSO login links in the dashboard. Click 'Login to Chatwoot' and you'll be instantly logged in without needing to remember passwords."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white relative overflow-hidden">
            {/* Grid Background with fade */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1f93ff]/10 border border-[#1f93ff]/20 rounded-full text-sm font-medium text-[#1f93ff] mb-6">
                        FAQ
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked
                        <span className="block text-[#1f93ff] mt-2">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Everything you need to know about ChatFlow. Find answers to common questions about installation, setup, features, pricing, and more. Can't find what you're looking for? Our support team is always ready to help.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#1f93ff]/30 hover:shadow-xl transition-all duration-200"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 text-lg pr-8">
                                    {faq.question}
                                </span>
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180 text-[#1f93ff]' : 'text-gray-400'}`}
                                >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-200 ${
                                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                                }`}
                            >
                                <div className="px-8 pt-2 text-gray-600 leading-relaxed text-base">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center p-10 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-8 text-base">
                        Our support team is here to help you get started
                    </p>
                    <a 
                        href="mailto:support@chatflow.app" 
                        className="inline-flex items-center gap-2 bg-[#1f93ff] hover:bg-[#0d7ae6] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg shadow-[#1f93ff]/25 hover:shadow-xl"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
}
