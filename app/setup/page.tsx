"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Setup() {
    const [activeTab, setActiveTab] = useState(0);

    const steps = [
        {
            title: "Install App",
            description: "Add ChatFlow to your Shopify store",
            content: {
                overview: "Install ChatFlow from the Shopify App Store with one click. No technical knowledge required.",
                steps: [
                    "Visit the Shopify App Store and search for 'ChatFlow'",
                    "Click 'Add app' to install ChatFlow to your store",
                    "Review the permissions and click 'Install app'",
                    "You'll be redirected to the ChatFlow dashboard automatically"
                ],
                tips: [
                    "The installation process takes less than 30 seconds",
                    "No credit card required for installation",
                    "All permissions are standard for chat applications"
                ]
            }
        },
        {
            title: "Automatic Setup",
            description: "ChatFlow configures everything automatically",
            content: {
                overview: "Once installed, ChatFlow automatically creates your Chatwoot account and configures all necessary settings.",
                steps: [
                    "ChatFlow creates a new Chatwoot account with your store name",
                    "An inbox is automatically configured for your store",
                    "Your first support agent is created with secure credentials",
                    "Widget settings are optimized for e-commerce"
                ],
                tips: [
                    "This process happens in the background",
                    "You'll receive an email with your login credentials",
                    "All settings can be customized later"
                ]
            }
        },
        {
            title: "Enable Widget",
            description: "Activate the chat widget on your storefront",
            content: {
                overview: "Add the chat widget to your theme using Shopify's app embed blocks - no code required.",
                steps: [
                    "Go to your Shopify admin → Online Store → Themes",
                    "Click 'Customize' on your active theme",
                    "Navigate to App embeds in the theme editor",
                    "Find 'ChatFlow Widget' and toggle it on",
                    "Position the widget and save your changes"
                ],
                tips: [
                    "The widget automatically matches your theme colors",
                    "You can customize position and appearance",
                    "Widget works on all devices automatically"
                ]
            }
        },
        {
            title: "Customize Settings",
            description: "Personalize your chat experience",
            content: {
                overview: "Customize colors, greetings, and settings to match your brand perfectly.",
                steps: [
                    "Open the ChatFlow dashboard from your Shopify admin",
                    "Go to Widget Settings to customize appearance",
                    "Set your brand colors and upload your logo",
                    "Configure greeting messages and auto-responses",
                    "Set working hours and timezone"
                ],
                tips: [
                    "Changes appear instantly on your store",
                    "You can A/B test different settings",
                    "All customizations are saved automatically"
                ]
            }
        },
        {
            title: "Add Team Members",
            description: "Invite your support team",
            content: {
                overview: "Create additional support agents and manage team permissions easily.",
                steps: [
                    "Go to Team Management in the ChatFlow dashboard",
                    "Click 'Add New Agent' to create team members",
                    "Enter their email and assign roles/permissions",
                    "Team members receive invitation emails with login links",
                    "They can access Chatwoot dashboard or mobile apps"
                ],
                tips: [
                    "Unlimited agents on all plans",
                    "Each agent gets secure SSO login",
                    "Mobile apps available for iOS and Android"
                ]
            }
        },
        {
            title: "Start Chatting",
            description: "Begin supporting your customers",
            content: {
                overview: "Everything is ready! Start receiving and responding to customer messages.",
                steps: [
                    "Visit your store to see the chat widget live",
                    "Test the widget by sending a message",
                    "Login to Chatwoot dashboard to respond",
                    "Download mobile apps for on-the-go support",
                    "Monitor conversations and customer satisfaction"
                ],
                tips: [
                    "Response notifications work in real-time",
                    "Customer context includes order history",
                    "All conversations are automatically saved"
                ]
            }
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            <Header />
            
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
                </div>
                
                <div className="relative max-w-4xl mx-auto px-6 text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm font-medium text-orange-400 mb-6">
                        Setup Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        Setup ChatFlow in
                        <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            6 Simple Steps
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Follow our step-by-step guide to get ChatFlow running on your Shopify store in under 5 minutes.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto px-6">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                                    activeTab === index
                                        ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-500/25'
                                        : 'bg-black/40 border border-orange-500/20 text-gray-300 hover:bg-orange-500/10 hover:border-orange-500/40'
                                }`}
                            >
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                                    activeTab === index ? 'bg-white/20' : 'bg-orange-500/20'
                                }`}>
                                    {index + 1}
                                </span>
                                <span className="hidden sm:block">{step.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl border border-orange-500/20 p-8 md:p-12">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Step Info */}
                            <div className="lg:col-span-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-orange-500/25">
                                        {activeTab + 1}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">{steps[activeTab].title}</h2>
                                        <p className="text-orange-400">{steps[activeTab].description}</p>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {steps[activeTab].content.overview}
                                </p>

                                {/* Tips */}
                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                                    <h4 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Pro Tips
                                    </h4>
                                    <ul className="space-y-2">
                                        {steps[activeTab].content.tips.map((tip, idx) => (
                                            <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                                <span className="text-orange-500 mt-1">•</span>
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Detailed Steps */}
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold text-white mb-6">Detailed Steps</h3>
                                <div className="space-y-4">
                                    {steps[activeTab].content.steps.map((step, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 bg-black/60 rounded-xl border border-orange-500/10 hover:border-orange-500/20 transition-colors group">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                                                <span className="text-orange-500 font-semibold text-sm">{idx + 1}</span>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation */}
                                <div className="flex justify-between mt-8">
                                    <button
                                        onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                                        disabled={activeTab === 0}
                                        className="px-6 py-3 bg-black/60 border border-orange-500/30 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-500/10 transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Previous
                                    </button>
                                    
                                    <button
                                        onClick={() => setActiveTab(Math.min(steps.length - 1, activeTab + 1))}
                                        disabled={activeTab === steps.length - 1}
                                        className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-orange-700 hover:to-orange-800 transition-colors flex items-center gap-2"
                                    >
                                        Next
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}