import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | ChatFlow",
    description: "Learn how ChatFlow collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            <Header />
            
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
                </div>
                
                <div className="relative max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm font-medium text-orange-400 mb-6">
                            Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
                        <p className="text-gray-400">Last updated: December 30, 2024</p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-orange-500/20 p-8 md:p-12">
                        <div className="space-y-10">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Welcome to ChatFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information
                                    and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                                    your information when you use our Shopify application and related services.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    By using ChatFlow, you agree to the collection and use of information in accordance with this policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    We collect information that you provide directly to us and information that is automatically
                                    collected when you use our services:
                                </p>
                                <h3 className="text-xl font-semibold text-orange-400 mb-3">2.1 Information You Provide</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Store information from your Shopify account (store name, email, domain)</li>
                                    <li>Contact information when you reach out to our support team</li>
                                    <li>Any other information you choose to provide</li>
                                </ul>
                                <h3 className="text-xl font-semibold text-orange-400 mb-3">2.2 Automatically Collected Information</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Usage data and analytics</li>
                                    <li>Device and browser information</li>
                                    <li>IP address and location data</li>
                                    <li>Cookies and similar tracking technologies</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Create and manage your Chatwoot account automatically</li>
                                    <li>Set up your chat inbox and widget configuration</li>
                                    <li>Communicate with you about updates, support, and promotional offers</li>
                                    <li>Monitor and analyze usage patterns and trends</li>
                                    <li>Detect, prevent, and address technical issues and security threats</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    If you have any questions about this Privacy Policy, please contact us:
                                </p>
                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                                    <p className="text-white mb-2"><strong>Email:</strong> support@chatflow.app</p>
                                    <p className="text-white"><strong>Website:</strong> https://chatflow.app</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
