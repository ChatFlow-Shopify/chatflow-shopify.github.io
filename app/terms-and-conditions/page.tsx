import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | ChatFlow",
    description: "Read the terms and conditions for using ChatFlow - the Chatwoot integration for Shopify.",
};

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 10.5H16M8 14H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-gray-900">ChatFlow</span>
                        </Link>
                        <Link href="/" className="btn-secondary text-sm py-2 px-4">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Terms and Conditions</h1>
                        <p className="text-gray-500">Last updated: December 30, 2024</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                By accessing or using ChatFlow (&quot;the Service&quot;), you agree to be bound by these Terms and Conditions
                                (&quot;Terms&quot;). If you disagree with any part of these terms, you do not have permission to access the Service.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms apply to all visitors, users, and others who access or use the Service, including
                                merchants who install ChatFlow on their Shopify stores.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                ChatFlow is a Shopify application that integrates Chatwoot live chat functionality into your
                                Shopify store. The Service automatically:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Creates a Chatwoot account on your behalf</li>
                                <li>Sets up user credentials and inbox configuration</li>
                                <li>Provides a chat widget for your Shopify storefront</li>
                                <li>Enables real-time customer communication</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-700 mb-2"><strong>Email:</strong> support@chatflow.app</p>
                                <p className="text-gray-700"><strong>Website:</strong> https://chatflow.app</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} ChatFlow. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
