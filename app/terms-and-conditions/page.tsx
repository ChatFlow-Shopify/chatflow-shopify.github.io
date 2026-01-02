import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | ChatFlow",
    description: "Read the terms and conditions for using ChatFlow - the Chatwoot integration for Shopify.",
};

export default function TermsAndConditions() {
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms and Conditions</h1>
                        <p className="text-gray-400">Last updated: December 30, 2024</p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-orange-500/20 p-8 md:p-12">
                        <div className="space-y-10">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    By accessing or using ChatFlow (&quot;the Service&quot;), you agree to be bound by these Terms and Conditions
                                    (&quot;Terms&quot;). If you disagree with any part of these terms, you do not have permission to access the Service.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    These Terms apply to all visitors, users, and others who access or use the Service, including
                                    merchants who install ChatFlow on their Shopify stores.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    ChatFlow is a Shopify application that integrates Chatwoot live chat functionality into your
                                    Shopify store. The Service automatically:
                                </p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Creates a Chatwoot account on your behalf</li>
                                    <li>Sets up user credentials and inbox configuration</li>
                                    <li>Provides a chat widget for your Shopify storefront</li>
                                    <li>Enables real-time customer communication</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Contact Us</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    If you have any questions about these Terms, please contact us:
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
