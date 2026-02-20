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
        <div className="min-h-screen bg-white">
            <Header />
            
            <section className="relative bg-white overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(31,147,255,0.08),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(31,147,255,0.06),transparent_55%)]" />
                
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 border border-blue-100 rounded-full text-sm text-[#1f93ff] mb-6">
                        <span className="font-medium">Setup Guide</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Setup ChatFlow in
                        <span className="block text-[#1f93ff] mt-2">6 Simple Steps</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        Follow our step-by-step guide to get ChatFlow running on your Shopify store in under 5 minutes.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 flex items-center gap-3 ${
                                    activeTab === index
                                        ? 'bg-[#1f93ff] text-white shadow-lg shadow-[#1f93ff]/25'
                                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-[#1f93ff]/30'
                                }`}
                            >
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                                    activeTab === index ? 'bg-white/20' : 'bg-[#1f93ff]/10 text-[#1f93ff]'
                                }`}>
                                    {index + 1}
                                </span>
                                <span className="hidden sm:block">{step.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 md:p-12">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Step Info */}
                            <div className="lg:col-span-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#1f93ff] flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#1f93ff]/25">
                                        {activeTab + 1}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{steps[activeTab].title}</h2>
                                        <p className="text-[#1f93ff]">{steps[activeTab].description}</p>
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {steps[activeTab].content.overview}
                                </p>

                                {/* Tips */}
                                <div className="bg-[#1f93ff]/10 border border-[#1f93ff]/20 rounded-xl p-4">
                                    <h4 className="text-[#1f93ff] font-semibold mb-3 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Pro Tips
                                    </h4>
                                    <ul className="space-y-2">
                                        {steps[activeTab].content.tips.map((tip, idx) => (
                                            <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                                <span className="text-[#1f93ff] mt-1">•</span>
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Detailed Steps */}
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Steps</h3>
                                <div className="space-y-4">
                                    {steps[activeTab].content.steps.map((step, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#1f93ff]/20 hover:bg-white transition-colors group">
                                            <div className="w-8 h-8 rounded-full bg-[#1f93ff]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1f93ff]/20 transition-colors">
                                                <span className="text-[#1f93ff] font-semibold text-sm">{idx + 1}</span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation */}
                                <div className="flex justify-between mt-8">
                                    <button
                                        onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                                        disabled={activeTab === 0}
                                        className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Previous
                                    </button>
                                    
                                    <button
                                        onClick={() => setActiveTab(Math.min(steps.length - 1, activeTab + 1))}
                                        disabled={activeTab === steps.length - 1}
                                        className="px-8 py-4 bg-[#1f93ff] text-white rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0d7ae6] transition-colors flex items-center gap-2 shadow-md"
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