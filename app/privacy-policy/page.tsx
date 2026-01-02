import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | ChatFlow",
    description: "Learn how ChatFlow collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-500">Last updated: December 30, 2024</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Welcome to ChatFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information
                                and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                                your information when you use our Shopify application and related services.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                By using ChatFlow, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We collect information that you provide directly to us and information that is automatically
                                collected when you use our services:
                            </p>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                                <li>Store information from your Shopify account (store name, email, domain)</li>
                                <li>Contact information when you reach out to our support team</li>
                                <li>Any other information you choose to provide</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Usage data and analytics</li>
                                <li>Device and browser information</li>
                                <li>IP address and location data</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Create and manage your Chatwoot account automatically</li>
                                <li>Set up your chat inbox and widget configuration</li>
                                <li>Communicate with you about updates, support, and promotional offers</li>
                                <li>Monitor and analyze usage patterns and trends</li>
                                <li>Detect, prevent, and address technical issues and security threats</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
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
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
